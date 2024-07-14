import { useSelector, useDispatch } from "react-redux";

import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux/store";

import { Button } from "@/components/ui/button";
import { ArrowUp, TrashIcon } from "lucide-react";
import { delAch } from "@/redux/achSlice";

function AchGroup() {
  const dispatch = useDispatch();
  const achievements = useSelector(
    (state: RootState) => state.achievements.achievements); //CP1
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
                  <Button
                    className="px-3"
                    onClick={(e) => dispatch(delAch(ach.id))}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (<div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5"><p>Add an Achievement/PoR to continue</p> <ArrowUp/></div>)}
      </ScrollArea>
    </>
  );
}

export default AchGroup;
