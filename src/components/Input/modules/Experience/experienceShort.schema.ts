import { createElement } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Experience, ExperienceShortDraft } from "@/redux-beta/types";

export const experienceShortSchema: SectionSchema<
  ExperienceShortDraft,
  Experience
> = {
  title: "Experience",
  fields: [
    {
      key: "orgName",
      label: "Name of Organisation",
      required: true,
      type: "text",
    },
    { key: "duration", label: "Duration", required: false, type: "text" },
    {
      key: "desig",
      label: "Role/Designation",
      required: true,
      type: "text",
    },
    {
      key: "points",
      label: "Tasks/Responsibilities",
      hint: "(minimum two)",
      required: true,
      type: "points",
      minItems: 2,
    },
    { key: "techStack", label: "Tech Stack", required: false, type: "text" },
    {
      key: "link",
      label: "Certificates/Relevant document links",
      required: false,
      type: "url",
    },
  ],
  emptyDraft: {
    orgName: "",
    desig: "",
    duration: "",
    points: [],
    techStack: "",
    link: "",
  },
  addButtonLabel: "Add Experience",
  editTitle: "Edit Experience",
  emptyStateLabel: "Add an Experience to continue",
  listHeightClassName: "h-[250px]",
  summary: (item) =>
    createElement(
      "p",
      { className: "font-extralight line-clamp-1" },
      item.orgName
    ),
};
