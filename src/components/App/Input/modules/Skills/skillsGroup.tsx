import React from "react";
import { removeSkill } from "@/redux/skillsSlice";
import { useDispatch, useSelector } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/components/App/store";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

function SkillsGroup() {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skills.skills);
  return (
    <ScrollArea className="h-[250px]">
      {skills.length ? (
        <div className="mt-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
            >
              <div>
                <p className="font-semibold text-sm">{skill.cat}</p>
                <p className="text-md font-extralight">{skill.sk}</p>
              </div>
              <div className="flex gap-1">
                <Button
                  className="px-3"
                  onClick={(e) => dispatch(removeSkill(skill.id))}
                >
                  <TrashIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </ScrollArea>
  );
}

export default SkillsGroup;
