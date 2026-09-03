import { ModeToggle } from "@/components/ui/ThemeToggle";

import Print from "./modules/print";
import { Link } from "react-router-dom";
import Fullscreen from "./modules/fullScreen";
import AccountMenu from "./AccountMenu";

import { useTheme } from "../ui/theme-provider";

function TopBar() {
  const {theme} = useTheme();
  return (
    <div className="border-b h-12 flex items-center justify-between px-2">
      <Link to="/">
        <img
          src={theme === "dark" ? "./yarb.svg" : "./yarb.svg"}
          alt="YARB"
          className="w-16"
        />
      </Link>
      <div className="flex items-center justify-center gap-1">
        <Print />
        <Fullscreen />
        <ModeToggle />
        <AccountMenu />
      </div>
    </div>
  );
}

export default TopBar;
