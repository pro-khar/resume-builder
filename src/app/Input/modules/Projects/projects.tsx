import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "@/features/projectSlice";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const handleChange = (e) => {
    dispatch(updateProject({ [e.target.id]: e.target.value }));
  };

  return (
    <>
      <ScrollArea className="h-[800px] py-6">
        <div className="max-w-md mt-4 mx-auto  border rounded-md p-6">
          <h1 className="font-extralight text-2xl mb-4 ">Project 1</h1>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div>
                <Label htmlFor="title1">
                  Title <span className="text-purple-500">*</span>
                </Label>
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
              <Label htmlFor="desc1">One-line description</Label>
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
              <Label htmlFor="link1">Deployment / repository link</Label>
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

        {/* BREAK */}

        <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
          <h1 className="font-extralight text-2xl mb-4 ">Project 2</h1>

          <form className="space-y-4">
            <div className="flex gap-4">
              <div>
                <Label htmlFor="title2">
                  Title <span className="text-purple-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="title2"
                  name="title2"
                  value={projects.title2}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="duration2">Duration</Label>
                <Input
                  type="text"
                  id="duration2"
                  name="duration2"
                  value={projects.duration2}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="desc2">One-line description</Label>
              <Input
                type="text"
                id="desc2"
                name="desc2"
                value={projects.desc2}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="feature2_1">Features</Label>
              <div className="flex items-center gap-2">
                <p>1. </p>
                <Input
                  type="text"
                  id="feature2_1"
                  name="feature2_1"
                  value={projects.feature2_1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <p>2. </p>
                <Input
                  type="text"
                  id="feature2_2"
                  name="feature2_2"
                  value={projects.feature2_2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <p>3. </p>
                <Input
                  type="text"
                  id="feature2_3"
                  name="feature2_3"
                  value={projects.feature2_3}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="techStack2">Tech Stack</Label>
              <Input
                type="text"
                id="techStack2"
                name="techStack2"
                value={projects.techStack2}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="link2">Deployment / repository link</Label>
              <Input
                type="url"
                id="link2"
                name="link2"
                value={projects.link2}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>

        {/* BREAK */}

        <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
          <h1 className="font-extralight text-2xl mb-4 ">Project 3</h1>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div>
                <Label htmlFor="title3">
                  Title <span className="text-purple-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="title3"
                  name="title3"
                  value={projects.title3}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="duration3">Duration</Label>
                <Input
                  type="text"
                  id="duration3"
                  name="duration3"
                  value={projects.duration3}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="desc3">One-line description</Label>
              <Input
                type="text"
                id="desc3"
                name="desc3"
                value={projects.desc3}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="feature3_1">Features</Label>
              <div className="flex items-center gap-2">
                <p>1. </p>
                <Input
                  type="text"
                  id="feature3_1"
                  name="feature3_1"
                  value={projects.feature3_1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <p>2. </p>
                <Input
                  type="text"
                  id="feature3_2"
                  name="feature3_2"
                  value={projects.feature3_2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <p>3. </p>
                <Input
                  type="text"
                  id="feature3_3"
                  name="feature3_3"
                  value={projects.feature3_3}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="techStack3">Tech Stack</Label>
              <Input
                type="text"
                id="techStack3"
                name="techStack3"
                value={projects.techStack3}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="link3">Deployment / repository link</Label>
              <Input
                type="url"
                id="link3"
                name="link3"
                value={projects.link3}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
      </ScrollArea>
    </>
  );
};

export default Projects;
