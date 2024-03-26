

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

import { useState, useContext } from "react"
import FormContext from "../context/formContext"


function Introduction() {
  const [name, setName] = useState('')
  const [number, setnumber] = useState('')
  const [email, setemail] = useState('')
  const [addr, setaddr] = useState('')

  const {setinfo} = useContext(FormContext)

  const handleSave = (e) =>{
    e.preventDefault()
    setinfo({name, number, email, addr})
  }




  return (
  
    <div className="p-4 flex flex-col pt-[10%]">
        <h1 className="text-2xl font-bold">Introduction</h1>
        <p className="italic text-xs">Tell me a bit about yourself!</p>

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

            <div>
              <Label htmlFor="github"><i className="fa-brands fa-github"></i> Github</Label>
              <Input id="github" type="url" placeholder="Github profile"/>
            </div>

            <div>
              <Label htmlFor="linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</Label>
              <Input id="linkedin" type="url" placeholder="LinkedIn profile"/>
            </div>

            <div>
              <Label htmlFor="summary">Summary</Label>
              <Textarea placeholder="Describe yourself in 60-80 words max :)" />
            </div>
            
        </form>
        <Button className="" onClick={handleSave}>Save</Button>
    </div>
    
  )
}

export default Introduction