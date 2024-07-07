import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonIcon } from "@radix-ui/react-icons";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";
import Intro from "./modules/intro";
import Education from "./modules/education";
import Skills from "./modules/skills";
import Projects from "./modules/Projects/projects";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function InputGroup() {
  return (
    <div className="h-full">
      <Tabs defaultValue="projects" className="p-3 border-b h-full">
        <TabsList className="w-full p-2 h-[50px] rounded-sm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-[85px] h-full">
                <TabsTrigger value="intro" className="w-full h-full">
                  <PersonIcon className="w-5 h-5" />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Introduction</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="w-[85px] h-full">
                <TabsTrigger value="education" className="w-full h-full">
                  <FaGraduationCap size={20} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Education</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="w-[85px] h-full">
                <TabsTrigger value="skills" className="w-full h-full">
                  <FaCode size={20} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Skills</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="w-[85px] h-full">
                <TabsTrigger value="projects" className="w-full h-full">
                  <FaBoxOpen size={20} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Projects</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="w-[85px] h-full">
                <TabsTrigger value="experience" className="w-full h-full">
                  <BiBuildingHouse size={20} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Experience</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="w-[85px] h-full">
                <TabsTrigger value="certifications" className="w-full h-full">
                  <TbCertificate size={20} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Certifications</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="w-[85px] h-full">
                <TabsTrigger value="pors" className="w-full h-full">
                  <FaTrophy size={20} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Positions of Responsibility</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </TabsList>

        <TabsContent value="intro">
          <Intro />
        </TabsContent>
        <TabsContent value="education">
          <Education />
        </TabsContent>
        <TabsContent value="skills">
          <Skills />
        </TabsContent>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
        <TabsContent value="experience"></TabsContent>
        <TabsContent value="certifications"></TabsContent>
        <TabsContent value="pors"></TabsContent>
      </Tabs>
    </div>
  );
}

export default InputGroup;
