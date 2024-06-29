import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PersonIcon } from '@radix-ui/react-icons'
import { FaGraduationCap } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";
import Intro from './modules/intro';
import Education from './modules/education';
import Skills from './modules/skills';

function InputGroup() {
  return (
    <div className='h-full'>
        <Tabs defaultValue='education' className='p-3 border-b h-full'>
            <TabsList className='w-full p-2 h-[50px] text-[#6d28d9'>
                <TabsTrigger value='intro' className='w-[85px] text-lg h-full'><PersonIcon/></TabsTrigger>
                <TabsTrigger value='education' className='w-[85px] text-lg h-full'><FaGraduationCap/></TabsTrigger>
                <TabsTrigger value='skills' className='w-[85px] text-lg h-full'><FaCode/></TabsTrigger>
                <TabsTrigger value='projects' className='w-[85px] text-lg h-full'><FaBoxOpen/></TabsTrigger>
                <TabsTrigger value='experience' className='w-[85px] text-lg h-full'><BiBuildingHouse /></TabsTrigger>
                <TabsTrigger value='certifications' className='w-[85px] text-lg h-full'><TbCertificate /></TabsTrigger>
                <TabsTrigger value='pors' className='w-[85px] text-lg h-full'><FaTrophy /></TabsTrigger>
            </TabsList>
            
          <TabsContent value='intro'><Intro/></TabsContent>
          <TabsContent value='education'><Education/></TabsContent>
          <TabsContent value='skills'><Skills/></TabsContent>
          <TabsContent value='projects'></TabsContent>
          <TabsContent value='experience'></TabsContent>
          <TabsContent value='skills'></TabsContent>

        </Tabs>
    </div>
  )
}

export default InputGroup