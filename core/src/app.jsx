import Header from './modules/header.jsx'
import Summary from './modules/summary.jsx'
import Education from './modules/education.jsx'
import Skills from './modules/skills.jsx'
import Projects from './modules/projects.jsx'
import Experience from './modules/experience.jsx'
import Por from './modules/por.jsx'
import Certi from './modules/certification.jsx'

import html2pdf from 'html2pdf.js'

function App(){

    const handlePrint = () => {
        const content = document.getElementById('print-content')
        html2pdf(content);
    }


    return(
    <>
        <div id="print-content">
            <Header />
            <Summary />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Certi />
            <Por />
        </div>
        <button onClick={handlePrint}>Print as PDF</button>
    </>
    )
}

export default App