import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "@/redux/projectSlice";

import { RootState } from "@/redux/store";
import { useState } from "react";
import ProjectsGroup from "./projectsGroup";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    title: "",
    duration: "",
    desc: "",
    f1: "",
    f2: "",
    f3: "",
    link: "",
    techStack: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProject(data));
    setData({
      title: "",
      duration: "",
      desc: "",
      f1: "",
      f2: "",
      f3: "",
      link: "",
      techStack: "",
    });
  };

  return (
    <>
      <div className="max-w-md mt-4 mx-auto border rounded-md p-6">
        <h1 className="font-extralight text-2xl mb-4">Projects</h1>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div>
              <Label htmlFor="title">
                Title <span className="text-purple-500">*</span>
              </Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={data.title}
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
            <Label htmlFor="desc">
              One-line description <span className="text-purple-500">*</span>
            </Label>
            <Input
              type="text"
              id="desc"
              name="desc"
              value={data.desc}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="f1">
              Features{" "}
              <span className="text-purple-500 text-xs italic">
                (minimum two)
              </span>
            </Label>
            <div className="flex items-center gap-2">
              <p>1. </p>
              <Input
                type="text"
                id="f1"
                name="f1"
                value={data.f1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <p>2. </p>
              <Input
                type="text"
                id="f2"
                name="f2"
                value={data.f2}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <p>3. </p>
              <Input
                type="text"
                id="f3"
                name="f3"
                value={data.f3}
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
            <Label htmlFor="link">Deployment / repository link</Label>
            <Input
              type="url"
              id="link"
              name="link"
              value={data.link}
              onChange={handleChange}
            />
          </div>
          <Button className="w-full" type="submit">
            Add Project
          </Button>
        </form>
      </div>
      <ProjectsGroup />
    </>
  );
};

export default Projects;
