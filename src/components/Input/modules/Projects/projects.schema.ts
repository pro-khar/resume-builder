import { createElement } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Project } from "@/redux-beta/types";

export type ProjectDraft = Omit<Project, "id">;

export const projectSchema: SectionSchema<ProjectDraft, Project> = {
  title: "Projects",
  fields: [
    { key: "title", label: "Title", required: true, type: "text" },
    { key: "duration", label: "Duration", required: false, type: "text" },
    {
      key: "desc",
      label: "One-line description",
      required: true,
      type: "text",
    },
    {
      key: "points",
      label: "Features",
      hint: "(minimum two)",
      required: true,
      type: "points",
      minItems: 2,
    },
    { key: "techStack", label: "Tech Stack", required: false, type: "text" },
    {
      key: "link",
      label: "Deployment / repository link",
      required: false,
      type: "url",
    },
  ],
  emptyDraft: {
    title: "",
    duration: "",
    desc: "",
    points: [],
    link: "",
    techStack: "",
  },
  addButtonLabel: "Add Project",
  editTitle: "Edit Project",
  emptyStateLabel: "Add a Project to continue",
  listHeightClassName: "h-[250px]",
  summary: (item) =>
    createElement(
      "p",
      { className: "font-extralight line-clamp-1" },
      item.title
    ),
};
