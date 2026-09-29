import type { ReactNode } from "react";
import type { PointGroup } from "@/redux-beta/types";

export type DraftValue = string | string[] | PointGroup[];

export interface SectionField<TDraft> {
  key: keyof TDraft & string;
  label: string;
  placeholder?: string;
  required: boolean;
  // "points" → the draft value is a string[] edited as a growable numbered list
  type: "text" | "url" | "points";
  hint?: string; // small purple italic text, e.g. "(minimum two)"
  minItems?: number; // "points" only: how many non-blank points are required
}

// Only experienceLong.schema.ts uses this — a fixed number of numbered
// description-groups (the numbered-circle-badge UI), each with its own
// growable list of points. draft[key] is a PointGroup[].
export interface SectionGroupsConfig<TDraft> {
  key: keyof TDraft & string;
  heading: string;
  count: number;
  descriptionLabel: string;
  descriptionHint?: string;
  pointsLabel: string;
  pointsHint?: string;
  minPoints: number;
}

export interface SectionSchema<
  TDraft extends object,
  TItem extends { id: string } = TDraft & { id: string }
> {
  title: string;
  fields: SectionField<TDraft>[];
  groups?: SectionGroupsConfig<TDraft>;
  emptyDraft: TDraft;
  addButtonLabel: string;
  editTitle: string;
  emptyStateLabel: string;
  listHeightClassName: string; // preserve each section's current exact height class
  summary: (item: TItem) => ReactNode; // the collapsed list-row's content
}
