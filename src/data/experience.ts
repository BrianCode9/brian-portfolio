export interface ExperienceEntry {
  title: string;
  company: string;
  type?: string;
  dateRange: string;
  duration: string;
  location: string;
  workplaceType?: string;
  description?: string;
  logo?: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Software Engineer Intern",
    company: "WVU Cyber-Resilience Resource Center",
    type: "Full-time",
    dateRange: "May 2026 - Present",
    duration: "5 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
    description:
      "Full-stack work on RavenShield, a cybersecurity compliance platform built with Next.js, TypeScript, Prisma, and PostgreSQL. Built the POA&M management interface end to end, the MITRE ATT&CK matrix and its mappings to NIST SP 800-53 controls, and the attack path graph views in React. Demoed new features to executives.",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "Undergraduate Teaching Assistant, Digital Logic Lab",
    company: "WVU Lane Department of CSEE",
    dateRange: "Aug 2026 - Present",
    duration: "2 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "On-site",
    description:
      "Teach the CPE 271L digital logic lab sequence, which runs from Quartus schematic entry through VHDL, sequential logic, state machines, and PLC ladder logic, and ends with an 8-bit CPU on the DE10-Lite FPGA. Taken for credit as CSEE 490 Teaching Practicum.",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "President",
    company: "SASE (Society of Asian Scientists and Engineers), WVU Chapter",
    dateRange: "Jan 2026 - Present",
    duration: "9 mos",
    location: "Morgantown, West Virginia, United States",
    description:
      "Lead the first SASE chapter in West Virginia, recognized by SASE National. Served as Vice President from January 2026 before stepping into the President role in August.",
    logo: "/images/logos/sase-logo.png",
  },
  {
    title: "Statler Student Ambassador",
    company: "West Virginia University",
    dateRange: "Apr 2025 - Present",
    duration: "1 yr 6 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "On-site",
    description:
      "Represent the Statler College of Engineering and Mineral Resources at college events for prospective and incoming students.",
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "President and Founder",
    company: "SoftwareWVU",
    dateRange: "Feb 2025 - Present",
    duration: "1 yr 8 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
    description:
      "Founded WVU's software development club in February 2025 and run it as President.",
    logo: "/images/logos/softwarewvu-logo.png",
  },
  {
    title: "Software Development Intern",
    company: "Agile5 Technologies, Inc.",
    type: "Internship",
    dateRange: "May 2025 - May 2026",
    duration: "1 yr 1 mo",
    location: "Fairmont, West Virginia, United States",
    workplaceType: "Hybrid",
    description:
      "Queried over 400,000 records from federal databases in SQL, using Databricks parallel connections to cut query time. Built an AI audio transcription pipeline with FFmpeg and the Whisper API, and wrote over 10,000 lines across seven full-stack features backed by Databricks and AWS.",
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
    description:
      "Coached the Bridgeport Sharks summer swim team across four seasons, running practices and working meets.",
    logo: "/images/logos/bridgeport-country-club-logo.jpg",
  },
  {
    title: "President",
    company: "CyberWVU",
    dateRange: "Oct 2024 - Dec 2025",
    duration: "1 yr 3 mos",
    location: "Morgantown, West Virginia, United States",
    description: "Led WVU's cybersecurity club as President.",
    logo: "/images/logos/cyberwvu-logo.png",
  },
  {
    title: "Lifeguard Instructor",
    company: "American Red Cross",
    type: "Seasonal",
    dateRange: "Dec 2022 - Dec 2025",
    duration: "3 yrs 1 mo",
    location: "Clarksburg & Bridgeport, West Virginia, United States",
    workplaceType: "On-site",
    description:
      "Certified as a Lifeguard Instructor, teaching and certifying new lifeguards in Clarksburg and Bridgeport.",
    logo: "/images/logos/redcross-logo.jpg",
  },
];
