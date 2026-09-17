import Hr from "@/components/Hr";
import { useAppSelector } from "@/redux-beta/hooks";
import { RichText } from "@/components/RichText/RichText";

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
                  <RichText as="span" className="font-bold" html={skill.cat} />
                  <span> - </span>
                  <RichText as="span" html={skill.sk} />
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
