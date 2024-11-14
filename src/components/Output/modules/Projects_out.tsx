import {
  ExternalLinkIcon,
  Link1Icon,
  Link2Icon,
  LinkNone1Icon,
} from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";

function Projects_out() {
  const projects = useSelector((state: RootState) => state.data.projects);
  return (
    <>
      {projects.length ? (
        <div id="projects" className="px-8 pb-0 dark:text-white mb-1">
          <h1 className="font-semibold tracking-tight">PROJECTS</h1>
          <hr className="border-black dark:border-white border-t" />
          <div id="part_container" className="space-y-1 mt-1 leading-[1.2]">
            {projects.map((project) => (
              <div key={project.id} id="part" className="mx-2">
                <table className="w-full">
                  <tr className="font-semibold">
                    <td className="py-[0.001em] flex gap-2">
                      {project.link ? (
                        <a href={project.link} target="_blank">
                          {project.title}{" "}
                          <ExternalLinkIcon className="inline" />
                        </a>
                      ) : (
                        project.title
                      )}
                      {project.techStack ? (
                        <p className="font-normal">|</p>
                      ) : null}
                      {project.techStack ? (
                        <p className="font-normal italic">
                          {project.techStack}
                        </p>
                      ) : null}
                    </td>
                    <td className="text-right py-[0.001em]">
                      {project.duration}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="py-[0.001em]">
                      {project.desc}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="py-[0.001em]">
                      <div className="px-2">
                        <li>{project.f1}</li>
                        <li>{project.f2}</li>
                        {project.f3 ? <li>{project.f3}</li> : null}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Projects_out;
