import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
  title: "Personal Website",
};

const project = {
  title: "Personal Website",
  repoUrl: "https://github.com/BrianCode9/brian-portfolio",
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

        <section className="mb-10">
          <div className="border-suit-teal overflow-hidden rounded border-2">
            <Image
              src="/images/projects/base-hero.png"
              alt="Portfolio site hero section"
              width={800}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            My personal website to showcase my life. Obviously, I showcase my
            other projects, in the future travels, and my work experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Built every page (Home, About, Experience, Projects, Travel) with
              Next.js App Router, React, and TypeScript.
            </li>
            <li>Styling and designing the site with Tailwind CSS.</li>
            <li>Documented my projects, trips, and experience.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "React Leaflet",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Future Work
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Finish creating the travel pages and add more pictures to the entire
            website to increase personalization.
          </p>
        </section>

        <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href={project.repoUrl}
              target="_blank"
              className="text-lg underline"
            >
              View repository
            </Link>
          </div>
          <Link href={"/projects"}>
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}
