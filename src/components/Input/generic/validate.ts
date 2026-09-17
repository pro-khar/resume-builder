import type { SectionField, SectionFieldGroup } from "./types";

// Rich-text fields store HTML instead of plain text, so an empty <input required>
// no longer catches a blank submission natively — this replaces that native check.
function isBlank(value: string | undefined): boolean {
  return !value || value.replace(/<[^>]*>/g, "").trim().length === 0;
}

export function getMissingRequiredLabels<TDraft extends Record<string, string>>(
  fields: SectionField<TDraft>[],
  groups: SectionFieldGroup<TDraft>[] | undefined,
  draft: TDraft
): string[] {
  const missing: string[] = [];

  for (const field of fields) {
    if (field.required && isBlank(draft[field.key])) {
      missing.push(field.label ?? field.key);
    }
  }

  for (const group of groups ?? []) {
    for (const field of group.subFields) {
      if (field.required && isBlank(draft[field.key])) {
        missing.push(
          field.bullet
            ? `${group.descriptionLabel} ${group.badge} #${field.bullet}`
            : `${group.descriptionLabel} ${group.badge}`
        );
      }
    }
  }

  return missing;
}
