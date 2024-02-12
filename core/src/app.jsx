import Header from './modules/header.jsx'
import Summary from './modules/summary.jsx'
import Education from './modules/education.jsx'
import Skills from './modules/skills.jsx'
import Projects from './modules/projects.jsx'
import Experience from './modules/experience.jsx'
import Por from './modules/por.jsx'
import Certi from './modules/certification.jsx'



function App(){



    return(
    <>
        <div id="print-content" style={{width:"fit-content", background:"white"}}>
            <Header />
            <Summary />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Certi />
            <Por />
        </div>
    </>
    )
}

export default App