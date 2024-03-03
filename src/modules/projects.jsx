
function Projects(){
    return(
        <>
        <section id = "projects">
            <h2>PROJECTS</h2>
            <div className = "line"></div>

            
            
            <table>
                <tr className = "bold-text">
                    <td><a href="https://pro-khar.github.io/verilog-docs/" target = "_blank">Verilog Documentation - Website <i class="fa-solid fa-arrow-up-right-from-square"></i></a></td><td align="right">Aug 2023 - Sept 2023</td>
                </tr>

                <tr>
                    <td colSpan={2}>Website featuring extensive documentation of the Verilog HDL using material design tactics and frontend.</td>
                </tr>
                
                <tr>
                    <td colSpan = {2}>
                        <ul className ="ul_gap">
                            <li>Detailed beginner-friendly documentation with code snippets and syntax highlighting. <b>(React.js)</b></li>
                            <li>Use of assistive technologies for screen readers within the codebase.<b>(HTML5)</b></li>
                            <li>Fully responsive interface for all types of screens.<b>(CSS)</b></li>
                        </ul>
                    </td>
                </tr>
            </table>

            <table>
                <tr className = "bold-text">
                    <td><a href="https://drive.google.com/file/d/1R6OjP2Yh8zjBppxUkkjpvdsXs8l5k06c/view?usp=sharing" target = "_blank">Network based relay switch  <i class="fa-solid fa-arrow-up-right-from-square"></i></a> <i>(internship project)</i></td><td align="right">May 2023 - June 2023</td>
                </tr>

                <tr>
                    <td colSpan={2}>Developed software and hardware interfaces for a Microcontroller-based, network switch for light switching from any
                        device on the same network.</td>
                </tr>
                
                <tr>
                    <td colSpan = {2}>
                        <ul className ="ul_gap">
                            <li>ESP8266 MCU programming in <b>Arduino</b> Framework <b>(PlatformIO)</b></li>
                            <li>Developed a web interface for controlling through any device on same network. <b>(Javascript, Websockets)</b></li>
                            <li>Utilised NTPClient library for accessing time through internet. <b>(C++)</b></li>
                        </ul>
                    </td>
                </tr>
            </table>

            <table>
                <tr className ="bold-text">
                    <td><a href="https://pro-khar.github.io/me/" target = "_blank">Resume Builder  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></td><td align="right">Ongoing</td>
                </tr>

                <tr>
                    <td colSpan={2}>Resume builder with an intuitive and minimal UI built on <b>React.js</b></td>
                </tr>
                
                <tr>
                    <td colSpan = {2}>
                        <ul className ="ul_gap">
                            <li>Multiple toggles like image inclusion and color themes, state management using <b>React Hooks.</b></li>
                            <li>Print and Export capability using window object <b>(Node.js)</b></li>
                            <li>Minimal and Responsive UI with <b>Tailwind CSS</b></li>
                        </ul>
                    </td>
                </tr>
            </table>
            

        </section>
    </>
    )
}
export default Projects