import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '../ui/animatedbutton';
import { projects } from '@/data/projects';

const featured = projects.filter(p => p.featured);

const ProjectSection = () => {
  return (
    <div className='bg-white px-6 py-16 md:py-24'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-black mb-2'>
          Featured Projects
        </h2>
        <div className='h-1 w-16 bg-orange-highlight mb-10' />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
          {featured.map(p => (
            <Link
              key={p.slug}
              href={p.wip ? '/projects/wip' : `/projects/${p.slug}`}
              className="group relative flex flex-col h-full p-8 bg-white border-2 border-suit-teal rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              aria-label={`Open ${p.title} project`}
            >
              {p.wip && (
                <span className="absolute top-4 right-4 text-xs bg-orange-highlight text-white px-2 py-0.5 rounded-full uppercase tracking-wide font-semibold">
                  Work in Progress
                </span>
              )}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-suit-teal mb-3 pr-12">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm font-semibold text-orange-highlight">
                <span>{p.wip ? 'In progress' : 'View project'}</span>
                <ArrowRight size={15} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>

        <div className='flex justify-end'>
          <Link href="/projects">
            <AnimatedButton variant="white">View All Projects</AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
