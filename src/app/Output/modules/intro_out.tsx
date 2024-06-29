import { useState, useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

import { useSelector } from "react-redux";

function Intro_out() {
  const intro = useSelector((state) => state.intro);
  return (
    <>
      <div
        id="header"
        className="bg-gray-200 text-black h-[134px] py-5 px-5 flex flex-nowrap gap-4 border-b border-black border-dashed"
      >
        <img
          className="border-black border"
          src={""}
          style={{ minWidth: "70px", maxWidth: "70px" }}
        />
        <div className="w-full flex flex-col gap-1 max-h-auto">
          <h1 className="font-bold text-3xl tracking-tight">{intro.name}</h1>
          <hr className="border-black border-t" />
          <div className="flex justify-between">
            <div id="span_container" className="flex flex-col">
              <a
                className="text-xs"
                target="_blank"
                href={`mailto:${intro.email}`}
              >
                <FaEnvelope className="inline" />{" "}
                {intro.email}
              </a>
              <a
                className="text-xs"
                target="_blank"
                href={`${intro.github}`}
              >
                <FaGithub className="inline" />{" "}
                {intro.github}
              </a>
              <a
                className="text-xs"
                target="_blank"
                href={`${intro.linkedin}`}
              >
                <FaLinkedin className="inline" /> {intro.linkedin}
              </a>
            </div>
            <div id="span_container" className="flex flex-col">
              <a
                className="text-xs"
                target="none"
                href={`https://www.google.com/maps/search/?api=1&query=${intro.address}`}
              >
                <IoLocationSharp className="inline" /> {intro.address}
              </a>
              <a
                className="text-xs"
                target="_blank"
                href={`tel:${intro.phone}`}
              >
                <FaPhone className="inline" /> {intro.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Intro_out;
