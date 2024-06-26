import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Education = () => {
  const [formData, setFormData] = useState({
    bachelor: {
      degree: '',
      institution: '',
      startDate: '',
      endDate: '',
      details: '',
      cgpa: ''
    },
    intermediate: {
      school: '',
      year: '',
      percentage: ''
    },
    highschool: {
      school: '',
      year: '',
      percentage: ''
    }
  });

  const handleChange = (section, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value
      }
    }));
  };

  return (
    <form className="space-y-8 max-w-2xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Bachelor of Technology</h2>
        <div>
          <Label htmlFor="bachelor-degree">Degree</Label>
          <Input
            id="bachelor-degree"
            value={formData.bachelor.degree}
            onChange={(e) => handleChange('bachelor', 'degree', e.target.value)}
            placeholder="e.g. Electronics and Communication Engineering"
          />
        </div>
        <div>
          <Label htmlFor="bachelor-institution">Institution</Label>
          <Input
            id="bachelor-institution"
            value={formData.bachelor.institution}
            onChange={(e) => handleChange('bachelor', 'institution', e.target.value)}
            placeholder="e.g. Jaypee Institute of Information Technology, Noida"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="bachelor-start-date">Start Date</Label>
            <Input
              id="bachelor-start-date"
              type="month"
              value={formData.bachelor.startDate}
              onChange={(e) => handleChange('bachelor', 'startDate', e.target.value)}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="bachelor-end-date">End Date</Label>
            <Input
              id="bachelor-end-date"
              type="month"
              value={formData.bachelor.endDate}
              onChange={(e) => handleChange('bachelor', 'endDate', e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="bachelor-cgpa">CGPA</Label>
          <Input
            id="bachelor-cgpa"
            value={formData.bachelor.cgpa}
            onChange={(e) => handleChange('bachelor', 'cgpa', e.target.value)}
            placeholder="e.g. 6.5"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Intermediate</h2>
        <div>
          <Label htmlFor="intermediate-school">School</Label>
          <Input
            id="intermediate-school"
            value={formData.intermediate.school}
            onChange={(e) => handleChange('intermediate', 'school', e.target.value)}
            placeholder="e.g. Sacred Heart Higher Secondary School, Sitapur"
          />
        </div>
        <div>
          <Label htmlFor="intermediate-year">Year</Label>
          <Input
            id="intermediate-year"
            value={formData.intermediate.year}
            onChange={(e) => handleChange('intermediate', 'year', e.target.value)}
            placeholder="e.g. 2018 - 2019"
          />
        </div>
        <div>
          <Label htmlFor="intermediate-percentage">Percentage</Label>
          <Input
            id="intermediate-percentage"
            value={formData.intermediate.percentage}
            onChange={(e) => handleChange('intermediate', 'percentage', e.target.value)}
            placeholder="e.g. 64 %"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Highschool</h2>
        <div>
          <Label htmlFor="highschool-school">School</Label>
          <Input
            id="highschool-school"
            value={formData.highschool.school}
            onChange={(e) => handleChange('highschool', 'school', e.target.value)}
            placeholder="e.g. Sacred Heart Inter College, Sitapur"
          />
        </div>
        <div>
          <Label htmlFor="highschool-year">Year</Label>
          <Input
            id="highschool-year"
            value={formData.highschool.year}
            onChange={(e) => handleChange('highschool', 'year', e.target.value)}
            placeholder="e.g. 2016 - 2017"
          />
        </div>
        <div>
          <Label htmlFor="highschool-percentage">Percentage</Label>
          <Input
            id="highschool-percentage"
            value={formData.highschool.percentage}
            onChange={(e) => handleChange('highschool', 'percentage', e.target.value)}
            placeholder="e.g. 84 %"
          />
        </div>
      </div>
    </form>
  );
};

export default Education;