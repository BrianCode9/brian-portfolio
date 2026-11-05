import React from "react";
import Link from "next/link";
import AnimatedButton from "../ui/animatedbutton";
import ProjectCard from "../ui/project-card";
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

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} headingLevel="h3" />
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
