import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/ThemeToggle";
import { FaGithub } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-beta/store";
import { ArrowRight } from "lucide-react";
import OutputGroup from "./Output/OutputGroup";
import { PiLaptopDuotone } from "react-icons/pi";
import logo from "../assets/YARB.svg";
import logo_dark from "../assets/YARB_dark.svg";
import { Badge } from "./ui/badge";

export default function Landing() {
  const intro = useSelector((state: RootState) => state.data.intro);

  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between px-8 py-4">
        <img src={logo} alt="YARB_Logo" className="w-32  -ml-4 dark:hidden" />
        <img
          src={logo_dark}
          alt="YARB_Logo"
          className="w-32  -ml-4 hidden dark:block"
        />

        <ModeToggle />
      </header>
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 md:px-8 xl:px-8 2xl:px-8 px-4">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create a Professional Resume in Minutes
                  </h1>
                  <br />
                  <p className="max-w-[600px] text-muted-foreground">
                    projectRB makes it easy to craft a standout resume with
                    pre-built templates, simple customization, and
                    mobile-friendly design.
                    <br />
                    <br />
                    Just fill your info and done :)
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/resume-builder/app">
                    <Button>
                      {intro.name ? (
                        <p className="flex gap-1 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 items-center">
                          Continue Editing{" "}
                          <span className="md:hidden flex items-center">
                            on <PiLaptopDuotone className="text-2xl ml-1" />
                          </span>{" "}
                          <ArrowRight className="w-4 hidden md:block lg:block xl:block 2xl:block" />
                        </p>
                      ) : (
                        "Start Building"
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
              {intro.name ? (
                <div className="mx-auto aspect-video overflow-hidden rounded-xl lg:order-last lg:aspect-square shadow-xl border-2 border-dashed 2xl:min-w-fit xl:min-w-fit lg:min-w-fit md:max-w-fit hidden md:block lg:block xl:block 2xl:block md:mx-0 border-black">
                  <div className="blur-md hover:blur-none transition-all duration-400">
                    <OutputGroup />
                  </div>
                </div>
              ) : (
                <img
                  src="https://s3.resume.io/uploads/examples/resume/resume_pages/222/persistent-resource/student-resume-examples.jpg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-top sm:w-full lg:order-last lg:aspect-square shadow-xl border-2"
                />
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted md:px-8 xl:px-8 2xl:px-8 px-4">
          <div className="container space-y-12 px-4 md:px-6 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Key Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Effortless Resume Building
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  projectRB takes the hassle out of creating a professional
                  resume by cutting all the bs! <br />
                  <br className="md:hidden" />
                  Just one robust ATS-tested template with strict layout and
                  design constraints, and you're good to go!
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 md:max-w-[50%]">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Uncomplicate the process
                    </h3>
                    <p className="text-muted-foreground ">
                      Minimal and extremely lightweight client ensures a smooth
                      experience. Just keep filling your info and download your
                      resume in a few seconds.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Data persistence</h3>
                    <p className="text-muted-foreground ">
                      Data remains on the app even after closing the browser. No
                      need to worry about losing your work!
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Automated Formatting</h3>
                    <p className="text-muted-foreground ">
                      YARB handles the formatting for you, ensuring a clean,
                      consistent and professional look.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} YARB. All rights reserved.
        </p>
        <div className="">
          <p className="text-xs">a fun project by</p>
          <a
            href="https://github.com/pro-khar"
            className=" hover:underline underline-offset-4 flex gap-1 text-wrap items-center"
            target="_blank"
          >
            <FaGithub className="text-lg" />
            pro-khar
          </a>
        </div>
      </footer>
    </div>
  );
}
