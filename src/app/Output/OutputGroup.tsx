import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";
import Skills_out from "./modules/skills_out";
import Projects_out from "./modules/Projects_out";
import { ScrollArea } from "@/components/ui/scroll-area";

function OutputGroup() {
  let f = 12;
  let f_size = f + "px";

  return (
    <>
      <ScrollArea className="w-[636px] border-2 m-5 h-[850px]">
      <div
        id="resume"
        className={`text-black bg-white dark:bg-gray-600 min-w-[636px] rounded-md shadow-lg space-y-2 pb-10`}
        style={{ fontSize: f_size }}
      >
        <Intro_out />
        <Education_out />
        <Skills_out />
        <Projects_out />
      </div>
      </ScrollArea>
    </>
  );
}

export default OutputGroup;
