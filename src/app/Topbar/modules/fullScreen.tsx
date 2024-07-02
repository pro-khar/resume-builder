import OutputGroup from "@/app/Output/OutputGroup"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BiFullscreen } from "react-icons/bi"

export function FullScreen() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default"><BiFullscreen/></Button>
      </DialogTrigger>
      <DialogContent className="h-full w-[fit-content]">
        
        <OutputGroup/>
        
      </DialogContent>
    </Dialog>
  )
}
