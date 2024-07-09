import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { useSelector } from "react-redux";
import { RootState } from "@/components/App/store";

function Experience_out() {
  const experience = useSelector((state: RootState) => state.experience.exps);
  return (
    <>
      {experience.length ? (
        <div id="experience" className="px-8 pb-0 dark:text-white">
          <h1 className="font-semibold tracking-tight">Experience</h1>
          <hr className="border-black dark:border-white border-t" />
          <div id="part_container" className="space-y-1 mt-1 leading-[1.2]">
            {experience.map((exp) => (
              <div key={exp.id} id="part" className="mx-2">
                <table className="w-full">
                  <tr className="font-semibold">
                    <td className="py-[0.001em] flex gap-2">
                      {exp.link ? (
                        <a href={exp.link} target="_blank">
                          {exp.orgName} <ExternalLinkIcon className="inline" />
                        </a>
                      ) : (
                        exp.orgName
                      )}

                      <p className="font-normal"> - </p>
                      <p className="font-normal italic">{exp.desig}</p>
                    </td>
                    <td className="text-right py-[0.001em]">{exp.duration}</td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="py-[0.001em]">
                      <div className="px-2">
                        <li>{exp.t1}</li>
                        <li>{exp.t2}</li>
                        {exp.t3 ? <li>{exp.t3}</li> : null}
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

export default Experience_out;
