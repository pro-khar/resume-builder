import { isBlankRichText } from "@/lib/utils";
import type { PointGroup } from "@/redux-beta/types";
import { nonBlankPoints, padGroups } from "./points";
import type { SectionField, SectionGroupsConfig } from "./types";

// Rich-text fields store HTML instead of plain text, so an empty <input required>
// no longer catches a blank submission natively — this replaces that native check.
export function getMissingRequiredLabels<TDraft extends object>(
  fields: SectionField<TDraft>[],
  groups: SectionGroupsConfig<TDraft> | undefined,
  draft: TDraft
): string[] {
  const values = draft as Record<string, unknown>;
  const missing: string[] = [];

  for (const field of fields) {
    if (field.type === "points") {
      const min = field.minItems ?? 0;
      const points = values[field.key] as string[] | undefined;
      if (nonBlankPoints(points).length < min) {
        missing.push(`${field.label} (at least ${min})`);
      }
    } else if (field.required && isBlankRichText(values[field.key] as string)) {
      missing.push(field.label);
    }
  }

  if (groups) {
    const list = padGroups(values[groups.key] as PointGroup[] | undefined, groups.count);
    list.forEach((group, i) => {
      if (nonBlankPoints(group.points).length < groups.minPoints) {
        missing.push(`${groups.pointsLabel} ${i + 1} (at least ${groups.minPoints})`);
      }
    });
  }

  return missing;
}
