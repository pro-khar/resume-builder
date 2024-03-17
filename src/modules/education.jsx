
function Education(){
    return(
        <>
            <section id = "education">
            <h2>EDUCATION</h2>
            <div className = "line"></div>

            <table>
                <tr className = "bold-text">
                    <td>Bachelor of Technology</td><td align="right">July 2020 - May 2024</td>
                </tr>

                <tr>
                    <td>Jaypee Institute of Information Technology, Noida</td><td className = "" align="right">6.5 CGPA</td>
                </tr>
                <tr style={{}}>
                    <td>
                        <ul className ="ul_gap">
                            <li><i>Electronics and Communication Engineering</i></li>
                        </ul> 
                    </td>
                </tr>
            </table>






            <table className="spacer">
                <tr className = "bold-text">
                    <td>Intermediate</td><td align="right">2018 - 2019</td>
                </tr>

                <tr>
                    <td>Sacred Heart Higher Secondary School, Sitapur</td><td className = "" align="right">64 %</td>
                </tr>
            </table>







            <table className="spacer">
                <tr className = "bold-text">
                    <td>Highschool</td><td align="right">2016 - 2017</td>
                </tr>

                <tr>
                    <td>Sacred Heart Inter College, Sitapur</td><td className = "" align="right">84 %</td>
                </tr>
            </table>

        </section>
        </>
    )
}

export default Education