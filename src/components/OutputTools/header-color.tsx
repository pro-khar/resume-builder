"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import { setHeaderColor } from "@/redux-beta/lookSlice";
("#e5e7eb");
const colors = [
  "#FFFFFF",
  "#e5e7eb",
  "#B8E3F0",
  "#FFD4C4",
  "#CBE9E2",
  "#FFC4DA",
  "#D8EBC1",
  "#C5CAE9",
  "#FFF0C4",
  "#B2E0DB",
  "#D4C4E8",
  "#B3E5FC",
  "#FFF9C4",
  "#FFD3C4",
  "#D7CCC8",
  "#CFD8DC",
  "#C8E6C9",
  "#BBDEFB",
  "#FFE0B2",
  "#FFCDD2",
];

export default function HeaderColorPicker() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const dispatch = useDispatch();
  const color_from_state = useSelector(
    (state: RootState) => state.looks.headerColor
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="" style={{ backgroundColor: color_from_state }}>
          <span className="sr-only">Pick a color</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className="w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-blue-500"
              style={{ backgroundColor: color }}
              onClick={() => {
                setSelectedColor(color);
                dispatch(setHeaderColor(color));
                console.log("header color:" + color_from_state);
              }}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
