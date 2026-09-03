export interface Project {
  title: string;
  slug: string;
  description: string;
  featured?: boolean;
  wip?: boolean;
  date?: string; // "YYYY-MM" - used for sorting only, not displayed
  image?: string;
  // Tools and software, most representative first. Cards show the first few.
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Budget Flow",
    slug: "budget-flow",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Recharts",
      "Nessie API",
      "Dedalus AI",
      "Sankey API",
    ],
    description: "Budget tracking web app built at TartanHacks (CMU)",
    featured: true,
    wip: false,
    date: "2026-02",
    image: "/images/projects/budget-flow-strategy.png",
  },
  {
    title: "Backyard Blackjack",
    slug: "backyard-blackjack",
    tags: ["Next.js", "TypeScript", "React", "PocketBase", "Tailwind CSS"],
    description:
      "Blackjack game built at SteelHacks (University of Pittsburgh)",
    featured: false,
    wip: false,
    date: "2024-10",
    image: "/images/projects/backyardblackjackmain.png",
  },
  {
    title: "Simple 8-Bit CPU",
    slug: "simple-cpu",
    tags: ["VHDL", "Quartus Prime Lite", "DE10-Lite"],
    description: "8-bit CPU written in VHDL and run on a DE10-Lite FPGA",
    featured: true,
    wip: false,
    date: "2025-12",
    image: "/images/projects/cpu-diagram.png",
  },
  {
    title: "Custom Keyboard PCB",
    slug: "keyboard-pcb",
    tags: ["KiCad"],
    description:
      "Mechanical keyboard schematic and PCB layout designed in KiCad",
    featured: false,
    wip: true,
    image: "/images/projects/USBportkeyboardproject.png",
  },
  {
    title: "W65C02S Computer",
    slug: "6502-computer",
    tags: ["W65C02S", "Assembly"],
    description: "Homebrew computer built around the W65C02S microprocessor",
    featured: false,
    wip: true,
  },
  {
    title: "Personal Website",
    slug: "personal-website",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Leaflet",
    ],
    description: "The website you're seeing now",
    featured: false,
    wip: false,
    image: "/images/projects/base-hero.png",
    date: "2025-06",
  },
  {
    title: "CMOS Inverter & Logic Circuit Design",
    slug: "cmos-inverter",
    tags: ["LTSpice", "Excel"],
    description: "CMOS inverter and clocked logic circuit simulated in LTSpice",
    featured: true,
    wip: false,
    date: "2026-04",
    image: "/images/projects/cmos-inverter.png",
  },
];
