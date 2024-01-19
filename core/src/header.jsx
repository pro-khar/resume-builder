import { useState } from "react"
import './header.css'
function Header(){

    // let [name, setName] = useState("Your name here")

    // const updateName = () =>{
    //     setName("Prakhar Verma")
    // }


    const [color, setColor] = useState("beige")


    return(
        <>
        <section id="intro" style={{backgroundColor : color}}>
        <table>
            <tr>
                <td><img id="photu" src = {"./src/assets/60KB.jpeg"} alt="ME" /></td>
                <td id = "namecard">
                    <p id = "name">Prakhar Verma</p>
                    <hr />

                    <div id="span_container">
                        <span className = "intro_span"><a target="_blank" href = "https://wa.me/918953810176"><i className="fas fa-phone"></i> +918953810176</a></span>
                        <span className = "intro_span"><a target="_blank" href = "mailto:prakharvermamanu.veed@gmail.com"><i className="fas fa-envelope"></i> prakharvermamanu.veed@gmail.com</a></span><br />

                        <span className = "intro_span"><a target="_blank" href = "https://github.com/pro-khar"><i className="fa fa-github"></i> github.com/pro-khar</a></span>
                        <span className = "intro_span"><a target="_blank" href = "https://www.linkedin.com/in/prakhar-verma-710650214/"><i className="fa fa-linkedin"></i> linkedin.com/in/prakhar-verma-710650214</a></span>
                        
                    </div>
                </td>
            </tr>
        </table>

        <div id="colorBar">
            <div id="colorbar_container">
                <button onClick = { ()=> setColor("beige")} style={{backgroundColor: "beige"}}></button>
                <button onClick = { ()=> setColor("#E1F0DA")} style={{backgroundColor: "#E1F0DA"}}></button>
                <button onClick = { ()=> setColor("#F8F4EC")} style={{backgroundColor: "#F8F4EC"}}></button>
                <button onClick = { ()=> setColor("#DCF2F1")} style={{backgroundColor: "#DCF2F1"}}></button>
            </div>
        </div>

    </section>
    
    </>
    )
}
export default Header