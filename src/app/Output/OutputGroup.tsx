
import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";
import { ScrollArea } from "@/components/ui/scroll-area";

function OutputGroup() {
  return (
    <>
    
      
    <div id="resume" className="text-black bg-white dark:bg-zinc-600 h-[900px] w-[636px] rounded-md shadow-lg">
      <Intro_out/>
      <Education_out/>
    </div>
    
    
    
    </>
  );
}

export default OutputGroup;
