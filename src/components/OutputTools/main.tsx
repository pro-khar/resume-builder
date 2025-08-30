import { Image } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setImageEnable, setShowIntroSeparator, setShowLine } from "@/redux-beta/lookSlice";
import { Toggle } from "../ui/toggle";
import { RootState } from "@/redux-beta/store";
import HeaderColorPicker from "./header-color";
import BodyColorPicker from "./body-color";
import { TfiLayoutLineSolid, TfiLineDashed } from "react-icons/tfi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function OutputTools() {
  const dispatch = useDispatch();
  const looks = useSelector((state: RootState) => state.looks);
  
  return (
    <div className="absolute right-0 bg-white dark:bg-zinc-700 border-l-2 h-full p-2  z-10 flex flex-col gap-2 justify-between">
      <div className="flex flex-col gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Toggle
                onClick={() => dispatch(setImageEnable())}
                variant="outline"
              >
                {looks.imageEnable ? (
                  <Image className="w-5 h-5" />
                ) : (
                  <Image className="w-5 h-5" />
                )}
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Toggle Image</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <HeaderColorPicker />
              </div>
            </TooltipTrigger>
            <TooltipContent>Header Color</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <BodyColorPicker />
              </div>
            </TooltipTrigger>
            <TooltipContent>Body Color</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Toggle onClick={() => dispatch(setShowIntroSeparator())} variant="outline">
                {looks.showIntroSeparator ? (
                  <TfiLineDashed className="w-5 h-5" />
                ) : (
                  <TfiLineDashed className="w-5 h-5" />
                )}
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Toggle Intro Separator</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Toggle onClick={() => dispatch(setShowLine())} variant="outline">
                {looks.showLine ? (
                  <TfiLayoutLineSolid className="w-5 h-5" />
                ) : (
                  <TfiLayoutLineSolid className="w-5 h-5" />
                )}
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Toggle Lines</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default OutputTools;
