import { useState } from "react"
import Part from "./submodules/part"
function Class1(){
    const [component, setComponent] = useState([<Part key={0}/>])
    
    const addPart = () =>{
        if(component.length!=3){
            setComponent([...component, <Part key={component.length}/>])
        // console.log("Number of components:", component.length + 1);
        }
        if(component.length==3)    alert("Maximum components reached")
    }

    const removePart = () => {
        if (component.length != 0) {
            const updatedComponent = component.slice(0, component.length - 1);
            setComponent(updatedComponent);
            component.length--;
            // console.log("Number of components:", component.length);
          }
    }

    return(
        <>
            <div id = "plain-container" className="px-5 py-3 text-xs pb-0">
            <div className="flex gap-2 justify-between group">
                <h1 className="font-semibold tracking-tight">CLASS1 SECTION TITLE</h1>  
                
                <div id="button-container" className="flex">
                    <button className="hidden px-2 group-hover:block hover:bg-gray-400 active:bg-gray-300"
                    onClick={addPart}>
                    +</button>
                    
                    <button className="hidden px-2 group-hover:block hover:bg-gray-400 active:bg-gray-300"
                    onClick={removePart} disabled={component.length===1}>
                    -</button> 
                </div>
                    
            </div>
                
                <hr className="border-black border-t"/>
    
    
                {component.map((component, index)=>(
                    <div key={index}>{component}</div>
                ))}
            </div>
        </>
    )
}
export default Class1