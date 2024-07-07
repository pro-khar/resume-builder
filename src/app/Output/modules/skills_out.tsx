import { RootState } from "@/app/store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function Skills_out() {
  const skills = useSelector((state: RootState) => state.skills);
  return (
    <>
      {skills.category1 ? (
        <div id="plain-container" className="px-8 pb-0 dark:text-white">
          <h1 className="font-semibold tracking-tight">SKILLS</h1>
          <hr className="border-black border-t dark:border-white" />

          <div
            id="part_container"
            className="flex flex-col gap-[4px] leading-[1.2]"
          >
            <div className="mx-4 mt-1">
              {skills.category1 ? (
                <li>
                  <span className="font-semibold">
                    {skills.category1 ? skills.category1 : null}
                  </span>{" "}
                  - <span>{skills.skills1 ? skills.skills1 : null}</span>
                </li>
              ) : null}
              {skills.category2 ? (
                <li>
                  <span className="font-semibold">
                    {skills.category2 ? skills.category2 : null}
                  </span>{" "}
                  - <span>{skills.skills2 ? skills.skills2 : null}</span>
                </li>
              ) : null}
              {skills.category3 ? (
                <li>
                  <span className="font-semibold">
                    {skills.category3 ? skills.category3 : null}
                  </span>{" "}
                  - <span>{skills.skills3 ? skills.skills3 : null}</span>
                </li>
              ) : null}
              {skills.category4 ? (
                <li>
                  <span className="font-semibold">
                    {skills.category4 ? skills.category4 : null}
                  </span>{" "}
                  - <span>{skills.skills4 ? skills.skills4 : null}</span>
                </li>
              ) : null}
              {skills.category5 ? (
                <li>
                  <span className="font-semibold">
                    {skills.category5 ? skills.category5 : null}
                  </span>{" "}
                  - <span>{skills.skills5 ? skills.skills5 : null}</span>
                </li>
              ) : null}
              {skills.category6 ? (
                <li>
                  <span className="font-semibold">
                    {skills.category6 ? skills.category6 : null}
                  </span>{" "}
                  - <span>{skills.skills6 ? skills.skills6 : null}</span>
                </li>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Skills_out;
