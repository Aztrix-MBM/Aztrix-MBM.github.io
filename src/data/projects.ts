export interface Project {
  id: string;
  title: string;
  categoryTag: string;
  category: 'AI / GenAI' | 'Web App' | 'IoT / Hardware' | 'Computer Vision';
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
    title: "AI Student OS",
    categoryTag: "WEB APP",
    category: "Web App",
    oneLiner: "A complete student productivity platform with AI assistant, notes, certificates and project management.",
    role: "Full-Stack Architect & UI Designer",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "LangChain", "CSS Modules"],
    problemSolved: "College students struggle with fragmented workflows across scattered LMS platforms, syllabus PDFs, handwritten notes, and separate exam trackers. AI Student OS centralizes the entire student lifecycle into an intelligent, cohesive operating dashboard.",
    features: [
      "Automated syllabus-to-flashcard generator using contextual LLM document chunking",
      "Centralized course dashboard tracking attendance, assignments, and semester CGPA targets",
      "Intelligent study scheduler that adapts to upcoming exam deadlines and past retention scores",
      "Verified credentials and project vault to showcase verified academic accomplishments"
    ],
    image: "/images/student-os.svg",
    liveUrl: "https://ai-student-os.vercel.app",
    repoUrl: "https://github.com/Aztrix-MBM/ai-student-os",
    featured: true,
    accentColor: "var(--color-yellow)",
    details: {
      overview: "An all-in-one productivity hub designed specifically for undergraduate engineering students juggling academics, labs, certifications, and portfolio projects.",
      architecture: "Next.js App Router frontend with server-side authentication, real-time data streaming via Supabase PostgreSQL triggers, and asynchronous background queues for AI document summarization.",
      impact: "Reduced exam preparation sprint planning time by 40% among peer beta testers in university cohorts."
    }
  },
  {
    id: "motor-health-monitor",
    title: "Motor Health Monitor",
    categoryTag: "IOT / HARDWARE",
    category: "IoT / Hardware",
    oneLiner: "Real-time monitoring of motor health using Arduino and sensors.",
    role: "IoT Embedded Systems & Analytics Engineer",
    stack: ["Arduino", "Embedded C++", "Python", "MQTT", "Streamlit", "Accelerometer", "Thermal Sensors"],
    problemSolved: "Industrial electric motors frequently fail without advance warning, resulting in expensive downtime and safety hazards. Motor Health Monitor introduces non-invasive continuous telemetry to detect mechanical bearing wear and electrical anomalies before breakdown.",
    features: [
      "Sub-millisecond 3-axis vibration spectrum acquisition with MPU-6050 accelerometer",
      "Contactless infrared thermal sensing for instantaneous hotspot detection",
      "Lightweight MQTT publisher streaming continuous telemetry to edge analytics gateway",
      "Threshold-based predictive anomaly alerting triggering SMS / email maintenance dispatches"
    ],
    image: "/images/motor-monitor.svg",
    liveUrl: "https://motor-health-telemetry.streamlit.app",
    repoUrl: "https://github.com/Aztrix-MBM/motor-health-monitor",
    featured: true,
    accentColor: "var(--color-green)",
    details: {
      overview: "A cost-effective edge IoT condition monitoring prototype engineered to bring Industry 4.0 predictive maintenance capabilities to standard laboratory and industrial AC motors.",
      architecture: "Microcontroller running custom embedded C++ sampling routine; sensor payloads packaged into JSON packets and transmitted over Wi-Fi/MQTT broker to a Python analytics engine.",
      impact: "Successfully demonstrated 95%+ precision in simulated bearing misalignment and rotor overheating detections in electrical machinery lab."
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
