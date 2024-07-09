import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useDispatch } from "react-redux";
import { addExp } from "@/features/expSlice";

import { useState } from "react";
import ExperienceGroup from "./experienceGroup";

const Experience = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    orgName: "",
    desig: "",
    duration: "",
    t1: "",
    t2: "",
    t3: "",
    techStack: "",
    link: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExp(data));
    setData({
      orgName: "",
      desig: "",
      duration: "",
      t1: "",
      t2: "",
      t3: "",
      techStack: "",
      link: "",
    });
  };

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Experience</h1>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div>
              <Label htmlFor="orgName">
                Name of Organisation <span className="text-purple-500">*</span>
              </Label>
              <Input
                type="text"
                id="orgName"
                name="orgName"
                value={data.orgName}
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
                value={data.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="desig">
              Role/Designation <span className="text-purple-500">*</span>
            </Label>
            <Input
              type="text"
              id="desig"
              name="desig"
              value={data.desig}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="t1">
              Tasks/Responsibilities{" "}
              <span className="text-purple-500 text-xs italic">
                (minimum two)
              </span>
            </Label>
            <div className="flex items-center gap-2">
              <p>1. </p>
              <Input
                type="text"
                id="t1"
                name="t1"
                value={data.t1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <p>2. </p>
              <Input
                type="text"
                id="t2"
                name="t2"
                value={data.t2}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <p>3. </p>
              <Input
                type="text"
                id="t3"
                name="t3"
                value={data.t3}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="techStack">Tech Stack</Label>
            <Input
              type="text"
              id="techStack"
              name="techStack"
              value={data.techStack}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="link">Certificates/Relevant document links</Label>
            <Input
              type="url"
              id="link"
              name="link"
              value={data.link}
              onChange={handleChange}
            />
          </div>
          <Button className="w-full" type="submit">
            Add Experience
          </Button>
        </form>
      </div>
      <ExperienceGroup/>
    </>
  );
};

export default Experience;
