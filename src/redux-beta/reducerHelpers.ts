import { nanoid } from "@reduxjs/toolkit";

export function pushWithId<T extends { id: string }>(
  arr: T[],
  payload: Omit<T, "id">
) {
  arr.push({ id: nanoid(), ...payload } as T);
}

export function removeById<T extends { id: string }>(
  arr: T[],
  id: string
): T[] {
  return arr.filter((x) => x.id !== id);
}

export function mergeById<T extends { id: string }>(
  arr: T[],
  payload: Partial<T> & { id: string }
) {
  const existing = arr.find((x) => x.id === payload.id);
  if (existing) Object.assign(existing, payload);
}
