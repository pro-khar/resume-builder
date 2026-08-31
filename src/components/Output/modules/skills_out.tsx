import Hr from "@/components/Hr";
import { useAppSelector } from "@/redux-beta/hooks";

function Skills_out() {
  const skills = useAppSelector((state) => state.data.skills);
  return (
    <>
      {skills.length ? (
        <div id="plain-container" className="px-8 pb-0  mb-1">
          <h1 className="font-semibold tracking-tight">SKILLS</h1>
          <Hr />

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
