"use client";

import ColorPicker from "@/components/ui/color-picker";
import { setHeaderColor } from "@/redux-beta/lookSlice";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";

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
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.looks.headerColor);

  return (
    <ColorPicker
      colors={colors}
      color={color}
      onChange={(next) => dispatch(setHeaderColor(next))}
      triggerLabel="Pick a header color"
      hexInputLabel="Custom header hex color"
    />
  );
}
