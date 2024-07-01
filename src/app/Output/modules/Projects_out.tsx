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
      <div id="projects" className="px-5 py-3 text-xs pb-0 dark:text-white">
        <h1 className="font-semibold tracking-tight">PROJECTS</h1>
        <hr className="border-black dark:border-white border-t" />
        <div id="part_container" className="space-y-1">
        {/* BREAK */}

        <div id="part" className="mx-2">
          <table className="w-full">
            <tr className="font-semibold">
              <td>
                <a href={projects.link1} target="_blank">
                  {projects.title1} <ExternalLinkIcon className="inline" />
                </a>
              </td>
              <td align="right">{projects.duration1}</td>
            </tr>

            <tr>
              <td colSpan={2}>{projects.desc1}</td>
            </tr>

            <tr>
              <td colSpan={2}>
                <div className="px-2">
                  <li>{projects.feature1_1}</li>
                  <li>{projects.feature1_2}</li>
                  <li>{projects.feature1_3}</li>
                </div>
              </td>
            </tr>
            {projects.techStack1 ? (
              <tr>
                <td className="px-2">
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
              <td>
                <a href={projects.link1} target="_blank">
                  {projects.title1} <ExternalLinkIcon className="inline" />
                </a>
              </td>
              <td align="right">{projects.duration1}</td>
            </tr>

            <tr>
              <td colSpan={2}>{projects.desc1}</td>
            </tr>

            <tr>
              <td colSpan={2}>
                <div className="px-2">
                  <li>{projects.feature1_1}</li>
                  <li>{projects.feature1_2}</li>
                  <li>{projects.feature1_3}</li>
                </div>
              </td>
            </tr>
            {projects.techStack1 ? (
              <tr>
                <td className="px-2">
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
              <td>
                <a href={projects.link1} target="_blank">
                  {projects.title1} <ExternalLinkIcon className="inline" />
                </a>
              </td>
              <td align="right">{projects.duration1}</td>
            </tr>

            <tr>
              <td colSpan={2}>{projects.desc1}</td>
            </tr>

            <tr>
              <td colSpan={2}>
                <div className="px-2">
                  <li>{projects.feature1_1}</li>
                  <li>{projects.feature1_2}</li>
                  <li>{projects.feature1_3}</li>
                </div>
              </td>
            </tr>
            {projects.techStack1 ? (
              <tr>
                <td className="px-2">
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
