// src/app/projects/<slug>/page.tsx
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
    <main className="min-h-screen w-full bg-white text-xl text-black">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* HERO */}
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>
          <div className="bg-orange-highlight h-1 w-16" />
        </header>

        {/* GALLERY */}
        <section className="mb-10">
          <div className="overflow-hidden rounded border border-gray-200">
            <Image
              src="/images/projects/base-hero.png"
              alt="Portfolio site hero section"
              width={800}
              height={500}
              className="h-auto w-full object-cover border-2 border-black"
            />
          </div>
        </section>

        {/* SUMMARY & META */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base text-[var(--text-muted)]">
            Write about why you built this site and what you wanted it to say
            about you.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold md:text-3xl">Tech Stack</h2>
          <p className="text-base text-[var(--text-muted)]">
            Write about the stack — Next.js, TypeScript, Tailwind CSS, Framer
            Motion, etc.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold md:text-3xl">How It Works</h2>
          <p className="text-base text-[var(--text-muted)]">
            Write about how the site is put together and how it works under the
            hood.
          </p>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold md:text-3xl">Future Work</h2>
          <p className="text-base text-[var(--text-muted)]">
            Write about what you still want to add or improve.
          </p>
        </section>

        {/* FOOTER CTAs */}
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
