export interface Project {
  id: string;
  title: string;
  categoryTag: string;
  category: 'AI / GenAI' | 'Web App';
  oneLiner: string;
  role: string;
  stack: string[];
  problemSolved: string;
  features: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  accentColor: string;
  details: {
    overview: string;
    architecture: string;
    impact: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "echoverse-ai",
    title: "EchoVerse AI – Alternate Reality Engine",
    categoryTag: "AI / GENAI",
    category: "AI / GenAI",
    oneLiner: "Every choice creates an echo. An interactive generative platform for reflective dialogue with an alternate version of yourself.",
    role: "Lead Full-Stack & Generative AI Architect",
    stack: ["Next.js 14", "React 18", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    problemSolved: "Traditional storytelling and speculative worldbuilding are static, while generic chatbots lack introspective depth. EchoVerse AI provides an interactive reflective platform where users simulate branching alternate life paths, conversing in real-time with an alternate self conditioned on counterfactual life choices.",
    features: [
      "Parallel Self Simulation: Adaptive cognitive persona modeling enabling deep, introspective 'what if' dialogue",
      "Streaming Response Architecture: Ultra-low latency token streaming powered by FastAPI and modern async event conduits",
      "Anonymous Session Lifecycle: Instant UUID-based ephemeral sessions with one-tap instant data erasure",
      "Reflective Echo Synthesis: Dynamic extraction and generation of personalized takeaway 'Echoes' from the conversation",
      "Immersive Cyber-Minimalist UI: Fluid transitions built with Next.js 14 App Router, Tailwind CSS, and Framer Motion"
    ],
    image: "/images/echoverse-ai.jpg",
    liveUrl: "https://echoverse-ai.vercel.app",
    repoUrl: "https://github.com/Aztrix-MBM/echoverse-ai",
    featured: true,
    accentColor: "var(--color-purple)",
    details: {
      overview: "EchoVerse AI pushes the boundaries of human-AI reflective interaction. Rather than acting as a standard assistant, it models a counterfactual alternate self based on a user's pivotal life choice, fostering meaningful self-reflection and decision exploration.",
      architecture: "Decoupled full-stack system featuring a Next.js 14 / TypeScript / Framer Motion client on Vercel streaming real-time tokens from a high-performance Python FastAPI backend, backed by PostgreSQL persistence with strict ephemeral privacy guarantees.",
      impact: "Live production deployment at echoverse-ai.vercel.app with multi-turn streaming alternate persona simulations."
    }
  },
  {
    id: "ai-student-os",
    title: "Student OS – AI Academic Cockpit",
    categoryTag: "FULL-STACK AI",
    category: "Web App",
    oneLiner: "AI-powered academic cockpit featuring intelligent daily study planning, Ebbinghaus exam readiness modeling, and syllabus tracking.",
    role: "Lead Full-Stack Architect & Core Engine Developer",
    stack: ["React 18", "TypeScript", "Python 3.12", "FastAPI", "PostgreSQL", "Supabase", "SQLAlchemy", "Vercel", "Render"],
    problemSolved: "College students struggle with fragmented academic workflows across separate syllabus PDFs, exam schedules, and notes without an intelligent strategy. Student OS acts as an academic cockpit that dynamically calculates exam readiness and auto-schedules daily revision using algorithmic cognitive models.",
    features: [
      "AI Daily Study Planner: Algorithmic scheduling adapting to study budget, exam proximity, and syllabus difficulty using greedy priority heuristics",
      "Exam Readiness Engine: Mathematical readiness forecasting (Readiness %) utilizing the Ebbinghaus Spaced Repetition Forgetting Curve",
      "Syllabus AI & Topic Breakdown: Unit-level tracking with intuitive 1-tap mastery ratings (Strong / Okay / Weak)",
      "Dual-Layer Progress Synchronization: Sub-second state updates synchronized across Supabase PostgreSQL and client cache",
      "Soft Streak Habit Tracker: Continuous habit retention system equipped with a 1-day grace buffer to prevent momentum collapse",
      "Production-Grade Security & Performance: JWT session management, strict CORS protocols, and automated free-tier cold-start warmup resilience"
    ],
    image: "/images/student-os.jpg",
    liveUrl: "https://student-os-delta-plum.vercel.app",
    repoUrl: "https://github.com/Aztrix-MBM/student-os",
    featured: true,
    accentColor: "var(--color-yellow)",
    details: {
      overview: "Student OS is a production-deployed academic cockpit engineered for undergraduate engineering students. It bridges cognitive psychology (Ebbinghaus Spaced Repetition) and algorithmic optimization (Greedy Priority Scheduler) to maximize retention and eliminate exam cramming.",
      architecture: "Decoupled full-stack architecture featuring a React 18 / Vite / TypeScript Claymorphism frontend hosted on Vercel CI/CD, communicating via JWT-authenticated REST APIs with a high-performance Python 3.12 / FastAPI backend deployed on Render, backed by Supabase PostgreSQL with connection pooling.",
      impact: "Live production deployment serving active student users with real-time study scheduling and exam readiness analytics."
    }
  }
];
