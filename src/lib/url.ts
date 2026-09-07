// Prepends https:// to a URL-ish value that's missing a protocol, so users
// can type "github.com/foo" and still get a working link. Leaves empty
// strings and already-qualified URLs (http:// or https://) untouched.
export function ensureHttpsUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}
