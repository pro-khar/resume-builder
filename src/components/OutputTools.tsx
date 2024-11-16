import { Image } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { setImageEnable } from "@/redux-beta/lookSlice";
import { Toggle } from "./ui/toggle";

function OutputTools() {
  const dispatch = useDispatch();
  return (
    <div className="absolute left-0 bg-primary-foreground border-r-2 h-full p-2">
      <Toggle onClick={() => dispatch(setImageEnable())}>
        <Image className="w-5 h-5" />
      </Toggle>
    </div>
  );
}

export default OutputTools;
