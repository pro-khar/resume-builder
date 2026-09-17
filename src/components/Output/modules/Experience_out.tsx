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

                        <tr>
                          <td colSpan={2} className="pl-2">
                            <RichText as="p" className="font-medium" html={exp.d1} />
                            <div className="flex flex-col pl-2">
                              <li>
                                <RichText html={exp.t1_1} />
                              </li>
                              <li>
                                <RichText html={exp.t1_2} />
                              </li>
                              {exp.t1_3 ? (
                                <li>
                                  <RichText html={exp.t1_3} />
                                </li>
                              ) : null}
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td colSpan={2} className="pl-2">
                            <RichText as="p" className="font-medium" html={exp.d2} />
                            <div className="flex flex-col pl-2">
                              <li>
                                <RichText html={exp.t2_1} />
                              </li>
                              <li>
                                <RichText html={exp.t2_2} />
                              </li>
                              {exp.t2_3 ? (
                                <li>
                                  <RichText html={exp.t2_3} />
                                </li>
                              ) : null}
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td colSpan={2} className="pl-2">
                            <RichText as="p" className="font-medium" html={exp.d3} />
                            <div className="flex flex-col pl-2">
                              <li>
                                <RichText html={exp.t3_1} />
                              </li>
                              <li>
                                <RichText html={exp.t3_2} />
                              </li>
                              {exp.t3_3 ? (
                                <li>
                                  <RichText html={exp.t3_3} />
                                </li>
                              ) : null}
                            </div>
                          </td>
                        </tr>
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
                              <li>
                                <RichText html={exp.t1} />
                              </li>
                              <li>
                                <RichText html={exp.t2} />
                              </li>
                              {exp.t3 ? (
                                <li>
                                  <RichText html={exp.t3} />
                                </li>
                              ) : null}
                              {exp.t4 ? (
                                <li>
                                  <RichText html={exp.t4} />
                                </li>
                              ) : null}
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
