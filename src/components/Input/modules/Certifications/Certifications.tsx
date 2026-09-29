import { SectionEditor } from "@/components/Input/generic/SectionEditor";
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
    <SectionEditor
      schema={certificationSchema}
      header={<h1 className="font-extralight text-2xl mb-4">Certifications</h1>}
      items={certifications}
      onAdd={(draft) => dispatch(addCertification(draft))}
      onUpdate={(item) => dispatch(updateCertification(item))}
      onRemove={(id) => dispatch(removeCertification(id))}
    />
  );
};

export default Certifications;
