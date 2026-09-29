import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/redux-beta/hooks";
import { SiFormspree } from "react-icons/si";
import ResumeBody from "./ResumeBody";
import PrintPortal from "./PrintPortal";
import { PreviewScaleContext } from "./previewScale";

// The page is laid out at its print width (636px, same as #print-resume) and
// then scaled up for the editor, so line breaks match the exported PDF.
const PAGE_WIDTH = 636;
const VIEWPORT_HEIGHT = 850;
const PREVIEW_SCALE = 1.25;

function OutputGroup() {
  const f = 12;
  const f_size = f + "px";

  const intro = useAppSelector((state) => state.data.intro);
  const looks = useAppSelector((state) => state.looks);

  return (
    <>
      <ScrollArea
        className="max-h-[calc(100%-2rem)]"
        style={{
          width: PAGE_WIDTH * PREVIEW_SCALE,
          height: VIEWPORT_HEIGHT * PREVIEW_SCALE,
        }}
      >
        <PreviewScaleContext.Provider value={PREVIEW_SCALE}>
          <div
            style={{
              width: PAGE_WIDTH,
              transform: `scale(${PREVIEW_SCALE})`,
              transformOrigin: "top left",
            }}
          >
            {intro ? (
              <div
                id="resume"
                className={`text-black min-w-[636px] rounded-md shadow-md pb-10 transition-all duration-300`}
                style={{ fontSize: f_size, backgroundColor: looks.bodyColor }}
              >
                <ResumeBody interactive />
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-600 h-[850px] min-w-[636px] rounded-md shadow-md space-y-2 pb-10 flex items-center justify-center">
                <div className="flex gap-2 justify-center items-center">
                  <SiFormspree className="text-3xl" />
                  <p className="text-sm">
                    Start entering info <br />
                    to see Preview
                  </p>
                </div>
              </div>
            )}
          </div>
        </PreviewScaleContext.Provider>
      </ScrollArea>
      <PrintPortal />
    </>
  );
}

export default OutputGroup;
