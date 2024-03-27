"use client"

import React from 'react'
import { useState, useContext } from 'react'

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

import FormContext from "../context/formContext"

function Education() {

  const [degree, setdegree] = useState('')
  const [college, setcollege] = useState('')
  const [clgdurationA, setclgdurationA] = useState('')
  const [clgdurationB, setclgdurationB] = useState('')
  const [clgmarks, setclgmarks] = useState('')
  const [branch, setbranch] = useState('')


  return (
    <div className="p-4 flex flex-col pt-[10%]">
        <p className="text-xs">Describe your educational background</p>

        <form className="my-6 flex flex-col gap-4">
            <div>
              <Label htmlFor="college">College/University</Label>
              <Input id="college" type="text" placeholder="Full College/university name, Do not add city name"
              value={college} 
              onChange={(e)=>setcollege(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="degree">Degree</Label>
              <Input id="degree" type="text" placeholder="Full degree name, no abbreviations"
              value={degree} 
              onChange={(e)=>setdegree(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" type="text" placeholder="Full branch name, no abbreviations"
              value={branch} 
              onChange={(e)=>setbranch(e.target.value)}
              />
            </div>


            <div className='flex gap-6'>
              <div>
                <Label htmlFor="clgdurationA">Duration</Label><br/>
                  <div className='flex items-center gap-2'>
                    <Label className='text-xs text-gray-400'>From</Label>
                    <Input id="clgdurationA" type="month" placeholder="Full branch name, no abbreviations"
                    value={clgdurationA} 
                    onChange={(e)=>setclgdurationA(e.target.value)}
                    className='w-full'
                    /> 
                    <Label className='text-xs text-gray-400'>To</Label>
                    <Input id="clgdurationB" type="month" placeholder="Full branch name, no abbreviations"
                    value={clgdurationB} 
                    onChange={(e)=>setclgdurationB(e.target.value)}
                    className='w-full'
                    /> 
                  </div>
              </div>
              
              <div>
                <Label htmlFor="clgmarks">CGPA/Percentage</Label>
                <Input id="clgmarks" type="number" placeholder="Current CGPA/Percentage"
                value={clgmarks} 
                onChange={(e)=>setclgmarks(e.target.value)}
                className='w-full'
                />
              </div>
              
            </div>
            
            
        </form>
        {/* <Button className="" onClick={handleSave}>Save</Button> */}
    </div>
  )
}

export default Education