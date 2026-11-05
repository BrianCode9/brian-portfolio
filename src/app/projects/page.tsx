"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import NavBar from "@/components/section/navbar";
import ProjectCard from "@/components/ui/project-card";
import { cn } from "@/lib/utils";

const sorted = [...projects].sort((a, b) => {
  if (a.wip !== b.wip) return Number(b.wip) - Number(a.wip);
  return (b.date ?? "").localeCompare(a.date ?? "");
});

type Filter = ProjectCategory | "All";
const filters: Filter[] = ["All", ...projectCategories];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const shown =
    filter === "All"
      ? sorted
      : sorted.filter((p) => p.categories.includes(filter));

  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-2 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
          Projects
        </h1>
        <div className="bg-orange-highlight mb-8 h-1 w-16" />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-colors duration-200",
                filter === f
                  ? "border-suit-teal bg-suit-teal text-white"
                  : "hover:border-suit-teal border-gray-300 text-gray-600"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
