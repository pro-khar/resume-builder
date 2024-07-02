import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

import { useSelector } from "react-redux";

function Intro_out() {
  const intro = useSelector((state) => state.intro);
  return (
    <>
      <div
        id="header"
        className={`bg-gray-200 dark:bg-gray-500 text-black dark:text-white py-3 px-6 flex flex-nowrap gap-4 border-b border-black dark:border-white border-dashed`}
      >
        <img
          className="border-black border w-[80px]"
          src={""}
          
        />
        <div className="w-full flex flex-col gap-1 max-h-auto">
          <h1 className="font-bold text-3xl tracking-tight">{intro.name}</h1>
          <hr className="border-black border-t dark:border-white" />
          <div className="flex justify-between">
            <div id="span_container" className="flex flex-col">
              <a
                className=""
                target="_blank"
                href={`mailto:${intro.email}`}
              >
                <FaEnvelope className="inline" />{" "}
                {intro.email}
              </a>
              <a
                className=""
                target="_blank"
                href={`${intro.github}`}
              >
                <FaGithub className="inline" />{" "}
                {intro.github}
              </a>
              <a
                className=""
                target="_blank"
                href={`${intro.linkedin}`}
              >
                <FaLinkedin className="inline" /> {intro.linkedin}
              </a>
            </div>
            <div id="span_container" className="flex flex-col">
              <a
                className=""
                target="none"
                href={`https://www.google.com/maps/search/?api=1&query=${intro.address}`}
              >
                <IoLocationSharp className="inline" /> {intro.address}
              </a>
              <a
                className=""
                target="_blank"
                href={`tel:${intro.phone}`}
              >
                <FaPhone className="inline" /> {intro.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      {intro.summary?<div id = "plain-container" className="px-6 py-2 pb-0 dark:text-white">
                <h1 className="font-semibold tracking-tight">SUMMARY</h1>
                <hr className="border-black border-t dark:border-white"/>
                <p className="leading-tight">{intro.summary}</p>
            </div>:null}
    </>
  );
}
export default Intro_out;
