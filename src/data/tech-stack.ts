// Icon keys are mapped to components in components/section/tech-stack-section.tsx
export type TechIcon =
  | "typescript"
  | "python"
  | "react"
  | "nextjs"
  | "tailwind"
  | "postgresql"
  | "prisma"
  | "pocketbase"
  | "vhdl"
  | "quartus"
  | "fpga"
  | "kicad"
  | "assembly"
  | "mips"
  | "ltspice"
  | "qspice"
  | "matlab";

export interface TechItem {
  name: string;
  icon: TechIcon;
}

export interface TechStackGroup {
  id: string;
  title: string;
  items: TechItem[];
}

export const techStacks: TechStackGroup[] = [
  {
    id: "software",
    title: "Software Engineering",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma ORM", icon: "prisma" },
      { name: "PocketBase", icon: "pocketbase" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware & Digital Design",
    items: [
      { name: "VHDL", icon: "vhdl" },
      { name: "Assembly", icon: "assembly" },
      { name: "MIPS", icon: "mips" },
      { name: "Quartus Prime Lite", icon: "quartus" },
      { name: "DE10-Lite FPGA", icon: "fpga" },
      { name: "KiCad", icon: "kicad" },
      { name: "LTSpice", icon: "ltspice" },
      { name: "QSpice", icon: "qspice" },
      { name: "MATLAB", icon: "matlab" },
    ],
  },
];
