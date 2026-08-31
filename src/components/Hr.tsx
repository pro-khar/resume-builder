import { useAppSelector } from "../redux-beta/hooks";

export default function Hr() {
  const showLine = useAppSelector((state) => state.looks.showLine);

  return (
    <hr className={`border-black border-t ${showLine ? "block" : "hidden"}`} />
  );
}
