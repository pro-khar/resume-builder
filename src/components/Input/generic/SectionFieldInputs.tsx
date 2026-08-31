import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ChangeEvent } from "react";
import type { SectionField, SectionFieldGroup } from "./types";

interface FieldBlock<TDraft> {
  label: SectionField<TDraft>;
  rest: SectionField<TDraft>[];
}

function buildBlocks<TDraft>(fields: SectionField<TDraft>[]): FieldBlock<TDraft>[] {
  const blocks: FieldBlock<TDraft>[] = [];
  let current: FieldBlock<TDraft> | null = null;
  for (const field of fields) {
    if (field.label !== undefined || current === null) {
      current = { label: field, rest: [] };
      blocks.push(current);
    } else {
      current.rest.push(field);
    }
  }
  return blocks;
}

function renderInput<TDraft extends Record<string, string>>(
  field: SectionField<TDraft>,
  draft: TDraft,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
) {
  const input = (
    <Input
      type={field.type}
      id={field.key}
      name={field.key}
      value={draft[field.key]}
      placeholder={field.placeholder}
      onChange={onChange}
      required={field.required}
    />
  );
  if (field.bullet !== undefined) {
    return (
      <div className="flex items-center gap-2" key={field.key}>
        <p>{field.bullet}. </p>
        {input}
      </div>
    );
  }
  return <div key={field.key}>{input}</div>;
}

interface SectionFieldInputsProps<TDraft extends Record<string, string>> {
  fields: SectionField<TDraft>[];
  groups?: SectionFieldGroup<TDraft>[];
  groupsHeading?: string;
  draft: TDraft;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SectionFieldInputs<TDraft extends Record<string, string>>({
  fields,
  groups,
  groupsHeading,
  draft,
  onChange,
}: SectionFieldInputsProps<TDraft>) {
  const blocks = buildBlocks(fields);

  return (
    <>
      {blocks.map((block) => (
        <div key={block.label.key}>
          {block.label.label ? (
            <Label htmlFor={block.label.key}>
              {block.label.label}{" "}
              {block.label.required ? (
                <span className="text-purple-500">*</span>
              ) : null}
              {block.label.hint ? (
                <span className="text-purple-500 text-xs italic">
                  {" "}
                  {block.label.hint}
                </span>
              ) : null}
            </Label>
          ) : null}
          {renderInput(block.label, draft, onChange)}
          {block.rest.map((field) => renderInput(field, draft, onChange))}
        </div>
      ))}

      {groups && groups.length ? (
        <>
          {groupsHeading ? (
            <p className="text-sm font-medium">{groupsHeading}</p>
          ) : null}
          <div className="h-[200px] overflow-y-auto border rounded-md p-2 space-y-4">
            {groups.map((group) => (
              <div key={group.badge} id="repeat" className="flex">
                <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
                  {group.badge}
                </div>
                <div className="w-full">
                  <Label htmlFor={group.descriptionKey}>
                    {group.descriptionLabel}{" "}
                    {group.descriptionHint ? (
                      <span className="text-purple-500 text-xs italic">
                        {group.descriptionHint}
                      </span>
                    ) : null}
                  </Label>
                  <Input
                    id={group.descriptionKey}
                    name={group.descriptionKey}
                    value={draft[group.descriptionKey]}
                    onChange={onChange}
                  />
                  <Label>
                    Detailed-breakdown/Steps{" "}
                    <span className="text-purple-500 text-xs italic">
                      (Minimum-two)
                    </span>
                  </Label>
                  {group.subFields.map((field) =>
                    renderInput(field, draft, onChange)
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
