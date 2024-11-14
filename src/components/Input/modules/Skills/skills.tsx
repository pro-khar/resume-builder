import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addSkill } from "@/redux/skillsSlice";
import SkillsGroup from "./skillsGroup";
import SaveButton from "@/components/SaveButton";
import { updateSkills } from "@/redux-beta/dataSlice";
import { nanoid } from "@reduxjs/toolkit";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState({
    id: nanoid(),
    cat: "",
    sk: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSkills((prevSkills) => [...prevSkills, skill]);
    setSkill({ id: nanoid(), cat: "", sk: "" });
    dispatch(updateSkills(skills));
  }
  
  return (
    <>
      <form
        className="flex flex-col gap-3 border p-6 rounded-md max-w-md mx-auto mt-4 relative"
        onSubmit={handleSubmit}
      >
        <h1 className="font-extralight text-2xl">Skills</h1>

        <div className="w-full ">
          <Label htmlFor="cat">
            Category name <span className="text-purple-500">*</span>
          </Label>
          <Input
            type="text"
            name="cat"
            id="cat"
            value={skill.cat}
            placeholder="Databases"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full ">
          <Label htmlFor="sk">
            Skills <span className="text-purple-500">*</span>
          </Label>
          <Input
            type="text"
            name="sk"
            id="sk"
            value={skill.sk}
            placeholder="mySQL, Cassandra, MongoDB"
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" onClick={addSkill}>
          Add Skill
        </Button>
        <SaveButton />
      </form>
      <SkillsGroup />
    </>
  );
}

export default Skills;
