import { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/RichText/RichTextEditor";
import type { PointGroup } from "@/redux-beta/types";
import { minPointRows, padGroups, padPoints } from "./points";
import type { DraftValue, SectionField, SectionGroupsConfig } from "./types";

function FieldLabel({
  htmlFor,
  label,
  required,
  hint,
}: {
  htmlFor?: string;
  label: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <Label htmlFor={htmlFor}>
      {label}{" "}
      {required ? <span className="text-purple-500">*</span> : null}
      {hint ? (
        <span className="text-purple-500 text-xs italic"> {hint}</span>
      ) : null}
    </Label>
  );
}

// A numbered list of single-line rich-text points that can grow past its
// starting rows. Rows beyond the required minimum can be removed.
function PointsInput({
  id,
  points,
  minItems,
  onChange,
}: {
  id: string;
  points: string[] | undefined;
  minItems?: number;
  onChange: (points: string[]) => void;
}) {
  const rows = padPoints(points, minItems);
  const canRemove = rows.length > minPointRows(minItems);
  const listRef = useRef<HTMLDivElement>(null);
  const [focusRow, setFocusRow] = useState<number | null>(null);

  // Put the caret in a just-added row once its editor has mounted.
  useEffect(() => {
    if (focusRow === null) return;
    const editors = listRef.current?.querySelectorAll<HTMLElement>(".ProseMirror");
    editors?.[focusRow]?.focus();
    setFocusRow(null);
  }, [focusRow]);

  return (
    <div ref={listRef} className="space-y-1.5">
      {rows.map((point, i) => (
        <div className="flex items-start gap-2" key={i}>
          <p className="shrink-0 pt-2">{i + 1}. </p>
          <RichTextEditor
            id={`${id}-${i}`}
            value={point}
            onChange={(html) =>
              onChange(rows.map((row, j) => (j === i ? html : row)))
            }
          />
          {canRemove ? (
            <button
              type="button"
              title="Remove point"
              aria-label={`Remove point ${i + 1}`}
              onClick={() => onChange(rows.filter((_, j) => j !== i))}
              className="shrink-0 mt-2 rounded p-0.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          onChange([...rows, ""]);
          setFocusRow(rows.length);
        }}
        className="ml-5 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <Plus className="h-3.5 w-3.5" />
        Add point
      </button>
    </div>
  );
}

function GroupsInput<TDraft>({
  config,
  groups,
  onChange,
}: {
  config: SectionGroupsConfig<TDraft>;
  groups: PointGroup[] | undefined;
  onChange: (groups: PointGroup[]) => void;
}) {
  const list = padGroups(groups, config.count);
  const update = (index: number, group: PointGroup) =>
    onChange(list.map((g, i) => (i === index ? group : g)));

  return (
    <>
      <p className="text-sm font-medium">{config.heading}</p>
      <div className="h-[200px] overflow-y-auto border rounded-md p-2 space-y-4">
        {list.map((group, i) => (
          <div key={i} className="flex">
            <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
              {i + 1}
            </div>
            <div className="w-full">
              <FieldLabel
                htmlFor={`${config.key}-${i}-desc`}
                label={config.descriptionLabel}
                hint={config.descriptionHint}
              />
              <RichTextEditor
                id={`${config.key}-${i}-desc`}
                value={group.desc}
                onChange={(html) => update(i, { ...group, desc: html })}
              />
              <FieldLabel label={config.pointsLabel} hint={config.pointsHint} />
              <PointsInput
                id={`${config.key}-${i}`}
                points={group.points}
                minItems={config.minPoints}
                onChange={(points) => update(i, { ...group, points })}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

interface SectionFieldInputsProps<TDraft extends object> {
  fields: SectionField<TDraft>[];
  groups?: SectionGroupsConfig<TDraft>;
  draft: TDraft;
  onChange: (key: string, value: DraftValue) => void;
}

export function SectionFieldInputs<TDraft extends object>({
  fields,
  groups,
  draft,
  onChange,
}: SectionFieldInputsProps<TDraft>) {
  const values = draft as Record<string, unknown>;

  return (
    <>
      {fields.map((field) => (
        <div key={field.key}>
          <FieldLabel
            htmlFor={field.type === "points" ? `${field.key}-0` : field.key}
            label={field.label}
            required={field.required}
            hint={field.hint}
          />
          {field.type === "points" ? (
            <PointsInput
              id={field.key}
              points={values[field.key] as string[] | undefined}
              minItems={field.minItems}
              onChange={(points) => onChange(field.key, points)}
            />
          ) : field.type === "url" ? (
            // Links stay a plain <input> since formatting a URL doesn't make sense.
            <Input
              type="url"
              id={field.key}
              name={field.key}
              value={(values[field.key] as string | undefined) ?? ""}
              placeholder={field.placeholder}
              onChange={(e) => onChange(field.key, e.target.value)}
              required={field.required}
            />
          ) : (
            <RichTextEditor
              id={field.key}
              value={(values[field.key] as string | undefined) ?? ""}
              placeholder={field.placeholder}
              onChange={(html) => onChange(field.key, html)}
            />
          )}
        </div>
      ))}

      {groups ? (
        <GroupsInput
          config={groups}
          groups={values[groups.key] as PointGroup[] | undefined}
          onChange={(list) => onChange(groups.key, list)}
        />
      ) : null}
    </>
  );
}
