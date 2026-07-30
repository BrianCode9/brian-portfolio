import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";
import ProjectGallery from "@/components/ui/project-gallery";
import strategyImg from "../../../../public/images/projects/budget-flow-strategy.png";
import statisticsImg from "../../../../public/images/projects/budget-flow-statistics.png";
import historyImg from "../../../../public/images/projects/budget-flow-history.png";

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

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            Budget flow was built at CMU&apos;s hackathon (TartanHacks). The
            app&apos;s idea is to help everyday people visualize their spending.
            The app had spending analytics (trends, charts, and merchant
            tracking), a budget planner, a budget strategy page that used the
            Dedalus AI API to suggest savings, and a debt payoff planner. We
            presented it to 5-8 judges at the competition. No hackathon win;
            however, we had a good time at CMU with the team.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Used TypeScript to implement user accounts and AI features with
              the Nessie Capital One and Dedalus API
            </li>
            <li>
              Created several pages, including a budget strategy page and a
              budget visualization page, using the Sankey API and React
            </li>
            <li>
              Wrote a seed script to populate the database for easier
              development and testing
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Users first create their account. After that, they can connect their
            bank account to the website (Nessie API), which allows us to
            automatically process their bank statements. This allows us to
            immediately give them insights and visualizations of their spending
            using React and the Dedalus API. After this, users can go through
            and get tips and guidance on how to spend better, pay debt off
            faster, and invest smarter.
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
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <ProjectGallery
          images={[
            {
              src: strategyImg,
              alt: "Budget Flow strategy page",
              caption: "Budget Strategy Page",
            },
            {
              src: statisticsImg,
              alt: "Budget Flow statistics page",
              caption: "Spending Statistics Page",
            },
            {
              src: historyImg,
              alt: "Budget Flow history page",
              caption: "Transaction History Page",
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
