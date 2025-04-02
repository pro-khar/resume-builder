import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnterFullScreenIcon } from "@radix-ui/react-icons";

export default function Fullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.25); // Start with 25% zoom
  const [content, setContent] = useState<string>("");

  const openFullscreen = useCallback(() => {
    const resumeDiv = document.getElementById("resume");
    if (resumeDiv) {
      setContent(resumeDiv.innerHTML);
      setIsFullscreen(true);
    } else {
      console.error("Div with id 'resume' not found");
    }
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  const handleZoom = useCallback((increment: number) => {
    setZoomLevel((prevZoom) =>
      Math.max(0.5, Math.min(prevZoom + increment, 3))
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        closeFullscreen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, closeFullscreen]);

  return (
    <div>
      <Button onClick={openFullscreen}>
        <EnterFullScreenIcon className="font-bold h-4 w-4" />
      </Button>

      {isFullscreen && (
        <div className="fixed inset-0 bg-background z-50 overflow-auto">
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="space-x-2">
                <Button onClick={() => handleZoom(0.1)} aria-label="Zoom in">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button onClick={() => handleZoom(-0.1)} aria-label="Zoom out">
                  <ZoomOut className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={closeFullscreen}
                variant="ghost"
                aria-label="Close fullscreen"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div
              className="flex-grow overflow-auto"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "top left",
                width: `${100 / zoomLevel}%`,
                height: `${100 / zoomLevel}%`,
              }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
