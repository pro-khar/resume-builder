import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SectionFieldInputs } from "./SectionFieldInputs";
import { getMissingRequiredLabels } from "./validate";
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
  const [error, setError] = useState<string | null>(null);

  // Experience mounts one SectionForm instance and switches its `schema` prop
  // between the short/long variants (rather than remounting) — without this,
  // the draft from the previous schema lingers and gets submitted alongside
  // the new schema's fields, polluting the entry with the other shape's keys.
  useEffect(() => {
    setDraft(schema.emptyDraft);
    setError(null);
  }, [schema]);

  const handleChange = (key: string, value: string) => {
    setDraft({ ...draft, [key]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const missing = getMissingRequiredLabels(schema.fields, schema.groups, draft);
    if (missing.length) {
      setError(`Please fill in: ${missing.join(", ")}`);
      return;
    }
    onSubmit(draft);
    setDraft(schema.emptyDraft);
    setError(null);
    // A rich-text field submitted via Enter keeps focus (unlike a native
    // <input>'s implicit submit), and the reset above is only picked up by
    // its editor once it's no longer focused — blur so the just-added entry
    // visibly clears instead of lingering in the field.
    (document.activeElement as HTMLElement | null)?.blur();
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
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
      <Button className="w-full" type="submit">
        {schema.addButtonLabel}
      </Button>
    </form>
  );
}
