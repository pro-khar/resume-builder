import { useState, useContext } from "react"
import FormContext from "@/context/formContext"
import { IoLocationSharp } from "react-icons/io5"
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"


function Header(){
    const {info} = useContext(FormContext)

    return(
    <>
    <div id = "header" className="bg-gray-200 text-black h-[134px] py-5 px-5 flex flex-nowrap gap-4 border-b border-black border-dashed">
         <img className="border-black border" src={''} style={{minWidth:"70px", maxWidth: "70px"}}/>
         <div className="w-full flex flex-col gap-1 max-h-auto">
            <h1 className="font-bold text-3xl tracking-tight">{info.name?info.name:"Your Name Here"}</h1>
            <hr className="border-black border-t"/>
            <div className="flex justify-between">
                <div id="span_container" className="flex flex-col" >
                                <a className="text-xs" target="_blank" href = "mailto:prakharvermamanu.veed@gmail.com"><FaEnvelope className="inline"/> {info.email?info.email:"your email here"}</a>
                                <a className="text-xs" target="_blank" href = "https://github.com/pro-khar"><FaGithub className="inline"/> {info.github?info.github:"Github profile link"}</a>
                                <a className="text-xs" target="_blank" href = "https://www.linkedin.com/in/prakhar-verma-710650214/"><FaLinkedin className="inline"/> {info.linkedin?info.linkedin:"Linked Profile link"}</a>
                </div>
                <div id="span_container" className="flex flex-col" >
                                <a className="text-xs" target="none" href = "https://maps.app.goo.gl/h8hqRS46vZKeMbHn6"><IoLocationSharp className="inline"/> {info.addr?info.addr:"Your address here"}</a>
                                <a className="text-xs" target="_blank" href = "https://wa.me/918953810176"><FaPhone className="inline"/> {info.number?info.number:"phone number here"}</a>
                </div>
            </div>
         </div>
    </div>
        
    </>
    )
}
export default Header