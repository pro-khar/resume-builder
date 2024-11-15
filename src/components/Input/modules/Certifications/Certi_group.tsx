import { useSelector, useDispatch } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux-beta/store";
import {
  removeCertification,
  updateCertification,
} from "@/redux-beta/dataSlice";
import { Button } from "@/components/ui/button";
import { Pencil, TrashIcon } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function Certi_group() {
  const dispatch = useDispatch();
  const certificate = useSelector(
    (state: RootState) => state.data.certifications
  );

  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleChange = (e) => {
    setSelectedCertification({
      ...selectedCertification,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCertification(selectedCertification));
    setSelectedCertification(null);
  };

  const handleEditClick = (certificate) => {
    setSelectedCertification(certificate);
  };

  return (
    <>
      <ScrollArea className="h-[400px]">
        {certificate.length ? (
          <div className="mt-5">
            {certificate.map((cer) => (
              <div
                key={cer.id}
                className="max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
              >
                <p className="font-extralight">{cer.name}</p>
                <div className="flex gap-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="px-3"
                        onClick={() => handleEditClick(cer)}
                      >
                        <Pencil className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Certification</DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        <form className="space-y-2" onSubmit={handleSubmit}>
                          <div className="flex gap-4">
                            <div>
                              <Label htmlFor="name">
                                Certification name{" "}
                                <span className="text-purple-500">*</span>
                              </Label>
                              <Input
                                type="text"
                                id="name"
                                name="name"
                                value={selectedCertification?.name || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="duration">Duration</Label>
                              <Input
                                type="text"
                                id="duration"
                                name="duration"
                                value={selectedCertification?.duration || ""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="provider">
                              Provider/Issuer{" "}
                              <span className="text-purple-500">*</span>
                            </Label>
                            <Input
                              type="text"
                              id="provider"
                              name="provider"
                              value={selectedCertification?.provider || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="link">
                              Certificate/Relevant document link
                            </Label>
                            <Input
                              type="url"
                              id="link"
                              name="link"
                              value={selectedCertification?.link || ""}
                              onChange={handleChange}
                            />
                          </div>
                          <Button className="w-full" type="submit">
                            Add Certificate
                          </Button>
                        </form>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="px-3"
                    onClick={(e) => dispatch(removeCertification(cer.id))}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5">
            <p>Add a Certification to continue</p> <ArrowUp />
          </div>
        )}
      </ScrollArea>
    </>
  );
}

export default Certi_group;
