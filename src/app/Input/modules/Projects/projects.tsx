import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "@/features/projectSlice";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const handleChange = (e) => {
    dispatch(updateProject({ [e.target.id]: e.target.value }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-md p-6">
      <h1 className="font-extralight text-2xl mb-4 ">Projects</h1>
      <form className="space-y-4">
        <div className="flex gap-4">
        <div>
          <Label htmlFor="title1">Title</Label>
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
          <Label htmlFor="duration1">Duration</Label>
          <Input
            type="text"
            id="duration1"
            name="duration1"
            value={projects.duration1}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <div>
          <Label htmlFor="desc1">One-line desccription</Label>
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
          <Label htmlFor="feature1_1">Features</Label>
          <div className="flex items-center gap-2">
          <p>1. </p>
          <Input
            type="text"
            id="feature1_1"
            name="feature1_1"
            value={projects.feature1_1}
            onChange={handleChange}
            required
          />
          </div>
          <div className="flex items-center gap-2">
          <p>2. </p>
          <Input
            type="text"
            id="feature1_2"
            name="feature1_2"
            value={projects.feature1_2}
            onChange={handleChange}
            required
          />
          </div>
          <div className="flex items-center gap-2">
          <p>3. </p>
          <Input
            type="text"
            id="feature1_3"
            name="feature1_3"
            value={projects.feature1_3}
            onChange={handleChange}
            required
          />
          </div>
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
      <Button className="mt-4 w-full">Add</Button>
    </div>
  );
};

export default Projects;
