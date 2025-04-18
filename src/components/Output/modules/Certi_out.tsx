import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import Hr from "@/components/Hr";

function Certi_out() {
  const certificate = useSelector(
    (state: RootState) => state.data.certifications
  );
  return (
    <>
      {certificate.length ? (
        <div id="experience" className="px-8 pb-0  mb-1">
          <h1 className="font-semibold tracking-tight">CERTIFICATIONS</h1>
          <Hr />
          <div id="part_container" className="space-y-1 mt-1 leading-[1]">
            {certificate.map((cer) => (
              <div key={cer.id} id="part" className="mx-8 list-item">
                <table className="w-full">
                  <tr className="font-semibold">
                    <td className="py-[0.001em] flex gap-2">
                      {cer.link ? (
                        <a href={cer.link} target="_blank">
                          {cer.name} <ExternalLinkIcon className="inline" />
                        </a>
                      ) : (
                        cer.name
                      )}

                      <p className="font-normal"> - </p>
                      <p className="font-normal italic">{cer.provider}</p>
                    </td>
                    <td className="text-right py-[0.001em]">{cer.duration}</td>
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

export default Certi_out;
