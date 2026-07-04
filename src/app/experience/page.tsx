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

        <div className="flex flex-col">
          {experience.map((entry, i) => (
            <div
              key={`${entry.company}-${entry.title}`}
              className={`flex gap-4 py-6 ${
                i !== experience.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white sm:h-14 sm:w-14">
                {entry.logo && (
                  <Image
                    src={entry.logo}
                    alt={`${entry.company} logo`}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
