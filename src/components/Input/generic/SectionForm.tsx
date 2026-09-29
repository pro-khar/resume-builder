import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SectionFieldInputs } from "./SectionFieldInputs";
import { getMissingRequiredLabels } from "./validate";
import type { SectionSchema } from "./types";

interface SectionFormProps<
  TDraft extends Record<string, string>,
  TItem extends { id: string }
> {
  schema: SectionSchema<TDraft, TItem>;
  editing: TItem | null; // non-null → the form edits this entry instead of adding one
  onAdd: (draft: TDraft) => void;
  onSave: (item: TItem) => void;
  onCancelEdit: () => void;
}

export function SectionForm<
  TDraft extends Record<string, string>,
  TItem extends { id: string }
>({
  schema,
  editing,
  onAdd,
  onSave,
  onCancelEdit,
}: SectionFormProps<TDraft, TItem>) {
  const [draft, setDraft] = useState<TDraft>(schema.emptyDraft);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Load the entry being edited, or go back to a blank draft when editing
  // ends. Experience also switches `schema` in place between its short/long
  // variants (rather than remounting) — resetting on that too stops the
  // previous schema's draft lingering and polluting the entry with the other
  // shape's keys.
  useEffect(() => {
    setDraft(editing ? (editing as unknown as TDraft) : schema.emptyDraft);
    setError(null);
    if (editing) {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [editing, schema]);

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
    if (editing) {
      onSave({ ...editing, ...draft });
    } else {
      onAdd(draft);
      setDraft(schema.emptyDraft);
    }
    setError(null);
    // A rich-text field submitted via Enter keeps focus (unlike a native
    // <input>'s implicit submit), and the reset above is only picked up by
    // its editor once it's no longer focused — blur so the submitted entry
    // visibly clears instead of lingering in the field.
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <form ref={formRef} className="space-y-2" onSubmit={handleSubmit}>
      {editing ? (
        <p className="text-xs italic text-purple-500">{schema.editTitle}</p>
      ) : null}
      <SectionFieldInputs
        fields={schema.fields}
        groups={schema.groups}
        groupsHeading={schema.groupsHeading}
        draft={draft}
        onChange={handleChange}
      />
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
      {editing ? (
        <div className="flex gap-2">
          <Button
            className="w-full"
            type="button"
            variant="outline"
            onClick={onCancelEdit}
          >
            Cancel
          </Button>
          <Button className="w-full" type="submit">
            Save changes
          </Button>
        </div>
      ) : (
        <Button className="w-full" type="submit">
          {schema.addButtonLabel}
        </Button>
      )}
    </form>
  );
}
