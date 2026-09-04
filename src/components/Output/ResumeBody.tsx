import Intro_out from "./modules/intro_out";
import Education_out from "./modules/education_out";
import Skills_out from "./modules/skills_out";
import Projects_out from "./modules/Projects_out";
import Experience_out from "./modules/Experience_out";
import Certi_out from "./modules/Certi_out";
import Ach_out from "./modules/Ach_out";

// Shared by the on-screen preview (OutputGroup) and the print portal
// (PrintPortal) so both stay in sync with a single source of truth.
function ResumeBody() {
  return (
    <>
      <Intro_out />
      <Experience_out />
      <Projects_out />
      <Skills_out />
      <Education_out />
      <Certi_out />
      <Ach_out />
    </>
  );
}

export default ResumeBody;
