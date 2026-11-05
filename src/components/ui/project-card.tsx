import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectTags from "./project-tags";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  /** h3 under a section h2 on the home page, h2 under the page h1 elsewhere. */
  headingLevel?: "h2" | "h3";
}

const ProjectCard = ({ project: p, headingLevel = "h2" }: ProjectCardProps) => {
  const Heading = headingLevel;

  return (
    <Link
      href={p.wip ? "/projects/wip" : `/projects/${p.slug}`}
      className="group border-suit-teal hover:border-orange-highlight relative flex h-full flex-col overflow-hidden rounded-sm border-2 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0"
      aria-label={`Open ${p.title} project`}
    >
      {p.wip && (
        <span className="bg-orange-highlight absolute top-4 right-4 z-10 rounded-full px-2 py-0.5 text-xs font-semibold tracking-wide text-white uppercase">
          Work in Progress
        </span>
      )}

      {p.image && (
        <div className="relative h-40 w-full overflow-hidden border-b border-gray-200">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex-1">
          <Heading className="text-suit-teal mb-3 text-xl font-bold md:text-2xl">
            {p.title}
          </Heading>
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
  );
};

export default ProjectCard;
