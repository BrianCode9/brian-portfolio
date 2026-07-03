export interface Project {
  title: string;
  slug: string;
  description: string;
  featured?: boolean;
  wip?: boolean;
  date?: string; // "YYYY-MM" — used for sorting only, not displayed
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Budget Flow",
    slug: "budget-flow",
    description: "Budget tracking web app built at TartanHacks @ CMU",
    featured: true,
    wip: false,
    date: "2026-02",
    image: "/images/projects/budget-flow-strategy.png",
  },
  {
    title: "Backyard Blackjack",
    slug: "backyard-blackjack",
    description: "Blackjack game built at SteelHacks",
    featured: false,
    wip: false,
    date: "2024-10",
    image: "/images/projects/backyardblackjackmain.png",
  },
  {
    title: "Simple 8-Bit CPU",
    slug: "simple-cpu",
    description: "Design, simulation, and place & route of an 8-bit CPU on a DE10-Lite FPGA",
    featured: true,
    wip: false,
    date: "2025-12",
    image: "/images/projects/cpu-diagram.png",
  },
  {
    title: "Custom Keyboard PCB",
    slug: "keyboard-pcb",
    description: "Designed and manufactured a custom mechanical keyboard PCB",
    featured: false,
    wip: true,
    image: "/images/projects/USBportkeyboardproject.png",
  },
  {
    title: "W65C02S Computer",
    slug: "6502-computer",
    description: "A complete 6502-based computer built from discrete components",
    featured: false,
    wip: true,
  },
  {
    title: "Personal Website",
    slug: "base",
    description: "This portfolio — built with Next.js, TypeScript, and Tailwind CSS",
    featured: false,
    wip: false,
    image: "/images/projects/base-hero.png",
    date: "2025-06",
  },
  {
    title: "CMOS Inverter & Logic Circuit Design",
    slug: "cmos-inverter",
    description: "Simulated a CMOS inverter and designed a multi-transistor logic circuit implementing A+BC",
    featured: true,
    wip: false,
    date: "2026-04",
    image: "/images/projects/cmos-inverter.png",
  },
];
