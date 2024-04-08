import { useContext, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { FaSave } from 'react-icons/fa'

import FormContext from '@/context/formContext'


function Skills() {
    const {setskills} = useContext(FormContext)

    const [cat1, setcat1] = useState('')
    const [cat2, setcat2] = useState('')
    const [cat3, setcat3] = useState('')
    const [cat4, setcat4] = useState('')
    const [cat5, setcat5] = useState('')

    const [skill1, setskill1] = useState('')
    const [skill2, setskill2] = useState('')
    const [skill3, setskill3] = useState('')
    const [skill4, setskill4] = useState('')
    const [skill5, setskill5] = useState('')

    const handlesave = (e) =>{
        e.preventDefault()
        setskills({cat1, cat2, cat3, cat4, cat5, skill1, skill2, skill3, skill4, skill5})
      }

    return (
        <>
            <ScrollArea className='h-[600px]'>
        <div className='p-4 flex flex-col gap-3'>

            <form className="my-4 flex flex-col gap-4">

                <h2>Skill category 1</h2>
                <div>
                <Input id="cat1" type="text" placeholder="Category name"
                    value={cat1} 
                    onChange={(e)=>setcat1(e.target.value)}
                    className='w-1/2'
                    />
                </div>
                <div>
                <Label htmlFor="skill1">Skills</Label>
                <Input id="skill1" type="text" placeholder="Skills separated by comma and space"
                    value={skill1} 
                    onChange={(e)=>setskill1(e.target.value)}
                    className='w-full'
                    />
                </div>
            </form>

            
            <form className="my-4 flex flex-col gap-4">
                <h2>Skill category 2</h2>
                <div>
                
                <Input id="cat2" type="text" placeholder="Category name"
                    value={cat2} 
                    onChange={(e)=>setcat2(e.target.value)}
                    className='w-1/2'
                    />
                </div>
                <div>
                <Label htmlFor="skill2">Skills</Label>
                <Input id="skill2" type="text" placeholder="Skills separated by comma and space"
                    value={skill2} 
                    onChange={(e)=>setskill2(e.target.value)}
                    className='w-full'
                    />
                </div>
            </form>


            <form className="my-4 flex flex-col gap-4">
                <h2>Skill category 3</h2>
                <div>
                
                <Input id="cat3" type="text" placeholder="Category name"
                    value={cat3} 
                    onChange={(e)=>setcat3(e.target.value)}
                    className='w-1/2'
                    />
                </div>
                <div>
                <Label htmlFor="skill3">Skills</Label>
                <Input id="skill3" type="text" placeholder="Skills separated by comma and space"
                    value={skill3} 
                    onChange={(e)=>setskill3(e.target.value)}
                    className='w-full'
                    />
                </div>
            </form>


            <form className="my-4 flex flex-col gap-4">
                <h2>Skill category 4</h2>
                <div>
                
                <Input id="cat4" type="text" placeholder="Category name"
                    value={cat4} 
                    onChange={(e)=>setcat4(e.target.value)}
                    className='w-1/2'
                    />
                </div>
                <div>
              <Label htmlFor="skill4">Skills</Label>
                <Input id="skill4" type="text" placeholder="Skills separated by comma and space"
                    value={skill4} 
                    onChange={(e)=>setskill4(e.target.value)}
                    className='w-full'
                    />
                </div>
            </form>


            <form className="my-4 flex flex-col gap-4">
                <h2>Skill category 5</h2>
                <div>
                
                <Input id="cat5" type="text" placeholder="Category name"
                    value={cat5} 
                    onChange={(e)=>setcat5(e.target.value)}
                    className='w-1/2'
                    />
                </div>
                <div>
                <Label htmlFor="skill5">Skills</Label>
                <Input id="skill5" type="text" placeholder="Skills separated by comma and space"
                    value={skill5} 
                    onChange={(e)=>setskill5(e.target.value)}
                    className='w-full'
                    />
                </div>
            </form>
            
        </div>
        </ScrollArea>


        <div className='flex justify-center items-center p-4 mt-10'>
            <Button className='w-full' onClick={handlesave}><FaSave className='mr-2'/> Save</Button>
        </div>
        </>
    )
}

export default Skills