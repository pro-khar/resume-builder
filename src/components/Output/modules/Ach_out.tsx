import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import Hr from "@/components/Hr";

function Experience_out() {
  const achievements = useSelector((state: RootState) => state.data.ach);
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
                        <a href={ach.link} target="_blank">
                          {ach.position} <ExternalLinkIcon className="inline" />
                        </a>
                      ) : (
                        ach.position
                      )}

                      <p className="font-normal"> - </p>
                      <p className="font-normal italic">{ach.orgName}</p>
                    </td>
                    <td className="text-right py-[0.001em]">{ach.duration}</td>
                  </tr>

                  {ach.d1 ? (
                    <tr>
                      <td colSpan={2} className="py-[0.001em]">
                        <div className="px-2">
                          <li>{ach.d1}</li>
                          <li>{ach.d2}</li>
                          {ach.d3 ? <li>{ach.d3}</li> : null}
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
