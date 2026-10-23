import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedButton from "../ui/animatedbutton";
import ProjectTags from "../ui/project-tags";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

const ProjectSection = () => {
  return (
    <div className="bg-white px-6 pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-3xl font-bold text-black md:text-5xl">
          Featured Projects
        </h2>
        <div className="bg-orange-highlight mb-10 h-1 w-16" />

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={p.wip ? "/projects/wip" : `/projects/${p.slug}`}
              className="group border-suit-teal relative flex h-full flex-col overflow-hidden rounded-sm border-2 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              aria-label={`Open ${p.title} project`}
            >
              {p.wip && (
                <span className="bg-orange-highlight absolute top-4 right-4 z-10 rounded-full px-2 py-0.5 text-xs font-semibold tracking-wide text-white uppercase">
                  Work in Progress
                </span>
              )}
              {p.image && (
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex-1">
                  <h3 className="text-suit-teal mb-3 text-xl font-bold md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    {p.description}
                  </p>
                  <ProjectTags tags={p.tags} />
                </div>
                <div className="text-orange-highlight mt-6 flex items-center text-sm font-semibold">
                  <span>{p.wip ? "In progress" : "View project"}</span>
                  <ArrowRight
                    size={15}
                    className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-end">
          <Link href="/projects">
            <AnimatedButton variant="white">View All Projects</AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
