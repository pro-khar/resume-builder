import { createElement } from "react";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Certification } from "@/redux-beta/types";

export interface CertificationDraft {
  [key: string]: string;
  name: string;
  provider: string;
  link: string;
  duration: string;
}

export const certificationSchema: SectionSchema<
  CertificationDraft,
  Certification
> = {
  title: "Certifications",
  fields: [
    {
      key: "name",
      label: "Certification name",
      required: true,
      type: "text",
    },
    { key: "duration", label: "Duration", required: false, type: "text" },
    {
      key: "provider",
      label: "Provider/Issuer",
      required: true,
      type: "text",
    },
    {
      key: "link",
      label: "Certificate/Relevant document link",
      required: false,
      type: "url",
    },
  ],
  emptyDraft: { name: "", provider: "", link: "", duration: "" },
  addButtonLabel: "Add Certificate",
  editDialogTitle: "Edit Certification",
  emptyStateLabel: "Add a Certification to continue",
  listHeightClassName: "h-[400px]",
  summary: (item) => createElement("p", { className: "font-extralight" }, item.name),
};
