import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowUp, Pencil } from "lucide-react";
import { removeProject, updateProject } from "@/redux-beta/dataSlice";
import { useState } from "react";

function ProjectsGroup() {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.data.projects);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleChange = (e) => {
    setSelectedProject({ ...selectedProject, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProject(selectedProject));
    setSelectedProject(null);
  };

  const handleEditClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <ScrollArea className="h-[250px]">
        {projects.length ? (
          <div className="mt-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
              >
                <p className="font-extralight line-clamp-1">{project.title}</p>
                <div className="flex gap-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="px-3"
                        onClick={() => handleEditClick(project)}
                      >
                        <Pencil className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Project</DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        <form className="space-y-2" onSubmit={handleSubmit}>
                          <div className="flex gap-4">
                            <div>
                              <Label htmlFor="title">
                                Title <span className="text-purple-500">*</span>
                              </Label>
                              <Input
                                type="text"
                                id="title"
                                name="title"
                                value={selectedProject?.title || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="duration">Duration</Label>
                              <Input
                                type="text"
                                id="duration"
                                name="duration"
                                value={selectedProject?.duration || ""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="desc">
                              One-line description{" "}
                              <span className="text-purple-500">*</span>
                            </Label>
                            <Input
                              type="text"
                              id="desc"
                              name="desc"
                              value={selectedProject?.desc || ""}
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div>
                            <Label htmlFor="f1">
                              Features{" "}
                              <span className="text-purple-500 text-xs italic">
                                (minimum two)
                              </span>
                            </Label>
                            <div className="flex items-center gap-2">
                              <p>1. </p>
                              <Input
                                type="text"
                                id="f1"
                                name="f1"
                                value={selectedProject?.f1 || ""}
                                required
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>2. </p>
                              <Input
                                type="text"
                                id="f2"
                                name="f2"
                                value={selectedProject?.f2 || ""}
                                required
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>3. </p>
                              <Input
                                type="text"
                                id="f3"
                                name="f3"
                                value={selectedProject?.f3 || ""}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>4. </p>
                              <Input
                                type="text"
                                id="f4"
                                name="f4"
                                value={selectedProject?.f4 || ""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="techStack">Tech Stack</Label>
                            <Input
                              type="text"
                              id="techStack"
                              name="techStack"
                              value={selectedProject?.techStack || ""}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="link">
                              Deployment / repository link
                            </Label>
                            <Input
                              type="url"
                              id="link"
                              name="link"
                              value={selectedProject?.link || ""}
                              onChange={handleChange}
                            />
                          </div>
                          <Button className="w-full" type="submit">
                            Save
                          </Button>
                        </form>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="px-3"
                    onClick={(e) => dispatch(removeProject(project.id))}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5">
            <p>Add a Project to continue</p> <ArrowUp />
          </div>
        )}
      </ScrollArea>
    </>
  );
}

export default ProjectsGroup;
