export interface ExperienceEntry {
  title: string;
  company: string;
  type?: string;
  dateRange: string;
  duration: string;
  location: string;
  workplaceType?: string;
  logo?: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Software Engineer Intern",
    company: "West Virginia University",
    type: "Full-time",
    dateRange: "May 2026 - Present",
    duration: "3 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "Statler Student Ambassador",
    company: "West Virginia University",
    dateRange: "Apr 2025 - Present",
    duration: "1 yr 4 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "On-site",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "President and Founder",
    company: "SoftwareWVU",
    dateRange: "Feb 2025 - Present",
    duration: "1 yr 6 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "Assistant Swim Coach",
    company: "Bridgeport Sharks",
    type: "Seasonal",
    dateRange: "May 2023 - Present",
    duration: "3 yrs 3 mos",
    location: "Bridgeport, West Virginia, United States",
    workplaceType: "On-site",
    logo: "/images/logos/bridgeport-country-club-logo.jpg",
  },
  {
    title: "Software Development Intern",
    company: "Agile5 Technologies, Inc.",
    type: "Internship",
    dateRange: "May 2025 - May 2026",
    duration: "1 yr 1 mo",
    location: "Fairmont, West Virginia, United States",
    workplaceType: "Hybrid",
    logo: "/images/logos/agile5-logo.jpg",
  },
  {
    title: "President",
    company: "CyberWVU",
    dateRange: "Oct 2024 - Dec 2025",
    duration: "1 yr 3 mos",
    location: "Morgantown, West Virginia, United States",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "Lifeguard Instructor",
    company: "American Red Cross",
    type: "Seasonal",
    dateRange: "Dec 2022 - Dec 2025",
    duration: "3 yrs",
    location: "Clarksburg & Bridgeport, West Virginia, United States",
    workplaceType: "On-site",
    logo: "/images/logos/redcross-logo.jpg",
  },
];
