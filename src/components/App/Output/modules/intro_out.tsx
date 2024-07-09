import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function Intro_out() {
  const intro = useSelector((state: RootState) => state.intro);
  return (
    <>
      <div
        id="header"
        className={`bg-gray-200 dark:bg-gray-500 text-black dark:text-white py-8 px-8 flex flex-nowrap gap-4 border-b border-black dark:border-white border-dashed `}
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
              </div>
              <div id="span_container" className="flex flex-col">
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
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-4xl text-center tracking-tight">
              {intro.name}
            </h1>
            <hr className="border-black border-t dark:border-white" />
            <div
              id="span_container"
              className="flex gap-x-4 flex-wrap justify-center"
            >
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
