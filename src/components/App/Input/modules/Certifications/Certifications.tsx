import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useDispatch } from "react-redux";
import { addCerti } from "@/redux/certSlice";

import { useState } from "react";
import Certi_group from "./Certi_group";

const Certifications = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    provider: "",
    link: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCerti(data));
    setData({
      name: "",
      provider: "",
      link: "",
      duration: "",
    });
  };

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Certifications</h1>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div>
              <Label htmlFor="name">
                Certification name <span className="text-purple-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={data.name}
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
            <Label htmlFor="provider">
              Provider/Issuer <span className="text-purple-500">*</span>
            </Label>
            <Input
              type="text"
              id="provider"
              name="provider"
              value={data.provider}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="link">Certificate/Relevant document link</Label>
            <Input
              type="url"
              id="link"
              name="link"
              value={data.link}
              onChange={handleChange}
            />
          </div>
          <Button className="w-full" type="submit">
            Add Certificate
          </Button>
        </form>
      </div>
      <Certi_group />
    </>
  );
};

export default Certifications;
