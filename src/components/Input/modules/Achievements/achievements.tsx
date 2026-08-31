import { SectionForm } from "@/components/Input/generic/SectionForm";
import { SectionList } from "@/components/Input/generic/SectionList";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import { addAch, removeAch, updateAch } from "@/redux-beta/dataSlice";
import { achievementSchema } from "./achievements.schema";

const Achievements = () => {
  const dispatch = useAppDispatch();
  const achievements = useAppSelector((state) => state.data.ach);

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Achievements/PoRs</h1>
        <SectionForm
          schema={achievementSchema}
          onSubmit={(draft) => dispatch(addAch(draft))}
        />
      </div>
      <SectionList
        schema={achievementSchema}
        items={achievements}
        onUpdate={(item) => dispatch(updateAch(item))}
        onRemove={(id) => dispatch(removeAch(id))}
      />
    </>
  );
};

export default Achievements;
