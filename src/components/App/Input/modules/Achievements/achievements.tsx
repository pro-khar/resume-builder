import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useDispatch } from "react-redux";
import { addExp } from "@/redux/expSlice";

import { useState } from "react";

const Achievements = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    position: "",
    orgName: "",
    duration: "",
    d1: "",
    d2: "",
    d3: "",
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
      position: "",
      orgName: "",
      duration: "",
      d1: "",
      d2: "",
      d3: "",
      link: "",
    });
  };

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Achievements/PoRs</h1>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div>
              <Label htmlFor="position">
                Achevement/Position <span className="text-purple-500">*</span>
              </Label>
              <Input
                type="text"
                id="position"
                name="position"
                value={data.position}
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
            <Label htmlFor="orgName">
              Organistion/Event <span className="text-purple-500">*</span>
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
            <Label htmlFor="d1">
              Bulleted details{" "}
              <span className="text-purple-500 text-xs italic">(optional)</span>
            </Label>
            <div className="flex items-center gap-2">
              <p>1. </p>
              <Input
                type="text"
                id="d1"
                name="d1"
                value={data.d1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <p>2. </p>
              <Input
                type="text"
                id="d2"
                name="d2"
                value={data.d2}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <p>3. </p>
              <Input
                type="text"
                id="d3"
                name="d3"
                value={data.d3}
                onChange={handleChange}
              />
            </div>
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
    </>
  );
};

export default Achievements;
