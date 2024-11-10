import { RootState } from "@/redux/store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function Skills_out() {
  const skills = useSelector((state: RootState) => state.skills.skills);
  return (
    <>
      {skills.length ? (
        <div id="plain-container" className="px-8 pb-0 dark:text-white mb-1">
          <h1 className="font-semibold tracking-tight">SKILLS</h1>
          <hr className="border-black border-t dark:border-white" />

          <div
            id="part_container"
            className="flex flex-col gap-[4px] leading-[1.2] mt-1"
          >
            <div className="mx-4">
              {skills.map((skill) => (
                <li key={skill.id}>
                  <span className="font-bold">{skill.cat}</span>
                  <span> - </span>
                  <span>{skill.sk}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Skills_out;
