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
import { removeExperience, updateExperience } from "@/redux-beta/dataSlice";
import { useState } from "react";

function ExperienceGroup() {
  const dispatch = useDispatch();
  const experience = useSelector((state: RootState) => state.data.experience);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleChange = (e) => {
    setSelectedExperience({
      ...selectedExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExperience(selectedExperience));
    setSelectedExperience(null);
  };

  const handleEditClick = (exp) => {
    setSelectedExperience(exp);
  };

  return (
    <>
      <ScrollArea className="h-[250px]">
        {experience.length ? (
          <div className="mt-5">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
              >
                <p className="font-extralight line-clamp-1">{exp.orgName}</p>
                <div className="flex gap-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="px-3"
                        onClick={() => handleEditClick(exp)}
                      >
                        <Pencil className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Experience</DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        <form className="space-y-2" onSubmit={handleSubmit}>
                          <div className="flex gap-4">
                            <div>
                              <Label htmlFor="orgName">
                                Organization Name{" "}
                                <span className="text-purple-500">*</span>
                              </Label>
                              <Input
                                type="text"
                                id="orgName"
                                name="orgName"
                                value={selectedExperience?.orgName || ""}
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
                                value={selectedExperience?.duration || ""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="desig">
                              Designation{" "}
                              <span className="text-purple-500">*</span>
                            </Label>
                            <Input
                              type="text"
                              id="desig"
                              name="desig"
                              value={selectedExperience?.desig || ""}
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div>
                            <Label htmlFor="t1">
                              Tasks & Responsibilities{" "}
                              <span className="text-purple-500 text-xs italic">
                                (minimum two)
                              </span>
                            </Label>
                            <div className="flex items-center gap-2">
                              <p>1. </p>
                              <Input
                                type="text"
                                id="t1"
                                name="t1"
                                value={selectedExperience?.t1 || ""}
                                required
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>2. </p>
                              <Input
                                type="text"
                                id="t2"
                                name="t2"
                                value={selectedExperience?.t2 || ""}
                                required
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>3. </p>
                              <Input
                                type="text"
                                id="t3"
                                name="t3"
                                value={selectedExperience?.t3 || ""}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>4. </p>
                              <Input
                                type="text"
                                id="t4"
                                name="t4"
                                value={selectedExperience?.t4 || ""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div>
                              <Label htmlFor="techStack">
                                Tech Stack{" "}
                                <span className="text-purple-500">*</span>
                              </Label>
                              <Input
                                type="text"
                                id="techStack"
                                name="techStack"
                                value={selectedExperience?.techStack || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="link">Certificate Link</Label>
                              <Input
                                type="url"
                                id="link"
                                name="link"
                                value={selectedExperience?.link || ""}
                                onChange={handleChange}
                              />
                            </div>
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
                    onClick={() => dispatch(removeExperience(exp.id))}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5">
            <p>Add an Experience to continue</p> <ArrowUp />
          </div>
        )}
      </ScrollArea>
    </>
  );
}

export default ExperienceGroup;
