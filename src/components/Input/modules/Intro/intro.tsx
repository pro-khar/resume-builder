import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIntro } from "@/redux-beta/dataSlice";
import SaveButton from "@/components/SaveButton";
import { RootState } from "@/redux-beta/store";
import { Trash } from "lucide-react";

function Intro() {
  const intro = useSelector((state: RootState) => state.data.intro);
  const [localIntro, setLocalIntro] = useState(intro);
  const dispatch = useDispatch();

  function handleChange(e) {
    setLocalIntro({ ...localIntro, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setLocalIntro({ ...localIntro, picture: imageData });
      };
      reader.readAsDataURL(file);
    }
  }

  function handleDeleteImage() {
    setLocalIntro({ ...localIntro, picture: null });
    dispatch(updateIntro({ ...localIntro, picture: null }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateIntro(localIntro));
  }

  return (
    <form
      className="space-y-5 max-w-md mx-auto h-full mt-4 p-6 border rounded-md relative"
      onSubmit={handleSubmit}
    >
      <h1 className="font-extralight text-2xl">Introduction</h1>

      <div>
        <Label htmlFor="name">
          Name <span className="text-purple-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          value={localIntro.name}
          onChange={handleChange}
          placeholder="Enter your Full Name"
        />
      </div>
      <div>
        <Label htmlFor="profile">Profile</Label>
        <Input
          id="profile"
          name="profile"
          value={localIntro.profile}
          onChange={handleChange}
          placeholder="e.g.:Backend Developer"
        />
      </div>
      <div>
        <Label htmlFor="email">
          Email <span className="text-purple-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={localIntro.email}
          placeholder="someone@example.com"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <div className="w-[40%]">
          <Label htmlFor="phone">
            Phone Number <span className="text-purple-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="text"
            value={localIntro.phone}
            onChange={handleChange}
          />
        </div>
        <div className="w-[60%]">
          <Label htmlFor="picture">Picture</Label>
          <div className="flex gap-2">
            <Input
              type="file"
              accept="image/*"
              className="file:dark:text-white"
              onChange={handleImage}
            />
            {localIntro.picture && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={handleDeleteImage}
                className="shrink-0"
              >
                <Trash className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="address">
          Address/Location <span className="text-purple-500">*</span>
        </Label>
        <Input
          id="address"
          name="address"
          value={localIntro.address}
          placeholder="451, Hotel, Transylvania"
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="github">GitHub Profile</Label>
        <Input
          id="github"
          name="github"
          type="url"
          value={localIntro.github}
          onChange={handleChange}
          placeholder="https://github.com/username"
        />
      </div>

      <div>
        <Label htmlFor="linkedin">
          LinkedIn Profile <span className="text-purple-500">*</span>
        </Label>
        <Input
          id="linkedin"
          name="linkedin"
          type="url"
          value={localIntro.linkedin}
          onChange={handleChange}
          placeholder="linkedIn profile URL"
        />
      </div>

      <div>
        <Label htmlFor="summary">Short Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={localIntro.summary}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <SaveButton />
    </form>
  );
}

export default Intro;
