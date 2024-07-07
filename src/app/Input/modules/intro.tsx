import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";

import { useSelector, useDispatch } from 'react-redux';
import { updateIntro } from '@/features/introSlice';
import { RootState } from '@/app/store';

function Intro(){
  const dispatch = useDispatch();
  const intro = useSelector((state:RootState) => state.intro);

  

  const handleChange = (e) => {
   
    dispatch(updateIntro({[e.target.name] : e.target.value}))
  }

 


  return (
    <form className="space-y-5 max-w-md mx-auto h-full my-10 p-6 border rounded-md">
      <h1 className="font-extralight text-2xl">Introduction</h1>
      <div>
        <Label htmlFor="name">Name <span className="text-purple-500">*</span></Label>
        <Input
          id="name"
          name="name"
          value={intro.name}
          onChange={handleChange}
          placeholder='Enter your Full Name'
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email <span className="text-purple-500">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={intro.email}
          placeholder='someone@example.com'
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="address">Address/Location <span className="text-purple-500">*</span></Label>
        <Input
          id="address"
          name="address"
          value={intro.address}
          placeholder='451, Hotel, Transylvania'
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
          value={intro.github}
          onChange={handleChange}
          placeholder="https://github.com/username"
        />
      </div>

      <div>
        <Label htmlFor="linkedin">LinkedIn Profile <span className="text-purple-500">*</span></Label>
        <Input
          id="linkedin"
          name="linkedin"
          type="url"
          value={intro.linkedin}
          onChange={handleChange}
          placeholder="linkedIn profile URL"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number <span className="text-purple-500">*</span></Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          value={intro.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="summary">Short Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={intro.summary}
          onChange={handleChange}
          rows={4}
        />
      </div>
    </form>
  );
};

export default Intro;