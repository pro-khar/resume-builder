import { SectionEditor } from "@/components/Input/generic/SectionEditor";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { addAch, removeAch, updateAch } from "@/redux-beta/dataSlice";
import { achievementSchema } from "./achievements.schema";

const Achievements = () => {
  const dispatch = useAppDispatch();
  const achievements = useAppSelector((state) => state.data.ach);

  return (
    <SectionEditor
      schema={achievementSchema}
      header={
        <h1 className="font-extralight text-2xl mb-4">Achievements/PoRs</h1>
      }
      items={achievements}
      onAdd={(draft) => dispatch(addAch(draft))}
      onUpdate={(item) => dispatch(updateAch(item))}
      onRemove={(id) => dispatch(removeAch(id))}
    />
  );
};

export default Achievements;
