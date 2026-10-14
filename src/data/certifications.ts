export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  skillsCovered: string[];
  verifyUrl: string;
  badgeColor: string;
}

export const certificationsData: Certification[] = [
  {
    id: "hp-data-science",
    title: "Data Science & Analytics",
    issuer: "HP",
    year: "2024",
    skillsCovered: ["Data Analytics", "Statistical Analysis", "Data Visualization", "Predictive Modeling"],
    verifyUrl: "https://drive.google.com/file/d/1cSXnO8gSPtN4QkAqZqdHq4aO2djd97_k/view?usp=sharing",
    badgeColor: "var(--color-yellow)"
  },
  {
    id: "dl-specialization",
    title: "Deep Learning & Neural Networks Specialization",
    issuer: "DeepLearning.AI / Coursera",
    year: "2025",
    credentialId: "DL-AI-2025-9921",
    skillsCovered: ["Convolutional Neural Networks", "Backpropagation", "Hyperparameter Tuning", "Sequence Models"],
    verifyUrl: "https://coursera.org/verify/specialization/deeplearning",
    badgeColor: "var(--color-purple)"
  },
  {
    id: "full-stack-bootcamp",
    title: "Full-Stack Web Development Professional Certificate",
    issuer: "freeCodeCamp / Meta Curriculum",
    year: "2024",
    credentialId: "FCC-FS-84729",
    skillsCovered: ["Modern JavaScript", "React", "Node.js", "Relational Databases", "Responsive Architecture"],
    verifyUrl: "https://freecodecamp.org/certification/muthubalamurugan/full-stack",
    badgeColor: "var(--color-yellow)"
  },
  {
    id: "nptel-ai",
    title: "Artificial Intelligence & Search Algorithms",
    issuer: "NPTEL / IIT Madras",
    year: "2025",
    credentialId: "NPTEL25CS104A",
    skillsCovered: ["Heuristic Search", "Adversarial Search", "Knowledge Representation", "Propositional Logic"],
    verifyUrl: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS104A",
    badgeColor: "var(--color-pink)"
  },
  {
    id: "iot-embedded",
    title: "Embedded Systems & IoT Engineering",
    issuer: "Infosys Springboard",
    year: "2024",
    credentialId: "INF-IOT-4821",
    skillsCovered: ["Microcontroller Architecture", "Sensor Interfacing", "MQTT & HTTP Protocols", "Real-Time Telemetry"],
    verifyUrl: "https://infyspringboard.onwingspan.com/en/share/certificate",
    badgeColor: "var(--color-green)"
  },
  {
    id: "python-datascience",
    title: "Python for Data Science & Applied Machine Learning",
    issuer: "IBM / Cognitive Class",
    year: "2024",
    credentialId: "IBM-PY-ML-3390",
    skillsCovered: ["NumPy", "Pandas", "Scikit-Learn", "Data Wrangling", "Statistical Modeling"],
    verifyUrl: "https://cognitiveclass.ai/certificates/python-data-science",
    badgeColor: "var(--color-yellow)"
  }
];
