import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonIcon } from "@radix-ui/react-icons";
import { FaGraduationCap, FaCode, FaBoxOpen, FaTrophy } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import Intro from "./modules/Intro/intro";
import Education from "./modules/Education/education";
import Skills from "./modules/Skills/skills";
import Projects from "./modules/Projects/projects";
import Experience from "./modules/Experience/experience";
import Certifications from "./modules/Certifications/Certifications";
import Achievements from "./modules/Achievements/achievements";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { setLastOpenTab } from "@/redux-beta/uiSlice";
import { useState } from "react";

const TAB_CONFIG = [
  {
    value: "intro",
    icon: PersonIcon,
    component: Intro,
    iconSize: 5,
    useIconClass: true,
  },
  {
    value: "experience",
    icon: BiBuildingHouse,
    component: Experience,
    iconSize: 20,
  },
  {
    value: "projects",
    icon: FaBoxOpen,
    component: Projects,
    iconSize: 20,
  },
  {
    value: "skills",
    icon: FaCode,
    component: Skills,
    iconSize: 20,
  },
  {
    value: "education",
    icon: FaGraduationCap,
    component: Education,
    iconSize: 20,
  },
  {
    value: "certifications",
    icon: TbCertificate,
    component: Certifications,
    iconSize: 20,
  },
  {
    value: "pors",
    icon: FaTrophy,
    component: Achievements,
    iconSize: 20,
  },
];

function InputGroup() {
  const dispatch = useAppDispatch();
  const lastOpenTab = useAppSelector((state) => state.ui.lastOpenTab);
  const [tab, setTab] = useState(lastOpenTab);

  return (
    <div className="h-full overflow-hidden">
      <Tabs
        defaultValue={tab}
        className="p-3 border-b h-full flex flex-col overflow-hidden"
        onValueChange={(value) => {
          dispatch(setLastOpenTab(value));
        }}
      >
        <TabsList className="w-full p-2 h-[50px] rounded-sm shrink-0">
          {TAB_CONFIG.map(({ value, icon: Icon, iconSize, useIconClass }) => (
            <TabsTrigger key={value} value={value} className="w-full h-full">
              {useIconClass ? (
                <Icon className={`w-${iconSize} h-${iconSize}`} />
              ) : (
                <Icon size={iconSize} />
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {TAB_CONFIG.map(({ value, component: Component }) => (
          <TabsContent
            key={value}
            value={value}
            className={`${
              value === "intro" ? "" : "flex-1 min-h-0 border-b overflow-auto"
            } `}
          >
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default InputGroup;
