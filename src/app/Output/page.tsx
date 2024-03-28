"use client"
import FormContext from '@/components/context/formContext'
import Class1 from '@/components/output_core/out_edu'
import Header from '@/components/output_core/header'
import PlainSection from '@/components/output_core/plain'
import React, { useContext } from 'react'
import Out_skills from '@/components/output_core/out_skills'




function Output() {
  const {item} = useContext(FormContext)
  if(!{item}) return(
    <>
      Enter details and hit save!
    </>
  )
  return (
      <>
      <div id='output_container' className='text-black bg-white h-[900px] w-[636px]'>
        <Header/>
        <PlainSection/>
        <Class1/>
        <Out_skills/>
      </div>
        
      </>
  )
}

export default Output