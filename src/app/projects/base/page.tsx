// src/app/projects/<slug>/page.tsx
import Link from "next/link";
import AnimatedButton from "@/components/ui/animatedbutton";


export const metadata = {
    title: "Design, Simulating, PnR of 8-Bit CPU",
};

type ImageItem = { src: string; alt: string };

const project = {
    title: "Design, Simulating, and PnR of 8-Bit CPU",
    summary:
        "A short paragraph that describes the project, the problem it solves, and the target audience.",
    repoUrl: "https://github.com/you/project",
    // images: [...]
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
                    <p className="text-[var(--text-muted)] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
                </section>

                {/* IMAGE GALLERY */}
                {/* <section className="mb-8">
                <h2 className="text-xl font-semibold">Gallery</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {project.images.map((img) => (
                        <div key={img.src} className="overflow-hidden rounded border border-gray-200 bg-white">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={1200}
                                height={700}
                                className="w-full h-auto object-cover"
                                priority={false}
                            />
                        </div>
                    ))}
                </div>
            </section> */}

                {/* How It Works */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
                    <p className="text-[var(--text-muted)] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
                </section>

                {/* What I learned */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">What I learned</h2>
                    <p className="text-[var(--text-muted)] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
                </section>

                {/* Next Steps */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold">Future Work</h2>
                    <p className="text-[var(--text-muted)] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
                </section>

                {/* FOOTER CTAs */}
                <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        {project.repoUrl && (
                            <Link href={project.repoUrl} target="_blank" className="underline text-lg">
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