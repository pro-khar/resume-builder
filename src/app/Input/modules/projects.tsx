import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "@/features/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const handleChange = (e) => {
    dispatch(updateProject({ [e.target.id]: e.target.value }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-md p-6">
      <form className="space-y-4">
        <div>
          <Label htmlFor="title1">Project Title</Label>
          <Input
            type="text"
            id="title1"
            name="title1"
            value={projects.title1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="duration1">Project Duration</Label>
          <Input
            type="text"
            id="duration1"
            name="duration1"
            value={projects.duration1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="desc1">One-line desc1</Label>
          <Input
            type="text"
            id="desc1"
            name="desc1"
            value={projects.desc1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="feature1_1">Feature 1</Label>
          <Input
            type="text"
            id="feature1_1"
            name="feature1_1"
            value={projects.feature1_1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="feature1_2">Feature 2</Label>
          <Input
            type="text"
            id="feature1_2"
            name="feature1_2"
            value={projects.feature1_2}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="feature1_3">Feature 3</Label>
          <Input
            type="text"
            id="feature1_3"
            name="feature1_3"
            value={projects.feature1_3}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="techStack1">Tech Stack</Label>
          <Input
            type="text"
            id="techStack1"
            name="techStack1"
            value={projects.techStack1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="link1">Deployement / repository link</Label>
          <Input
            type="url"
            id="link1"
            name="link1"
            value={projects.link1}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Projects;
