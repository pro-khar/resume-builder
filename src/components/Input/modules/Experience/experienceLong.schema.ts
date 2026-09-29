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
  groups: {
    key: "groups",
    heading: "Detailed Tasks/Impacts/Actions",
    count: 3,
    descriptionLabel: "Description",
    descriptionHint: "(One-line)",
    pointsLabel: "Detailed-breakdown/Steps",
    pointsHint: "(Minimum-two)",
    minPoints: 2,
  },
  emptyDraft: {
    orgName: "",
    desig: "",
    duration: "",
    groups: [],
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
