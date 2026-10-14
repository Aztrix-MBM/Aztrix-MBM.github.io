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
    id: "hp-cybersecurity",
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP",
    year: "2024",
    skillsCovered: ["Cybersecurity Fundamentals", "Threat Awareness", "Data Protection", "Network Safety"],
    verifyUrl: "https://drive.google.com/file/d/1E_p2Tif3igg6eiSGdozDD41JUKSnmB5A/view?usp=sharing",
    badgeColor: "var(--color-pink)"
  },
  {
    id: "forage-cyber-simulation",
    title: "Cyber Job Simulation",
    issuer: "Forage",
    year: "2024",
    skillsCovered: ["Cyber Defense Simulation", "Incident Response", "Vulnerability Assessment", "Security Analysis"],
    verifyUrl: "https://drive.google.com/file/d/1GQWZo36GmZbT5yVdvk8DmwKvkdClcpBT/view?usp=sharing",
    badgeColor: "var(--color-purple)"
  }
];
