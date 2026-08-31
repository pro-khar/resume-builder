import { createElement } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Experience, ExperienceLongDraft } from "@/redux-beta/types";

export const experienceLongSchema: SectionSchema<
  ExperienceLongDraft,
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
    { key: "techStack", label: "Tech Stack", required: false, type: "text" },
    {
      key: "link",
      label: "Certificates/Relevant document links",
      required: false,
      type: "url",
    },
  ],
  groupsHeading: "Detailed Tasks/Impacts/Actions",
  groups: [
    {
      badge: 1,
      descriptionKey: "d1",
      descriptionLabel: "Description",
      descriptionHint: "(One-line)",
      subFields: [
        { key: "t1_1", required: true, type: "text", bullet: 1 },
        { key: "t1_2", required: true, type: "text", bullet: 2 },
        { key: "t1_3", required: false, type: "text", bullet: 3 },
      ],
    },
    {
      badge: 2,
      descriptionKey: "d2",
      descriptionLabel: "Description",
      descriptionHint: "(One-line)",
      subFields: [
        { key: "t2_1", required: true, type: "text", bullet: 1 },
        { key: "t2_2", required: true, type: "text", bullet: 2 },
        { key: "t2_3", required: false, type: "text", bullet: 3 },
      ],
    },
    {
      badge: 3,
      descriptionKey: "d3",
      descriptionLabel: "Description",
      descriptionHint: "(One-line)",
      subFields: [
        { key: "t3_1", required: true, type: "text", bullet: 1 },
        { key: "t3_2", required: true, type: "text", bullet: 2 },
        { key: "t3_3", required: false, type: "text", bullet: 3 },
      ],
    },
  ],
  emptyDraft: {
    orgName: "",
    desig: "",
    duration: "",
    d1: "",
    t1_1: "",
    t1_2: "",
    t1_3: "",
    d2: "",
    t2_1: "",
    t2_2: "",
    t2_3: "",
    d3: "",
    t3_1: "",
    t3_2: "",
    t3_3: "",
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
