import { ModeToggle } from "@/components/ui/ThemeToggle";

import Print from "./modules/print";
import { Link } from "react-router-dom";
import Fullscreen from "./modules/fullScreen";

function TopBar() {
  return (
    <div className="border-b h-12 flex items-center justify-between px-2">
      <Link to="/resume-builder/">
        <h1 className="font-black ml-2">
          projectRB<span className="italic font-normal text-xs">(beta)</span>
        </h1>
      </Link>
      <div className="flex items-center justify-center gap-1">
        <Print />
        <Fullscreen/>
        <ModeToggle />
      </div>
    </div>
  );
}

export default TopBar;
