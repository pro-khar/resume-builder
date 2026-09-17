import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useAppSelector } from "@/redux-beta/hooks";
import Hr from "@/components/Hr";
import { RichText } from "@/components/RichText/RichText";

function Projects_out() {
  const projects = useAppSelector((state) => state.data.projects);
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
                          <a href={project.link}>
                            <RichText html={project.title} />{" "}
                            <ExternalLinkIcon className="inline" />
                          </a>
                        ) : (
                          <RichText html={project.title} />
                        )}
                        {project.techStack ? (
                          <p className="font-normal">|</p>
                        ) : null}
                        {project.techStack ? (
                          <RichText
                            as="p"
                            className="font-normal italic"
                            html={project.techStack}
                          />
                        ) : null}
                      </td>
                      <td className="text-right py-[0.001em]">
                        <RichText html={project.duration} />
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={2} className="py-[0.001em]">
                        <RichText html={project.desc} />
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={2} className="py-[0.001em]">
                        <div className="ml-2 list-disc">
                          <li>
                            <RichText html={project.f1} />
                          </li>
                          <li>
                            <RichText html={project.f2} />
                          </li>
                          {project.f3 ? (
                            <li>
                              <RichText html={project.f3} />
                            </li>
                          ) : null}
                          {project.f4 ? (
                            <li>
                              <RichText html={project.f4} />
                            </li>
                          ) : null}
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
