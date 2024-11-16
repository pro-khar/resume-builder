import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";
import Skills_out from "./modules/skills_out";
import Projects_out from "./modules/Projects_out";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import { SiFormspree } from "react-icons/si";
import Experience_out from "./modules/Experience_out";
import Certi_out from "./modules/Certi_out";
import Ach_out from "./modules/Ach_out";

function OutputGroup() {
  let f = 12;
  let f_size = f + "px";

  const intro = useSelector((state: RootState) => state.data.intro);
  const looks = useSelector((state: RootState) => state.looks);

  return (
    <>
      <ScrollArea className="w-[636px] h-[850px]">
        {intro ? (
          <div
            id="resume"
            className={`text-black min-w-[636px] rounded-md shadow-md pb-10 mt-10 transition-all duration-300`}
            style={{ fontSize: f_size, backgroundColor: looks.bodyColor }}
          >
            <Intro_out />
            <Experience_out />
            <Projects_out />
            <Skills_out />
            <Education_out />

            <Certi_out />
            <Ach_out />
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
    </>
  );
}

export default OutputGroup;
