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
import { useDispatch, useSelector } from "react-redux";
import { setLastOpenTab } from "@/redux-beta/dataSlice2";
import { RootState } from "@/redux-beta/store";
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
  const dispatch = useDispatch();
  const lastOpenTab = useSelector(
    (state: RootState) => state.data2.lastOpenTab
  );
  const [tab, setTab] = useState(lastOpenTab);

  return (
    <div className="h-full">
      <Tabs
        defaultValue={tab}
        className="p-3 border-b h-full"
        onValueChange={(value) => {
          console.log(value);
          dispatch(setLastOpenTab(value));
        }}
      >
        <TabsList className="w-full p-2 h-[50px] rounded-sm">
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
              value === "intro" || value === "education"
                ? ""
                : "h-[780px] border-b overflow-auto"
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
