import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppSelector } from "@/redux-beta/hooks";
import ResumeBody from "./ResumeBody";

// Renders a second, unclipped copy of the resume directly under <body>,
// hidden on screen and shown only via the #print-resume rule in index.css.
// #resume (the on-screen preview) lives inside a fixed-height ScrollArea, so
// printing it directly would cut off any content past the visible viewport —
// this portal escapes that container instead of fighting its overflow.
function PrintPortal() {
  const intro = useAppSelector((state) => state.data.intro);
  const looks = useAppSelector((state) => state.looks);

  // #print-resume's own background only covers its content height, not the
  // full printed page — any blank space past the last section falls back to
  // the page canvas color. Per the CSS spec, an un-transparent <html>
  // background (not <body>'s) is what paints that canvas, so the custom
  // property has to live on <html> — setting it on <body> would leave
  // <html>'s own rule resolving to its #fff fallback and winning regardless.
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--print-page-bg",
      looks.bodyColor || "#ffffff"
    );
  }, [looks.bodyColor]);

  if (!intro) return null;

  return createPortal(
    <div
      id="print-resume"
      className="text-black"
      style={{ fontSize: "12px", backgroundColor: looks.bodyColor }}
    >
      <ResumeBody />
    </div>,
    document.body
  );
}

export default PrintPortal;
