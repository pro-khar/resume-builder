import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import TopBar from "./components/App/Topbar/TopBar";
import Morescreen from "./components/App/morescreen";
import InputGroup from "./components/App/Input/InputGroup";
import OutputGroup from "./components/App/Output/OutputGroup";
import { ScrollArea } from "./components/ui/scroll-area";

function App() {
  return (
    <>
      <Morescreen />
      <div
        id="base"
        className="hidden md:block xl:block 2xl:block m-3 rounded-md border "
      >
        <TopBar />

        <div className="h-[889px]">
          <ResizablePanelGroup direction="horizontal" className="h-1/2">
            <ResizablePanel className="" defaultSize={50}>
              <InputGroup />
            </ResizablePanel>
            <ResizableHandle className="" />
            <ResizablePanel
              className="bg-[#f3f4f6] dark:bg-[#1e2837] flex justify-center items-center"
              defaultSize={50}
            >
              <OutputGroup />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </>
  );
}

export default App;
