import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";
import ProjectGallery from "@/components/ui/project-gallery";
import loginImg from "../../../../public/images/projects/backyardblackjacklogin.png";
import mainImg from "../../../../public/images/projects/backyardblackjackmain.png";
import dealingImg from "../../../../public/images/projects/backyardblackjackdealingcardsscreen.png";

export const metadata = {
  title: "Backyard Blackjack",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            Backyard Blackjack
          </h1>
          <div className="bg-orange-highlight h-1 w-16" />
        </header>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            Backyard Blackjack was built at SteelHacks at the Univesity of
            Pittsburgh. The idea was to capture some of the elements of rivalry
            between WVU and Pitt, by making a blackjack app themed around the
            &quot;Backyard Brawl&quot;. Moreover, we integrated user data and
            statistics to be able to also teach players how they can better
            improve their decision making.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Primarily worked in the backend portion of the app, using
              Typescript
            </li>
            <li>
              Integrated PocketBase for user authentication, persistent game
              storage, and statistics tracking per account.
            </li>
            <li>
              Designed a stats page that shows players their betting patterns
              and outcomes across past games.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How it Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Backyard Blackjack is built on the full-stack framework Next.js.
            Specifically, for the frontend, we used React, which was very easy
            to use because Next.js is very well integrated with it. We paired
            this with TypeScript to allow us to create more robust APIs. The
            type checking was nice for debugging the web app. As for the player,
            you would log in or sign up with an account, which would get saved
            in the PocketBase (SQLite-based) database. You would then get into
            the main playing page, where you could play for as long as you want.
            Then, you could shift to the statistics page, which would give you
            insight into how well you were playing based on the &quot;Multi-Deck
            Blackjack Basic Strategy.&quot;
          </p>
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
              "PocketBase",
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

        <ProjectGallery
          images={[
            {
              src: loginImg,
              alt: "Backyard Blackjack login screen",
              caption: "Login Screen",
            },
            {
              src: mainImg,
              alt: "Backyard Blackjack gameplay",
              caption: "Main Gameplay Screen",
            },
            {
              src: dealingImg,
              alt: "Backyard Blackjack dealing cards screen",
              caption: "Dealing Cards Screen",
            },
          ]}
        />

        <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="https://github.com/Connor-W-Cahill/SteeleHacks"
            target="_blank"
            className="text-base text-gray-700 underline hover:text-black"
          >
            View repository
          </Link>
          <Link href="/projects">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}
