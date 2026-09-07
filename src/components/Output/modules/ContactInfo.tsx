import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  type DragEndEvent,
  type DragOverEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import {
  setContactColumns,
  type ContactColumnId,
  type ContactColumns,
  type ContactKey,
} from "@/redux-beta/uiSlice";
import { ensureHttpsUrl } from "@/lib/url";
import type { Intro } from "@/redux-beta/types";

const CONTACT_META: Record<
  ContactKey,
  { icon: IconType; getValue: (intro: Intro) => string; getHref: (intro: Intro) => string }
> = {
  email: {
    icon: FaEnvelope,
    getValue: (intro) => intro.email,
    getHref: (intro) => `mailto:${intro.email}`,
  },
  github: {
    icon: FaGithub,
    getValue: (intro) => intro.github,
    getHref: (intro) => ensureHttpsUrl(intro.github),
  },
  linkedin: {
    icon: FaLinkedin,
    getValue: (intro) => intro.linkedin,
    getHref: (intro) => ensureHttpsUrl(intro.linkedin),
  },
  leetcode: {
    icon: SiLeetcode,
    getValue: (intro) => intro.leetcode,
    getHref: (intro) => ensureHttpsUrl(intro.leetcode),
  },
  website: {
    icon: FaGlobe,
    getValue: (intro) => intro.website,
    getHref: (intro) => ensureHttpsUrl(intro.website),
  },
  address: {
    icon: IoLocationSharp,
    getValue: (intro) => intro.address,
    getHref: (intro) =>
      `https://www.google.com/maps/search/?api=1&query=${intro.address}`,
  },
  phone: {
    icon: FaPhone,
    getValue: (intro) => intro.phone,
    getHref: (intro) => `tel:${intro.phone}`,
  },
};

function ContactRowContent({ id, intro }: { id: ContactKey; intro: Intro }) {
  const meta = CONTACT_META[id];
  const Icon = meta.icon;
  return (
    <a className="flex items-center gap-1" href={meta.getHref(intro)}>
      <Icon />
      <p className="text-zinc-700">{meta.getValue(intro)}</p>
    </a>
  );
}

// Print/static rendering — no drag handle, no dnd-kit involved at all.
function StaticContactRow({ id, intro }: { id: ContactKey; intro: Intro }) {
  if (!CONTACT_META[id].getValue(intro)) return null;
  return <ContactRowContent id={id} intro={intro} />;
}

// Only ever mounted for keys that already have a value (filtered by the
// column before mapping) — an empty item would still render an absolutely
// positioned drag handle even though its own box collapses to zero height,
// which would float on top of whatever renders next (same issue fixed for
// resume-section reordering in SortableSection.tsx).
function SortableContactRow({ id, intro }: { id: ContactKey; intro: Intro }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`group relative flex items-center ${isDragging ? "z-10 opacity-70" : ""}`}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        aria-label="Drag to move"
        className="absolute -left-5 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing hover:bg-black/5 text-gray-400"
      >
        <GripVertical className="w-3.5 h-3.5" />
      </button>
      <ContactRowContent id={id} intro={intro} />
    </div>
  );
}

function Column({
  id,
  items,
  intro,
  className,
}: {
  id: ContactColumnId;
  items: ContactKey[];
  intro: Intro;
  className: string;
}) {
  const { setNodeRef } = useDroppable({ id });
  const visible = items.filter((key) => CONTACT_META[key].getValue(intro));

  return (
    <div ref={setNodeRef} id="span_container" className={`${className} min-h-[20px]`}>
      <SortableContext items={visible} strategy={verticalListSortingStrategy}>
        {visible.map((key) => (
          <SortableContactRow key={key} id={key} intro={intro} />
        ))}
      </SortableContext>
    </div>
  );
}

function findColumn(
  id: ContactColumnId | ContactKey,
  columns: ContactColumns
): ContactColumnId | undefined {
  if (id === "left" || id === "right") return id;
  return (Object.keys(columns) as ContactColumnId[]).find((col) =>
    columns[col].includes(id as ContactKey)
  );
}

// The header's contact-info block: two columns of icon+value links the user
// can drag to reorder within a column or move to the other one. Print/the
// closed-form preview never need this — `interactive` switches between the
// plain static render and the dnd-kit-backed one.
function ContactInfo({ intro, interactive = false }: { intro: Intro; interactive?: boolean }) {
  const dispatch = useAppDispatch();
  const stored = useAppSelector((state) => state.ui.contactColumns);
  const [columns, setColumns] = useState(stored);

  // Keeps local drag state in sync with changes from elsewhere (loading a
  // different resume) — same pattern as ColorPicker's hex-input sync.
  useEffect(() => {
    setColumns(stored);
  }, [stored]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  if (!interactive) {
    return (
      <div className="flex justify-between">
        <div id="span_container" className="flex flex-col leading-[1.2]">
          {stored.left.map((key) => (
            <StaticContactRow key={key} id={key} intro={intro} />
          ))}
        </div>
        <div id="span_container" className="flex flex-col">
          {stored.right.map((key) => (
            <StaticContactRow key={key} id={key} intro={intro} />
          ))}
        </div>
      </div>
    );
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeColumn = findColumn(active.id as ContactKey, columns);
    const overColumn = findColumn(over.id as ContactColumnId | ContactKey, columns);
    if (!activeColumn || !overColumn || activeColumn === overColumn) return;

    setColumns((prev) => {
      const activeItems = prev[activeColumn];
      const overItems = prev[overColumn];
      const activeIndex = activeItems.indexOf(active.id as ContactKey);
      const overIndex = overItems.indexOf(over.id as ContactKey);
      const newIndex = overIndex >= 0 ? overIndex : overItems.length;
      return {
        ...prev,
        [activeColumn]: activeItems.filter((_, i) => i !== activeIndex),
        [overColumn]: [
          ...overItems.slice(0, newIndex),
          active.id as ContactKey,
          ...overItems.slice(newIndex),
        ],
      };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeColumn = findColumn(active.id as ContactKey, columns);
    const overColumn = findColumn(over.id as ContactColumnId | ContactKey, columns);
    if (!activeColumn || !overColumn) return;

    if (activeColumn === overColumn) {
      const items = columns[activeColumn];
      const oldIndex = items.indexOf(active.id as ContactKey);
      const newIndex = items.indexOf(over.id as ContactKey);
      if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return;
      const next = { ...columns, [activeColumn]: arrayMove(items, oldIndex, newIndex) };
      setColumns(next);
      dispatch(setContactColumns(next));
    } else {
      // Cross-column move already happened live in handleDragOver — just persist it.
      dispatch(setContactColumns(columns));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex justify-between">
        <Column id="left" items={columns.left} intro={intro} className="flex flex-col leading-[1.2]" />
        <Column id="right" items={columns.right} intro={intro} className="flex flex-col" />
      </div>
    </DndContext>
  );
}

export default ContactInfo;
