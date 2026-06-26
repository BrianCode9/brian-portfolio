import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavBar from '@/components/section/navbar';
import AnimatedButton from '@/components/ui/animatedbutton';
import { experiences } from '@/data/experiences';

export function generateStaticParams() {
  return experiences.map(e => ({ slug: e.slug }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = experiences.find(e => e.slug === slug);
  if (!exp) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <NavBar />

      {/* Hero */}
      {exp.coverPhoto ? (
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img
            src={exp.coverPhoto}
            alt={exp.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-48 md:h-64 bg-suit-teal flex items-end px-8 pb-8">
          <p className="text-white/50 text-sm tracking-widest uppercase">{exp.location}</p>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Title + meta */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {exp.title}
          </h1>
          <div className="h-1 w-16 bg-orange-highlight mb-3" />
          <p className="text-gray-500 text-lg">{exp.location}{exp.date ? ` · ${exp.date}` : ''}</p>
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
          <div className="space-y-10 mt-8">
            {exp.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <div className="h-1 w-10 bg-orange-highlight mb-4" />
                <p className="text-lg leading-relaxed text-gray-600">{section.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Photo gallery */}
        {exp.photos && exp.photos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-2">Photos</h2>
            <div className="h-1 w-12 bg-orange-highlight mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {exp.photos.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-sm">
                  <img
                    src={src}
                    alt={`${exp.title} photo ${i + 1}`}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="flex justify-end mt-12">
          <Link href="/experiences">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
