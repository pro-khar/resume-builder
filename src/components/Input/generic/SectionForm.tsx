import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SectionFieldInputs } from "./SectionFieldInputs";
import type { SectionSchema } from "./types";

interface SectionFormProps<TDraft extends Record<string, string>> {
  schema: SectionSchema<TDraft>;
  onSubmit: (draft: TDraft) => void;
}

export function SectionForm<TDraft extends Record<string, string>>({
  schema,
  onSubmit,
}: SectionFormProps<TDraft>) {
  const [draft, setDraft] = useState<TDraft>(schema.emptyDraft);

  // Experience mounts one SectionForm instance and switches its `schema` prop
  // between the short/long variants (rather than remounting) — without this,
  // the draft from the previous schema lingers and gets submitted alongside
  // the new schema's fields, polluting the entry with the other shape's keys.
  useEffect(() => {
    setDraft(schema.emptyDraft);
  }, [schema]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(draft);
    setDraft(schema.emptyDraft);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <SectionFieldInputs
        fields={schema.fields}
        groups={schema.groups}
        groupsHeading={schema.groupsHeading}
        draft={draft}
        onChange={handleChange}
      />
      <Button className="w-full" type="submit">
        {schema.addButtonLabel}
      </Button>
    </form>
  );
}
