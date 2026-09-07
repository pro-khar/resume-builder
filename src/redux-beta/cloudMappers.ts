import type {
  Achievement,
  Certification,
  DataState,
  Education,
  Experience,
  Intro,
  Project,
  Skill,
} from "./types";
import type { LooksState } from "./lookSlice";
import {
  DEFAULT_CONTACT_COLUMNS,
  DEFAULT_SECTION_ORDER,
  type ContactColumns,
  type ExperienceFormat,
  type SectionKey,
} from "./uiSlice";

// Mirrors dataSlice's own initialState.intro/education shape — used as a
// fallback when the JSONB column is still the SQL default `{}` (a brand-new
// resume the user hasn't touched yet).
const emptyIntro: Intro = {
  profile: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  github: "",
  linkedin: "",
  leetcode: "",
  website: "",
  summary: "",
  picture: null,
  pictureEnable: false,
};

const emptyEducation: Education = {
  degree: "",
  branch: "",
  college: "",
  bachelor_duration: "",
  bachelor_score: "",
  int_school: "",
  int_year: "",
  int_score: "",
  hs_school: "",
  hs_year: "",
  hs_score: "",
};

// Mirrors lookSlice's own initialState — same "empty JSONB column" fallback
// pattern as emptyIntro/emptyEducation above.
const emptyLook: LooksState = {
  imageEnable: false,
  headerColor: "#FFFFFF",
  bodyColor: "#FFFFFF",
  showLine: true,
  showIntroSeparator: true,
};

const DEFAULT_EXPERIENCE_FORMAT: ExperienceFormat = "long";

// Infra columns present on every child-table row that don't belong in the
// TS interfaces — stripped out before the row is handed to Redux.
const INFRA_COLUMNS = ["resume_id", "user_id", "order_index", "created_at"] as const;

function stripInfraColumns<T extends object>(
  row: T
): Omit<T, (typeof INFRA_COLUMNS)[number]> {
  const clean = { ...row } as Record<string, unknown>;
  for (const col of INFRA_COLUMNS) delete clean[col];
  return clean as Omit<T, (typeof INFRA_COLUMNS)[number]>;
}

interface OrderedRow {
  order_index: number;
}

function sortByOrderIndex<T extends OrderedRow>(rows: T[] | null | undefined): T[] {
  return [...(rows ?? [])].sort((a, b) => a.order_index - b.order_index);
}

// Shape of the row returned by:
// supabase.from('resumes').select('*, skills(*), projects(*), experience(*), certifications(*), achievements(*)').eq('id', id).single()
export interface ResumeRowWithChildren {
  id: string;
  intro: Partial<Intro> | Record<string, never> | null;
  education: Partial<Education> | Record<string, never> | null;
  look: Partial<LooksState> | Record<string, never> | null;
  ui:
    | Partial<{
        experienceFormat: ExperienceFormat;
        sectionOrder: SectionKey[];
        contactColumns: ContactColumns;
      }>
    | Record<string, never>
    | null;
  skills: (Skill & OrderedRow)[] | null;
  projects: (Project & OrderedRow)[] | null;
  experience: (Experience & OrderedRow)[] | null;
  certifications: (Certification & OrderedRow)[] | null;
  // Table is named `achievements` in Postgres, but the Redux/TS key is `ach`.
  achievements: (Achievement & OrderedRow)[] | null;
}

export function mapResumeRowToDataState(row: ResumeRowWithChildren): DataState {
  return {
    intro:
      row.intro && Object.keys(row.intro).length > 0
        ? ({ ...emptyIntro, ...row.intro } as Intro)
        : emptyIntro,
    education:
      row.education && Object.keys(row.education).length > 0
        ? ({ ...emptyEducation, ...row.education } as Education)
        : emptyEducation,
    skills: sortByOrderIndex(row.skills).map(stripInfraColumns) as Skill[],
    projects: sortByOrderIndex(row.projects).map(stripInfraColumns) as Project[],
    experience: sortByOrderIndex(row.experience).map(stripInfraColumns) as Experience[],
    certifications: sortByOrderIndex(row.certifications).map(
      stripInfraColumns
    ) as Certification[],
    ach: sortByOrderIndex(row.achievements).map(stripInfraColumns) as Achievement[],
  };
}

export function mapRowToLook(
  look: ResumeRowWithChildren["look"]
): LooksState {
  return look && Object.keys(look).length > 0
    ? ({ ...emptyLook, ...look } as LooksState)
    : emptyLook;
}

export function mapRowToExperienceFormat(
  ui: ResumeRowWithChildren["ui"]
): ExperienceFormat {
  return ui?.experienceFormat ?? DEFAULT_EXPERIENCE_FORMAT;
}

// Guards against a stored order that's stale relative to the app's current
// set of section keys (e.g. a resume saved before a new section type existed,
// or corrupt/hand-edited JSONB) — drops unknown/duplicate keys and appends
// any known key missing from the stored list, so nothing silently disappears.
export function normalizeSectionOrder(
  order: SectionKey[] | undefined
): SectionKey[] {
  if (!order || !Array.isArray(order)) return DEFAULT_SECTION_ORDER;
  const known = new Set(DEFAULT_SECTION_ORDER);
  const seen = new Set<SectionKey>();
  const cleaned = order.filter((key) => {
    if (!known.has(key) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  for (const key of DEFAULT_SECTION_ORDER) {
    if (!seen.has(key)) cleaned.push(key);
  }
  return cleaned;
}

export function mapRowToSectionOrder(
  ui: ResumeRowWithChildren["ui"]
): SectionKey[] {
  return normalizeSectionOrder(ui?.sectionOrder);
}

// Same guarding idea as normalizeSectionOrder, but across two columns: drops
// unknown/duplicate keys (a key can only live in one column), then appends
// any known key missing from both back into its default column.
export function normalizeContactColumns(
  input: ContactColumns | undefined
): ContactColumns {
  const known = new Set([
    ...DEFAULT_CONTACT_COLUMNS.left,
    ...DEFAULT_CONTACT_COLUMNS.right,
  ]);
  const seen = new Set<ContactColumns["left"][number]>();
  const cleanColumn = (column: ContactColumns["left"] | undefined) => {
    if (!column || !Array.isArray(column)) return [];
    return column.filter((key) => {
      if (!known.has(key) || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };
  const left = cleanColumn(input?.left);
  const right = cleanColumn(input?.right);
  for (const key of DEFAULT_CONTACT_COLUMNS.left) {
    if (!seen.has(key)) left.push(key);
  }
  for (const key of DEFAULT_CONTACT_COLUMNS.right) {
    if (!seen.has(key)) right.push(key);
  }
  return { left, right };
}

export function mapRowToContactColumns(
  ui: ResumeRowWithChildren["ui"]
): ContactColumns {
  return normalizeContactColumns(ui?.contactColumns);
}

// Reverse direction — builds an insert payload for a child-table row from a
// Redux item. Column names match the TS interface field names exactly, so no
// field renaming is needed here (the `ach` -> `achievements` table-name
// mapping lives in cloudSyncMiddleware.ts, not here).
export function mapDataStateItemToRow<T extends { id: string }>(
  item: T,
  resumeId: string,
  userId: string,
  orderIndex: number
): T & { resume_id: string; user_id: string; order_index: number } {
  return {
    ...item,
    resume_id: resumeId,
    user_id: userId,
    order_index: orderIndex,
  };
}
