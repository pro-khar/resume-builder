import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";

function Intro_out() {
  const intro = useSelector((state: RootState) => state.data.intro);
  // console.log("Intro from Output: ", intro);
  return (
    <>
      <div
        id="header"
        className={`bg-gray-200 dark:bg-gray-500 text-black dark:text-white py-8 px-8 flex flex-nowrap gap-4 border-b border-black dark:border-white border-dashed mb-4`}
      >
        {intro.picture ? (
          <img className="border-black border w-[80px]" src={intro.picture} />
        ) : null}

        <div className="w-full flex flex-col gap-1">
          <h1 className="font-bold text-4xl tracking-tight">{intro.name}</h1>
          <p className="mt-[-5px]">{intro.profile}</p>
          <hr className="border-black border-t dark:border-white" />
          <div className="flex justify-between">
            <div id="span_container" className="flex flex-col leading-[1.2]">
              {intro.email && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`mailto:${intro.email}`}
                >
                  <FaEnvelope className="" />{" "}
                  <p className="text-zinc-700 dark:text-zinc-100">
                    {intro.email}
                  </p>
                </a>
              )}
              {intro.github && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`${intro.github}`}
                >
                  <FaGithub className="" />{" "}
                  <p className="text-zinc-700 dark:text-zinc-100">
                    {intro.github}
                  </p>
                </a>
              )}
              {intro.linkedin && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`${intro.linkedin}`}
                >
                  <FaLinkedin className="" />{" "}
                  <p className="text-zinc-700 dark:text-zinc-100">
                    {intro.linkedin}
                  </p>
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
                  <p className="text-zinc-700 dark:text-zinc-100">
                    {intro.address}
                  </p>
                </a>
              )}
              {intro.phone && (
                <a
                  className="flex items-center gap-1"
                  target="_blank"
                  href={`tel:${intro.phone}`}
                >
                  <FaPhone className="" />{" "}
                  <p className="text-zinc-700 dark:text-zinc-100">
                    {intro.phone}
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {intro.summary ? (
        <div id="plain-container" className=" px-8 mb-1 dark:text-white">
          <h1 className="font-semibold tracking-tight">SUMMARY</h1>
          <hr className="border-black border-t dark:border-white" />
          <p className="leading-[1.2] mt-1">{intro.summary}</p>
        </div>
      ) : null}
    </>
  );
}
export default Intro_out;
