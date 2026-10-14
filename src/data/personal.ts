export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  badge: string;
  pitch: string;
  story: string[];
  education: {
    degree: string;
    field: string;
    institution: string;
    cgpa: string;
    period: string;
    highlights: string[];
  };
  stats: {
    label: string;
    value: string;
    sublabel: string;
    color: string;
    icon: 'folder' | 'code' | 'trophy' | 'users';
  }[];
  socials: {
    name: string;
    url: string;
    icon: 'github' | 'linkedin' | 'twitter' | 'mail';
    handle: string;
  }[];
  disciplines: string[];
  email: string;
  location: string;
  status: string;
}

export const personalData: PersonalInfo = {
  name: "Muthu Balamurugan",
  firstName: "MUTHU",
  lastName: "BALAMURUGAN",
  role: "AI & Data Science Student",
  badge: "AI & DATA SCIENCE STUDENT",
  pitch: "I build web applications, AI solutions and turn ideas into real products.",
  story: [
    "I am an Artificial Intelligence & Data Science student with a focus on engineering high-impact software.",
    "My work spans full-stack web applications, generative AI pipelines, computer vision, and industrial IoT monitoring.",
    "I believe in building software that doesn't just work in notebooks, but ships to real users with blazing performance, crisp user experience, and resilient system architecture."
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Data Science",
    institution: "Anna University Affiliated Engineering College",
    cgpa: "7.8 / 10.0",
    period: "2023 — 2027",
    highlights: [
      "Consistent academic record with 7.8 CGPA",
      "Core focus on Machine Learning, Neural Networks, Database Systems & Distributed Architecture",
      "Active participant in technical hackathons and collegiate coding symposiums"
    ]
  },
  stats: [
    {
      label: "PROJECTS",
      value: "5+",
      sublabel: "Completed builds",
      color: "var(--color-yellow)",
      icon: "folder"
    },
    {
      label: "TECHNOLOGIES",
      value: "8+",
      sublabel: "Core toolchains",
      color: "var(--color-pink)",
      icon: "code"
    },
    {
      label: "HACKATHONS",
      value: "2",
      sublabel: "Finalist & builds",
      color: "var(--color-white)",
      icon: "trophy"
    },
    {
      label: "CGPA",
      value: "7.8",
      sublabel: "Academic score",
      color: "var(--color-purple)",
      icon: "users"
    }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/muthubalamurugan",
      icon: "github",
      handle: "@muthubalamurugan"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muthubalamurugan",
      icon: "linkedin",
      handle: "in/muthubalamurugan"
    },
    {
      name: "Twitter / X",
      url: "https://x.com/muthubalamurugan",
      icon: "twitter",
      handle: "@muthubala"
    },
    {
      name: "Email",
      url: "mailto:muthubalamurugan.dev@gmail.com",
      icon: "mail",
      handle: "muthubalamurugan.dev@gmail.com"
    }
  ],
  disciplines: ["AI", "WEB", "SYSTEMS", "PROBLEM SOLVING"],
  email: "muthubalamurugan.dev@gmail.com",
  location: "Tamil Nadu, India",
  status: "Available for internships and impactful collaborations"
};
