import { useContext } from 'react'
import FormContext from '@/context/formContext'


function Out_skills() {
    const {skills} = useContext(FormContext)
  return (
    <>
      <div id = "plain-container" className="px-5 py-3 text-xs pb-0">    

        <h1 className="font-semibold tracking-tight">SKILLS</h1>  
                  <hr className="border-black border-t"/>

                  <div id="part_container" className="flex flex-col gap-[4px]">
                    <ul className="px-2 list-disc list-inside">
                      <li>
                        <span className='font-bold'>{skills.cat1?skills.cat1:"Category"}</span> - <span>{skills.skill1?skills.skill1:"Skills, Skills, Skills"}</span>
                      </li>
                      <li>
                        <span className='font-bold'>{skills.cat2?skills.cat2:"Category"}</span> - <span>{skills.skill2?skills.skill2:"Skills, Skills, Skills"}</span>
                      </li>
                      <li>
                        <span className='font-bold'>{skills.cat3?skills.cat3:"Category"}</span> - <span>{skills.skill3?skills.skill3:"Skills, Skills, Skills"}</span>
                      </li>
                      <li>
                        <span className='font-bold'>{skills.cat4?skills.cat4:"Category"}</span> - <span>{skills.skill4?skills.skill4:"Skills, Skills, Skills"}</span>
                      </li>
                      <li>
                        <span className='font-bold'>{skills.cat5?skills.cat5:"Category"}</span> - <span>{skills.skill5?skills.skill5:"Skills, Skills, Skills"}</span>
                      </li>
                    </ul>
                  </div>
      </div>
    </>
  )
}

export default Out_skills