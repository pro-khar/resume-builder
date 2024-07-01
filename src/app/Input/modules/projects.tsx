import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "@/features/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const handleChange = (e) => {
    dispatch(updateProject({ [e.target.id]: e.target.value }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-md p-6">
      <form className="space-y-4">
        <div>
          <Label htmlFor="projectTitle">Project Title</Label>
          <Input
            type="text"
            id="projectTitle"
            name="projectTitle"
            value={projects.title1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="projectDuration">Project Duration</Label>
          <Input
            type="text"
            id="projectDuration"
            name="projectDuration"
            value={projects.duration1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="description">One-line Description</Label>
          <Input
            type="text"
            id="description"
            name="description"
            value={projects.desc1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="feature1">Feature 1</Label>
          <Input
            type="text"
            id="feature1"
            name="feature1"
            value={projects.feature1_1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="feature2">Feature 2</Label>
          <Input
            type="text"
            id="feature2"
            name="feature2"
            value={projects.feature1_2}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="feature3">Feature 3</Label>
          <Input
            type="text"
            id="feature3"
            name="feature3"
            value={projects.feature1_3}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="techStack">Tech Stack</Label>
          <Input
            type="text"
            id="techStack"
            name="techStack"
            value={projects.techStack1}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Projects;
