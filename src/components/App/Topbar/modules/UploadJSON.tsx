import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { uploadJSONAndUpdateState } from "@/redux/store";
import { FolderOpen } from "lucide-react";

export default function UploadJSON() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <FolderOpen />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Label htmlFor="file-upload">Upload JSON</Label>
        <Input
          type="file"
          name="file-upload"
          accept=".json"
          onChange={(e) => {
            uploadJSONAndUpdateState(e.target.files[0]);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
