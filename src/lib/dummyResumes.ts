import type { ResumeSummary } from "@/components/Resumes/MyResumes";

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

function agoIso(ms: number): string {
  return new Date(Date.now() - ms).toISOString();
}

// Fake "n items" arrays for the completion-count fields — the dashboard only
// ever reads their .length, so content doesn't matter, just the count.
function items(n: number): { id: string }[] {
  return Array.from({ length: n }, (_, i) => ({ id: `item-${i}` }));
}

// None of these have a real captured screenshot (dev mode never talks to
// Storage) — they fall back to the same placeholderThumbnail() the
// dashboard uses for a real, never-opened resume, so dev mode exercises the
// exact fallback path production uses.
export const DUMMY_RESUMES: ResumeSummary[] = [
  {
    id: "dummy-1",
    title: "Frontend Engineer — Acme Co",
    updated_at: agoIso(2 * HOUR),
    intro: { name: "Alex Rivera", profile: "Frontend Engineer" },
    education: { degree: "B.Sc. Computer Science" },
    skills: items(6),
    projects: items(3),
    experience: items(2),
    certifications: items(1),
    achievements: [],
  },
  {
    id: "dummy-2",
    title: "Backend Internship App",
    updated_at: agoIso(DAY),
    intro: { name: "Alex Rivera", profile: "Backend Developer Intern" },
    education: { degree: "B.Sc. Computer Science" },
    skills: items(4),
    projects: [],
    experience: [],
    certifications: [],
    achievements: [],
  },
  {
    id: "dummy-3",
    title: "Product Design Resume",
    updated_at: agoIso(3 * DAY),
    intro: { name: "Alex Rivera", profile: "Product Designer" },
    education: { degree: "" },
    skills: items(5),
    projects: items(4),
    experience: items(2),
    certifications: [],
    achievements: items(1),
  },
  {
    id: "dummy-4",
    title: "Untitled Resume",
    updated_at: agoIso(2 * 60 * 1000),
    intro: { name: "", profile: "" },
    education: { degree: "" },
    skills: [],
    projects: [],
    experience: [],
    certifications: [],
    achievements: [],
  },
  {
    id: "dummy-5",
    title: "Data Analyst",
    updated_at: agoIso(7 * DAY),
    intro: { name: "Alex Rivera", profile: "Data Analyst" },
    education: { degree: "B.Sc. Statistics" },
    skills: items(8),
    projects: items(3),
    experience: items(3),
    certifications: items(2),
    achievements: items(2),
  },
];
