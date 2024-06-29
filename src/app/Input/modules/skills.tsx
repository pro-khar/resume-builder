import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector, useDispatch } from "react-redux";
import { updateSkills } from "@/features/skillsSlice";



function Skills() {
    const dispatch = useDispatch();
  const skills = useSelector(state => state.skills);

  const handleSubmit = (e) =>{
    dispatch(updateSkills({[e.target.name]:e.target.value}))
  }

  return (
    <form className="space-y-8 max-w-md mx-auto py-10">
      <div className="flex flex-col gap-3 border-b">
        <div className="w-1/4">
          <Label htmlFor="category1">Category 1</Label>
          <Input type="text" name="category1" id="" value={skills.category1} placeholder="" onChange={handleSubmit} />
        </div>
        <div className="w-full">
          <Label htmlFor="skills1">Skills :</Label>
          <Input type="text" name="skills1" id="" value={skills.skills1} placeholder="" onChange={handleSubmit} />
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b">
        <div className="w-1/4">
          <Label htmlFor="category1">Category 2</Label>
          <Input type="text" name="category2" id="" value={skills.category2} placeholder="" onChange={handleSubmit} />
        </div>
        <div className="w-full">
          <Label htmlFor="skills2">Skills :</Label>
          <Input type="text" name="skills2" id="" value={skills.skills2} placeholder="" onChange={handleSubmit} />
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b">
        <div className="w-1/4">
          <Label htmlFor="category1">Category 3</Label>
          <Input type="text" name="category3" id="" value={skills.category3} placeholder="" onChange={handleSubmit} />
        </div>
        <div className="w-full">
          <Label htmlFor="skills3">Skills :</Label>
          <Input type="text" name="skills3" id="" value={skills.skills3} placeholder="" onChange={handleSubmit} />
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b">
        <div className="w-1/4">
          <Label htmlFor="category1">Category 4</Label>
          <Input type="text" name="category4" id="" value={skills.category4} placeholder="" onChange={handleSubmit} />
        </div>
        <div className="w-full">
          <Label htmlFor="skills4">Skills :</Label>
          <Input type="text" name="skills4" id="" value={skills.skills4} placeholder="" onChange={handleSubmit} />
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b">
        <div className="w-1/4">
          <Label htmlFor="category5">Category 5</Label>
          <Input type="text" name="category5" id="" value={skills.category5} placeholder="" onChange={handleSubmit} />
        </div>
        <div className="w-full">
          <Label htmlFor="skills5">Skills :</Label>
          <Input type="text" name="skills5" id="" value={skills.skills5} placeholder="" onChange={handleSubmit} />
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b">
        <div className="w-1/4">
          <Label htmlFor="category6">Category 6</Label>
          <Input type="text" name="category6" id="" value={skills.category6} placeholder="" onChange={handleSubmit} />
        </div>
        <div className="w-full">
          <Label htmlFor="skills6">Skills :</Label>
          <Input type="text" name="skills6" id="" value={skills.skills6} placeholder="" onChange={handleSubmit} />
        </div>
      </div>
    </form>
  );
}

export default Skills;
