import { useState, useContext } from "react"
import { IoLocationSharp } from "react-icons/io5"
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"

function Intro_out(){
    return(
    <>
    <div id = "header" className="bg-gray-200 text-black h-[134px] py-5 px-5 flex flex-nowrap gap-4 border-b border-black border-dashed">
         <img className="border-black border" src={''} style={{minWidth:"70px", maxWidth: "70px"}}/>
         <div className="w-full flex flex-col gap-1 max-h-auto">
            <h1 className="font-bold text-3xl tracking-tight">Your Name Here</h1>
            <hr className="border-black border-t"/>
            <div className="flex justify-between">
                <div id="span_container" className="flex flex-col" >
                                <a className="text-xs" target="_blank" href = "mailto:prakharvermamanu.veed@gmail.com"><FaEnvelope className="inline"/> your email here</a>
                                <a className="text-xs" target="_blank" href = "https://github.com/pro-khar"><FaGithub className="inline"/> Github profile link</a>
                                <a className="text-xs" target="_blank" href = "https://www.linkedin.com/in/prakhar-verma-710650214/"><FaLinkedin className="inline"/> Linked Profile link</a>
                </div>
                <div id="span_container" className="flex flex-col" >
                                <a className="text-xs" target="none" href = "https://maps.app.goo.gl/h8hqRS46vZKeMbHn6"><IoLocationSharp className="inline"/> Your address here</a>
                                <a className="text-xs" target="_blank" href = "https://wa.me/918953810176"><FaPhone className="inline"/> phone number here</a>
                </div>
            </div>
         </div>
    </div>
    </>
    )
}
export default Intro_out