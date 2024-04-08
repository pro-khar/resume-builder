
import FormContext from '@/context/formContext'

import Class1 from '../output_core/out_edu'
import Header from '../output_core/header'
import PlainSection from '../output_core/plain'
import Out_skills from '../output_core/out_skills'

import { useContext } from 'react'





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