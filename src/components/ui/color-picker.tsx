"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const HEX_PATTERN = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

export interface ColorPickerProps {
  /** Swatch palette shown in the grid. */
  colors: string[];
  /** Currently selected color (hex). */
  color: string;
  /** Called with a hex string whenever a swatch is clicked or a valid hex is typed. */
  onChange: (color: string) => void;
  /** Accessible name for the trigger button (visually hidden). */
  triggerLabel: string;
  /** Accessible name for the custom hex input. */
  hexInputLabel: string;
}

// Swatch grid + a free-form hex field for anything not in the palette.
// Shared by header/body color pickers (and any future one) so the
// swatch-click / hex-typing / sync-on-external-change logic lives in one place.
export default function ColorPicker({
  colors,
  color,
  onChange,
  triggerLabel,
  hexInputLabel,
}: ColorPickerProps) {
  const [hexInput, setHexInput] = useState(color);

  // Keeps the field in sync with changes from elsewhere (a swatch click here
  // already sets hexInput directly, but loading a different resume or
  // switching look presets updates `color` without going through this
  // component at all).
  useEffect(() => {
    setHexInput(color);
  }, [color]);

  const isValidHex = HEX_PATTERN.test(hexInput);

  const applyColor = (next: string) => {
    setHexInput(next);
    onChange(next);
  };

  const handleHexChange = (value: string) => {
    const next = value.startsWith("#") || value === "" ? value : `#${value}`;
    setHexInput(next);
    if (HEX_PATTERN.test(next)) onChange(next);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          // Button defaults to `inline-flex`. As the sole child of the plain
          // block <div> that TooltipTrigger's asChild wraps it in (see
          // OutputTools/main.tsx), an inline-level box gets baseline vertical
          // alignment, which reserves a few px below it for text descenders —
          // showing up as unwanted space under this button but not under the
          // neighboring Toggle (which has no such wrapper div). Forcing
          // `flex` (block-level) removes it from that baseline calculation.
          className="flex"
          style={{ backgroundColor: color }}
        >
          <span className="sr-only">{triggerLabel}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="grid grid-cols-5 gap-2">
          {colors.map((c) => (
            <button
              key={c}
              className="w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-blue-500"
              style={{ backgroundColor: c }}
              onClick={() => applyColor(c)}
              aria-label={`Select color ${c}`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div
            className="h-9 w-9 shrink-0 rounded-md border"
            style={{ backgroundColor: isValidHex ? hexInput : "transparent" }}
          />
          <Input
            value={hexInput}
            onChange={(e) => handleHexChange(e.target.value)}
            placeholder="#RRGGBB"
            spellCheck={false}
            maxLength={7}
            className={`font-mono ${
              hexInput && !isValidHex ? "border-red-500" : ""
            }`}
            aria-label={hexInputLabel}
            aria-invalid={hexInput !== "" && !isValidHex}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
