import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './components/ui/resizable'
import TopBar from './app/Topbar/TopBar'

function App() {
  return (
    <>
    <div className='md:hidden xl:hidden 2xl:hidden'>Needs more Screen</div>
    <div id='base' className='hidden md:block xl:block 2xl:block'>
      <TopBar/>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel>
          Input
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel>
          Output
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
    </>
  )
}

export default App