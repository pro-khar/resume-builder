
import FormContextProvider from "./context/formContextProvider"
import Input from "./modules/container/Input"
import Output from "./modules/container/Output"
import { ScrollArea } from "@/components/ui/scroll-area"

function App() {
  
  return (
    <FormContextProvider>
      <div className="flex justify-center gap-6 items-center" id="base">
          <div className=" border dark:border-gray-600 rounded-lg p-8 h-[850px] max-w-[680px] first-line" id="input">
            <Input/>
          </div>
          <ScrollArea className="border  dark:border-gray-600 rounded-lg h-[850px] max-w-[680px]" id="output">
            <Output/> 
          </ScrollArea>
      </div>
      
    </FormContextProvider>
  )
}

export default App