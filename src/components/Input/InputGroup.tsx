import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonIcon } from "@radix-ui/react-icons";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";
import Intro from "./modules/Intro/intro";
import Education from "./modules/Education/education";
import Skills from "./modules/Skills/skills";
import Projects from "./modules/Projects/projects";
import Experience from "./modules/Experience/experience";
import Certifications from "./modules/Certifications/Certifications";
import Achievements from "./modules/Achievements/achievements";

function InputGroup() {
  return (
    <div className="h-full">
      <Tabs defaultValue="pors" className="p-3 border-b h-full">
        <TabsList className="w-full p-2 h-[50px] rounded-sm">
          <TabsTrigger value="intro" className="w-full h-full">
            <PersonIcon className="w-5 h-5" />
          </TabsTrigger>
          <TabsTrigger value="experience" className="w-full h-full">
            <BiBuildingHouse size={20} />
          </TabsTrigger>
          <TabsTrigger value="projects" className="w-full h-full">
            <FaBoxOpen size={20} />
          </TabsTrigger>
          <TabsTrigger value="skills" className="w-full h-full">
            <FaCode size={20} />
          </TabsTrigger>
          <TabsTrigger value="education" className="w-full h-full">
            <FaGraduationCap size={20} />
          </TabsTrigger>
          <TabsTrigger value="certifications" className="w-full h-full">
            <TbCertificate size={20} />
          </TabsTrigger>
          <TabsTrigger value="pors" className="w-full h-full">
            <FaTrophy size={20} />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="intro" className="h-[780px] border-b overflow-auto">
          <Intro />
        </TabsContent>
        <TabsContent
          value="education"
          className="h-[780px]  overflow-auto"
        >
          <Education />
        </TabsContent>
        <TabsContent
          value="skills"
          className="h-[780px] border-b overflow-auto"
        >
          <Skills />
        </TabsContent>
        <TabsContent
          value="projects"
          className="h-[780px] border-b overflow-auto"
        >
          <Projects />
        </TabsContent>
        <TabsContent
          value="experience"
          className="h-[780px] border-b overflow-auto"
        >
          <Experience />
        </TabsContent>
        <TabsContent
          value="certifications"
          className="h-[780px] border-b overflow-auto"
        >
          <Certifications />
        </TabsContent>
        <TabsContent value="pors" className="h-[780px] border-b overflow-auto">
          <Achievements />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default InputGroup;
