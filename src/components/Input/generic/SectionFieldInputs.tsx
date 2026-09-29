import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ComponentProps,
  type KeyboardEvent,
} from "react";
import type {
  FieldChangeEvent,
  SectionField,
  SectionFieldGroup,
} from "./types";

function fitHeight(el: HTMLTextAreaElement) {
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight + el.offsetHeight - el.clientHeight}px`;
}

interface GrowingTextareaProps
  extends Omit<ComponentProps<typeof Textarea>, "onChange"> {
  onChange: (e: FieldChangeEvent) => void;
}

// Single-line field that wraps long text and grows to fit it, instead of an
// <input> whose fixed height lets long text overflow. Newlines are blocked:
// Enter submits the form like an <input> would, pasted line breaks become spaces.
function GrowingTextarea({ value, onChange, ...props }: GrowingTextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (ref.current) fitHeight(ref.current);
  }, [value]);

  // Width changes (resizable panels, a hidden tab becoming visible) re-wrap
  // the text, so refit then too.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let width = el.clientWidth;
    const observer = new ResizeObserver(() => {
      if (el.clientWidth === width) return;
      width = el.clientWidth;
      fitHeight(el);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
    e.preventDefault();
    e.currentTarget.form?.requestSubmit();
  };

  return (
    <Textarea
      {...props}
      ref={ref}
      rows={1}
      value={value}
      onKeyDown={handleKeyDown}
      onChange={(e) => {
        if (/[\r\n]/.test(e.target.value)) {
          e.target.value = e.target.value.replace(/[\r\n]+/g, " ");
        }
        onChange(e);
      }}
      className="min-h-9 py-[7px] resize-none overflow-hidden"
    />
  );
}

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
  onChange: (e: FieldChangeEvent) => void
) {
  const common = {
    id: field.key,
    name: field.key,
    value: draft[field.key],
    placeholder: field.placeholder,
    onChange,
    required: field.required,
  };
  const input =
    field.type === "url" ? (
      <Input type="url" {...common} />
    ) : (
      <GrowingTextarea {...common} />
    );
  if (field.bullet !== undefined) {
    return (
      <div className="flex items-start gap-2" key={field.key}>
        <p className="shrink-0 pt-2">{field.bullet}. </p>
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
  onChange: (e: FieldChangeEvent) => void;
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
                  <GrowingTextarea
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
