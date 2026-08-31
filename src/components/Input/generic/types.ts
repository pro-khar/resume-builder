import type { ReactNode } from "react";

export interface SectionField<TDraft> {
  key: keyof TDraft & string;
  label?: string; // omit → bare input with no <Label> (e.g. f2/f3/f4)
  placeholder?: string;
  required: boolean;
  type: "text" | "url";
  hint?: string; // small purple italic text, e.g. "(minimum two)"
  bullet?: number; // renders the "N." numbered-list prefix
}

// Only experienceLong.schema.ts uses this — 3 outer description-groups, each with
// nested numbered sub-fields (the numbered-circle-badge UI).
export interface SectionFieldGroup<TDraft> {
  badge: number;
  descriptionKey: keyof TDraft & string;
  descriptionLabel: string;
  descriptionHint?: string;
  subFields: SectionField<TDraft>[];
}

export interface SectionSchema<
  TDraft extends Record<string, string>,
  TItem extends { id: string } = TDraft & { id: string }
> {
  title: string;
  fields: SectionField<TDraft>[];
  groups?: SectionFieldGroup<TDraft>[];
  groupsHeading?: string;
  emptyDraft: TDraft;
  addButtonLabel: string;
  editDialogTitle: string;
  emptyStateLabel: string;
  listHeightClassName: string; // preserve each section's current exact height class
  summary: (item: TItem) => ReactNode; // the collapsed list-row's content
}
