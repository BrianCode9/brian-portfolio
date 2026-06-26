export interface Project {
  title: string;
  slug: string;
  description: string;
  featured?: boolean;
  wip?: boolean;
}

export const projects: Project[] = [
  {
    title: "Budget Flow",
    slug: "budget-flow",
    description: "Budget tracking web app built at TartanHacks @ CMU",
    featured: true,
    wip: false,
  },
  {
    title: "Backyard Blackjack",
    slug: "backyard-blackjack",
    description: "Blackjack game built at SteelHacks",
    featured: true,
    wip: false,
  },
  {
    title: "Simple 8-Bit CPU",
    slug: "vivadocpu",
    description: "Design, simulation, and place & route of an 8-bit CPU on a DE10-Lite FPGA",
    featured: false,
    wip: false,
  },
  {
    title: "Custom Keyboard PCB",
    slug: "keyboard-pcb",
    description: "Designed and manufactured a custom mechanical keyboard PCB",
    featured: false,
    wip: true,
  },
  {
    title: "W65C02S Computer",
    slug: "6502-computer",
    description: "A complete 6502-based computer built from discrete components",
    featured: false,
    wip: true,
  },
];
