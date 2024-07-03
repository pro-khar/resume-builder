import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import TopBar from "./app/Topbar/TopBar";
import Morescreen from "./app/morescreen";
import InputGroup from "./app/Input/InputGroup";
import OutputGroup from "./app/Output/OutputGroup";
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
              className="bg-[#f3f4f6] dark:bg-[#1e2837]  flex justify-center py-5"
              defaultSize={50}
            >
              <ScrollArea className="h-[800px] border-2 rounded-md scale-[1]">
                <OutputGroup />
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </>
  );
}

export default App;
