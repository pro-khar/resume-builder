
import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";
import Skills_out from "./modules/skills_out";
import Projects_out from "./modules/Projects_out";



function OutputGroup() {
  let f_size = 12;
  return (
    <>
    
      
    <div id="resume" className={`text-black bg-white dark:bg-gray-600 h-[1200px] w-[636px] rounded-md shadow-lg text-[${f_size}px] space-y-2`}>
      <Intro_out/>
      <Education_out/>
      <Skills_out/>
      <Projects_out/>
    </div>
    
    
    
    </>
  )
}

export default OutputGroup;
