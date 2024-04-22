import { createContext } from "react";

interface FormContextValue {
  info: string;
  setinfo: React.Dispatch<React.SetStateAction<string>>;
  education: string;
  seteducation: React.Dispatch<React.SetStateAction<string>>;
  skills: string;
  setskills: React.Dispatch<React.SetStateAction<string>>;
}

const FormContext = createContext<FormContextValue | null>(null);

export default FormContext;