export interface Project {
  title: string;
  slug: string;
  description: string;
  featured?: boolean;
  wip?: boolean;
  date?: string; // "YYYY-MM" - used for sorting only, not displayed
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Budget Flow",
    slug: "budget-flow",
    description: "Budget tracking web app built at TartanHacks (CMU)",
    featured: true,
    wip: false,
    date: "2026-02",
    image: "/images/projects/budget-flow-strategy.png",
  },
  {
    title: "Backyard Blackjack",
    slug: "backyard-blackjack",
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
    description:
      "CPE-271 (Digital Logic) final project using VHDL to design a CPU",
    featured: true,
    wip: false,
    date: "2025-12",
    image: "/images/projects/cpu-diagram.png",
  },
  {
    title: "Custom Keyboard PCB",
    slug: "keyboard-pcb",
    description: "",
    featured: false,
    wip: true,
    image: "/images/projects/USBportkeyboardproject.png",
  },
  {
    title: "W65C02S Computer",
    slug: "6502-computer",
    description: "",
    featured: false,
    wip: true,
  },
  {
    title: "Personal Website",
    slug: "personal-website",
    description: "The website you're seeing now",
    featured: false,
    wip: false,
    image: "/images/projects/base-hero.png",
    date: "2025-06",
  },
  {
    title: "CMOS Inverter & Logic Circuit Design",
    slug: "cmos-inverter",
    description:
      "Designed, simulated, and optimized noise margins for a CMOS inverter and a clocked CMOS circuit",
    featured: true,
    wip: false,
    date: "2026-04",
    image: "/images/projects/cmos-inverter.png",
  },
];
