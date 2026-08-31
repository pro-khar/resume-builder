import { createElement, Fragment } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Skill } from "@/redux-beta/types";

export interface SkillDraft {
  [key: string]: string;
  cat: string;
  sk: string;
}

export const skillSchema: SectionSchema<SkillDraft, Skill> = {
  title: "Skills",
  fields: [
    {
      key: "cat",
      label: "Category name",
      placeholder: "Databases",
      required: true,
      type: "text",
    },
    {
      key: "sk",
      label: "Skills",
      placeholder: "mySQL, Cassandra, MongoDB",
      required: true,
      type: "text",
    },
  ],
  emptyDraft: { cat: "", sk: "" },
  addButtonLabel: "Save",
  editDialogTitle: "Edit Skill",
  emptyStateLabel: "Add a Skill to continue",
  listHeightClassName: "h-[600px]",
  summary: (item) =>
    createElement(
      Fragment,
      null,
      createElement("p", { className: "font-semibold text-sm" }, item.cat),
      createElement(
        "p",
        { className: "text-muted-foreground text-xs line-clamp-1" },
        item.sk
      )
    ),
};
