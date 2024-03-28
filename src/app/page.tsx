"use client"

import FormContextProvider from "@/components/context/formContextProvider"
import Input from "./Input"
import Output from "./Output/page"
import { ScrollArea } from "@/components/ui/scroll-area"

function Home() {
  
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

export default Home