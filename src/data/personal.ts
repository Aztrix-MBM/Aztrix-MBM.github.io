export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  badge: string;
  dynamicRoles: string[];
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
  secondaryEducation: {
    school: string;
    degree: string;
    period: string;
    completionYear: string;
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
  name: "Muthubalamurugan",
  firstName: "MUTHUBALAMURUGAN",
  lastName: "",
  role: "AI & Data Science Student",
  badge: "SOFTWARE ENGINEER",
  dynamicRoles: [
    "SOFTWARE ENGINEER",
    "AI DEVELOPER",
    "FOUNDER OF AZTRIX & CO"
  ],
  pitch: "I build web applications, AI solutions and turn ideas into real products.",
  story: [
    "I am an Artificial Intelligence & Data Science student with a focus on engineering high-impact software.",
    "My work spans full-stack web applications, generative AI pipelines, computer vision, and scalable system architectures.",
    "I believe in building software that doesn't just work in notebooks, but ships to real users with blazing performance, crisp user experience, and resilient system architecture."
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Data Science",
    institution: "Ramco Institute of Technology",
    cgpa: "7.8 / 10.0",
    period: "2025 — 2029",
    highlights: [
      "Consistent academic record with 7.8 CGPA",
      "Core focus on Machine Learning, Neural Networks, Database Systems & Distributed Architecture",
      "Active participant in technical hackathons and collegiate coding symposiums"
    ]
  },
  secondaryEducation: {
    school: "Kalaimagal Higher Secondary School",
    degree: "Higher Secondary Education",
    period: "2011 — 2025",
    completionYear: "2025"
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
      url: "https://github.com/Aztrix-MBM",
      icon: "github",
      handle: "@Aztrix"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muthubala-murugan-814049383",
      icon: "linkedin",
      handle: "in/muthubala-murugan-814049383"
    },
    {
      name: "Twitter / X",
      url: "https://x.com/muthubalamurugan",
      icon: "twitter",
      handle: "@muthubala"
    },
    {
      name: "Email",
      url: "mailto:Aztrixdev@gmail.com",
      icon: "mail",
      handle: "Aztrixdev@gmail.com"
    }
  ],
  disciplines: ["AI", "WEB", "SYSTEMS", "PROBLEM SOLVING"],
  email: "Aztrixdev@gmail.com",
  location: "Srivilliputhur, Tamil Nadu, India",
  status: "Available for internships and impactful collaborations"
};
