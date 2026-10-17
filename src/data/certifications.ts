export type CertificateCategory = 'course' | 'event' | 'competition';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: CertificateCategory;
  categoryTag: string;
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
    year: "2026",
    category: "course",
    categoryTag: "COURSE",
    skillsCovered: ["Data Analytics", "Statistical Analysis", "Data Visualization", "Predictive Modeling"],
    verifyUrl: "https://drive.google.com/file/d/1cSXnO8gSPtN4QkAqZqdHq4aO2djd97_k/view?usp=sharing",
    badgeColor: "var(--color-yellow)"
  },
  {
    id: "hp-cybersecurity",
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP",
    year: "2026",
    category: "course",
    categoryTag: "COURSE",
    skillsCovered: ["Cybersecurity Fundamentals", "Threat Awareness", "Data Protection", "Network Safety"],
    verifyUrl: "https://drive.google.com/file/d/1E_p2Tif3igg6eiSGdozDD41JUKSnmB5A/view?usp=sharing",
    badgeColor: "var(--color-pink)"
  },
  {
    id: "forage-cyber-simulation",
    title: "Cyber Job Simulation",
    issuer: "Forage",
    year: "2026",
    category: "course",
    categoryTag: "COURSE",
    skillsCovered: ["Cyber Defense Simulation", "Incident Response", "Vulnerability Assessment", "Security Analysis"],
    verifyUrl: "https://drive.google.com/file/d/1Eus6gwGvCuUVaWYy0_MClmNeb1ROBMI8/view?usp=sharing",
    badgeColor: "var(--color-purple)"
  },
  {
    id: "forage-controllers-simulation",
    title: "Controllers Job Simulation",
    issuer: "Forage",
    year: "2026",
    category: "course",
    categoryTag: "COURSE",
    skillsCovered: ["Financial Controls", "Risk Governance", "Process Automation", "Auditing & Compliance"],
    verifyUrl: "https://drive.google.com/file/d/1LjgvBKR7YT_vgFglRO4707xmbXB2-Nnb/view?usp=sharing",
    badgeColor: "var(--color-green)"
  },
  {
    id: "infosys-machine-learning",
    title: "Explore Machine Learning using Python",
    issuer: "Infosys",
    year: "2026",
    category: "course",
    categoryTag: "COURSE",
    skillsCovered: ["Machine Learning", "Python", "Scikit-Learn", "Data Preprocessing", "Model Training"],
    verifyUrl: "https://drive.google.com/file/d/1g5kh4lEa1QpOqV5x0ED4dC5BFUaYySvC/view?usp=sharing",
    badgeColor: "var(--color-yellow)"
  },
  {
    id: "gdg-deploying-open-models-gke",
    title: "Deploying Open Models on GKE",
    issuer: "GDG Madurai",
    year: "2026",
    category: "event",
    categoryTag: "EVENT",
    credentialId: "P7QK-T2M9-W8R3-YL5B",
    skillsCovered: ["Google Kubernetes Engine (GKE)", "Open Models", "Cloud Infrastructure", "Model Deployment"],
    verifyUrl: "https://drive.google.com/file/d/1Z45dxf2z9rnVplHIVok4JFRe2Mv4pf1m/view?usp=sharing",
    badgeColor: "var(--color-pink)"
  },
  {
    id: "kare-oss-wonders-of-os",
    title: "KARE OSS — Wonders of OS 3.0",
    issuer: "Kalasalingam University (KARE)",
    year: "2026",
    category: "event",
    categoryTag: "EVENT",
    skillsCovered: ["Operating Systems", "Open Source Software (OSS)", "System Architecture", "Euphoria Tech Fest"],
    verifyUrl: "https://drive.google.com/file/d/1HqF05qnXvMY2nKicDPyDZL7BHxbARW46/view?usp=sharing",
    badgeColor: "var(--color-pink)"
  }
];
