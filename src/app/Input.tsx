"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Introduction from "@/components/input_core/Introduction"
import Education from "@/components/input_core/Education"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import Skills from "@/components/input_core/Skills"

function Input() {

    const [value, setValue] = useState(1/7*100)
    const setSlider = (tabvalue: number) =>{
    setValue(tabvalue)
  }

  return (
    <div id="root" className="flex flex-col items-center gap-6">
        {/* <div className="absolute right-3 top-3">
          <ModeToggle/>
        </div> */}
        <div>
          <Progress value={value} className="w-[400px]"/>
        </div>
        
        <div>
          <Tabs defaultValue="Introduction">
            <TabsList  className="flex justify-center w-full">
              <TabsTrigger value="Introduction" onClick={() => setSlider(1/7*100)}>Introduction</TabsTrigger>
              <TabsTrigger value="Education" onClick={() => setSlider(2/7*100)}>Education</TabsTrigger>
              <TabsTrigger value="Skills" onClick={() => setSlider(3/7*100)}>Skills</TabsTrigger>
              <TabsTrigger value="Projects" onClick={() => setSlider(4/7*100)}>Projects</TabsTrigger>
              <TabsTrigger value="Experience" onClick={() => setSlider(5/7*100)}>Experience</TabsTrigger>
              <TabsTrigger value="Certifications" onClick={() => setSlider(6/7*100)}>Certifications</TabsTrigger>
              <TabsTrigger value="PoRs" onClick={() => setSlider(100)}>PoRs</TabsTrigger>
            </TabsList>

            <div>
              <TabsContent value="Introduction"><Introduction/></TabsContent>
              <TabsContent value="Education"><Education/></TabsContent>
              <TabsContent value="Skills"><Skills/></TabsContent>
              <TabsContent value="Projects">Projects</TabsContent>
              <TabsContent value="Experience">Experience</TabsContent>
              <TabsContent value="Certifications">Certifications</TabsContent>
              <TabsContent value="PoRs">PoRs</TabsContent>
            </div>
            
          
          </Tabs>
        </div>
    {/* <div className="bottom-5 fixed">
      <Output/>
    </div> */}
    
    </div>
  )
}

export default Input


//border border-black overflow-y-scroll h-[600px]