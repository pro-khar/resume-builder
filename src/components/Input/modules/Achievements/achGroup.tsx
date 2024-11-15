import { useSelector, useDispatch } from "react-redux";

import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux-beta/store";

import { Button } from "@/components/ui/button";
import { ArrowUp, Pencil, TrashIcon } from "lucide-react";
import { useState } from "react";
import { removeAch, updateAch } from "@/redux-beta/dataSlice";
import { Dialog, DialogDescription } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function AchGroup() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const dispatch = useDispatch();

  const achievements = useSelector((state: RootState) => state.data.ach);

  const handleChange = (e) => {
    setSelectedAchievement({
      ...selectedAchievement,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAch(selectedAchievement));
    setSelectedAchievement(null);
  };

  const handleEditClick = (achievement) => {
    setSelectedAchievement(achievement);
  };

  return (
    <>
      <ScrollArea className="h-[250px]">
        {achievements.length ? (
          <div className="mt-5">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
              >
                <p className="font-extralight">{ach.position}</p>
                <div className="flex gap-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="px-3"
                        onClick={() => handleEditClick(ach)}
                      >
                        <Pencil className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogTitle>Edit Achievement/PoR</DialogTitle>
                      <DialogDescription>
                        <form className="space-y-2" onSubmit={handleSubmit}>
                          <div className="flex gap-4">
                            <div>
                              <Label htmlFor="position">
                                Achevement/Position{" "}
                                <span className="text-purple-500">*</span>
                              </Label>
                              <Input
                                type="text"
                                id="position"
                                name="position"
                                value={selectedAchievement?.position || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="duration">Duration/Year</Label>
                              <Input
                                type="text"
                                id="duration"
                                name="duration"
                                value={selectedAchievement?.duration || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="orgName">Organistion/Event</Label>
                            <Input
                              type="text"
                              id="orgName"
                              name="orgName"
                              value={selectedAchievement?.orgName || ""}
                              onChange={handleChange}
                            />
                          </div>

                          <div>
                            <Label htmlFor="d1">
                              Bulleted details{" "}
                              <span className="text-purple-500 text-xs italic">
                                (optional)
                              </span>
                            </Label>
                            <div className="flex items-center gap-2">
                              <p>1. </p>
                              <Input
                                type="text"
                                id="d1"
                                name="d1"
                                value={selectedAchievement?.d1 || ""}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>2. </p>
                              <Input
                                type="text"
                                id="d2"
                                name="d2"
                                value={selectedAchievement?.d2 || ""}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <p>3. </p>
                              <Input
                                type="text"
                                id="d3"
                                name="d3"
                                value={selectedAchievement?.d3 || ""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="link">
                              Certificates/Relevant document links
                            </Label>
                            <Input
                              type="url"
                              id="link"
                              name="link"
                              value={selectedAchievement?.link || ""}
                              onChange={handleChange}
                            />
                          </div>
                          <Button className="w-full" type="submit">
                            Add
                          </Button>
                        </form>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="px-3"
                    onClick={(e) => dispatch(removeAch(ach.id))}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5">
            <p>Add an Achievement/PoR to continue</p> <ArrowUp />
          </div>
        )}
      </ScrollArea>
    </>
  );
}

export default AchGroup;
