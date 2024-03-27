import React, { useState } from "react";
import FormContext from "./formContext";

const FormContextProvider = ({children}) =>{
    const [info, setinfo] = useState('')
    return(
        <FormContext.Provider value={{info, setinfo}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider