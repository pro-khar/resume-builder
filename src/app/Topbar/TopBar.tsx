import { ModeToggle } from "@/components/ThemeToggle";
import React from "react";
import { FullScreen } from "./modules/fullScreen";

function TopBar() {
  return (
    <div className="border-b h-12 flex items-center justify-between px-2">
        <h1>Top Bar</h1>
      <div className="flex items-center justify-center gap-1">
      <FullScreen/>
        <ModeToggle />
        
      </div>
    </div>
  );
}

export default TopBar;
