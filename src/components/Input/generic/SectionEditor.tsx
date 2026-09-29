import { useEffect, useState, type ReactNode } from "react";
import { SectionForm } from "./SectionForm";
import { SectionList } from "./SectionList";
import type { SectionSchema } from "./types";

interface SectionEditorProps<
  TDraft extends Record<string, string>,
  TItem extends { id: string }
> {
  schema: SectionSchema<TDraft, TItem>;
  header: ReactNode;
  items: TItem[];
  onAdd: (draft: TDraft) => void;
  onUpdate: (item: TItem) => void;
  onRemove: (id: string) => void;
}

// A section's add form plus its list of entries. Editing an entry loads it
// into that same form (rather than a modal) and saves it back from there.
export function SectionEditor<
  TDraft extends Record<string, string>,
  TItem extends { id: string }
>({
  schema,
  header,
  items,
  onAdd,
  onUpdate,
  onRemove,
}: SectionEditorProps<TDraft, TItem>) {
  const [editing, setEditing] = useState<TItem | null>(null);

  // Experience swaps schemas in place; don't carry an open edit across that.
  useEffect(() => {
    setEditing(null);
  }, [schema]);

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        {header}
        <SectionForm
          schema={schema}
          editing={editing}
          onAdd={onAdd}
          onSave={(item) => {
            onUpdate(item);
            setEditing(null);
          }}
          onCancelEdit={() => setEditing(null)}
        />
      </div>
      <SectionList
        schema={schema}
        items={items}
        editingId={editing?.id}
        onEdit={(item) => setEditing(item)}
        onRemove={(id) => {
          if (editing?.id === id) setEditing(null);
          onRemove(id);
        }}
      />
    </>
  );
}
