import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Introduction from "./components/core/Introduction"
import Education from "./components/core/Education"
import { Progress } from "./components/ui/progress"
import { useState } from "react"




function App() {
  const [value, setValue] = useState(1/7*100)
  const setSlider = (tabvalue: number) =>{
    setValue(tabvalue)
  }
  return (
    
      <div className="flex flex-col items-center gap-6">
        <Progress value={value} className="w-[400px] mt-10"/>
        <div className="flex justify-center h-screen w-full">
          <Tabs defaultValue="Introduction">
            <TabsList>
              <TabsTrigger value="Introduction" onClick={() => setSlider(1/7*100)}>Introduction</TabsTrigger>
              <TabsTrigger value="Education" onClick={() => setSlider(2/7*100)}>Education</TabsTrigger>
              <TabsTrigger value="Skills" onClick={() => setSlider(3/7*100)}>Skills</TabsTrigger>
              <TabsTrigger value="Projects" onClick={() => setSlider(4/7*100)}>Projects</TabsTrigger>
              <TabsTrigger value="Experience" onClick={() => setSlider(5/7*100)}>Experience</TabsTrigger>
              <TabsTrigger value="Certifications" onClick={() => setSlider(6/7*100)}>Certifications</TabsTrigger>
              <TabsTrigger value="PoRs" onClick={() => setSlider(100)}>PoRs</TabsTrigger>
            </TabsList>
            <TabsContent value="Introduction"><Introduction/></TabsContent>
            <TabsContent value="Education"><Education/></TabsContent>
            <TabsContent value="Skills">Skills</TabsContent>
            <TabsContent value="Projects">Projects</TabsContent>
            <TabsContent value="Experience">Experience</TabsContent>
            <TabsContent value="Certifications">Certifications</TabsContent>
            <TabsContent value="PoRs">PoRs</TabsContent>
          </Tabs>
        </div>
          

    </div>
    
    
  )
}

export default App