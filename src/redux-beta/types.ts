export interface Intro {
  profile: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
  leetcode: string;
  website: string;
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
  points: string[];
  link: string;
  techStack: string;
}

// A long-format experience block: a one-line description with its own points.
export interface PointGroup {
  desc: string;
  points: string[];
}

// One wide interface with optional variant fields — NOT a union. The redux array has
// zero discriminant between short/long entries (by design, out of scope to add one), so a
// true union would make e.g. `item.groups` a compile error inside the generic SectionList
// when TItem is the union. Optional fields are the honest model: a short-created entry
// really doesn't have a `groups` key at all.
export interface Experience {
  id: string;
  orgName: string;
  desig: string;
  duration: string;
  techStack: string;
  link: string;
  points?: string[]; // short-form
  groups?: PointGroup[]; // long-form
}

export interface ExperienceShortDraft {
  orgName: string;
  desig: string;
  duration: string;
  points: string[];
  techStack: string;
  link: string;
}

export interface ExperienceLongDraft {
  orgName: string;
  desig: string;
  duration: string;
  groups: PointGroup[];
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
  points: string[];
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
