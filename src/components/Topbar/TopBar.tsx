import { ModeToggle } from "@/components/ui/ThemeToggle";

import Print from "./modules/print";
import { Link } from "react-router-dom";
import Fullscreen from "./modules/fullScreen";

import logo from "../../assets/YARB.svg";
import logo_dark from "../../assets/YARB_dark.svg";
import { useTheme } from "../ui/theme-provider";

function TopBar() {
  const {theme} = useTheme();
  return (
    <div className="border-b h-12 flex items-center justify-between px-2">
      <Link to="/resume-builder/">
        <img
          src={theme === "dark" ? logo_dark : logo}
          alt="YARB"
          className="w-16"
        />
      </Link>
      <div className="flex items-center justify-center gap-1">
        <Print />
        <Fullscreen />
        <ModeToggle />
      </div>
    </div>
  );
}

export default TopBar;
