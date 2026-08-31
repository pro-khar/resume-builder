import { SectionForm } from "@/components/Input/generic/SectionForm";
import { SectionList } from "@/components/Input/generic/SectionList";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { addProject, removeProject, updateProject } from "@/redux-beta/dataSlice";
import { projectSchema } from "./projects.schema";

const Projects = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.data.projects);

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Projects</h1>
        <SectionForm
          schema={projectSchema}
          onSubmit={(draft) => dispatch(addProject(draft))}
        />
      </div>
      <SectionList
        schema={projectSchema}
        items={projects}
        onUpdate={(item) => dispatch(updateProject(item))}
        onRemove={(id) => dispatch(removeProject(id))}
      />
    </>
  );
};

export default Projects;
