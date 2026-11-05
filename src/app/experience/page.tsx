import Image from "next/image";
import NavBar from "@/components/section/navbar";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="mb-2 text-4xl font-bold text-black md:text-6xl">
          Experience
        </h1>
        <div className="bg-orange-highlight mb-10 h-1 w-16" />

        <ol className="flex flex-col">
          {experience.map((entry, i) => {
            const isLast = i === experience.length - 1;
            const isCurrent = entry.dateRange.includes("Present");

            return (
              <li
                key={`${entry.company}-${entry.title}`}
                className="group relative flex gap-4 sm:gap-6"
              >
                {/* Timeline rail: the logo is the node, the line runs to the next one */}
                <div className="relative flex shrink-0 flex-col items-center">
                  <div
                    className={`relative z-10 h-12 w-12 overflow-hidden rounded-full border-2 bg-white p-1.5 transition-colors duration-200 sm:h-14 sm:w-14 ${
                      isCurrent ? "border-orange-highlight" : "border-suit-teal"
                    }`}
                  >
                    {entry.logo && (
                      <Image
                        src={entry.logo}
                        alt={`${entry.company} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full rounded-full object-contain"
                      />
                    )}
                  </div>
                  {!isLast && <div className="bg-suit-teal/25 w-0.5 flex-1" />}
                </div>

                <div className={`flex-1 ${isLast ? "" : "pb-10"}`}>
                  <div className="flex flex-col gap-1 rounded-md px-4 py-3 transition-colors duration-200 group-hover:bg-gray-100 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-black">
                        {entry.title}
                      </h2>
                      <p className="text-gray-600">
                        {entry.company}
                        {entry.type ? ` · ${entry.type}` : ""}
                      </p>
                      <p className="text-sm text-gray-500">
                        {entry.location}
                        {entry.workplaceType ? ` · ${entry.workplaceType}` : ""}
                      </p>
                    </div>
                    <div className="shrink-0 text-sm text-gray-500 sm:text-right">
                      <p>{entry.dateRange}</p>
                      <p>{entry.duration}</p>
                    </div>
                  </div>

                  {entry.bullets && entry.bullets.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pr-4 pl-9 text-base leading-relaxed text-gray-600">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
