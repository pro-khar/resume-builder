import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

import Header from './modules/header.jsx'
import Summary from './modules/summary.jsx'
import Education from './modules/education.jsx'
import Skills from './modules/skills.jsx'
import Projects from './modules/projects.jsx'
import Experience from './modules/experience.jsx'
import Por from './modules/por.jsx'
import App from './app.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='root'>
    <App />
  </div>
)
