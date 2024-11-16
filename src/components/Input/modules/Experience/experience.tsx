import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "@/redux-beta/dataSlice";

import { useState } from "react";
import ExperienceGroup from "./experienceGroup";
import { Switch } from "@/components/ui/switch";
import { HelpCircle } from "lucide-react";
import { setLongExp } from "@/redux-beta/dataSlice2";
import { RootState } from "@/redux-beta/store";

export default function Experience() {
  const dispatch = useDispatch();
  const longExp = useSelector((state: RootState) => state.data2.longExp);

  const [data, setData] = useState({
    orgName: "",
    desig: "",
    duration: "",
    t1: "",
    t2: "",
    t3: "",
    t4: "",
    techStack: "",
    link: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(data));
    setData({
      orgName: "",
      desig: "",
      duration: "",
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      techStack: "",
      link: "",
    });
  };

  const [largeData, setLargeData] = useState({
    orgName: "",
    desig: "",
    duration: "",
    d1: "",
    t1_1: "",
    t1_2: "",
    t1_3: "",
    d2: "",
    t2_1: "",
    t2_2: "",
    t2_3: "",
    d3: "",
    t3_1: "",
    t3_2: "",
    t3_3: "",
    techStack: "",
    link: "",
  });

  const handleLargeChange = (e) => {
    const { id, value } = e.target;
    setLargeData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleLargeSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(largeData));
    setLargeData({
      orgName: "",
      desig: "",
      duration: "",
      d1: "",
      t1_1: "",
      t1_2: "",
      t1_3: "",
      d2: "",
      t2_1: "",
      t2_2: "",
      t2_3: "",
      d3: "",
      t3_1: "",
      t3_2: "",
      t3_3: "",
      techStack: "",
      link: "",
    });
  };

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-extralight text-2xl">Experience</h1>
          <div className="flex gap-2 items-center">
            <Label className="text-xs text-muted-foreground">Long Format</Label>
            <Switch
              onCheckedChange={() => {
                dispatch(setLongExp(!longExp));
              }}
              checked={!longExp}
            />
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
        {longExp ? (
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div>
                <Label htmlFor="orgName">
                  Name of Organisation{" "}
                  <span className="text-purple-500">*</span>
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
              <div className="flex items-center gap-2">
                <p>4. </p>
                <Input
                  type="text"
                  id="t4"
                  name="t4"
                  value={data.t4}
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
        ) : (
          <form className="space-y-2" onSubmit={handleLargeSubmit}>
            <div className="flex gap-4">
              <div>
                <Label htmlFor="orgName">
                  Name of Organisation{" "}
                  <span className="text-purple-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="l-orgName"
                  name="l-orgName"
                  value={largeData.orgName}
                  onChange={handleLargeChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input
                  type="text"
                  id="l-duration"
                  name="l-duration"
                  value={largeData.duration}
                  onChange={handleLargeChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="desig">
                Role/Designation <span className="text-purple-500">*</span>
              </Label>
              <Input
                type="text"
                id="l-desig"
                name="l-desig"
                value={largeData.desig}
                onChange={handleLargeChange}
                required
              />
            </div>
            <p className="text-sm font-medium">
              Detailed Tasks/Impacts/Actions
            </p>
            <div className="h-[200px] overflow-y-auto border rounded-md p-2 space-y-4">
              <div id="repeat" className="flex">
                <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
                  1
                </div>
                <div id="" className="bg-red- w-full">
                  <Label htmlFor="d1">
                    Description{" "}
                    <span className="text-purple-500 text-xs italic">
                      (One-line)
                    </span>
                  </Label>
                  <Input
                    id="d1"
                    name="d1"
                    value={largeData.d1}
                    onChange={handleLargeChange}
                  />
                  <Label>Detailed-breakdown/Steps</Label>{" "}
                  <span className="text-purple-500 text-xs italic">
                    (Minimum-two)
                  </span>
                  <div className="flex items-center gap-2">
                    <p>1. </p>
                    <Input
                      type="text"
                      id="t1_1"
                      name="t1_1"
                      value={largeData.t1_1}
                      onChange={handleLargeChange}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p>2. </p>
                    <Input
                      type="text"
                      id="t1_2"
                      name="t1_2"
                      value={largeData.t1_2}
                      onChange={handleLargeChange}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p>3. </p>
                    <Input
                      type="text"
                      id="t1_3"
                      name="t1_3"
                      value={largeData.t1_3}
                      onChange={handleLargeChange}
                    />
                  </div>
                </div>
              </div>
              <div id="repeat" className="flex">
                <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
                  2
                </div>
                <div id="" className="bg-red- w-full">
                  <Label htmlFor="d2">
                    Description{" "}
                    <span className="text-purple-500 text-xs italic">
                      (One-line)
                    </span>
                  </Label>
                  <Input
                    id="d2"
                    name="d2"
                    value={largeData.d2}
                    onChange={handleLargeChange}
                  />
                  <Label>Detailed-breakdown/Steps</Label>{" "}
                  <span className="text-purple-500 text-xs italic">
                    (Minimum-two)
                  </span>
                  <div className="flex items-center gap-2">
                    <p>1. </p>
                    <Input
                      type="text"
                      id="t2_1"
                      name="t2_1"
                      value={largeData.t2_1}
                      onChange={handleLargeChange}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p>2. </p>
                    <Input
                      type="text"
                      id="t2_2"
                      name="t2_2"
                      value={largeData.t2_2}
                      onChange={handleLargeChange}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p>3. </p>
                    <Input
                      type="text"
                      id="t2_3"
                      name="t2_3"
                      value={largeData.t2_3}
                      onChange={handleLargeChange}
                    />
                  </div>
                </div>
              </div>
              <div id="repeat" className="flex">
                <div className="bg-secondary rounded-full w-10 flex justify-center items-center p-1 h-full m-2 border-2">
                  3
                </div>
                <div id="" className="bg-red- w-full">
                  <Label htmlFor="d3">
                    Description{" "}
                    <span className="text-purple-500 text-xs italic">
                      (One-line)
                    </span>
                  </Label>
                  <Input
                    id="d3"
                    name="d3"
                    value={largeData.d3}
                    onChange={handleLargeChange}
                  />
                  <Label>Detailed-breakdown/Steps</Label>{" "}
                  <span className="text-purple-500 text-xs italic">
                    (Minimum-two)
                  </span>
                  <div className="flex items-center gap-2">
                    <p>1. </p>
                    <Input
                      type="text"
                      id="t3_1"
                      name="t3_1"
                      value={largeData.t3_1}
                      onChange={handleLargeChange}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p>2. </p>
                    <Input
                      type="text"
                      id="t3_2"
                      name="t3_2"
                      value={largeData.t3_2}
                      onChange={handleLargeChange}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p>3. </p>
                    <Input
                      type="text"
                      id="t3_3"
                      name="t3_3"
                      value={largeData.t3_3}
                      onChange={handleLargeChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="techStack">Tech Stack</Label>
              <Input
                type="text"
                id="l-techStack"
                name="l-techStack"
                value={largeData.techStack}
                onChange={handleLargeChange}
              />
            </div>
            <div>
              <Label htmlFor="link">Certificates/Relevant document links</Label>
              <Input
                type="url"
                id="l-link"
                name="l-link"
                value={largeData.link}
                onChange={handleLargeChange}
              />
            </div>
            <Button className="w-full" type="submit">
              Add Experience
            </Button>
          </form>
        )}
      </div>
      <ExperienceGroup />
    </>
  );
}
