"use client"
import FormContext from '@/components/context/formContext'
import FormContextProvider from '@/components/context/formContextProvider'
import Class1 from '@/components/output_core/class1'
import Header from '@/components/output_core/header'
import PlainSection from '@/components/output_core/plain'
import React, { useContext } from 'react'




function Output() {
  const {item} = useContext(FormContext)
  if(!{item}) return(
    <>
      Enter details and hit save!
    </>
  )
  return (
      <>
      <div id='output_container' className='border border-black dark:bg-gray-800' style={{height : "900px", width : "636px"}}>
        <Header/>
        <PlainSection/>
        <Class1/>
        <Class1/>
      </div>
        
      </>
  )
}

export default Output