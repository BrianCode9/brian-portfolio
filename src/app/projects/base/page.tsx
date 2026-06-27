// src/app/projects/<slug>/page.tsx
import Link from "next/link";
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
        <main className="bg-white text-black w-full min-h-screen text-xl">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* HERO */}
                <header className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">
                        {project.title}
                    </h1>
                    <div className="h-1 w-16 bg-orange-highlight" />
                </header>

                {/* SUMMARY & META */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>
                    <p className="text-[var(--text-muted)] text-base">Write about why you built this site and what you wanted it to say about you.</p>
                </section>

                {/* How It Works */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">Tech Stack</h2>
                    <p className="text-[var(--text-muted)] text-base">Write about the stack — Next.js, TypeScript, Tailwind CSS, Framer Motion, etc.</p>
                </section>

                {/* What I learned */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">What I Learned</h2>
                    <p className="text-[var(--text-muted)] text-base">Write about what you picked up building this.</p>
                </section>

                {/* Next Steps */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">Future Work</h2>
                    <p className="text-[var(--text-muted)] text-base">Write about what you still want to add or improve.</p>
                </section>

                {/* FOOTER CTAs */}
                <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Link href={project.repoUrl} target="_blank" className="underline text-lg">
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