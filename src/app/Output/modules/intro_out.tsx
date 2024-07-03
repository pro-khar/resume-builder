import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

import { useSelector } from "react-redux";

function Intro_out() {
  const intro = useSelector((state) => state.intro);
  return (
    <>
      <div
        id="header"
        className={`bg-gray-200 dark:bg-gray-500 text-black dark:text-white py-8 px-8 flex flex-nowrap gap-4 border-b border-black dark:border-white border-dashed`}
      >
        {intro.picture ? (
          <img className="border-black border w-[80px]" src={intro.picture} />
        ) : null}

        {intro.picture ? (
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-4xl tracking-tight">{intro.name}</h1>
            <hr className="border-black border-t dark:border-white" />
            <div className="flex justify-between">
              <div id="span_container" className="flex flex-col">
                <a className="" target="_blank" href={`mailto:${intro.email}`}>
                  <FaEnvelope className="inline" /> {intro.email}
                </a>
                <a className="" target="_blank" href={`${intro.github}`}>
                  <FaGithub className="inline" /> {intro.github}
                </a>
                <a className="" target="_blank" href={`${intro.linkedin}`}>
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
                <a className="" target="_blank" href={`tel:${intro.phone}`}>
                  <FaPhone className="inline" /> {intro.phone}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-4xl text-center tracking-tight">
              {intro.name}
            </h1>
            <hr className="border-black border-t dark:border-white" />
            <div id="span_container" className="flex gap-x-2 flex-wrap justify-center">
              <a className="flex items-center gap-1" target="_blank" href={`mailto:${intro.email}`}>
                <FaEnvelope className="" /> {intro.email}
              </a>
              <a className="flex items-center gap-1" target="_blank" href={`${intro.github}`}>
                <FaGithub className="" /> {intro.github}
              </a>
              <a className="flex items-center gap-1" target="_blank" href={`${intro.linkedin}`}>
                <FaLinkedin className="" /> {intro.linkedin}
              </a>
              <a
                className="flex items-center gap-1"
                target="none"
                href={`https://www.google.com/maps/search/?api=1&query=${intro.address}`}
              >
                <IoLocationSharp className="" /> {intro.address}
              </a>
              <a className="flex items-center gap-1" target="_blank" href={`tel:${intro.phone}`}>
                <FaPhone className="" /> {intro.phone}
              </a>
            </div>
          </div>
        )}
      </div>
      {intro.summary ? (
        <div id="plain-container" className=" px-8 py-4 pb-0 dark:text-white">
          <h1 className="font-semibold tracking-tight">SUMMARY</h1>
          <hr className="border-black border-t dark:border-white" />
          <p className="">{intro.summary}</p>
        </div>
      ) : null}
    </>
  );
}
export default Intro_out;
