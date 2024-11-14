import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { updateEducation } from "@/redux-beta/dataSlice";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux-beta/store";

function Education() {
  const education = useSelector((state: RootState) => state.data.education);
  const [localEducation, setLocalEducation] = useState(education);
  const dispatch = useDispatch();

  function handleChange(e) {
    setLocalEducation({ ...localEducation, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateEducation(localEducation));
  }

  return (
    <form
      className="space-y-3 max-w-md mx-auto relative"
      onSubmit={handleSubmit}
    >
      <div className="space-y-4 p-6 border rounded-md shadow-md">
        <h2 className="text-xl font-bold">Graduation/Equivalent</h2>
        <div>
          <Label htmlFor="degree">
            Degree <span className="text-purple-500">*</span>
          </Label>
          <Input
            id="degree"
            value={localEducation.degree}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div>
          <Label htmlFor="branch">
            Branch <span className="text-purple-500">*</span>
          </Label>
          <Input
            id="branch"
            value={localEducation.branch}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div>
          <Label htmlFor="college">
            Institution <span className="text-purple-500">*</span>
          </Label>
          <Input
            id="college"
            value={localEducation.college}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="bachelor_duration">
              Duration <span className="text-purple-500">*</span>
            </Label>
            <Input
              id="bachelor_duration"
              type="text"
              value={localEducation.bachelor_duration}
              onChange={handleChange}
              placeholder="eg: 2017 - 2019"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="bachelor_score">
            CGPA/Percentage <span className="text-purple-500">*</span>
          </Label>
          <Input
            id="bachelor_score"
            value={localEducation.bachelor_score}
            onChange={handleChange}
            placeholder="CGPA/Percentage"
          />
        </div>
      </div>

      <div className="border p-6 rounded-md shadow-md">
        <p className="text-xs text-zinc-500 py-2">
          Leave these fields blank if you don't want to include them :
        </p>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Class 12th (Intermediate)</h2>
          <div>
            <Label htmlFor="int_school">School</Label>
            <Input
              id="int_school"
              value={localEducation.int_school}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div>
            <Label htmlFor="int_year">Year</Label>
            <Input
              id="int_year"
              value={localEducation.int_year}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div>
            <Label htmlFor="int_score">Percentage</Label>
            <Input
              id="int_score"
              value={localEducation.int_score}
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <h2 className="text-xl font-bold">Class 10th (Highschool)</h2>
          <div>
            <Label htmlFor="hs_school">School</Label>
            <Input
              id="hs_school"
              value={localEducation.hs_school}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div>
            <Label htmlFor="hs_year">Year</Label>
            <Input
              id="hs_year"
              value={localEducation.hs_year}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div>
            <Label htmlFor="hs_score">Percentage</Label>
            <Input
              id="hs_score"
              value={localEducation.hs_score}
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="absolute top-0 right-5">
        Save
      </Button>
    </form>
  );
}

export default Education;
