import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



function App() {
  return (
    <div className="py-8 flex justify-center">
          <Tabs defaultValue="Introduction" className="w-[full]">
      <TabsList>
        <TabsTrigger value="Introduction">Introduction</TabsTrigger>
        <TabsTrigger value="Education">Education</TabsTrigger>
        <TabsTrigger value="Skills">Skills</TabsTrigger>
        <TabsTrigger value="Projects">Projects</TabsTrigger>
        <TabsTrigger value="Experience">Experience</TabsTrigger>
        <TabsTrigger value="Certifications">Certifications</TabsTrigger>
        <TabsTrigger value="PoRs">PoRs</TabsTrigger>
      </TabsList>
      <TabsContent value="Introduction">Introduction</TabsContent>
      <TabsContent value="Education">Education</TabsContent>
      <TabsContent value="Skills">Skills</TabsContent>
      <TabsContent value="Projects">Projects</TabsContent>
      <TabsContent value="Experience">Experience</TabsContent>
      <TabsContent value="Certifications">Certifications</TabsContent>
      <TabsContent value="PoRs">PoRs</TabsContent>
    </Tabs>

    </div>
  )
}

export default App