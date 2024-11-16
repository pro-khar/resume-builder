import { Image, ImageOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setImageEnable } from "@/redux-beta/lookSlice";
import { Toggle } from "../ui/toggle";
import { RootState } from "@/redux-beta/store";
import HeaderColorPicker from "./header-color";
import BodyColorPicker from "./body-color";

function OutputTools() {
  const dispatch = useDispatch();
  const looks = useSelector((state: RootState) => state.looks);
  return (
    <div className="absolute right-0 bg-white dark:bg-zinc-700 border-l-2 h-full p-2 flex flex-col gap-2">
      <Toggle onClick={() => dispatch(setImageEnable())} variant="outline">
        {looks.imageEnable ? <Image className="w-5 h-5" /> : <ImageOff />}
      </Toggle>
      <HeaderColorPicker />
      <BodyColorPicker />
    </div>
  );
}

export default OutputTools;
