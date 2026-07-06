import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
  title: "Budget Flow",
};

const project = {
  title: "Budget Flow",
  repoUrl: "https://github.com/BrianCode9/tartanhacks",
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded border border-gray-200">
              <Image
                src="/images/projects/budget-flow-strategy.png"
                alt="Budget Flow strategy page"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded border border-gray-200">
              <Image
                src="/images/projects/budget-flow-statistics.png"
                alt="Budget Flow statistics page"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded border border-gray-200">
              <Image
                src="/images/projects/budget-flow-history.png"
                alt="Budget Flow history page"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            Budget flow was built at CMU's hackathon (TartanHacks). The app's idea is to help everyday people visualize their spending.
            The app had spending analytics (trends, charts, and merchant tracking), budget planner, budget strategy page that used the Dedalus AI API to suggest savings, and debt payoff planner.
            We presented it to 5-8 judgets at the competition. No hackathon win; however, had a good time at CMU and with the team
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Typescript to implement users and AI faetures with the Nessie Capital One and Dedalus API
            </li>
            <li>
              Created serveral pages including budget strategy and budget visualization page, using Sankey API and React
            </li>
            <li>
              Wrote seed script to populate database for easier development and testing
            </li>
          </ul>
        </section>


        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Coming soon.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Capital One Nessie API",
              "Dedalus AI Agent API",
              "Sankey API",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Next.js",
              "Recharts",
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
            Coming soon.
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
          <Link href="/projects">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}
