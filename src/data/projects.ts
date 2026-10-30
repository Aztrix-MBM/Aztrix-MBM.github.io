export interface Project {
  id: string;
  title: string;
  categoryTag: string;
  category: 'AI / GenAI' | 'Web App' | 'Computer Vision';
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
    title: "EchoVerse AI",
    categoryTag: "AI / GENAI",
    category: "AI / GenAI",
    oneLiner: "A generative AI platform to explore past, parallel reality and future.",
    role: "Lead Full-Stack & Generative AI Developer",
    stack: ["React", "FastAPI", "Python", "Google Gemini API", "Tailwind CSS", "WebSockets"],
    problemSolved: "Traditional storytelling and speculative worldbuilding are static. EchoVerse AI provides an interactive multi-agent generative canvas where users choose temporal pivot points to simulate branching alternate realities and timeline continuations with real-time streaming narrative intelligence.",
    features: [
      "Dynamic multi-agent temporal simulation across 3 distinct timeline states (Past, Parallel Reality, Future)",
      "High-throughput streaming response architecture via FastAPI & WebSockets",
      "Interactive node-graph visualizer representing branching historical divergence points",
      "Memory-augmented context retention for recursive dilemma exploration"
    ],
    image: "/images/echoverse-ai.svg",
    liveUrl: "https://echoverse-ai.vercel.app",
    repoUrl: "https://github.com/Aztrix-MBM/echoverse-ai",
    featured: true,
    accentColor: "var(--color-purple)",
    details: {
      overview: "EchoVerse AI pushes the boundaries of human-AI speculative simulation by letting users step into historical turning points or futuristic horizons, interacting dynamically with adaptive synthetic personas.",
      architecture: "Client built with React and modular state engines; backend powered by high-concurrency FastAPI serving structured LLM prompts with token streaming, cached vector memory, and schema-validated timeline outputs.",
      impact: "Showcased in collegiate AI exhibition with over 200+ simulated narrative branches generated during live demonstration."
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
    image: "/images/student-os.svg",
    liveUrl: "https://student-os-delta-plum.vercel.app",
    repoUrl: "https://github.com/Aztrix-MBM/student-os",
    featured: true,
    accentColor: "var(--color-yellow)",
    details: {
      overview: "Student OS is a production-deployed academic cockpit engineered for undergraduate engineering students. It bridges cognitive psychology (Ebbinghaus Spaced Repetition) and algorithmic optimization (Greedy Priority Scheduler) to maximize retention and eliminate exam cramming.",
      architecture: "Decoupled full-stack architecture featuring a React 18 / Vite / TypeScript Claymorphism frontend hosted on Vercel CI/CD, communicating via JWT-authenticated REST APIs with a high-performance Python 3.12 / FastAPI backend deployed on Render, backed by Supabase PostgreSQL with connection pooling.",
      impact: "Live production deployment serving active student users with real-time study scheduling and exam readiness analytics."
    }
  },
  {
    id: "eye-moment",
    title: "Eye Moment Vision Controller",
    categoryTag: "COMPUTER VISION",
    category: "Computer Vision",
    oneLiner: "Accessibility tool leveraging OpenCV and MediaPipe for gaze-driven cursor navigation and assistive control.",
    role: "Computer Vision & Human-Computer Interface Engineer",
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy", "Tkinter"],
    problemSolved: "Provides individuals with severe motor disabilities or hand impairment the ability to interact with computers smoothly using only eye gaze and intentional blink gestures.",
    features: [
      "Sub-pixel iris center tracking and head pose normalization using 468 3D facial landmarks",
      "Dynamic eye aspect ratio (EAR) calculation to distinguish involuntary blinks from deliberate click commands",
      "Adaptive exponential smoothing filter eliminating cursor jitter without introducing perceived input lag",
      "Zero-latency lightweight local processing running at 60 FPS on standard webcam hardware"
    ],
    image: "/images/eye-moment.svg",
    liveUrl: "https://github.com/Aztrix-MBM/Eye-Moment",
    repoUrl: "https://github.com/Aztrix-MBM/Eye-Moment",
    featured: false,
    accentColor: "var(--color-pink)",
    details: {
      overview: "An assistive technology project enabling complete hands-free navigation across Windows desktop environments through high-accuracy gaze estimation.",
      architecture: "Video stream captured from OpenCV, processed through MediaPipe Face Mesh; normalized coordinate deltas mapped to monitor screen resolution via PyAutoGUI.",
      impact: "Empowers assistive accessibility without requiring costly proprietary eye-tracker hardware."
    }
  }
];
