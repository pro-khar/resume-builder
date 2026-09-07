import type { ComponentType } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { setSectionOrder, type SectionKey } from "@/redux-beta/uiSlice";
import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";
import Skills_out from "./modules/skills_out";
import Projects_out from "./modules/Projects_out";
import Experience_out from "./modules/Experience_out";
import Certi_out from "./modules/Certi_out";
import Ach_out from "./modules/Ach_out";
import SortableSection from "./SortableSection";

const SECTION_COMPONENTS: Record<SectionKey, ComponentType> = {
  experience: Experience_out,
  projects: Projects_out,
  skills: Skills_out,
  education: Education_out,
  certifications: Certi_out,
  achievements: Ach_out,
};

// Shared by the on-screen preview (OutputGroup) and the print portal
// (PrintPortal), so both stay in sync with a single source of truth for
// section content AND order. `interactive` turns on drag-to-reorder — print
// never needs pointer interactivity, and dnd-kit's transform styles have no
// meaning on a printed page, so the portal renders the same order statically.
function ResumeBody({ interactive = false }: { interactive?: boolean }) {
  const sectionOrder = useAppSelector((state) => state.ui.sectionOrder);
  const experience = useAppSelector((state) => state.data.experience);
  const projects = useAppSelector((state) => state.data.projects);
  const skills = useAppSelector((state) => state.data.skills);
  const education = useAppSelector((state) => state.data.education);
  const certifications = useAppSelector((state) => state.data.certifications);
  const ach = useAppSelector((state) => state.data.ach);
  const dispatch = useAppDispatch();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  // Each *_out component already hides itself (renders null) when its section
  // has no data — mirrored here so the interactive path never mounts a
  // SortableSection for an empty section. A SortableSection's drag handle is
  // absolutely positioned, so it isn't clipped by a zero-height parent: left
  // unfiltered, an empty section's handle floats on top of whatever section
  // renders right after it instead of just disappearing.
  const hasContent: Record<SectionKey, boolean> = {
    experience: experience.length > 0,
    projects: projects.length > 0,
    skills: skills.length > 0,
    education: Boolean(education.degree),
    certifications: certifications.length > 0,
    achievements: ach.length > 0,
  };
  const visibleOrder = sectionOrder.filter((key) => hasContent[key]);

  if (!interactive) {
    return (
      <>
        <Intro_out />
        {visibleOrder.map((key) => {
          const Section = SECTION_COMPONENTS[key];
          return <Section key={key} />;
        })}
      </>
    );
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = sectionOrder.indexOf(active.id as SectionKey);
    const newIndex = sectionOrder.indexOf(over.id as SectionKey);
    if (oldIndex === -1 || newIndex === -1) return;
    dispatch(setSectionOrder(arrayMove(sectionOrder, oldIndex, newIndex)));
  };

  return (
    <>
      <Intro_out interactive />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={visibleOrder} strategy={verticalListSortingStrategy}>
          {visibleOrder.map((key) => {
            const Section = SECTION_COMPONENTS[key];
            return (
              <SortableSection key={key} id={key}>
                <Section />
              </SortableSection>
            );
          })}
        </SortableContext>
      </DndContext>
    </>
  );
}

export default ResumeBody;
