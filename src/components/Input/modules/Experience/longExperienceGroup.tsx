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

function LongExperienceGroup() {
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
                              Designation <span className="text-purple-500">*</span>
                            </Label>
                            <Input
                              type="text"
                              id="desig"
                              name="desig"
                              value={selectedExperience?.desig || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <p className="text-sm font-medium">Detailed Tasks/Impacts/Actions</p>
                          <div className="h-[200px] overflow-y-auto border rounded-md p-2 space-y-4">
                            <div id="repeat" className="flex">
                              <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
                                1
                              </div>
                              <div className="w-full">
                                <Label htmlFor="d1">
                                  Description{" "}
                                  <span className="text-purple-500 text-xs italic">
                                    (One-line)
                                  </span>
                                </Label>
                                <Input
                                  id="d1"
                                  name="d1"
                                  value={selectedExperience?.d1 || ""}
                                  onChange={handleChange}
                                />
                                <Label>
                                  Detailed-breakdown/Steps{" "}
                                  <span className="text-purple-500 text-xs italic">
                                    (Minimum-two)
                                  </span>
                                </Label>
                                <div className="flex items-center gap-2">
                                  <p>1. </p>
                                  <Input
                                    type="text"
                                    id="t1_1"
                                    name="t1_1"
                                    value={selectedExperience?.t1_1 || ""}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <p>2. </p>
                                  <Input
                                    type="text"
                                    id="t1_2"
                                    name="t1_2"
                                    value={selectedExperience?.t1_2 || ""}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <p>3. </p>
                                  <Input
                                    type="text"
                                    id="t1_3"
                                    name="t1_3"
                                    value={selectedExperience?.t1_3 || ""}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>

                            <div id="repeat" className="flex">
                              <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
                                2
                              </div>
                              <div className="w-full">
                                <Label htmlFor="d2">
                                  Description{" "}
                                  <span className="text-purple-500 text-xs italic">
                                    (One-line)
                                  </span>
                                </Label>
                                <Input
                                  id="d2"
                                  name="d2"
                                  value={selectedExperience?.d2 || ""}
                                  onChange={handleChange}
                                />
                                <Label>
                                  Detailed-breakdown/Steps{" "}
                                  <span className="text-purple-500 text-xs italic">
                                    (Minimum-two)
                                  </span>
                                </Label>
                                <div className="flex items-center gap-2">
                                  <p>1. </p>
                                  <Input
                                    type="text"
                                    id="t2_1"
                                    name="t2_1"
                                    value={selectedExperience?.t2_1 || ""}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <p>2. </p>
                                  <Input
                                    type="text"
                                    id="t2_2"
                                    name="t2_2"
                                    value={selectedExperience?.t2_2 || ""}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <p>3. </p>
                                  <Input
                                    type="text"
                                    id="t2_3"
                                    name="t2_3"
                                    value={selectedExperience?.t2_3 || ""}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>

                            <div id="repeat" className="flex">
                              <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
                                3
                              </div>
                              <div className="w-full">
                                <Label htmlFor="d3">
                                  Description{" "}
                                  <span className="text-purple-500 text-xs italic">
                                    (One-line)
                                  </span>
                                </Label>
                                <Input
                                  id="d3"
                                  name="d3"
                                  value={selectedExperience?.d3 || ""}
                                  onChange={handleChange}
                                />
                                <Label>
                                  Detailed-breakdown/Steps{" "}
                                  <span className="text-purple-500 text-xs italic">
                                    (Minimum-two)
                                  </span>
                                </Label>
                                <div className="flex items-center gap-2">
                                  <p>1. </p>
                                  <Input
                                    type="text"
                                    id="t3_1"
                                    name="t3_1"
                                    value={selectedExperience?.t3_1 || ""}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <p>2. </p>
                                  <Input
                                    type="text"
                                    id="t3_2"
                                    name="t3_2"
                                    value={selectedExperience?.t3_2 || ""}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <p>3. </p>
                                  <Input
                                    type="text"
                                    id="t3_3"
                                    name="t3_3"
                                    value={selectedExperience?.t3_3 || ""}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="techStack">
                              Tech Stack <span className="text-purple-500">*</span>
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

export default LongExperienceGroup;