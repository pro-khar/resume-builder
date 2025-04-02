import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import Hr from "@/components/Hr";

function Intro_out() {
  const intro = useSelector((state: RootState) => state.data.intro);
  const looks = useSelector((state: RootState) => state.looks);

  return (
    <>
      <div
        id="header"
        className={` text-black py-8 px-8 flex flex-nowrap gap-4 border-b border-black  border-dashed mb-4 rounded-t-md transition-all duration-300`}
        style={{ backgroundColor: looks.headerColor }}
      >
        {intro.picture && looks.imageEnable ? (
          <img
            className="border-black border aspect-auto w-[100px] rounded"
            src={intro.picture}
          />
        ) : null}

        <div className="w-full flex flex-col gap-1">
          <h1 className="font-bold text-4xl tracking-tight">{intro.name}</h1>
          <p className="mt-[-5px]">{intro.profile}</p>
          <hr className="border-black border-t " />
          <div className="flex justify-between">
            <div id="span_container" className="flex flex-col leading-[1.2]">
              {intro.email && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`mailto:${intro.email}`}
                >
                  <FaEnvelope className="" />{" "}
                  <p className="text-zinc-700 ">{intro.email}</p>
                </a>
              )}
              {intro.github && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`${intro.github}`}
                >
                  <FaGithub className="" />{" "}
                  <p className="text-zinc-700 ">{intro.github}</p>
                </a>
              )}
              {intro.linkedin && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`${intro.linkedin}`}
                >
                  <FaLinkedin className="" />{" "}
                  <p className="text-zinc-700 ">{intro.linkedin}</p>
                </a>
              )}
            </div>
            <div id="span_container" className="flex flex-col">
              {intro.address && (
                <a
                  className="flex items-center gap-1"
                  target="none"
                  href={`https://www.google.com/maps/search/?api=1&query=${intro.address}`}
                >
                  <IoLocationSharp className="" />{" "}
                  <p className="text-zinc-700 ">{intro.address}</p>
                </a>
              )}
              {intro.phone && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`tel:${intro.phone}`}
                >
                  <FaPhone className="" />{" "}
                  <p className="text-zinc-700 ">{intro.phone}</p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {intro.summary ? (
        <div id="plain-container" className=" px-8 mb-1 ">
          <h1 className="font-semibold tracking-tight">SUMMARY</h1>
          <Hr/>
          <p className="leading-[1.2] mt-1">{intro.summary}</p>
        </div>
      ) : null}
    </>
  );
}
export default Intro_out;
