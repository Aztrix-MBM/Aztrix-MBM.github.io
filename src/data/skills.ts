export interface SkillItem {
  name: string;
  level: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  accentColor: string;
  skills: SkillItem[];
}

export interface ToolRibbonItem {
  name: string;
  shortCode: string;
  color: string;
  category: string;
}

export const toolsRibbon: ToolRibbonItem[] = [
  { name: "Python", shortCode: "PY", color: "#3776AB", category: "AI & Backend" },
  { name: "Java", shortCode: "JV", color: "#ED8B00", category: "Core Systems" },
  { name: "C++", shortCode: "C++", color: "#00599C", category: "Algorithms & Systems" },
  { name: "JavaScript", shortCode: "JS", color: "#F7DF1E", category: "Web Frontend" },
  { name: "TypeScript", shortCode: "TS", color: "#3178C6", category: "Typed Systems" },
  { name: "React", shortCode: "RC", color: "#61DAFB", category: "UI Library" },
  { name: "Next.js", shortCode: "NX", color: "#000000", category: "Production Framework" },
  { name: "Node.js", shortCode: "ND", color: "#339933", category: "Backend Runtime" },
  { name: "MySQL", shortCode: "SQL", color: "#4479A1", category: "Relational DB" },
  { name: "Git", shortCode: "GIT", color: "#F05032", category: "Version Control" }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems programming, data pipelines, and application logic.",
    accentColor: "var(--color-yellow)",
    skills: [
      { name: "Python", level: "Advanced", highlight: true },
      { name: "Java", level: "Advanced", highlight: true },
      { name: "C", level: "Advanced", highlight: true },
      { name: "C++", level: "Intermediate" },
      { name: "JavaScript (ES6+)", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" }
    ]
  },
  {
    title: "AI, ML & Computer Vision",
    description: "Model engineering, neural networks, computer vision, and generative agent pipelines.",
    accentColor: "var(--color-purple)",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Intermediate" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "Google Gemini API", level: "Intermediate" },
      { name: "LangChain", level: "Intermediate" },
      { name: "Scikit-Learn", level: "Intermediate" },
      { name: "Pandas & NumPy", level: "Intermediate" }
    ]
  },
  {
    title: "Web & Full-Stack Engineering",
    description: "Crafting modern, accessible, responsive and high-performance interfaces and APIs.",
    accentColor: "var(--color-pink)",
    skills: [
      { name: "React.js", level: "Intermediate" },
      { name: "Next.js (App Router)", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Node.js & Express", level: "Intermediate" },
      { name: "RESTful API Design", level: "Intermediate" },
      { name: "Modern CSS & Neo-Brutalism", level: "Intermediate" }
    ]
  },
  {
    title: "Databases, Cloud & DevOps",
    description: "Data persistence, relational & NoSQL schema design, and CI/CD pipelines.",
    accentColor: "var(--color-green)",
    skills: [
      { name: "PostgreSQL & Supabase", level: "Intermediate" },
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Git & GitHub Actions", level: "Intermediate" }
    ]
  }
];
