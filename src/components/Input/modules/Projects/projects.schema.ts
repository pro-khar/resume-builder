import { createElement } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Project } from "@/redux-beta/types";

export interface ProjectDraft {
  [key: string]: string;
  title: string;
  duration: string;
  desc: string;
  f1: string;
  f2: string;
  f3: string;
  f4: string;
  link: string;
  techStack: string;
}

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
      key: "f1",
      label: "Features",
      hint: "(minimum two)",
      required: true,
      type: "text",
      bullet: 1,
    },
    { key: "f2", required: true, type: "text", bullet: 2 },
    { key: "f3", required: false, type: "text", bullet: 3 },
    { key: "f4", required: false, type: "text", bullet: 4 },
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
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    link: "",
    techStack: "",
  },
  addButtonLabel: "Add Project",
  editDialogTitle: "Edit Project",
  emptyStateLabel: "Add a Project to continue",
  listHeightClassName: "h-[250px]",
  summary: (item) =>
    createElement(
      "p",
      { className: "font-extralight line-clamp-1" },
      item.title
    ),
};
