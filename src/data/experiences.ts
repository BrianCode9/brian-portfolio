export interface ExperienceSection {
  title: string;
  content: string;
}

export interface Experience {
  title: string;
  slug: string;
  location: string;
  date: string;
  coverPhoto?: string;
  summary: string;
  body: string[];
  photos?: string[];
  status?: "planning";
  icon?: string;
  sections?: ExperienceSection[];
}

const PLACEHOLDER_SECTIONS: ExperienceSection[] = [
  {
    title: "Getting There",
    content: "Write about how you got there — the drive, flight, or road trip.",
  },
  {
    title: "Highlights",
    content: "Write about the best moments and things you did.",
  },
  {
    title: "Food & Drink",
    content: "Write about the best meals, local spots, and anything worth recommending.",
  },
  {
    title: "Takeaways",
    content: "Write about what you took away from the trip and whether you'd go back.",
  },
];

export const experiences: Experience[] = [
  {
    title: "Acadia National Park",
    slug: "acadia",
    location: "Mount Desert Island, Maine",
    date: "",
    coverPhoto: "",
    summary: "Hiking the Beehive Trail, exploring Sand Beach, and taking in the Asticou Azalea Garden on Mount Desert Island.",
    body: [],
    photos: [],
    icon: "🌲",
    sections: PLACEHOLDER_SECTIONS,
  },
  {
    title: "Toronto & Niagara Falls",
    slug: "toronto",
    location: "Canada",
    date: "",
    coverPhoto: "",
    summary: "A trip across the border to Toronto and the Falls.",
    body: [],
    photos: [],
    icon: "🍁",
    sections: PLACEHOLDER_SECTIONS,
  },
];
