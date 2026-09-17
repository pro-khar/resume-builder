import { sanitizeRichText } from "./sanitize";

interface RichTextProps {
  html?: string | null;
  as?: "span" | "div" | "p";
  className?: string;
}

// Renders stored field HTML (bold/italic/underline, and paragraphs for multiline
// fields) on the resume preview side. Always sanitize here rather than trusting
// the string was produced by our own editor — it may have come from cloud sync.
export function RichText({ html, as = "span", className }: RichTextProps) {
  const clean = sanitizeRichText(html);
  if (!clean) return null;
  const Tag = as;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: clean }} />;
}
