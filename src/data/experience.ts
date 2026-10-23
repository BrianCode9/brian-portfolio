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
    bullets: [
      "Instruct a digital logic lab section of 20 students, lecturing on HDL design (VHDL), FPGAs, functional simulation, combinational and sequential logic design, and digital hardware modules",
      "Audited lab procedures, documenting 10+ issues and improvements that can be applied next semester",
      "Run class review sessions for exams covering number systems, logic gates, CMOS, Boolean algebra, K-maps, muxes, timing, delay, and FSMs",
    ],
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
    bullets: [
      "Modeled attack surface traversal with Dijkstra's shortest-path over a MITRE ATT&CK technique graph",
      "Computed and displayed residual risk scores by combining CVSS severity data with existing control coverage",
      "Automated functional verification with a TypeScript test suite and mock data scripts",
    ],
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "President",
    company: "SASE (Society of Asian Scientists and Engineers), WVU Chapter",
    dateRange: "Jan 2026 - Present",
    duration: "10 mos",
    location: "Morgantown, West Virginia, United States",
    bullets: [
      "Lead the first SASE chapter in West Virginia, recognized by SASE National",
      "Served as Vice President from January 2026 before stepping into the President role in August",
    ],
    logo: "/images/logos/sase-logo.png",
  },
  {
    title: "Statler Student Ambassador",
    company: "West Virginia University",
    dateRange: "Apr 2025 - Present",
    duration: "1 yr 7 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "On-site",
    bullets: [
      "Represent the Statler College of Engineering and Mineral Resources at college events for prospective and incoming students",
    ],
    logo: "/images/logos/wvu-logo.jpg",
  },
  {
    title: "President and Founder",
    company: "SoftwareWVU",
    dateRange: "Feb 2025 - Present",
    duration: "1 yr 9 mos",
    location: "Morgantown, West Virginia, United States",
    workplaceType: "Hybrid",
    bullets: [
      "Founded WVU's software development club in February 2025",
      "Run the club as President",
    ],
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
    bullets: [
      "Queried over 400,000 records from federal databases in SQL, using Databricks parallel connections to cut query time",
      "Built an AI audio transcription pipeline with FFmpeg and the Whisper API",
      "Wrote over 10,000 lines across seven full-stack features backed by Databricks and AWS",
    ],
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
    bullets: [
      "Coached the Bridgeport Sharks summer swim team across four seasons",
      "Ran practices and worked meets",
    ],
    logo: "/images/logos/bridgeport-country-club-logo.jpg",
  },
  {
    title: "President",
    company: "CyberWVU",
    dateRange: "Oct 2024 - Dec 2025",
    duration: "1 yr 3 mos",
    location: "Morgantown, West Virginia, United States",
    bullets: ["Led WVU's cybersecurity club as President"],
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
    bullets: [
      "Certified as a Lifeguard Instructor",
      "Taught and certified new lifeguards in Clarksburg and Bridgeport",
    ],
    logo: "/images/logos/redcross-logo.jpg",
  },
];
