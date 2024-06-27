import { useContext, useState } from "react"

function Education_out(){
    
    return(
        <>
            <div id = "plain-container" className="px-5 py-3 text-xs pb-0">           
                <h1 className="font-semibold tracking-tight">EDUCATION</h1>  
                <hr className="border-black border-t"/>
                <div id="part_container" className="flex flex-col gap-[4px]">
                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">Degree Name</h1></td><td className="text-right font-semibold">YYYY - YYYY</td>
                            </tr>
                            <tr>
                                <td>
                                College Name
                                </td>
                                <td className="text-right">Marks CGPA</td>
                            </tr>
                            <tr>
                                <td colSpan={2}> 
                                <ul className="px-2 list-disc list-inside flex flex-col">
                                    <li className="italic">Branch</li>
                                </ul>
                                </td>
                            </tr>
                        </table>        
                    </div>
                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">Intermediate</h1></td><td className="text-right font-semibold">Passing YYYY</td>
                            </tr>
                            <tr>
                                <td>
                                School name
                                </td>
                                <td className="text-right">
                                Marks CGPA
                                </td>
                            </tr>
                        </table>        
                    </div>
                    <div id = "part" className="mx-2"> 
                        <table className="w-full">
                            <tr className="">
                                <td><h1 className="font-semibold">High-school</h1></td><td className="text-right font-semibold">Passing YYYY</td>
                            </tr>
                            <tr>
                                <td>
                                School name
                                </td>
                                <td className="text-right">
                                Marks CGPA
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