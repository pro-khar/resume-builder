import { createContext, useContext } from "react";
import { CSS, type Transform } from "@dnd-kit/utilities";

// How much OutputGroup enlarges the on-screen preview; print is never scaled.
export const PreviewScaleContext = createContext(1);

// dnd-kit measures elements and the pointer in screen pixels, but its
// transforms are applied inside the scaled page, where every pixel is
// multiplied by the scale again — divide it back out so dragged items track
// the pointer and neighbours shift by exactly one slot.
//
// Translate only: while dragging, dnd-kit also sets scaleX/scaleY to resize
// the active item to whatever it's hovering over, which stretches a short
// section across a tall one's height.
export function useDragTransform(transform: Transform | null): string | undefined {
  const scale = useContext(PreviewScaleContext);
  return CSS.Translate.toString(
    transform && { ...transform, x: transform.x / scale, y: transform.y / scale }
  );
}
