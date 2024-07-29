/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6NAuEjSCBMn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <ListRestartIcon className="h-6 w-6" />
          <span className="sr-only">Resume Builder</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create a Professional Resume in Minutes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our resume builder makes it easy to craft a standout resume
                    with pre-built templates, simple customization, and
                    mobile-friendly design.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Start Building
                  </a>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Effortless Resume Building
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our resume builder takes the hassle out of creating a
                  professional resume. Customize pre-built templates, add your
                  information, and download a mobile-friendly resume in minutes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Customizable Templates
                      </h3>
                      <p className="text-muted-foreground">
                        Choose from a variety of professional resume templates
                        and customize them to fit your needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Mobile-Friendly Design
                      </h3>
                      <p className="text-muted-foreground">
                        Your resume will look great on any device, making it
                        easy to apply for jobs on the go.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Automated Formatting
                      </h3>
                      <p className="text-muted-foreground">
                        Our resume builder handles the formatting for you,
                        ensuring a clean and professional look.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from real people who have used our resume builder to land
                their dream jobs.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-2 lg:grid-cols-3">
                <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <p className="text-lg font-medium">
                      "The resume builder made the process so easy. I was able\n
                      to create a professional-looking resume in no time."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      - Jane Doe, Software Engineer
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <p className="text-lg font-medium">
                      "I was able to create a resume that really showcased my\n
                      skills and experience. The templates are so
                      well-designed."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      - John Smith, Marketing Manager
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <p className="text-lg font-medium">
                      "I was able to create a resume that really showcased my\n
                      skills and experience. The templates are so
                      well-designed."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      - Sarah Lee, Graphic Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Resume Builder. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Follow us on Twitter
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Follow us on aedIn
          </a>
        </nav>
      </footer>
    </div>
  );
}

function ListRestartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 6H3" />
      <path d="M7 12H3" />
      <path d="M7 18H3" />
      <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
      <path d="M11 10v4h4" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
