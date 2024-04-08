import { useContext, useState } from "react"
import FormContext from "@/context/formContext"

function Class1(){

    const {education} = useContext(FormContext)

    return(
        <>
            <div id = "plain-container" className="px-5 py-3 text-xs pb-0">           
                <h1 className="font-semibold tracking-tight">EDUCATION</h1>  
                <hr className="border-black border-t"/>


                <div id="part_container" className="flex flex-col gap-[4px]">

                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">{education.degree?education.degree:"Degree Name"}</h1></td><td className="text-right font-semibold">{education.clgdurationA?education.clgdurationA:"YYYY"} - {education.clgdurationB?education.clgdurationB:"YYYY"}</td>
                            </tr>
                            <tr>
                                <td>
                                {education.college?education.college:"College Name"}
                                </td>
                                <td className="text-right">{education.clgmarks?education.clgmarks:"Marks"} {education.clgmarks<=10?"CGPA":"%"}</td>
                                </tr>
                            <tr>
                                <td colSpan={2}> 
                                <ul className="px-2 list-disc list-inside flex flex-col">
                                    <li className="italic">{education.branch?education.branch:"Branch"}</li>
                                </ul>
                                </td>
                            </tr>
                        </table>        
                    </div>

                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">Intermediate</h1></td><td className="text-right font-semibold">{education.iyear?education.iyear:"Passing YYYY"}</td>
                            </tr>
                            <tr>
                                <td>
                                {education.ischool?education.ischool:"School name"}
                                </td>
                                <td className="text-right">
                                {education.imarks?education.imarks:"Marks"} {education.imarks<=10?"CGPA":"%"}
                                </td>
                            </tr>
                        </table>        
                    </div>

                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">High-school</h1></td><td className="text-right font-semibold">{education.hsyear?education.hsyear:"Passing YYYY"}</td>
                            </tr>
                            <tr>
                                <td>
                                {education.hschool?education.hschool:"School name"}
                                </td>
                                <td className="text-right">
                                {education.hmarks?education.hmarks:"Marks"} {education.hmarks<=10?"CGPA":"%"}
                                </td>
                            </tr>
                        </table>        
                    </div>

                </div>
    
                
            </div>
        </>
    )
}
export default Class1