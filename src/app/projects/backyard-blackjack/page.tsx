import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
    title: "Backyard Blackjack",
};

const project = {
    title: "Backyard Blackjack",
    repoUrl: "",
};

export default function ProjectPage() {
    return (
        <main className="bg-white text-black w-full min-h-screen">
            <NavBar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">
                        {project.title}
                    </h1>
                    <div className="h-1 w-16 bg-orange-highlight" />
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-600 text-base leading-relaxed">Coming soon.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">How It Works</h2>
                    <p className="text-gray-600 text-base leading-relaxed">Coming soon.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">What I Learned</h2>
                    <p className="text-gray-600 text-base leading-relaxed">Coming soon.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">Future Work</h2>
                    <p className="text-gray-600 text-base leading-relaxed">Coming soon.</p>
                </section>

                <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        {project.repoUrl && (
                            <Link href={project.repoUrl} target="_blank" className="underline text-lg">
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
