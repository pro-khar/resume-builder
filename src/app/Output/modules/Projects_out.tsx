import {
  ExternalLinkIcon,
  Link1Icon,
  Link2Icon,
  LinkNone1Icon,
} from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

function Projects_out() {
  const projects = useSelector((state:RootState) => state.projects);
  return (
    <>
      <div id="projects" className="px-8 pb-0 dark:text-white">
        <h1 className="font-semibold tracking-tight">PROJECTS</h1>
        <hr className="border-black dark:border-white border-t" />
        <div id="part_container" className="space-y-1 mt-1 leading-[1.2]">
          {/* Project 1 */}

          {projects.title1?(<div id="part" className="mx-2">
            <table className="w-full">
              <tr className="font-semibold">
                <td className="py-[0.001em] flex gap-2">
                  <a href={projects.link1} target="_blank">
                    {projects.title1} <ExternalLinkIcon className="inline" />
                  </a>
                  <p className="font-normal">|</p>
                  <p className="font-normal italic">{projects.techStack1}</p>
                </td>
                <td className="text-right py-[0.001em]">
                  {projects.duration1}
                </td>
              </tr>

              <tr>
                <td colSpan={2} className="py-[0.001em]">
                  {projects.desc1}
                </td>
              </tr>

              <tr>
                <td colSpan={2} className="py-[0.001em]">
                  <div className="px-2">
                    <li>{projects.feature1_1}</li>
                    <li>{projects.feature1_2}</li>
                    {projects.feature1_3 ? (
                      <li>{projects.feature1_3}</li>
                    ) : null}
                  </div>
                </td>
              </tr>
            </table>
          </div>):null}

          {/* Project 2 */}

          {projects.title2 ? (
            <div id="part" className="mx-2">
              <table className="w-full">
                <tr className="font-semibold">
                  <td className="py-[0.001em] flex gap-2">
                    <a href={projects.link2} target="_blank">
                      {projects.title2} <ExternalLinkIcon className="inline" />
                    </a>
                    <p className="font-normal">|</p>
                    <p className="font-normal italic">{projects.techStack2}</p>
                  </td>
                  <td className="text-right py-[0.001em]">
                    {projects.duration2}
                  </td>
                </tr>

                <tr>
                  <td colSpan={2} className="py-[0.001em]">
                    {projects.desc2}
                  </td>
                </tr>

                <tr>
                  <td colSpan={2} className="py-[0.001em]">
                    <div className="px-2">
                      <li style={{ padding: "0.001em" }}>
                        {projects.feature2_1}
                      </li>
                      <li style={{ padding: "0.001em" }}>
                        {projects.feature2_2}
                      </li>
                      {projects.feature2_3 ? (
                        <li style={{ padding: "0.001em" }}>
                          {projects.feature2_3}
                        </li>
                      ) : null}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          ) : null}

          {/* Project 3 */}

          {projects.title3 ? (
            <div id="part" className="mx-2">
              <table className="w-full">
                <tr className="font-semibold">
                  <td className="py-[0.001em] flex gap-2">
                    <a href={projects.link3} target="_blank">
                      {projects.title3} <ExternalLinkIcon className="inline" />
                    </a>
                    <p className="font-normal">|</p>
                    <p className="font-normal italic">{projects.techStack3}</p>
                  </td>
                  <td className="text-right py-[0.001em]">
                    {projects.duration3}
                  </td>
                </tr>

                <tr>
                  <td colSpan={2} className="py-[0.001em]">
                    {projects.desc3}
                  </td>
                </tr>

                <tr>
                  <td colSpan={2} className="py-[0.001em]">
                    <div className="px-2">
                      <li style={{ padding: "0.001em" }}>
                        {projects.feature3_1}
                      </li>
                      <li style={{ padding: "0.001em" }}>
                        {projects.feature3_2}
                      </li>
                      {projects.feature3_3 ? (
                        <li style={{ padding: "0.001em" }}>
                          {projects.feature3_3}
                        </li>
                      ) : null}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Projects_out;
