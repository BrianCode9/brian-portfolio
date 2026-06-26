'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from "@/data/projects";
import NavBar from "@/components/section/navbar";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
                    Projects
                </h1>
                <div className="h-1 w-16 bg-orange-highlight mb-10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.slug}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.08 }}
                            whileHover={{ y: -4 }}
                        >
                            <Link
                                href={p.wip ? '/projects/wip' : `/projects/${p.slug}`}
                                className="group relative flex flex-col h-full p-8 bg-white border-2 border-suit-teal rounded-sm shadow-sm hover:shadow-md transition-shadow"
                                aria-label={`Open ${p.title} project`}
                            >
                                {p.wip && (
                                    <span className="absolute top-4 right-4 text-xs bg-orange-highlight text-white px-2 py-0.5 rounded-full uppercase tracking-wide font-semibold">
                                        Work in Progress
                                    </span>
                                )}

                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-suit-teal mb-3 pr-12">
                                        {p.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>

                                <div className="mt-6 flex items-center text-sm font-semibold text-orange-highlight">
                                    <span>{p.wip ? 'In progress' : 'View project'}</span>
                                    <ArrowRight
                                        size={15}
                                        className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
