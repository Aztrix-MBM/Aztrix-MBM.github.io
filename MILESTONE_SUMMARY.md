# 🌟 Muthubalamurugan — Portfolio Milestone & Progress Summary
*Last updated: 17 October 2026*

This document provides a permanent record of all completed features, design decisions, data structures, and deployment pipelines implemented for **Muthubalamurugan's Neo-Brutalist Engineering Portfolio**.

---

## 🌐 Live URLs & Environments
- **Production Live Site**: [https://aztrix-mbm.github.io/](https://aztrix-mbm.github.io/)
- **GitHub Repository**: [Aztrix-MBM/Aztrix-MBM.github.io](https://github.com/Aztrix-MBM/Aztrix-MBM.github.io) (`main` branch)
- **Local Dev Server**: `http://localhost:3000/` (Vite dev server)
- **Automated CI/CD**: GitHub Actions workflow in [deploy.yml](file:///.github/workflows/deploy.yml) auto-builds and deploys upon every push to `main`.

---

## 🛠️ Summary of Completed Sections & Features

### 1. Hero Section (`src/components/sections/HeroSection.tsx`)
- **Dynamic Role Ticker**: Cycles vertically through:
  - `SOFTWARE ENGINEER`
  - `AI DEVELOPER`
  - `FOUNDER OF AZTRIX & CO`
- **Portrait Photo**: Clean presentation without distracting wireframe meshes or handwritten overlays.
- **Quick Links**: Direct CTAs for "View Projects", "Contact Me", and quick resume access.

### 2. About Section (`src/components/sections/AboutSection.tsx`)
- **Personal Background**: B.Tech AI & Data Science student at Ramco Institute of Technology (7.8 CGPA, 2025–2029).
- **Secondary Education**: Kalaimagal Higher Secondary School (2011–2025).
- **Streamlined Cards**: Removed extraneous IoT cards to keep the narrative tightly focused on Software Engineering and AI Systems.

### 3. Skills & Capabilities (`src/data/skills.ts` & `src/styles/index.css`)
- **Balanced 2x2 Grid Layout**:
  1. **Programming Languages**:
     - `Python` • **Advanced** *(Yellow Highlight)*
     - `Java` • **Advanced** *(Yellow Highlight)*
     - `C` • **Advanced** *(Yellow Highlight)*
     - `C++` • Intermediate
     - `JavaScript (ES6+)` • Intermediate
     - `TypeScript` • Intermediate
     - `SQL` • Intermediate
  2. **AI, ML & Computer Vision**:
     - PyTorch & TensorFlow, OpenCV, Google Gemini API, LangChain, Scikit-Learn, Pandas & NumPy *(MediaPipe removed per request)*.
  3. **Web & Full-Stack Engineering**:
     - React.js, Next.js (App Router), FastAPI, Node.js & Express, RESTful API Design, Modern CSS & Neo-Brutalism.
  4. **Databases, Cloud & DevOps**:
     - PostgreSQL & Supabase, `MySQL` • **Advanced** *(Yellow Highlight)*, MongoDB, Git & GitHub Actions *(Docker and Linux removed per request)*.

### 4. Interactive Certifications System (`src/components/sections/CertificationsSection.tsx`)
- **3-Category Filter Tabs**:
  - `✦ ALL (8)`
  - `🎓 COURSE CERTIFICATES (5)`:
    1. HP: Data Science & Analytics (2026)
    2. HP: Introduction to Cybersecurity Awareness (2026)
    3. Forage: Cyber Job Simulation (2026)
    4. Forage: Controllers Job Simulation (2026)
    5. Infosys: Explore Machine Learning using Python (2026)
  - `🎪 EVENT CERTIFICATES (1)`:
    1. GDG Madurai: Deploying Open Models on GKE (2026)
  - `🏆 COMPETITION CERTIFICATES (2)`:
    1. Kalasalingam University: KARE OSS — Wonders of OS 3.0 (2026)
    2. Kalasalingam University: Wonders Of AI 4.0 — 24 Hrs Hackathon (2026)
- **Features**: Live counter pills, category badges on every card, landscape orientation on all verification drive links.

### 5. Featured Projects Section (`src/data/projects.ts` & `src/components/sections/ProjectsSection.tsx`)
- **Current Active Builds**:
  1. **EchoVerse AI** *(AI / GenAI)*
  2. **AI Student OS** *(Web App)*
  3. **Eye Moment Vision Controller** *(Computer Vision)*
- **Category Filter Tabs**: `ALL`, `AI / GenAI`, `Web App`, `Computer Vision` *(IoT category cleanly removed)*.
- **Detailed Modal**: Interactive modal with problem statement, system architecture, tech stack tags, and repository links.

### 6. Executive 2-Page Resume System (`src/components/sections/ResumeSection.tsx` & PDF)
- Built to match user's custom reference sample format:
  - **Sheet 1**: Header, About Me, Contact, Education (RIT & Kalaimagal HSS with 2025 completion), Languages (Tamil & English), Projects with `(In Development)` badges, Technical Experience, 2-column Skills list.
  - **Sheet 2**: Profile, Interests, 29+ Industry Certifications badge, Professional Skills, Key Achievements.
- **Pure Python PDF Generator**: [scripts/generate_resume_pdf.py](file:///scripts/generate_resume_pdf.py) builds [public/resume/Muthubala_Resume.pdf](file:///public/resume/Muthubala_Resume.pdf) in standard PDF-1.4 format without external binary dependencies.

---

## 🔒 Privacy & Safety Guidelines
- Personal phone number is intentionally omitted from the public repository and web pages to prevent spam, scraping, and social engineering risks.
- Contact is channeled via professional channels: GitHub, LinkedIn, and personal email.

---

## 📌 Next Steps When Ready
1. Push real code repositories for `EchoVerse AI`, `AI Student OS`, and `Eye Moment Vision Controller` to GitHub.
2. Update repository URLs and live deployment links in [projects.ts](file:///src/data/projects.ts).
3. Replace SVG illustration mockups with real production screenshots in `public/images/`.
