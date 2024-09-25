import { ModeToggle } from "@/components/ui/ThemeToggle";
import { FullScreen } from "./modules/fullScreen";
import Print from "./modules/print";
import { Link } from "react-router-dom";

import UploadJSON from "./modules/UploadJSON";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadStateAsJSON } from "@/redux/store";

function TopBar() {
  return (
    <div className="border-b h-12 flex items-center justify-between px-2">
      <Link to="/resume-builder/">
        <h1 className="font-black ml-2">
          projectRB<span className="italic font-normal text-xs">(beta)</span>
        </h1>
      </Link>
      <div className="flex items-center justify-center gap-1">
        <UploadJSON />
        <Button onClick={() => downloadStateAsJSON()}>
          JSON
          <Download className="w-5 ml-2" />
        </Button>
        <Print />
        <FullScreen />
        <ModeToggle />
      </div>
    </div>
  );
}

export default TopBar;
