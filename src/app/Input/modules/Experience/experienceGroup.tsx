import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/app/store";
import { removeExp } from "@/features/expSlice";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

function experienceGroup() {
    const dispatch = useDispatch();
    const experience = useSelector((state:RootState) => state.experience.exps); //CP1
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
                <p className="font-extralight">{exp.orgName}</p>
                <div className="flex gap-1">
                  

                  <Button
                    className="px-3"
                    onClick={(e) => dispatch(removeExp(exp.id))}
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

export default experienceGroup;
