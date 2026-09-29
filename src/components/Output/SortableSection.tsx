import type { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { GripVertical } from "lucide-react";
import { useDragTransform } from "./previewScale";

// Wraps one resume-preview section so it can be dragged to reorder. There's
// deliberately no delete affordance here — only a grip handle that appears on
// hover, and only the handle itself is a drag listener (not the whole card),
// so clicking/selecting text inside the section never triggers a drag.
function SortableSection({ id, children }: { id: string; children: ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });
  const dragTransform = useDragTransform(transform);

  return (
    <div
      ref={setNodeRef}
      style={{ transform: dragTransform, transition }}
      className={`group relative ${isDragging ? "z-10 opacity-70" : ""}`}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        aria-label="Drag to reorder section"
        className="absolute left-1 top-1 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing hover:bg-black/5 text-gray-400"
      >
        <GripVertical className="w-4 h-4" />
      </button>
      {children}
    </div>
  );
}

export default SortableSection;
