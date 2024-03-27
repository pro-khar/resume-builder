import { useState, useContext } from "react"
import FormContext from '@/components/context/formContext'


function Header(){
    const {info} = useContext(FormContext)

    return(
    <>
    <div id = "header" className="bg-gray-200 dark:bg-gray-600 h-auto py-5 px-5 flex flex-nowrap gap-4 border-b border-black border-dashed">
         <img className="border-black border" src="./src/assets/60KB.jpeg" style={{minWidth:"70px", maxWidth: "70px"}}/>
         <div className="w-full flex flex-col gap-1 max-h-auto">
            <h1 className="font-bold text-3xl tracking-tight">{info.name}</h1>
            <hr className="border-black border-t"/>
            <div id="span_container" className="flex flex-wrap gap-x-6 justify-between" >
                            <a className="text-xs" target="none" href = "https://maps.app.goo.gl/h8hqRS46vZKeMbHn6"><i class="fa-solid fa-location-dot"></i> Noida, Uttar Pradesh, India</a>
                            <a className="text-xs" target="_blank" href = "https://wa.me/918953810176"><i class="fas fa-phone"></i> +918953810176</a>
                            <a className="text-xs" target="_blank" href = "mailto:prakharvermamanu.veed@gmail.com"><i class="fas fa-envelope"></i> prakharvermamanu.veed@gmail.com</a>
                            <a className="text-xs" target="_blank" href = "https://github.com/pro-khar"><i class="fa fa-github"></i> github.com/pro-khar</a>
                            <a className="text-xs" target="_blank" href = "https://www.linkedin.com/in/prakhar-verma-710650214/"><i class="fa fa-linkedin"></i> linkedin.com/in/prakhar-verma-710650214</a>
            </div>
         </div>
    </div>
        
    </>
    )
}
export default Header