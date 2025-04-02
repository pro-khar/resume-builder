import { useDispatch, useSelector } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux-beta/store";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { ArrowUp, Pencil } from "lucide-react";
import { removeSkill, updateSkill } from "@/redux-beta/dataSlice";
import { useState } from "react";
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

function SkillsGroup() {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.data.skills);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleChange = (e) => {
    setSelectedSkill({ ...selectedSkill, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSkill(selectedSkill));
    setSelectedSkill(null);
  };

  const handleEditClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <ScrollArea className="h-[600px]">
      {skills.length ? (
        <div className="mt-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
            >
              <div>
                <p className="font-semibold text-sm">{skill.cat}</p>
                <p className="text-muted-foreground text-xs line-clamp-1">
                  {skill.sk}
                </p>
              </div>
              <div className="flex gap-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="px-3"
                      onClick={() => handleEditClick(skill)}
                    >
                      <Pencil className="w-5 h-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Edit Skill</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="w-full">
                          <Label htmlFor="cat">
                            Category name{" "}
                            <span className="text-purple-500">*</span>
                          </Label>
                          <Input
                            type="text"
                            name="cat"
                            id="cat"
                            value={selectedSkill?.cat || ""}
                            placeholder="Databases"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="w-full">
                          <Label htmlFor="sk">
                            Skills <span className="text-purple-500">*</span>
                          </Label>
                          <Input
                            type="text"
                            name="sk"
                            id="sk"
                            value={selectedSkill?.sk || ""}
                            placeholder="mySQL, Cassandra, MongoDB"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <Button type="submit" className="">
                          Save
                        </Button>
                      </form>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>

                <Button
                  className="px-3"
                  onClick={() => dispatch(removeSkill(skill.id))}
                >
                  <TrashIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5">
          <p>Add a Skill to continue</p> <ArrowUp />
        </div>
      )}
    </ScrollArea>
  );
}

export default SkillsGroup;
