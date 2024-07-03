import OutputGroup from "@/app/Output/OutputGroup"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BiFullscreen } from "react-icons/bi"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function FullScreen() {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="default"><BiFullscreen size={17} /></Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Fullscreen View</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="h-full w-[fit-content]">
        <OutputGroup/>
      </DialogContent>
    </Dialog>
  )
}