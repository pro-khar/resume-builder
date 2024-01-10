import './styles.css'
function Header(){
    return(
        <>
        <section id="intro">
        <table>
            <tr>
                <td><img id="photu" src = {"./src/assets/60KB.jpeg"} alt="ME" /></td>
                <td id = "namecard">
                    <p id = "name">Prakhar Verma</p>
                    <hr />

                    <div id="span_container">
                        <span class = "intro_span"><a target="_blank" href = "https://wa.me/918953810176"><i class="fas fa-phone"></i> +918953810176</a></span>
                        <span class = "intro_span"><a target="_blank" href = "mailto:prakharvermamanu.veed@gmail.com"><i class="fas fa-envelope"></i> prakharvermamanu.veed@gmail.com</a></span><br />

                        <span class = "intro_span"><a target="_blank" href = "https://github.com/pro-khar"><i class="fa fa-github"></i> github.com/pro-khar</a></span>
                        <span class = "intro_span"><a target="_blank" href = "https://www.linkedin.com/in/prakhar-verma-710650214/"><i class="fa fa-linkedin"></i> linkedin.com/in/prakhar-verma-710650214</a></span>
                        
                    </div>
                </td>
            </tr>
        </table>
    </section>
    </>
    )
}
export default Header