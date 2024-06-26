import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './components/ui/resizable'
import TopBar from './app/Topbar/TopBar'
import Morescreen from './app/morescreen'
import InputGroup from './app/Input/InputGroup'

function App() {
  return (
    <>
    <Morescreen/>
    <div id='base' className='hidden md:block xl:block 2xl:block m-3 rounded-md border'>
      <TopBar/>
      
     
      <ResizablePanelGroup direction='horizontal' className='h-[95%]'>
        <ResizablePanel className='h-[95%]'>
          <InputGroup/>
        </ResizablePanel>
        <ResizableHandle className='h-[95%]'/>
        <ResizablePanel className='h-[95%]'>
          Output
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
    </>
  )
}

export default App