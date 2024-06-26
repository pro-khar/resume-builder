import { ModeToggle } from "@/components/ThemeToggle";
import React from "react";

function TopBar() {
  return (
    <div className="border h-12 flex items-center justify-between px-2">
        <h1>Top Bar</h1>
      <div className="flex items-center justify-center">
        <ModeToggle />
      </div>
    </div>
  );
}

export default TopBar;
