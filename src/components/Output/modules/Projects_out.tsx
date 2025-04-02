import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import Hr from "@/components/Hr";

function Projects_out() {
  const projects = useSelector((state: RootState) => state.data.projects);
  return (
    <>
      {projects.length ? (
        <div id="projects" className="px-8 pb-0  mb-1">
          <h1 className="font-semibold tracking-tight">PROJECTS</h1>
          <Hr />
          <div id="part_container" className="space-y-1 mt-1 leading-[1.2]">
            {projects.map((project) => (
              <div key={project.id} id="part" className="mx-2">
                <table className="w-full">
                  <tbody>
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
                        <div className="ml-2 list-disc">
                          <li>{project.f1}</li>
                          <li>{project.f2}</li>
                          {project.f3 ? <li>{project.f3}</li> : null}
                          {project.f4 ? <li>{project.f4}</li> : null}
                        </div>
                      </td>
                    </tr>
                  </tbody>
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
