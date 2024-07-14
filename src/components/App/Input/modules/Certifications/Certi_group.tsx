import { useSelector, useDispatch } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux/store";
import { deleteCerti } from "@/redux/certSlice";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { ArrowUp } from "lucide-react";

function Certi_group() {
  const dispatch = useDispatch();
  const certificate = useSelector((state: RootState) => state.certi.certi); //CP1
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
                  <Button
                    className="px-3"
                    onClick={(e) => dispatch(deleteCerti(cer.id))}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (<div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5"><p>Add a Certification to continue</p> <ArrowUp/></div>)}
      </ScrollArea>
    </>
  );
}

export default Certi_group;
