import React, { useState } from "react";
import FormContext from "./formContext";

const FormContextProvider = ({children}) =>{
    const [info, setinfo] = useState('')
    const [education, seteducation] = useState('')
    const [skills, setskills] = useState('')
    return(
        <FormContext.Provider value={{info, setinfo, education, seteducation, skills, setskills}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider