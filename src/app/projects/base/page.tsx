// Copy-paste scaffold for new project pages. Not linked anywhere in the
// site and not listed in `src/data/projects.ts` - for reference only.
import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
  title: "Project Template",
  robots: {
    index: false,
    follow: false,
  },
};

const project = {
  title: "Project Title",
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

        {/* Overview */}
        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            Write about why you built this and what it does. Keep it to 2-3
            sentences.
          </p>
        </section>

        {/* What I Did */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>Write a bullet for each concrete contribution you made.</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Write about the mechanics of the project itself, not what you
            learned.
          </p>
        </section>

        {/* Built With */}
        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Tag One", "Tag Two"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Future Work */}
        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Future Work
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Write about what you still want to add or improve.
          </p>
        </section>

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
          <Link href={"/projects"}>
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}
