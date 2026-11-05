export interface ExperienceEntry {
  title: string;
  company: string;
  type?: string;
  dateRange: string;
  duration: string;
  location: string;
  workplaceType?: string;
  bullets?: string[];
  logo?: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Undergraduate Teaching Assistant, Digital Logic Lab",
    company: "WVU Lane Department of CSEE",
    dateRange: "Aug 2026 - Present",
    duration: "3 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "On-site",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "Software Engineer Intern",
    company: "WVU Cyber-Resilience Resource Center",
    type: "Full-time",
    dateRange: "May 2026 - Aug 2026",
    duration: "4 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "President",
    company: "SASE (Society of Asian Scientists and Engineers), WVU Chapter",
    dateRange: "Jan 2026 - Present",
    duration: "10 mos",
    location: "Morgantown, West Virginia, United States",
    logo: "/images/logos/sase-logo.png",
  },
  {
    title: "Statler Student Ambassador",
    company: "West Virginia University",
    dateRange: "Apr 2025 - Present",
    duration: "1 yr 7 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "On-site",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "President and Founder",
    company: "SoftwareWVU",
    dateRange: "Feb 2025 - Present",
    duration: "1 yr 9 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
    logo: "/images/logos/softwarewvu-logo.png",
  },
  {
    title: "Software Development Intern",
    company: "Agile5 Technologies, Inc.",
    type: "Internship",
    dateRange: "May 2025 - Apr 2026",
    duration: "1 yr",
    location: "Fairmont, West Virginia, United States",
    workplaceType: "Hybrid",
    logo: "/images/logos/agile5-logo.jpg",
  },
  {
    title: "Assistant Swim Coach",
    company: "Bridgeport Sharks",
    type: "Seasonal",
    dateRange: "May 2023 - Jul 2026",
    duration: "3 yrs 3 mos",
    location: "Bridgeport, West Virginia, United States",
    workplaceType: "On-site",
    logo: "/images/logos/bridgeport-country-club-logo.jpg",
  },
  {
    title: "President",
    company: "CyberWVU",
    dateRange: "Oct 2024 - Dec 2025",
    duration: "1 yr 3 mos",
    location: "Morgantown, West Virginia, United States",
    logo: "/images/logos/redcross-logo.jpg",
  },
];
