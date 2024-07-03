import {
  ExternalLinkIcon,
  Link1Icon,
  Link2Icon,
  LinkNone1Icon,
} from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import { useSelector } from "react-redux";

function Projects_out() {
  const projects = useSelector((state) => state.projects);
  return (
    <>
      <div id="projects" className="px-8 pb-0 dark:text-white">
        <h1 className="font-semibold tracking-tight">PROJECTS</h1>
        <hr className="border-black dark:border-white border-t" />
        <div id="part_container" className="space-y-1 mt-1 leading-[1.2]">

        {/* BREAK */}
                                                                      
        <div id="part" className="mx-2">
          <table className="w-full">
            <tr className="font-semibold">
              <td className="py-[0.001em]">
                <a href={projects.link1} target="_blank">
                  {projects.title1} <ExternalLinkIcon className="inline" />
                </a>
              </td>
              <td className="text-right py-[0.001em]">{projects.duration1}</td>
            </tr>

            <tr>
              <td colSpan={2} className="py-[0.001em]">{projects.desc1}</td>
            </tr>

            <tr>
              <td colSpan={2} className="py-[0.001em]">
                <div className="px-2">
                  <li>{projects.feature1_1}</li>
                  <li>{projects.feature1_2}</li>
                  <li>{projects.feature1_3}</li>
                </div>
              </td>
            </tr>
            {projects.techStack1 ? (
              <tr>
                <td className="px-2 py-[0.001em]">
                  <span className="font-medium">Tech stack : </span>
                  {projects.techStack1}
                </td>
              </tr>
            ) : null}
          </table>
        </div>

        {/* BREAK */}

        <div id="part" className="mx-2">
          <table className="w-full">
            <tr className="font-semibold">
              <td className="py-[0.001em]">
                <a href={projects.link1} target="_blank">
                  {projects.title1} <ExternalLinkIcon className="inline" />
                </a>
              </td>
              <td className="text-right py-[0.001em]">{projects.duration1}</td>
            </tr>

            <tr>
              <td colSpan={2} className="py-[0.001em]">{projects.desc1}</td>
            </tr>

            <tr>
              <td colSpan={2} className="py-[0.001em]">
                <div className="px-2">
                  <li style={{padding:"0.001em"}}>{projects.feature1_1}</li>
                  <li style={{padding:"0.001em"}}>{projects.feature1_2}</li>
                  <li style={{padding:"0.001em"}}>{projects.feature1_3}</li>
                </div>
              </td>
            </tr>
            {projects.techStack1 ? (
              <tr>
                <td className="px-2 py-[0.001em]">
                  <span className="font-medium">Tech stack : </span>
                  {projects.techStack1}
                </td>
              </tr>
            ) : null}
          </table>
        </div>

        {/* BREAK */}

        <div id="part" className="mx-2">
          <table className="w-full">
            <tr className="font-semibold">
              <td className="py-[0.001em]">
                <a href={projects.link1} target="_blank">
                  {projects.title1} <ExternalLinkIcon className="inline" />
                </a>
              </td>
              <td className="text-right py-[0.001em]">{projects.duration1}</td>
            </tr>

            <tr>
              <td colSpan={2} className="py-[0.001em]">{projects.desc1}</td>
            </tr>

            <tr>
              <td colSpan={2} className="py-[0.001em]">
                <div className="px-2">
                  <li style={{padding:"0.001em"}}>{projects.feature1_1}</li>
                  <li style={{padding:"0.001em"}}>{projects.feature1_2}</li>
                  <li style={{padding:"0.001em"}}>{projects.feature1_3}</li>
                </div>
              </td>
            </tr>
            {projects.techStack1 ? (
              <tr>
                <td className="px-2 py-[0.001em]">
                  <span className="font-medium">Tech stack : </span>
                  {projects.techStack1}
                </td>
              </tr>
            ) : null}
          </table>
        </div>
        </div>
      </div>
    </>
  );
}

export default Projects_out;
