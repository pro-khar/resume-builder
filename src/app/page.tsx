"use client"

import FormContextProvider from "@/components/context/formContextProvider"
import Input from "./Input"
import Output from "./Output/page"

function Home() {
  
  return (
    <FormContextProvider>
      <div className="flex justify-center gap-6 items-center" id="base">
        <div className="max-w-1/2 border dark:border-gray-600 rounded-lg p-8 h-[850px]" id="input">
          <Input/>
        </div>
        <div id="output" className=" max-w-1/2 border  dark:border-gray-600 rounded-lg p-8 overflow-scroll h-[850px]">
          <Output/> 
        </div>
      </div>
      
    </FormContextProvider>
  )
}

export default Home