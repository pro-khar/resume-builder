import { SectionForm } from "@/components/Input/generic/SectionForm";
import { SectionList } from "@/components/Input/generic/SectionList";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { addSkill, removeSkill, updateSkill } from "@/redux-beta/dataSlice";
import { skillSchema } from "./skills.schema";

function Skills() {
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.data.skills);

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Skills</h1>
        <SectionForm
          schema={skillSchema}
          onSubmit={(draft) => dispatch(addSkill(draft))}
        />
      </div>
      <SectionList
        schema={skillSchema}
        items={skills}
        onUpdate={(item) => dispatch(updateSkill(item))}
        onRemove={(id) => dispatch(removeSkill(id))}
      />
    </>
  );
}

export default Skills;
