"use client"

import React from 'react'
import { useState, useContext } from 'react'

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

import FormContext from "../context/formContext"
import { Separator } from '../ui/separator'

function Education() {

  //COLLEGE VARIABLES
  const [degree, setdegree] = useState('')
  const [college, setcollege] = useState('')
  const [clgdurationA, setclgdurationA] = useState('')
  const [clgdurationB, setclgdurationB] = useState('')
  const [clgmarks, setclgmarks] = useState('')
  const [branch, setbranch] = useState('')

  //HIGHhSCHOOL VARIABLES
  const [hschool, sethschool] = useState('')
  const [hmarks, sethmarks] = useState('')
  const [hsyear, sethsyear] = useState('')

  //INTERMEDIATE VARIABLES
  const [ischool, setischool] = useState('')
  const [imarks, setimarks] = useState('')
  const [iyear, setiyear] = useState('')
  


  return (
    <>
    <main className=''>

    <div className="p-4 flex flex-col">
        <h1 className='text-xl font-semibold'>College</h1>

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

    <Separator/>

    <div className="p-4 flex flex-col">
        <h1 className='text-xl font-semibold'>Intermediate/12th</h1>

        <form className="my-6 flex flex-col gap-4">
            <div>
              <Label htmlFor="ischool">School</Label>
              <Input id="ischool" type="text" placeholder="Name of your school, exclude city name"
              value={ischool} 
              onChange={(e)=>setischool(e.target.value)}
              />
            </div>

            <div className='flex gap-6'>
              <div>
                <Label htmlFor="iyear">Year</Label><br/>
                    <Input id="iyear" type="month" placeholder="Full branch name, no abbreviations"
                    value={iyear} 
                    onChange={(e)=>setiyear(e.target.value)}
                    className='w-full'
                    /> 
              </div>
              
              <div>
                <Label htmlFor="imarks">CGPA/Percentage</Label>
                <Input id="clgmarks" type="number" placeholder="Passing CGPA/Percentage"
                value={imarks} 
                onChange={(e)=>setimarks(e.target.value)}
                className='w-full'
                />
              </div>
              
            </div>
            
        </form>
        {/* <Button className="" onClick={handleSave}>Save</Button> */}
    </div>

    <Separator/>

    <div className="p-4 flex flex-col">
                  <h1 className='text-xl font-semibold'>HighSchool/10th</h1>

                  <form className="my-6 flex flex-col gap-4">
                      <div>
                        <Label htmlFor="hschool">School</Label>
                        <Input id="hschool" type="text" placeholder="Name of your school, exclude city name"
                        value={hschool} 
                        onChange={(e)=>sethschool(e.target.value)}
                        />
                      </div>

                      <div className='flex gap-6'>
                        <div>
                          <Label htmlFor="hsyear">Year</Label><br/>
                              <Input id="hsyear" type="month" placeholder="Full branch name, no abbreviations"
                              value={hsyear} 
                              onChange={(e)=>sethsyear(e.target.value)}
                              className='w-full'
                              /> 
                        </div>
                        
                        <div>
                          <Label htmlFor="hmarks">CGPA/Percentage</Label>
                          <Input id="hmarks" type="number" placeholder="Passing CGPA/Percentage"
                          value={hmarks} 
                          onChange={(e)=>sethmarks(e.target.value)}
                          className='w-full'
                          />
                        </div>
                        
                      </div>
                      </form>
    </div>    

    </main>
         

    </>
    
  )
}

export default Education