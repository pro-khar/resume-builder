import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Intro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    github: '',
    linkedin: '',
    phone: '',
    summary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server or perform other actions
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="address">Address/Location</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="github">GitHub Profile</Label>
        <Input
          id="github"
          name="github"
          type="url"
          value={formData.github}
          onChange={handleChange}
          placeholder="https://github.com/username"
        />
      </div>

      <div>
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <Input
          id="linkedin"
          name="linkedin"
          type="url"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://www.linkedin.com/in/username"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="summary">Short Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Intro;