import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "@/redux/projectSlice";
import { RootState } from "@/components/App/store";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { FaEdit } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function ProjectsGroup() {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);

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
                <p className="font-extralight">{project.title}</p>
                <div className="flex gap-1">
                  <Dialog>
                    <DialogTrigger>
                      <Button className="px-3">
                        <Pencil1Icon className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <form className="space-y-2">
                        <div className="flex gap-4">
                          <div>
                            <Label htmlFor="title">
                              Title <span className="text-purple-500">*</span>
                            </Label>
                            <Input
                              type="text"
                              id="title"
                              name="title"
                              value={""}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="duration">Duration</Label>
                            <Input
                              type="text"
                              id="duration"
                              name="duration"
                              value={""}
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
                            value={""}
                            required
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
                              value={""}
                              required
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <p>2. </p>
                            <Input
                              type="text"
                              id="f2"
                              name="f2"
                              value={""}
                              required
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <p>3. </p>
                            <Input type="text" id="f3" name="f3" value={""} />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="techStack">Tech Stack</Label>
                          <Input
                            type="text"
                            id="techStack"
                            name="techStack"
                            value={""}
                          />
                        </div>
                        <div>
                          <Label htmlFor="link">
                            Deployment / repository link
                          </Label>
                          <Input type="url" id="link" name="link" value={""} />
                        </div>
                        <Button className="w-full" type="submit">
                          Save
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="px-3"
                    onClick={(e) => dispatch(deleteProject(project.id))}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </ScrollArea>
    </>
  );
}

export default ProjectsGroup;
