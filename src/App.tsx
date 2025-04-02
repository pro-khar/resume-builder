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
      <div
        id="base"
        className="hidden md:block xl:block 2xl:block m-3 rounded-md border"
      >
        <TopBar />

        <div className="">
          <ResizablePanelGroup direction="horizontal" className="h-1/2">
            <ResizablePanel className="" defaultSize={25} minSize={25}>
              <InputGroup />
            </ResizablePanel>
            <ResizableHandle className="bg-secondary" withHandle/>
            <ResizablePanel className="bg-secondary flex justify-center items-center relative">
              <OutputTools />
              <OutputGroup />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </>
  );
}

export default App;
