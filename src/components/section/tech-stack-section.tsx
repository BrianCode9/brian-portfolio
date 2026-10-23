import React from "react";
import {
  SiC,
  SiCplusplus,
  SiIntel,
  SiKicad,
  SiNextdotjs,
  SiPocketbase,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  Activity,
  Binary,
  CircuitBoard,
  Code2,
  Cpu,
  Sigma,
  Waves,
} from "lucide-react";
import { techStacks, type TechIcon } from "@/data/tech-stack";

// Typed as a full Record so a new TechIcon without an icon is a compile error
const icons: Record<
  TechIcon,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  typescript: SiTypescript,
  python: SiPython,
  c: SiC,
  cpp: SiCplusplus,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  pocketbase: SiPocketbase,
  vhdl: Binary,
  quartus: SiIntel,
  fpga: CircuitBoard,
  kicad: SiKicad,
  assembly: Code2,
  mips: Cpu,
  ltspice: Waves,
  qspice: Activity,
  matlab: Sigma,
};

const TechStackSection = () => {
  return (
    <div className="bg-white px-6 pt-10 pb-0 md:pt-12 md:pb-0">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-6 w-fit">
          <h2 className="mb-2 text-3xl font-bold text-black md:text-5xl">
            Tech I&apos;ve Built With
          </h2>
          <div className="bg-orange-highlight h-1 w-16" />
        </div>

        {techStacks.map((group) => (
          <ul
            key={group.id}
            aria-label={group.title}
            className="border-orange-highlight mt-4 flex flex-wrap gap-x-6 gap-y-2 border-l-2 pl-4 md:justify-between"
          >
            {group.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li
                  key={item.name}
                  className="flex items-center gap-1.5 text-sm text-gray-800"
                >
                  <Icon size={16} className="text-black" />
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        ))}
      </div>

      <div className="mx-auto mt-8 h-0.5 w-full max-w-7xl bg-black" />
    </div>
  );
};

export default TechStackSection;
