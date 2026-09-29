import { SectionEditor } from "@/components/Input/generic/SectionEditor";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { addProject, removeProject, updateProject } from "@/redux-beta/dataSlice";
import { projectSchema } from "./projects.schema";

const Projects = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.data.projects);

  return (
    <SectionEditor
      schema={projectSchema}
      header={<h1 className="font-extralight text-2xl mb-4">Projects</h1>}
      items={projects}
      onAdd={(draft) => dispatch(addProject(draft))}
      onUpdate={(item) => dispatch(updateProject(item))}
      onRemove={(id) => dispatch(removeProject(id))}
    />
  );
};

export default Projects;
