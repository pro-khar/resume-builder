import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

import Header from './header.jsx'
import Summary from './summary.jsx'
import Education from './education.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'
import Experience from './experience'
import Por from './por'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='root'>
    <Header />
    <Summary />
    <Education />
    <Skills />
    <Projects />
    <Experience />
    <Por />
  </div>
)
