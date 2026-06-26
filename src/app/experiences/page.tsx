import Link from 'next/link';
import NavBar from '@/components/section/navbar';
import AnimatedButton from '@/components/ui/animatedbutton';
import { experiences } from '@/data/experiences';

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-black">
          Travel
        </h1>
        <div className="h-1 w-16 bg-orange-highlight mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map(exp => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}`}
              className="group flex flex-col rounded-sm overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Cover photo or placeholder */}
              <div className="h-52 bg-suit-teal overflow-hidden">
                {exp.coverPhoto ? (
                  <img
                    src={exp.coverPhoto}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/40 text-lg tracking-widest uppercase">
                      {exp.location}
                    </span>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-2 p-5 bg-white flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-xl font-bold text-black">{exp.title}</h2>
                  {exp.date && (
                    <span className="text-sm text-gray-400 shrink-0 mt-1">{exp.date}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{exp.location}</p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">{exp.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-end pt-12">
          <Link href="/">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
