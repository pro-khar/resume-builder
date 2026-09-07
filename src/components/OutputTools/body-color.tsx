"use client";

import ColorPicker from "@/components/ui/color-picker";
import { setBodyColor } from "@/redux-beta/lookSlice";
import { useAppDispatch, useAppSelector } from "@/redux-beta/hooks";

// Same palette as before, each color composited at 50% opacity over white
// (rgb*0.5 + 255*0.5) for a lighter set — the resume body is an opaque
// background, so this bakes the "50% opacity" look into a flat hex rather
// than applying real CSS opacity, which would make the swatch's applied
// color not match what's shown.
const colors = [
  "#FFFFFF",
  "#D9F5F2",
  "#DCF1F8",
  "#FFEAE2",
  "#E5F4F1",
  "#FFE2ED",
  "#ECF5E0",
  "#E2E5F4",
  "#FFF8E2",
  "#D9F0ED",
  "#EAE2F4",
  "#D9F2FE",
  "#FFFCE2",
  "#FFE9E2",
  "#EBE6E4",
  "#E7ECEE",
  "#E4F3E4",
  "#DDEFFD",
  "#FFF0D9",
  "#FFE6E9",
];

export default function BodyColorPicker() {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.looks.bodyColor);

  return (
    <ColorPicker
      colors={colors}
      color={color}
      onChange={(next) => dispatch(setBodyColor(next))}
      triggerLabel="Pick a body color"
      hexInputLabel="Custom body hex color"
    />
  );
}
