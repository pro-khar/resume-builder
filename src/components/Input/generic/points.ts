import { isBlankRichText } from "@/lib/utils";
import type { PointGroup } from "@/redux-beta/types";
import type { SectionField, SectionGroupsConfig } from "./types";

// A points list always shows at least its required rows (and at least one),
// even when the draft holds fewer — e.g. a blank draft, or an experience entry
// created in the other format that has no list yet.
export function minPointRows(minItems = 0): number {
  return Math.max(minItems, 1);
}

export function padPoints(points: string[] | undefined, minItems = 0): string[] {
  const rows = [...(points ?? [])];
  while (rows.length < minPointRows(minItems)) rows.push("");
  return rows;
}

export function padGroups(
  groups: PointGroup[] | undefined,
  count: number
): PointGroup[] {
  return Array.from(
    { length: Math.max(count, groups?.length ?? 0) },
    (_, i) => groups?.[i] ?? { desc: "", points: [] }
  );
}

export function nonBlankPoints(points: string[] | undefined): string[] {
  return (points ?? []).filter((point) => !isBlankRichText(point));
}

// What actually gets saved: blank rows dropped from every points list, and
// long-format groups filled out to their fixed count.
export function compactPoints<TDraft extends object>(
  fields: SectionField<TDraft>[],
  groups: SectionGroupsConfig<TDraft> | undefined,
  draft: TDraft
): TDraft {
  const values = { ...draft } as Record<string, unknown>;
  for (const field of fields) {
    if (field.type === "points") {
      values[field.key] = nonBlankPoints(values[field.key] as string[] | undefined);
    }
  }
  if (groups) {
    values[groups.key] = padGroups(
      values[groups.key] as PointGroup[] | undefined,
      groups.count
    ).map((group) => ({ desc: group.desc, points: nonBlankPoints(group.points) }));
  }
  return values as TDraft;
}
