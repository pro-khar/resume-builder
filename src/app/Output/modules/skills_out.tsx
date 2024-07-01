import { ScrollArea } from "@/components/ui/scroll-area";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function Skills_out() {
  const skills = useSelector((state) => state.skills);
  return (
    <>
      <div
        id="plain-container"
        className="px-5 py-3 text-xs pb-0 dark:text-white"
      >
        <h1 className="font-semibold tracking-tight">SKILLS</h1>
        <hr className="border-black border-t dark:border-white" />

        <div id="part_container" className="flex flex-col gap-[4px]">
          <ul className="px-2 list-disc list-inside">
            <li>
              <span className="font-bold">
                {skills.category1 ? skills.category1 : "Category"}
              </span>{" "}
              -{" "}
              <span>
                {skills.skills1 ? skills.skills1 : "Skills, Skills, Skills"}
              </span>
            </li>
            <li>
              <span className="font-bold">
                {skills.category2 ? skills.category2 : "Category"}
              </span>{" "}
              -{" "}
              <span>
                {skills.skills2 ? skills.skills2 : "Skills, Skills, Skills"}
              </span>
            </li>
            <li>
              <span className="font-bold">
                {skills.category3 ? skills.category3 : "Category"}
              </span>{" "}
              -{" "}
              <span>
                {skills.skills3 ? skills.skills3 : "Skills, Skills, Skills"}
              </span>
            </li>
            <li>
              <span className="font-bold">
                {skills.category4 ? skills.category4 : "Category"}
              </span>{" "}
              -{" "}
              <span>
                {skills.skills4 ? skills.skills4 : "Skills, Skills, Skills"}
              </span>
            </li>
            <li>
              <span className="font-bold">
                {skills.category5 ? skills.category5 : "Category"}
              </span>{" "}
              -{" "}
              <span>
                {skills.skills5 ? skills.skills5 : "Skills, Skills, Skills"}
              </span>
            </li>
            <li>
              <span className="font-bold">
                {skills.category6 ? skills.category6 : "Category"}
              </span>{" "}
              -{" "}
              <span>
                {skills.skills6 ? skills.skills6 : "Skills, Skills, Skills"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills_out;