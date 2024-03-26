"use client"
import FormContext from '@/components/context/formContext'
import FormContextProvider from '@/components/context/formContextProvider'
import React, { useContext } from 'react'


function Output() {
  const {info} = useContext(FormContext)
  return (
    
    
      <div className='bg-yellow-100 text-black p-5 m-5 w-[600px] rounded-lg font-serif'>
        welcome {info.name}, your registered email is {info.email}
    </div>
    
  )
}

export default Output