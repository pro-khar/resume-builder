import DOMPurify from "dompurify";

// Kept in sync with the marks the input-side editor can produce (bold/italic/underline)
// plus paragraph breaks for multiline fields — anything else is stripped, since this is
// the trust boundary for HTML that may have entered redux state outside our own editor
// (cloud sync, older data, etc.) before it gets rendered with dangerouslySetInnerHTML.
const ALLOWED_TAGS = ["strong", "em", "u", "p", "br"];

export function sanitizeRichText(html: string | null | undefined): string {
  if (!html) return "";
  return DOMPurify.sanitize(html, { ALLOWED_TAGS, ALLOWED_ATTR: [] });
}
