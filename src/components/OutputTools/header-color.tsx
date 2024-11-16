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

const colors = [
  "#e5e7eb",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F06292",
  "#AED581",
  "#7986CB",
  "#FFD54F",
  "#4DB6AC",
  "#9575CD",
  "#4FC3F7",
  "#FFF176",
  "#FF8A65",
  "#A1887F",
  "#90A4AE",
  "#81C784",
  "#64B5F6",
  "#FFB74D",
  "#E57373",
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
