import React from "react";
import { FaFaceSadCry } from "react-icons/fa6";
import { PiMonitorDuotone, PiLaptopDuotone } from "react-icons/pi";

function Morescreen() {
  return (
    <div className="md:hidden xl:hidden 2xl:hidden flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <FaFaceSadCry className="text-[50px]" />
        <p className="text-sm">Needs more screen</p>
        <div className="text-3xl flex gap-2 absolute bottom-10">
          <PiMonitorDuotone/>
          <PiLaptopDuotone/>
        </div>
      </div>
    </div>
  );
}

export default Morescreen;
