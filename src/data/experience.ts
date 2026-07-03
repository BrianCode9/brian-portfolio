export interface ExperienceEntry {
  title: string;
  company: string;
  type?: string;
  dateRange: string;
  duration: string;
  location: string;
  workplaceType?: string;
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
  },
  {
    title: "Statler Student Ambassador",
    company: "West Virginia University",
    dateRange: "Apr 2025 - Present",
    duration: "1 yr 4 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "On-site",
  },
  {
    title: "President and Founder",
    company: "SoftwareWVU",
    dateRange: "Feb 2025 - Present",
    duration: "1 yr 6 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
  },
  {
    title: "Assistant Swim Coach",
    company: "Bridgeport Sharks",
    type: "Seasonal",
    dateRange: "May 2023 - Present",
    duration: "3 yrs 3 mos",
    location: "Bridgeport, West Virginia, United States",
    workplaceType: "On-site",
  },
  {
    title: "Software Development Intern",
    company: "Agile5 Technologies, Inc.",
    type: "Internship",
    dateRange: "May 2025 - May 2026",
    duration: "1 yr 1 mo",
    location: "Fairmont, West Virginia, United States",
    workplaceType: "Hybrid",
  },
  {
    title: "President",
    company: "CyberWVU",
    dateRange: "Oct 2024 - Dec 2025",
    duration: "1 yr 3 mos",
    location: "Morgantown, West Virginia, United States",
  },
];
