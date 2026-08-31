import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import TopBar from "./components/Topbar/TopBar";
import Morescreen from "./components/morescreen";
import InputGroup from "./components/Input/InputGroup";
import OutputGroup from "./components/Output/OutputGroup";
import { useAppDispatch, useAppSelector } from "./redux-beta/hooks";
import OutputTools from "./components/OutputTools/main";
import { supabase } from "./lib/supabaseClient";
import { loadPersistedState } from "./redux-beta/store";
import { hydrateData } from "./redux-beta/dataSlice";
import { hydrateLook, type LooksState } from "./redux-beta/lookSlice";
import { hydrateExperienceFormat } from "./redux-beta/uiSlice";
import {
  clearCloud,
  setActiveResume,
  setCloudStatus,
} from "./redux-beta/cloudSlice";
import {
  mapResumeRowToDataState,
  mapRowToLook,
  mapRowToExperienceFormat,
} from "./redux-beta/cloudMappers";
import type { DataState } from "./redux-beta/types";

// Mirrors lookSlice's own initialState — used as the fallback when there's no
// persisted local snapshot to restore (e.g. the very first visit ever).
const emptyLooksState: LooksState = {
  imageEnable: false,
  headerColor: "#FFFFFF",
  bodyColor: "#FFFFFF",
  showLine: true,
  showIntroSeparator: true,
};

const emptyDataState: DataState = {
  intro: {
    profile: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    github: "",
    linkedin: "",
    summary: "",
    picture: null,
    pictureEnable: false,
  },
  education: {
    degree: "",
    branch: "",
    college: "",
    bachelor_duration: "",
    bachelor_score: "",
    int_school: "",
    int_year: "",
    int_score: "",
    hs_school: "",
    hs_year: "",
    hs_score: "",
  },
  skills: [],
  projects: [],
  experience: [],
  certifications: [],
  ach: [],
};

function App() {
  const dispatch = useAppDispatch();
  const cloud = useAppSelector((state) => state.cloud);
  const [searchParams] = useSearchParams();
  const resumeId = searchParams.get("resume");
  const previousResumeId = useRef<string | null>(null);

  useEffect(() => {
    if (previousResumeId.current === resumeId) return;
    previousResumeId.current = resumeId;

    if (!resumeId) {
      dispatch(clearCloud());
      const persisted = loadPersistedState();
      dispatch(hydrateData(persisted?.data ?? emptyDataState));
      dispatch(hydrateLook(persisted?.looks ?? emptyLooksState));
      dispatch(
        hydrateExperienceFormat(persisted?.ui?.experienceFormat ?? "long")
      );
      return;
    }

    let cancelled = false;
    dispatch(setActiveResume(resumeId));
    dispatch(setCloudStatus("loading"));

    (async () => {
      const { data: row, error } = await supabase
        .from("resumes")
        .select(
          "*, skills(*), projects(*), experience(*), certifications(*), achievements(*)"
        )
        .eq("id", resumeId)
        .single();

      if (cancelled) return;

      if (error || !row) {
        dispatch(setCloudStatus("error"));
        return;
      }

      dispatch(hydrateData(mapResumeRowToDataState(row)));
      dispatch(hydrateLook(mapRowToLook(row.look)));
      dispatch(hydrateExperienceFormat(mapRowToExperienceFormat(row.ui)));
      dispatch(setCloudStatus("ready"));
    })();

    return () => {
      cancelled = true;
    };
  }, [resumeId, dispatch]);

  if (resumeId && cloud.status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading resume…
      </div>
    );
  }

  if (resumeId && cloud.status === "error") {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-medium">Couldn't load this resume.</p>
        <p className="text-sm text-muted-foreground">
          It may not exist, or you may not have access to it.
        </p>
      </div>
    );
  }

  return (
    <>
      <Morescreen />
      {/* Remove min-h-screen and use h-screen with flex to properly handle heights */}
      <div className="p-3 h-screen flex flex-col">
        <div id="base" className="hidden md:block rounded-md border  flex-1">
          <TopBar />
          <div className=" h-[calc(100%-48px)] rounded-md">
            <ResizablePanelGroup direction="horizontal" className="h-full">
              <ResizablePanel className="" minSize={30}>
                <InputGroup />
              </ResizablePanel>
              <ResizableHandle className="bg-secondary" withHandle />
              <ResizablePanel className="bg-secondary flex justify-center items-center relative">
                <OutputTools />
                <OutputGroup />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
