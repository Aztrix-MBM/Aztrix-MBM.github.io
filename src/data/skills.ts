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
  { name: "Docker", shortCode: "DK", color: "#2496ED", category: "Containers" },
  { name: "Git", shortCode: "GIT", color: "#F05032", category: "Version Control" }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems programming, data pipelines, and application logic.",
    accentColor: "var(--color-yellow)",
    skills: [
      { name: "Python", level: "Advanced", highlight: true },
      { name: "Java", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced" },
      { name: "SQL", level: "Proficient" }
    ]
  },
  {
    title: "AI, ML & Computer Vision",
    description: "Model engineering, neural networks, computer vision, and generative agent pipelines.",
    accentColor: "var(--color-purple)",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Proficient" },
      { name: "OpenCV", level: "Advanced", highlight: true },
      { name: "MediaPipe", level: "Advanced" },
      { name: "Google Gemini API", level: "Advanced", highlight: true },
      { name: "LangChain", level: "Intermediate" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "Pandas & NumPy", level: "Advanced" }
    ]
  },
  {
    title: "Web & Full-Stack Engineering",
    description: "Crafting modern, accessible, responsive and high-performance interfaces and APIs.",
    accentColor: "var(--color-pink)",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Next.js (App Router)", level: "Advanced", highlight: true },
      { name: "FastAPI", level: "Advanced" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Modern CSS & Neo-Brutalism", level: "Mastery" }
    ]
  },
  {
    title: "Databases, Cloud & DevOps",
    description: "Data persistence, schema design, containerization, and deployment pipelines.",
    accentColor: "var(--color-green)",
    skills: [
      { name: "PostgreSQL & Supabase", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git & GitHub Actions", level: "Advanced", highlight: true },
      { name: "Linux Environments", level: "Proficient" }
    ]
  },
  {
    title: "IoT & Embedded Hardware",
    description: "Physical computing, sensor telemetry acquisition, and embedded communication.",
    accentColor: "var(--color-yellow)",
    skills: [
      { name: "Arduino Microcontrollers", level: "Advanced", highlight: true },
      { name: "ESP32 Wi-Fi / Bluetooth", level: "Proficient" },
      { name: "MQTT Protocol", level: "Proficient" },
      { name: "Sensor Telemetry & Actuators", level: "Advanced" },
      { name: "Serial I/O & Embedded C++", level: "Proficient" }
    ]
  }
];
