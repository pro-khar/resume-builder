import { ModeToggle } from "./components/darkmode/mode-toggle";
import { ThemeProvider } from "./components/darkmode/theme-provider";
import FormContextProvider from "./context/formContextProvider";
import Input from "./modules/container/Input";
import Output from "./modules/container/Output";
import { ScrollArea } from "@/components/ui/scroll-area";

function App() {
  return (
    <ThemeProvider>
      <FormContextProvider>
        <div className="absolute right-1 top-1">
          <ModeToggle />
        </div>
        <div
          className="flex justify-center 2xl:gap-6 items-center xl:gap-3"
          id="base"
        >
          <div
            className=" border dark:border-gray-600 rounded-lg p-8 2xl:h-[850px] 2xl:max-w-[680px] first-line xl:h-[600px] shadow-lg md:max-h-[700px]"
            id="input"
          >
            <Input />
          </div>
          <ScrollArea
            className="border  dark:border-gray-600 rounded-lg 2xl:h-[850px] 2xl:max-w-[680px] xl:h-[600px] shadow-lg md:max-h-[700px]"
            id="output"
          >
            <Output />
          </ScrollArea>
        </div>
      </FormContextProvider>
    </ThemeProvider>
  );
}

export default App;
