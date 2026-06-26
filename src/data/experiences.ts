export interface Experience {
  title: string;
  slug: string;
  location: string;
  date: string;
  coverPhoto?: string; // path relative to /public
  summary: string;    // short preview text for the card
  body: string[];     // paragraphs for the detail page
  photos?: string[];  // additional photos for the gallery
}

export const experiences: Experience[] = [
  {
    title: "Acadia National Park",
    slug: "acadia",
    location: "Mount Desert Island, Maine",
    date: "",
    coverPhoto: "",
    summary: "Hiking the Beehive Trail, exploring Sand Beach, and taking in the Asticou Azalea Garden on Mount Desert Island.",
    body: [
      "Write about your Acadia trip here.",
    ],
    photos: [],
  },
  {
    title: "Ho Chi Minh City",
    slug: "vietnam",
    location: "Saigon, Vietnam",
    date: "",
    coverPhoto: "",
    summary: "Exploring my family's home country — the food, the streets, and the culture of Saigon.",
    body: [
      "Write about your Vietnam trip here.",
    ],
    photos: [],
  },
  {
    title: "Toronto & Niagara Falls",
    slug: "toronto",
    location: "Ontario, Canada",
    date: "",
    coverPhoto: "",
    summary: "A trip across the border to Toronto and the Falls.",
    body: [
      "Write about your Toronto and Niagara Falls trip here.",
    ],
    photos: [],
  },
];
