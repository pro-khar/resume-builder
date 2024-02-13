import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './app.jsx'
import MenuBar from './menubar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <MenuBar />
    <div className='root' style={{
  background: "#333", backgroundImage: "linear-gradient(rgba(75, 75, 75, 0.7) .1em, transparent .1em), linear-gradient(90deg, rgba(67, 67, 67, 0.7) .1em, transparent .1em)",
backgroundSize: "2.5em 2.5em"}}>
    
    
    <App />
  </div>
  </>
  
)
 