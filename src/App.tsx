import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import TopBar from "./components/Topbar/TopBar";
import Morescreen from "./components/morescreen";
import InputGroup from "./components/Input/InputGroup";
import OutputGroup from "./components/Output/OutputGroup";
import { useSelector } from "react-redux";
import { RootState } from "./redux-beta/store";
import OutputTools from "./components/OutputTools/main";

function App() {
  const data = useSelector((state: RootState) => state.data);
  console.log(data);
  return (
    <>
      <Morescreen />
      {/* Remove min-h-screen and use h-screen with flex to properly handle heights */}
      <div className="p-3 h-screen flex flex-col">
        <div id="base" className="hidden md:block rounded-md border  flex-1">
          <TopBar />
          <div className=" h-[calc(100%-48px)] rounded-md">
            <ResizablePanelGroup direction="horizontal" className="h-full">
              <ResizablePanel className="" minSize={30}>
                <InputGroup />
              </ResizablePanel>
              <ResizableHandle className="bg-secondary" withHandle />
              <ResizablePanel className="bg-secondary flex justify-center items-center relative">
                <OutputTools />
                <OutputGroup />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
