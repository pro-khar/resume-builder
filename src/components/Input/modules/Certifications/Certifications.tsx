import { SectionForm } from "@/components/Input/generic/SectionForm";
import { SectionList } from "@/components/Input/generic/SectionList";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";
import {
  addCertification,
  removeCertification,
  updateCertification,
} from "@/redux-beta/dataSlice";
import { certificationSchema } from "./certifications.schema";

const Certifications = () => {
  const dispatch = useAppDispatch();
  const certifications = useAppSelector((state) => state.data.certifications);

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Certifications</h1>
        <SectionForm
          schema={certificationSchema}
          onSubmit={(draft) => dispatch(addCertification(draft))}
        />
      </div>
      <SectionList
        schema={certificationSchema}
        items={certifications}
        onUpdate={(item) => dispatch(updateCertification(item))}
        onRemove={(id) => dispatch(removeCertification(id))}
      />
    </>
  );
};

export default Certifications;
