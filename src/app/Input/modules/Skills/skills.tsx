import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addSkill } from "@/features/skillsSlice";
import SkillsGroup from "./skillsGroup";

function Skills() {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    cat: "",
    sk: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setdata((prevData) => ({ ...prevData, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkill(data));
    setdata({ cat: "", sk: "" });
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 border p-6 rounded-md"
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
            value={data.cat}
            placeholder=""
            onChange={handleChange}
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
            value={data.sk}
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Add Skill</Button>
      </form>
      <SkillsGroup/>
    </>
  );
}

export default Skills;
