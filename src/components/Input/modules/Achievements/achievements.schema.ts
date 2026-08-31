import { createElement } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Achievement } from "@/redux-beta/types";

export interface AchievementDraft {
  [key: string]: string;
  position: string;
  orgName: string;
  duration: string;
  d1: string;
  d2: string;
  d3: string;
  link: string;
}

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
      key: "d1",
      label: "Bulleted details",
      hint: "(optional)",
      required: false,
      type: "text",
      bullet: 1,
    },
    { key: "d2", required: false, type: "text", bullet: 2 },
    { key: "d3", required: false, type: "text", bullet: 3 },
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
    d1: "",
    d2: "",
    d3: "",
    link: "",
  },
  addButtonLabel: "Add",
  editDialogTitle: "Edit Achievement/PoR",
  emptyStateLabel: "Add an Achievement/PoR to continue",
  listHeightClassName: "h-[250px]",
  summary: (item) =>
    createElement("p", { className: "font-extralight" }, item.position),
};
