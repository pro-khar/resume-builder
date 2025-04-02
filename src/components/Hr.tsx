import { useSelector } from "react-redux";
import { RootState } from "../redux-beta/store";

export default function Hr() {
  const showLine = useSelector((state: RootState) => state.looks.showLine);

  return (
    <hr className={`border-black border-t ${showLine ? "block" : "hidden"}`} />
  );
}
