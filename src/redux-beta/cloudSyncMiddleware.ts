import type { Middleware, UnknownAction } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabaseClient";
import type { RootState } from "./store";
import { setSyncStatus, setSyncError } from "./cloudSlice";
import { mapDataStateItemToRow } from "./cloudMappers";

const TABLE_BY_SUFFIX: Record<
  string,
  { table: string; arrayKey: keyof RootState["data"] }
> = {
  Skill: { table: "skills", arrayKey: "skills" },
  Project: { table: "projects", arrayKey: "projects" },
  Experience: { table: "experience", arrayKey: "experience" },
  Certification: { table: "certifications", arrayKey: "certifications" },
  Ach: { table: "achievements", arrayKey: "ach" },
};

export const cloudSyncMiddleware: Middleware<object, RootState> =
  (store) => (next) => (action: UnknownAction) => {
    const result = next(action); // reducer runs first, synchronously

    if (typeof action.type !== "string") return result;

    const state = store.getState();
    const activeResumeId = state.cloud.activeResumeId;
    const user = state.auth.user;
    if (!activeResumeId || !user) return result; // local-only mode: no-op

    // Runs a Supabase call, dispatching syncing/synced/error into cloudSlice.
    // Also surfaces API-level errors (Supabase resolves with `{error}` rather
    // than throwing on most failures — the original version of this
    // middleware only caught thrown errors, so a rejected write from RLS or a
    // bad payload would silently report "synced" anyway. Checking `.error`
    // here closes that gap.
    const runSync = (
      task: () => PromiseLike<{ error: { message: string } | null }>
    ) => {
      void (async () => {
        try {
          store.dispatch(setSyncStatus("syncing"));
          const { error } = await task();
          if (error) throw new Error(error.message);
          store.dispatch(setSyncStatus("synced"));
        } catch (e) {
          store.dispatch(
            setSyncError(e instanceof Error ? e.message : String(e))
          );
        }
      })();
    };

    // Per-resume styling — mirrors the `look` JSONB column. Any look/* action
    // pushes the whole current `state.looks` (same "whole object" approach as
    // updateIntro/updateEducation below), except hydrateLook itself, which is
    // how a resume's OWN saved look gets loaded in — re-syncing that back out
    // would just be an expensive no-op write on every resume open.
    //
    // NB: the action-type prefix is "look/" (singular) — set by
    // createSlice({ name: "look", ... }) in lookSlice.ts — even though the
    // state lives under the "looks" key in combineReducers. Those two names
    // are independent; matching on "looks/" here was the original bug.
    if (action.type.startsWith("look/")) {
      if (action.type === "look/hydrateLook") return result;
      runSync(() =>
        supabase
          .from("resumes")
          .update({ look: state.looks, updated_at: new Date().toISOString() })
          .eq("id", activeResumeId)
      );
      return result;
    }

    // Per-resume experience format — mirrors the `ui` JSONB column.
    // hydrateExperienceFormat (used when loading a resume) is deliberately a
    // different action type from setExperienceFormat (the user flipping the
    // switch), precisely so this branch only fires on real edits.
    if (action.type === "ui/setExperienceFormat") {
      runSync(() =>
        supabase
          .from("resumes")
          .update({
            ui: { experienceFormat: state.ui.experienceFormat },
            updated_at: new Date().toISOString(),
          })
          .eq("id", activeResumeId)
      );
      return result;
    }

    if (!action.type.startsWith("data/")) return result;
    const actionName = action.type.slice("data/".length);
    if (actionName === "hydrateData") return result; // hydration is not a user edit

    if (actionName === "updateIntro") {
      runSync(() =>
        supabase
          .from("resumes")
          .update({
            intro: action.payload,
            updated_at: new Date().toISOString(),
          })
          .eq("id", activeResumeId)
      );
      return result;
    }
    if (actionName === "updateEducation") {
      runSync(() =>
        supabase
          .from("resumes")
          .update({
            education: action.payload,
            updated_at: new Date().toISOString(),
          })
          .eq("id", activeResumeId)
      );
      return result;
    }

    const suffix = Object.keys(TABLE_BY_SUFFIX).find((s) =>
      actionName.endsWith(s)
    );
    if (!suffix) return result;
    const { table, arrayKey } = TABLE_BY_SUFFIX[suffix];

    if (actionName.startsWith("add")) {
      // pushWithId already ran inside next(action) above — the new item is
      // reliably the last element (Redux dispatch is synchronous, nothing
      // else can interleave between next(action) returning and this read).
      const arr = state.data[arrayKey] as Array<{ id: string }>;
      const item = arr[arr.length - 1];
      runSync(() =>
        supabase
          .from(table)
          .insert(
            mapDataStateItemToRow(item, activeResumeId, user.id, arr.length - 1)
          )
      );
    } else if (actionName.startsWith("update")) {
      const { id, ...changes } = action.payload as { id: string } & Record<
        string,
        unknown
      >;
      runSync(() => supabase.from(table).update(changes).eq("id", id));
    } else if (actionName.startsWith("remove")) {
      runSync(() =>
        supabase
          .from(table)
          .delete()
          .eq("id", action.payload as string)
      );
    }

    return result;
  };
