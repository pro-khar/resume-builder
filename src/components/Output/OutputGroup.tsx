import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/redux-beta/hooks";
import { SiFormspree } from "react-icons/si";
import ResumeBody from "./ResumeBody";
import PrintPortal from "./PrintPortal";

function OutputGroup() {
  let f = 12;
  let f_size = f + "px";

  const intro = useAppSelector((state) => state.data.intro);
  const looks = useAppSelector((state) => state.looks);

  return (
    <>
      <ScrollArea className="w-[636px] h-[850px]">
        {intro ? (
          <div
            id="resume"
            className={`text-black min-w-[636px] rounded-md shadow-md pb-10 transition-all duration-300`}
            style={{ fontSize: f_size, backgroundColor: looks.bodyColor }}
          >
            <ResumeBody />
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-600 h-[850px] min-w-[636px] rounded-md shadow-md space-y-2 pb-10 flex items-center justify-center">
            <div className="flex gap-2 justify-center items-center">
              <SiFormspree className="text-3xl" />
              <p className="text-sm">
                Start entering info <br />
                to see Preview
              </p>
            </div>
          </div>
        )}
      </ScrollArea>
      <PrintPortal />
    </>
  );
}

export default OutputGroup;
