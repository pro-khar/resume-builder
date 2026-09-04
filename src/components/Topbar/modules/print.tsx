import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaPrint } from "react-icons/fa";
import { useAppSelector } from "@/redux-beta/hooks";

function Print() {
  const intro = useAppSelector((state) => state.data.intro);
  function handlePrint() {
    window.print();
  }

  return (
    <div>
      {intro ? (
        <Button onClick={handlePrint}>
          <FaPrint />
        </Button>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button onClick={handlePrint} disabled>
                  <FaPrint />
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Bhai pehle bana to le :)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}

export default Print;
