import { useContext, useState } from "react"
import { useSelector } from "react-redux"

function Education_out(){
    const education = useSelector((state)=>state.education)
    
    return(
        <>
            <div id = "plain-container" className="px-5 py-3 text-xs pb-0 dark:text-white">           
                <h1 className="font-semibold tracking-tight">EDUCATION</h1>  
                <hr className="border-black dark:border-white border-t"/>
                <div id="part_container" className="flex flex-col gap-[4px]">
                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">{education.degree}</h1></td><td className="text-right font-semibold">{education.bachelor_duration}</td>
                            </tr>
                            <tr>
                                <td>
                                {education.college}
                                </td>
                                <td className="text-right">{education.bachelor_score}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}> 
                                <ul className="px-2 list-disc list-inside flex flex-col">
                                    <li className="italic">{education.branch}</li>
                                </ul>
                                </td>
                            </tr>
                        </table>        
                    </div>
                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">Intermediate</h1></td><td className="text-right font-semibold">{education.int_year}</td>
                            </tr>
                            <tr>
                                <td>
                                {education.int_school}
                                </td>
                                <td className="text-right">
                                {education.int_score}
                                </td>
                            </tr>
                        </table>        
                    </div>
                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">High-school</h1></td><td className="text-right font-semibold">{education.hs_year}</td>
                            </tr>
                            <tr>
                                <td>
                                {education.hs_school}
                                </td>
                                <td className="text-right">
                                {education.hs_score}
                                </td>
                            </tr>
                        </table>        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education_out