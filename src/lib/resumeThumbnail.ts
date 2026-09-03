import { toPng } from "html-to-image";
import { supabase } from "./supabaseClient";

const BUCKET = "resume-thumbnails";
const THUMBNAIL_WIDTH = 340;
const SIGNED_URL_TTL_SECONDS = 60 * 60;

function thumbnailPath(userId: string, resumeId: string): string {
  return `${userId}/${resumeId}.png`;
}

// Captures the live #resume DOM node (the same markup OutputGroup renders in
// the editor) at a reduced scale and uploads it as that resume's thumbnail.
// Best-effort: a failed capture just leaves whatever thumbnail already
// existed (or none) — never surfaced to the user, since this runs silently
// in the background while they edit.
export async function captureAndUploadThumbnail(
  resumeId: string,
  userId: string
): Promise<void> {
  const node = document.getElementById("resume");
  if (!node) return;

  const naturalWidth = node.offsetWidth || 636;
  const naturalHeight = node.offsetHeight;
  if (!naturalHeight) return;
  const scale = THUMBNAIL_WIDTH / naturalWidth;

  try {
    const dataUrl = await toPng(node, {
      pixelRatio: 1,
      width: Math.round(naturalWidth * scale),
      height: Math.round(naturalHeight * scale),
      backgroundColor: "#ffffff",
      cacheBust: true,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${naturalWidth}px`,
        height: `${naturalHeight}px`,
      },
    });
    const blob = await (await fetch(dataUrl)).blob();
    await supabase.storage
      .from(BUCKET)
      .upload(thumbnailPath(userId, resumeId), blob, {
        contentType: "image/png",
        upsert: true,
      });
  } catch {
    // Screenshotting is inherently best-effort (fonts/images still loading,
    // an unusual layout, etc.) — silently skip this capture.
  }
}

// Batches a signed-URL request for every resume at once (one API call,
// regardless of how many cards the dashboard is showing). Resumes that have
// never been opened yet (no thumbnail uploaded) simply come back missing
// from the map — callers render a placeholder for those.
export async function getThumbnailUrls(
  userId: string,
  resumeIds: string[]
): Promise<Record<string, string>> {
  if (resumeIds.length === 0) return {};
  const paths = resumeIds.map((id) => thumbnailPath(userId, id));
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrls(paths, SIGNED_URL_TTL_SECONDS);
  if (error || !data) return {};

  const map: Record<string, string> = {};
  data.forEach((entry, i) => {
    if (entry.signedUrl && !entry.error) map[resumeIds[i]] = entry.signedUrl;
  });
  return map;
}

export async function deleteThumbnail(
  resumeId: string,
  userId: string
): Promise<void> {
  await supabase.storage.from(BUCKET).remove([thumbnailPath(userId, resumeId)]);
}

const PLACEHOLDER_PALETTE = [
  "#93c5fd", // blue
  "#86efac", // green
  "#f0abfc", // pink
  "#fcd34d", // amber
  "#fca5a5", // red
  "#c4b5fd", // violet
];

// A generic "resume-shaped" SVG sketch (colored header + body text lines) —
// used as the fallback for a resume with no captured screenshot yet, instead
// of a plain empty box. Also what dev-mode dummy resumes render, since they
// have no real screenshot either.
export function resumeSketchThumbnail(headerColor: string): string {
  const lines = [
    { y: 96, w: 72, h: 9, fill: "#222222" },
    { y: 114, w: 288, h: 6, fill: "#cfcfcf" },
    { y: 128, w: 260, h: 6, fill: "#cfcfcf" },
    { y: 142, w: 220, h: 6, fill: "#cfcfcf" },
    { y: 168, w: 64, h: 9, fill: "#222222" },
    { y: 186, w: 300, h: 6, fill: "#cfcfcf" },
    { y: 200, w: 180, h: 6, fill: "#cfcfcf" },
    { y: 226, w: 56, h: 9, fill: "#222222" },
    { y: 244, w: 240, h: 6, fill: "#cfcfcf" },
    { y: 258, w: 300, h: 6, fill: "#cfcfcf" },
    { y: 272, w: 140, h: 6, fill: "#cfcfcf" },
  ];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="440" viewBox="0 0 340 440">
    <rect width="340" height="440" fill="#ffffff"/>
    <rect width="340" height="70" fill="${headerColor}"/>
    <rect x="24" y="22" width="150" height="14" rx="2" fill="rgba(0,0,0,0.75)"/>
    <rect x="24" y="42" width="100" height="8" rx="2" fill="rgba(0,0,0,0.4)"/>
    ${lines
      .map(
        (l) => `<rect x="24" y="${l.y}" width="${l.w}" height="${l.h}" rx="2" fill="${l.fill}"/>`
      )
      .join("")}
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Deterministic per-resume color so the same resume always gets the same
// placeholder across renders/reloads, and different resumes look distinct
// in the grid instead of all sharing one plain fallback.
export function placeholderThumbnail(seed: string): string {
  let hash = 0;
  for (const ch of seed) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return resumeSketchThumbnail(PLACEHOLDER_PALETTE[hash % PLACEHOLDER_PALETTE.length]);
}
