import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
    title: "Backyard Blackjack",
};

export default function ProjectPage() {
    return (
        <main className="bg-white text-black w-full min-h-screen">
            <NavBar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">
                        Backyard Blackjack
                    </h1>
                    <div className="h-1 w-16 bg-orange-highlight" />
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Built at SteelHacks at the University of Pittsburgh. Backyard Blackjack is a web app that lets users play Blackjack while tracking their decisions, bets, and outcomes. The goal was to make Blackjack more than just a card game online — the app shows you where you went wrong and helps you improve your strategy over time.
                    </p>
                </section>

                <section className="mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded overflow-hidden">
                            <Image
                                src="/images/projects/backyardblackjacklogin.png"
                                alt="Backyard Blackjack login screen"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="border border-gray-200 rounded overflow-hidden">
                            <Image
                                src="/images/projects/backyardblackjackmain.png"
                                alt="Backyard Blackjack gameplay"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">What I Did</h2>
                    <ul className="list-disc list-inside text-base text-gray-600 space-y-2 leading-relaxed">
                        <li>Built the full Blackjack game engine in React with TypeScript, handling multi-phase state (betting, playing, game over) without bugs.</li>
                        <li>Integrated PocketBase for user authentication, persistent game storage, and statistics tracking per account.</li>
                        <li>Designed a stats page that shows players their betting patterns and outcomes across past games.</li>
                        <li>Set up OAuth2 login flow through PocketBase and deployed the project on Vercel.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">What I Learned</h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Managing complex React state across a multi-phase game loop was trickier than expected — small timing mistakes between phases caused subtle bugs. This project also gave me hands-on experience with PocketBase as a backend, including OAuth2 configuration and environment variable management during Vercel deployment.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">Built With</h2>
                    <div className="flex flex-wrap gap-2">
                        {["Next.js", "React", "TypeScript", "Tailwind CSS", "PocketBase"].map(tag => (
                            <span key={tag} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>

                <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        href="https://github.com/Connor-W-Cahill/SteeleHacks"
                        target="_blank"
                        className="underline text-base text-gray-700 hover:text-black"
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
