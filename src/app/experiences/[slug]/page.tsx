import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";
import { experiences } from "@/data/experiences";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <NavBar />
      <div className="h-16" />

      {/* Hero */}
      {exp.coverPhoto ? (
        <div className="h-72 w-full overflow-hidden md:h-96">
          <img
            src={exp.coverPhoto}
            alt={exp.title}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="bg-suit-teal flex h-48 w-full items-end px-8 pb-8 md:h-64">
          <p className="text-sm tracking-widest text-white/50 uppercase">
            {exp.location}
          </p>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Title + meta */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">{exp.title}</h1>
          <div className="bg-orange-highlight mb-3 h-1 w-16" />
          <p className="text-lg text-gray-500">
            {exp.location}
            {exp.date ? ` · ${exp.date}` : ""}
          </p>
        </div>

        {/* Body */}
        {exp.body.length > 0 && (
          <div className="space-y-5 text-lg leading-relaxed text-gray-800">
            {exp.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        {/* Sections */}
        {exp.sections && exp.sections.length > 0 && (
          <div className="mt-8 space-y-10">
            {exp.sections.map((section, i) => (
              <div key={i}>
                <h2 className="mb-2 text-2xl font-bold">{section.title}</h2>
                <div className="bg-orange-highlight mb-4 h-1 w-10" />
                <p className="text-lg leading-relaxed text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Photo gallery */}
        {exp.photos && exp.photos.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-2 text-2xl font-semibold">Photos</h2>
            <div className="bg-orange-highlight mb-5 h-1 w-12" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {exp.photos.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-sm">
                  <img
                    src={src}
                    alt={`${exp.title} photo ${i + 1}`}
                    className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="mt-12 flex justify-end">
          <Link href="/experiences">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
