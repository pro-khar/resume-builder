import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useAppSelector } from "@/redux-beta/hooks";
import Hr from "@/components/Hr";
import { RichText } from "@/components/RichText/RichText";

function Experience_out() {
  const achievements = useAppSelector((state) => state.data.ach);
  return (
    <>
      {achievements.length ? (
        <div id="experience" className="px-8 pb-0  mb-1">
          <h1 className="font-semibold tracking-tight">
            ACHIEVEMENTS / POSITIONS OF RESPONSIBILITY
          </h1>
          <Hr />
          <div id="part_container" className="space-y-1 mt-1 leading-[1.2]">
            {achievements.map((ach) => (
              <div key={ach.id} id="part" className="mx-2">
                <table className="w-full">
                  <tr className="font-semibold">
                    <td className="py-[0.001em] flex gap-2">
                      {ach.link ? (
                        <a href={ach.link}>
                          <RichText html={ach.position} />{" "}
                          <ExternalLinkIcon className="inline" />
                        </a>
                      ) : (
                        <RichText html={ach.position} />
                      )}

                      <p className="font-normal"> - </p>
                      <p className="font-normal italic">
                        <RichText html={ach.orgName} />
                      </p>
                    </td>
                    <td className="text-right py-[0.001em]">
                      <RichText html={ach.duration} />
                    </td>
                  </tr>

                  {ach.d1 ? (
                    <tr>
                      <td colSpan={2} className="py-[0.001em]">
                        <div className="px-2">
                          <li>
                            <RichText html={ach.d1} />
                          </li>
                          <li>
                            <RichText html={ach.d2} />
                          </li>
                          {ach.d3 ? (
                            <li>
                              <RichText html={ach.d3} />
                            </li>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  ) : null}
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
