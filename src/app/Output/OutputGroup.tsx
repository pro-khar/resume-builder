
import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";
import Skills_out from "./modules/skills_out";



function OutputGroup() {
  return (
    <>
    
      
    <div id="resume" className="text-black bg-white dark:bg-gray-600 h-[900px] w-[636px] rounded-md shadow-lg">
      <Intro_out/>
      <Education_out/>
      <Skills_out/>
      
    </div>
    
    
    
    </>
  );
}

export default OutputGroup;
