import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { HelpCircle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { setExperienceFormat } from "@/redux-beta/uiSlice";
import { addExperience, removeExperience, updateExperience } from "@/redux-beta/dataSlice";
import { SectionForm } from "@/components/Input/generic/SectionForm";
import { SectionList } from "@/components/Input/generic/SectionList";
import { experienceShortSchema } from "./experienceShort.schema";
import { experienceLongSchema } from "./experienceLong.schema";
import type { SectionSchema } from "@/components/Input/generic/types";
import type { Experience as ExperienceItem, ExperienceShortDraft } from "@/redux-beta/types";

export default function Experience() {
  const dispatch = useAppDispatch();
  const experienceFormat = useAppSelector((state) => state.ui.experienceFormat);
  const experience = useAppSelector((state) => state.data.experience);

  const isLongFormat = experienceFormat === "long";

  // Both schemas are structurally interchangeable at runtime (SectionForm/SectionList
  // only ever index into the draft/item by each schema's own field keys); the cast
  // collapses the union so TDraft resolves to a single concrete type for the JSX below.
  const schema = (isLongFormat ? experienceLongSchema : experienceShortSchema) as SectionSchema<
    ExperienceShortDraft,
    ExperienceItem
  >;

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-extralight text-2xl">Experience</h1>
          <div className="flex gap-2 items-center">
            <Label className="text-xs text-muted-foreground">Long Format</Label>
            <Switch
              onCheckedChange={(checked) => {
                dispatch(setExperienceFormat(checked ? "long" : "short"));
              }}
              checked={isLongFormat}
            />
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
        <SectionForm
          schema={schema}
          onSubmit={(draft) => dispatch(addExperience(draft))}
        />
      </div>
      <SectionList
        schema={schema}
        items={experience}
        onUpdate={(item) => dispatch(updateExperience(item))}
        onRemove={(id) => dispatch(removeExperience(id))}
      />
    </>
  );
}
