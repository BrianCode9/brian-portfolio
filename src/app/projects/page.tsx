"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import NavBar from "@/components/section/navbar";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-2 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
          Projects
        </h1>
        <div className="bg-orange-highlight mb-10 h-1 w-16" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...projects]
            .sort((a, b) => {
              if (a.wip !== b.wip) return Number(b.wip) - Number(a.wip);
              return (b.date ?? "").localeCompare(a.date ?? "");
            })
            .map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={p.wip ? "/projects/wip" : `/projects/${p.slug}`}
                  className="group border-suit-teal relative flex h-full flex-col overflow-hidden rounded-sm border-2 bg-white shadow-sm transition-shadow hover:shadow-md"
                  aria-label={`Open ${p.title} project`}
                >
                  {p.wip && (
                    <span className="bg-orange-highlight absolute top-4 right-4 z-10 rounded-full px-2 py-0.5 text-xs font-semibold tracking-wide text-white uppercase">
                      Work in Progress
                    </span>
                  )}

                  {p.image && (
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex-1">
                      <h2 className="text-suit-teal mb-3 text-xl font-bold md:text-2xl">
                        {p.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                        {p.description}
                      </p>
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
              </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
