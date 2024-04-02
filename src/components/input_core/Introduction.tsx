"use client"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"


import { useState, useContext } from "react"
import FormContext from "../context/formContext"
import { FaGithub, FaLinkedin, FaSave } from "react-icons/fa"
import { Separator } from "../ui/separator"


function Introduction() {
  const [name, setName] = useState('')
  const [number, setnumber] = useState('')
  const [email, setemail] = useState('')
  const [addr, setaddr] = useState('')
  const [github, setgithub] = useState('')
  const [linkedin, setlinkedin] = useState('')
  const [image, setimage] = useState('')

  const {setinfo} = useContext(FormContext)

  const handleSave = (e) =>{
    e.preventDefault()
    setinfo({name, number, email, addr, github, linkedin, image})
  }

  


  return (
    <>
  
    <div className="p-4 flex flex-col h-[600px]">
   
        <form className="my-6 flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your full name"
              value={name} 
              onChange={(e)=>setName(e.target.value)}/>
            </div>
            
            <div className="flex gap-4">
                        <div className="w-full">
                          <Label htmlFor="mob">Contact No.</Label>
                          <Input id="mob" type="number" placeholder="Contact number with prefix"
                          value={number} 
                          onChange={(e)=>setnumber(e.target.value)}/>
                        </div>

                        <div className="w-full">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your valid Email ID"
                          value={email} 
                          onChange={(e)=>setemail(e.target.value)}/>
                        </div>
            </div>

            <div>
              <Label htmlFor="addr">Address</Label>
              <Input id="addr" type="text" placeholder="Enter your short address, eg: 'city, state, country' "
              value={addr} 
              onChange={(e)=>setaddr(e.target.value)}/>
            </div>

            <div className="flex gap-4">
                <div className="w-full">
                  <Label htmlFor="github"><FaGithub className="inline"/> Github</Label>
                  <Input id="github" type="url" placeholder="Github profile"
                  value={github} 
                  onChange={(e)=>setgithub(e.target.value)}/>
                </div>

                <div className="w-full">
                  <Label htmlFor="linkedin"><FaLinkedin className="inline"/> LinkedIn</Label>
                  <Input id="linkedin" type="url" placeholder="LinkedIn profile"
                  value={linkedin} 
                  onChange={(e)=>setlinkedin(e.target.value)}/>
                </div>
            </div>

            <div>
              <Label htmlFor="image">Name</Label>
              <Input id="image" type="file"
              value={image}
              onChange={(e)=> setimage(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="summary">Summary</Label>
              <Textarea placeholder="Describe yourself in 60-80 words max :)" />
            </div>
            
        </form>
        
    </div>

    <div className='flex justify-center items-center p-4 mt-10'>
    <Button className='w-full' onClick={handleSave}><FaSave className='mr-2'/> Save</Button>
    </div>
    </>
  )
}

export default Introduction