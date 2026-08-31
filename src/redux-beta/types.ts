export interface Intro {
  profile: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
  summary: string;
  picture: string | null;
  pictureEnable: boolean;
}

export interface Education {
  degree: string;
  branch: string;
  college: string;
  bachelor_duration: string;
  bachelor_score: string;
  int_school: string;
  int_year: string;
  int_score: string;
  hs_school: string;
  hs_year: string;
  hs_score: string;
}

export interface Skill {
  id: string;
  cat: string;
  sk: string;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  desc: string;
  f1: string;
  f2: string;
  f3: string;
  f4: string;
  link: string;
  techStack: string;
}

// One wide interface with optional variant fields — NOT a union. The redux array has
// zero discriminant between short/long entries (by design, out of scope to add one), so a
// true union would make e.g. `item.d1` a compile error inside the generic SectionList when
// TItem is the union. Optional fields are the honest model: a short-created entry really
// doesn't have a `d1` key at all.
export interface Experience {
  id: string;
  orgName: string;
  desig: string;
  duration: string;
  techStack: string;
  link: string;
  t1?: string; // short-form fields
  t2?: string;
  t3?: string;
  t4?: string;
  d1?: string; // long-form fields
  t1_1?: string;
  t1_2?: string;
  t1_3?: string;
  d2?: string;
  t2_1?: string;
  t2_2?: string;
  t2_3?: string;
  d3?: string;
  t3_1?: string;
  t3_2?: string;
  t3_3?: string;
}

export interface ExperienceShortDraft {
  [key: string]: string;
  orgName: string;
  desig: string;
  duration: string;
  t1: string;
  t2: string;
  t3: string;
  t4: string;
  techStack: string;
  link: string;
}

export interface ExperienceLongDraft {
  [key: string]: string;
  orgName: string;
  desig: string;
  duration: string;
  d1: string;
  t1_1: string;
  t1_2: string;
  t1_3: string;
  d2: string;
  t2_1: string;
  t2_2: string;
  t2_3: string;
  d3: string;
  t3_1: string;
  t3_2: string;
  t3_3: string;
  techStack: string;
  link: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  link: string;
  duration: string;
}

export interface Achievement {
  id: string;
  position: string;
  orgName: string;
  duration: string;
  d1: string;
  d2: string;
  d3: string;
  link: string;
}

export interface DataState {
  intro: Intro;
  education: Education;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  ach: Achievement[];
}
