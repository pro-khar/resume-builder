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
import type { ExperienceFormat } from "./uiSlice";

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
  ui: Partial<{ experienceFormat: ExperienceFormat }> | Record<string, never> | null;
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
