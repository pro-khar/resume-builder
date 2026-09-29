import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { useAppSelector } from "@/redux-beta/hooks";
import Hr from "@/components/Hr";
import { RichText } from "@/components/RichText/RichText";

function Experience_out() {
  const experience = useAppSelector((state) => state.data.experience);
  const experienceFormat = useAppSelector((state) => state.ui.experienceFormat);
  return (
    <>
      {experience.length ? (
        <div id="experience" className="px-8 pb-0  mb-1">
          <h1 className="font-semibold tracking-tight">EXPERIENCE</h1>
          <Hr />
          <div id="part_container" className="space-y-1 mt-1 leading-[1.2]">
            {experienceFormat === "long"
              ? experience.map((exp) => (
                  <div key={exp.id} id="part" className="mx-2">
                    <table className="w-full">
                      <tbody>
                        <tr className="font-semibold">
                          <td className="py-[0.001em] flex gap-2">
                            {exp.link ? (
                              <a href={exp.link}>
                                <RichText html={exp.orgName} />{" "}
                                <ExternalLinkIcon className="inline" />
                              </a>
                            ) : (
                              <RichText html={exp.orgName} />
                            )}

                            <p className="font-normal"> - </p>
                            <p className="font-normal italic">
                              <RichText html={exp.desig} />
                            </p>
                          </td>
                          <td className="text-right py-[0.001em]">
                            <RichText html={exp.duration} />
                          </td>
                        </tr>

                        {(exp.groups ?? []).map((group, g) => (
                          <tr key={g}>
                            <td colSpan={2} className="pl-2">
                              <RichText as="p" className="font-medium" html={group.desc} />
                              <div className="flex flex-col pl-2">
                                {group.points.map((point, i) => (
                                  <li key={i}>
                                    <RichText html={point} />
                                  </li>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              : experience.map((exp) => (
                  <div key={exp.id} id="part" className="mx-2">
                    <table className="w-full">
                      <tbody>
                        <tr className="font-semibold">
                          <td className="py-[0.001em] flex gap-2">
                            {exp.link ? (
                              <a href={exp.link}>
                                <RichText html={exp.orgName} />{" "}
                                <ExternalLinkIcon className="inline" />
                              </a>
                            ) : (
                              <RichText html={exp.orgName} />
                            )}

                            <p className="font-normal"> - </p>
                            <p className="font-normal italic">
                              <RichText html={exp.desig} />
                            </p>
                          </td>
                          <td className="text-right py-[0.001em]">
                            <RichText html={exp.duration} />
                          </td>
                        </tr>

                        <tr>
                          <td colSpan={2} className="py-[0.001em]">
                            <div className="ml-2 list-disc">
                              {(exp.points ?? []).map((point, i) => (
                                <li key={i}>
                                  <RichText html={point} />
                                </li>
                              ))}
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td colSpan={2} className="py-[0.001em] pl-2">
                            <span className="font-medium ">Tech Stack :</span>
                            <span className="ml-2 text-zinc-600">
                              <RichText html={exp.techStack} />
                            </span>
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

export default Experience_out;
