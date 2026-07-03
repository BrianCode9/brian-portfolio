import NavBar from '@/components/section/navbar';
import { experience } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="h-16" />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-black">
          Experience
        </h1>
        <div className="h-1 w-16 bg-orange-highlight mb-10" />

        <div className="flex flex-col">
          {experience.map((entry, i) => (
            <div
              key={`${entry.company}-${entry.title}`}
              className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-6 ${
                i !== experience.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div>
                <h2 className="text-xl font-bold text-black">{entry.title}</h2>
                <p className="text-gray-600">
                  {entry.company}
                  {entry.type ? ` · ${entry.type}` : ""}
                </p>
                <p className="text-sm text-gray-500">
                  {entry.location}
                  {entry.workplaceType ? ` · ${entry.workplaceType}` : ""}
                </p>
              </div>
              <div className="text-sm text-gray-500 shrink-0 sm:text-right">
                <p>{entry.dateRange}</p>
                <p>{entry.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
