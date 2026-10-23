import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";
import ProjectGallery from "@/components/ui/project-gallery";
import usbPortImg from "../../../../public/images/projects/USBportkeyboardproject.png";

export const metadata = {
  title: "Custom Keyboard PCB",
};

const project = {
  title: "Custom Keyboard PCB",
  repoUrl: "",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>
          <div className="bg-orange-highlight h-1 w-16" />
        </header>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            A custom mechanical keyboard PCB designed in KiCad, taken from
            schematic capture through a fully routed board. The design covers
            the switch matrix, the microcontroller, and USB-C power and signal.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Captured the switch matrix, microcontroller, and USB-C power and
              signal schematic in KiCad.
            </li>
            <li>
              Selected parts against electrical and footprint requirements.
            </li>
            <li>
              Placed components and routed the board, including the USB
              differential pair.
            </li>
            <li>Cleared the electrical rule and design rule checks.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            The key switches are wired in a row and column matrix that the
            microcontroller scans to detect key presses. The USB-C port powers
            the board and carries the USB data lines to the microcontroller as a
            routed differential pair.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              KiCad
            </span>
          </div>
        </section>

        <ProjectGallery
          images={[
            {
              src: usbPortImg,
              alt: "USB port schematic for the custom keyboard PCB",
              caption: "USB Port Schematic",
            },
          ]}
        />

        <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                className="text-lg underline"
              >
                View repository
              </Link>
            )}
          </div>
          <Link href="/projects">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}
