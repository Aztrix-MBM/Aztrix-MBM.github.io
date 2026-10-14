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
  }
];
