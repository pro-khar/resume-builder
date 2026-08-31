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
      key: "t1",
      label: "Tasks/Responsibilities",
      hint: "(minimum two)",
      required: true,
      type: "text",
      bullet: 1,
    },
    { key: "t2", required: true, type: "text", bullet: 2 },
    { key: "t3", required: false, type: "text", bullet: 3 },
    { key: "t4", required: false, type: "text", bullet: 4 },
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
    t1: "",
    t2: "",
    t3: "",
    t4: "",
    techStack: "",
    link: "",
  },
  addButtonLabel: "Add Experience",
  editDialogTitle: "Edit Experience",
  emptyStateLabel: "Add an Experience to continue",
  listHeightClassName: "h-[250px]",
  summary: (item) =>
    createElement(
      "p",
      { className: "font-extralight line-clamp-1" },
      item.orgName
    ),
};
