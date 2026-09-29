import { createElement } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Achievement } from "@/redux-beta/types";

export type AchievementDraft = Omit<Achievement, "id">;

export const achievementSchema: SectionSchema<AchievementDraft, Achievement> = {
  title: "Achievements/PoRs",
  fields: [
    {
      key: "position",
      label: "Achevement/Position",
      required: true,
      type: "text",
    },
    {
      key: "duration",
      label: "Duration/Year",
      required: true,
      type: "text",
    },
    {
      key: "orgName",
      label: "Organistion/Event",
      required: false,
      type: "text",
    },
    {
      key: "points",
      label: "Bulleted details",
      hint: "(optional)",
      required: false,
      type: "points",
    },
    {
      key: "link",
      label: "Certificates/Relevant document links",
      required: false,
      type: "url",
    },
  ],
  emptyDraft: {
    position: "",
    orgName: "",
    duration: "",
    points: [],
    link: "",
  },
  addButtonLabel: "Add",
  editTitle: "Edit Achievement/PoR",
  emptyStateLabel: "Add an Achievement/PoR to continue",
  listHeightClassName: "h-[250px]",
  summary: (item) =>
    createElement("p", { className: "font-extralight" }, item.position),
};
