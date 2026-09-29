import { SectionEditor } from "@/components/Input/generic/SectionEditor";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { addSkill, removeSkill, updateSkill } from "@/redux-beta/dataSlice";
import { skillSchema } from "./skills.schema";

function Skills() {
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.data.skills);

  return (
    <SectionEditor
      schema={skillSchema}
      header={<h1 className="font-extralight text-2xl mb-4">Skills</h1>}
      items={skills}
      onAdd={(draft) => dispatch(addSkill(draft))}
      onUpdate={(item) => dispatch(updateSkill(item))}
      onRemove={(id) => dispatch(removeSkill(id))}
    />
  );
}

export default Skills;
