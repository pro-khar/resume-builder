
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";

function OutputGroup() {
  return (
    <>
    
      
    <div id="resume" className="text-black bg-white dark:bg-zinc-700 h-[900px] w-[636px] rounded-md shadow-lg mb-10">
      <Intro_out/>
      <Education_out/>
    </div>
    
    
    </>
  );
}

export default OutputGroup;
