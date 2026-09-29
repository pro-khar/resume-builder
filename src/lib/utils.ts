import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Rich-text fields store HTML, so "empty" means no text once tags are removed.
export function isBlankRichText(value: string | null | undefined): boolean {
  return !value || value.replace(/<[^>]*>/g, "").trim().length === 0
}
