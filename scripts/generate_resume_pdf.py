import os

def create_2page_resume():
    # Helper to construct a valid 2-page PDF with Helvetica fonts
    objects = []
    
    def add_object(content):
        objects.append(content)
        return len(objects)

    # 1: Catalog
    # 2: Pages
    # 3: Page 1
    # 4: Page 2
    # 5: Font Helvetica
    # 6: Font Helvetica-Bold
    # 7: Font Courier
    # 8: Stream 1
    # 9: Stream 2

    # Page 1 stream content
    p1_lines = [
        "q",
        # Top banner line
        "0.2 0.2 0.2 rg 50 795 495 2 re f",
        "BT /F2 22 Tf 0 0 0 rg 50 770 Td (MUTHUBALAMURUGAN) Tj ET",
        "BT /F1 11 Tf 0.3 0.3 0.3 rg 50 754 Td (ARTIFICIAL INTELLIGENCE & DATA SCIENCE ENGINEER) Tj ET",
        "BT /F3 9 Tf 0.4 0.4 0.4 rg 50 738 Td (Tamil Nadu, India  |  muthubalamurugan.dev@gmail.com  |  github.com/muthubalamurugan) Tj ET",
        "0.85 0.85 0.85 rg 50 726 495 1 re f",

        # Header 1: Executive Profile
        "BT /F2 12 Tf 0 0 0 rg 50 706 Td (1. PROFESSIONAL SUMMARY) Tj ET",
        "0.9 0.8 0.2 rg 50 700 160 2 re f",
        "BT /F1 9.5 Tf 0.15 0.15 0.15 rg 50 684 Td (Innovative Artificial Intelligence & Data Science student at Ramco Institute of Technology.) Tj ET",
        "BT /F1 9.5 Tf 0.15 0.15 0.15 rg 50 670 Td (Focused on engineering real-world software across generative AI pipelines, computer vision, and) Tj ET",
        "BT /F1 9.5 Tf 0.15 0.15 0.15 rg 50 656 Td (industrial IoT edge telemetry with high performance and resilient system architecture.) Tj ET",

        # Header 2: Education
        "BT /F2 12 Tf 0 0 0 rg 50 630 Td (2. EDUCATION & ACADEMIC CREDENTIALS) Tj ET",
        "0.9 0.8 0.2 rg 50 624 235 2 re f",
        "BT /F2 10.5 Tf 0 0 0 rg 50 606 Td (Bachelor of Technology - Artificial Intelligence & Data Science) Tj ET",
        "BT /F1 10 Tf 0.2 0.2 0.2 rg 50 592 Td (Ramco Institute of Technology | Timeline: 2025 - 2029) Tj ET",
        "BT /F2 9.5 Tf 0 0 0 rg 50 578 Td (Cumulative CGPA: 7.8 / 10.0) Tj ET",
        "BT /F1 9 Tf 0.3 0.3 0.3 rg 50 564 Td (Key Coursework: Machine Learning, Neural Networks, Computer Vision, Database Systems, DSA) Tj ET",

        # Header 3: Technical Skills Matrix
        "BT /F2 12 Tf 0 0 0 rg 50 538 Td (3. TECHNICAL SKILLS MATRIX) Tj ET",
        "0.9 0.8 0.2 rg 50 532 170 2 re f",
        "BT /F2 9.5 Tf 0 0 0 rg 50 514 Td (Programming Languages:) Tj /F1 9.5 Tf ( Python, TypeScript, JavaScript, C++, Java, SQL) Tj ET",
        "BT /F2 9.5 Tf 0 0 0 rg 50 498 Td (AI / ML & Computer Vision:) Tj /F1 9.5 Tf ( PyTorch, OpenCV, Scikit-Learn, Google Gemini API, MediaPipe) Tj ET",
        "BT /F2 9.5 Tf 0 0 0 rg 50 482 Td (Web & Distributed Systems:) Tj /F1 9.5 Tf ( React.js, Next.js, FastAPI, Node.js, Express, Supabase, PostgreSQL) Tj ET",
        "BT /F2 9.5 Tf 0 0 0 rg 50 466 Td (IoT, Firmware & Tools:) Tj /F1 9.5 Tf ( Arduino, ESP32, MQTT Protocol, Git/GitHub, Docker, Linux) Tj ET",

        # Header 4: Featured Engineering Projects (Part 1)
        "BT /F2 12 Tf 0 0 0 rg 50 440 Td (4. HIGH-IMPACT ENGINEERING PROJECTS (PART 1)) Tj ET",
        "0.9 0.8 0.2 rg 50 434 260 2 re f",

        # Project 1: EchoVerse AI
        "BT /F2 10.5 Tf 0 0 0 rg 50 416 Td (EchoVerse AI - Temporal Multiverse & Scenario Engine (2025)) Tj ET",
        "BT /F3 8.5 Tf 0.3 0.3 0.3 rg 50 402 Td (Tech Stack: React, FastAPI, Python, Google Gemini 2.0 API, Server-Sent Events) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 388 Td (- Architected generative timeline engine enabling branching narrative and alternative reality simulations.) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 374 Td (- Engineered low-latency streaming pipeline delivering sub-200ms token completion speeds.) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 360 Td (- Designed graph-based decision tree visualization for instant rollback and scenario navigation.) Tj ET",

        # Project 2: AI Student OS
        "BT /F2 10.5 Tf 0 0 0 rg 50 334 Td (AI Student OS - Integrated Academic Intelligence Workspace (2025)) Tj ET",
        "BT /F3 8.5 Tf 0.3 0.3 0.3 rg 50 320 Td (Tech Stack: Next.js 14, TypeScript, Supabase, PostgreSQL, TailwindCSS) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 306 Td (- Engineered comprehensive productivity suite with automated flashcards generation and task boards.) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 292 Td (- Built real-time query velocity tracker and relational grade schema using PostgreSQL and Row Level Security.) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 278 Td (- Designed responsive Neo-Brutalist dashboard delivering fluid mobile and desktop accessibility.) Tj ET",

        # Page 1 Footer
        "0.8 0.8 0.8 rg 50 70 495 1 re f",
        "BT /F3 8 Tf 0.5 0.5 0.5 rg 50 56 Td (RAMCO INSTITUTE OF TECHNOLOGY  |  MUTHUBALAMURUGAN RESUME  |  PAGE 01 OF 02) Tj ET",
        "Q"
    ]
    p1_stream = "\n".join(p1_lines).encode("latin-1")

    # Page 2 stream content
    p2_lines = [
        "q",
        # Top banner line
        "0.2 0.2 0.2 rg 50 795 495 2 re f",
        "BT /F2 14 Tf 0 0 0 rg 50 772 Td (MUTHUBALAMURUGAN  -  CREDENTIALS & EXPERIENCE DOSSIER) Tj ET",
        "BT /F3 8.5 Tf 0.4 0.4 0.4 rg 50 756 Td (Hardware Systems, Certified Industry Competencies, Job Simulations & Collegiate Honors) Tj ET",
        "0.85 0.85 0.85 rg 50 744 495 1 re f",

        # Header 5: Featured Engineering Projects (Part 2)
        "BT /F2 12 Tf 0 0 0 rg 50 722 Td (5. HIGH-IMPACT ENGINEERING PROJECTS (PART 2 - HARDWARE & VISION)) Tj ET",
        "0.9 0.8 0.2 rg 50 716 380 2 re f",

        # Project 3: Motor Health Monitor
        "BT /F2 10.5 Tf 0 0 0 rg 50 698 Td (Industrial Motor Health Monitor - Non-Invasive Edge Telemetry (2024)) Tj ET",
        "BT /F3 8.5 Tf 0.3 0.3 0.3 rg 50 684 Td (Tech Stack: Arduino, Embedded C++, Python, MQTT Protocol, Accelerometer, Thermistor) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 670 Td (- Designed IoT condition-monitoring rig sampling 3-axis vibration FFT spectrum and real-time temperatures.) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 656 Td (- Automated MQTT alert triggers for bearing anomaly detection, mitigating equipment downtime.) Tj ET",

        # Project 4: Eye Moment Assistive Controller
        "BT /F2 10.5 Tf 0 0 0 rg 50 630 Td (Eye Moment - Hands-Free Assistive Gaze Cursor Controller (2024)) Tj ET",
        "BT /F3 8.5 Tf 0.3 0.3 0.3 rg 50 616 Td (Tech Stack: Python, OpenCV, MediaPipe, PyAutoGUI, NumPy) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 602 Td (- Engineered accessibility interface tracking 468 3D facial mesh points for responsive gaze cursor steering.) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 588 Td (- Achieved 60 FPS real-time responsiveness with ergonomic blink-detection gesture controls.) Tj ET",

        # Header 6: Verified Industry Certifications
        "BT /F2 12 Tf 0 0 0 rg 50 560 Td (6. VERIFIED INDUSTRY CERTIFICATIONS) Tj ET",
        "0.9 0.8 0.2 rg 50 554 230 2 re f",

        "BT /F2 9.5 Tf 0 0 0 rg 50 536 Td (1. Data Science & Analytics) Tj /F1 9 Tf ( - HP (2024)) Tj ET",
        "BT /F3 8 Tf 0.3 0.3 0.3 rg 65 524 Td (Skills: Data Analytics, Statistical Analysis, Data Visualization, Predictive Modeling) Tj ET",

        "BT /F2 9.5 Tf 0 0 0 rg 50 508 Td (2. Introduction to Cybersecurity Awareness) Tj /F1 9 Tf ( - HP (2024)) Tj ET",
        "BT /F3 8 Tf 0.3 0.3 0.3 rg 65 496 Td (Skills: Cybersecurity Fundamentals, Threat Awareness, Data Protection, Network Safety) Tj ET",

        "BT /F2 9.5 Tf 0 0 0 rg 50 480 Td (3. Cyber Job Simulation) Tj /F1 9 Tf ( - Forage (2024)) Tj ET",
        "BT /F3 8 Tf 0.3 0.3 0.3 rg 65 468 Td (Skills: Incident Response, Vulnerability Assessment, Security Log Analysis, Defense Simulation) Tj ET",

        "BT /F2 9.5 Tf 0 0 0 rg 50 452 Td (4. Controllers Job Simulation) Tj /F1 9 Tf ( - Forage (2024)) Tj ET",
        "BT /F3 8 Tf 0.3 0.3 0.3 rg 65 440 Td (Skills: Financial Governance, Risk Assessment, Process Automation, Internal Control Auditing) Tj ET",

        "BT /F2 9.5 Tf 0 0 0 rg 50 424 Td (5. Explore Machine Learning using Python) Tj /F1 9 Tf ( - Infosys (2024)) Tj ET",
        "BT /F3 8 Tf 0.3 0.3 0.3 rg 65 412 Td (Skills: Machine Learning Pipelines, Scikit-Learn, Feature Engineering, Model Evaluation) Tj ET",

        # Header 7: Virtual Job Simulations
        "BT /F2 12 Tf 0 0 0 rg 50 384 Td (7. PRACTICAL INDUSTRY SIMULATIONS & INTERNSHIPS) Tj ET",
        "0.9 0.8 0.2 rg 50 378 300 2 re f",
        "BT /F2 9.5 Tf 0 0 0 rg 50 360 Td (Forage Cybersecurity Virtual Experience (2024):) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 348 Td (Completed enterprise threat defense scenarios, incident response workflows, and log triage protocols.) Tj ET",
        "BT /F2 9.5 Tf 0 0 0 rg 50 330 Td (Forage Financial Controllership Simulation (2024):) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 318 Td (Executed risk evaluations, automated financial reconciliation checks, and internal audit compliance.) Tj ET",

        # Header 8: Hackathons & Honors
        "BT /F2 12 Tf 0 0 0 rg 50 290 Td (8. COMPETITIVE HACKATHONS & ACHIEVEMENTS) Tj ET",
        "0.9 0.8 0.2 rg 50 284 250 2 re f",
        "BT /F2 9.5 Tf 0 0 0 rg 50 266 Td (2x Collegiate Hackathon Finalist (2024 - 2025):) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 254 Td (Engineered rapid-turnaround generative AI and hardware prototypes under strict 24-hr sprint limits.) Tj ET",
        "BT /F2 9.5 Tf 0 0 0 rg 50 236 Td (Technical Symposium Exhibitor (2024):) Tj ET",
        "BT /F1 9 Tf 0.2 0.2 0.2 rg 50 224 Td (Presented live demonstrations of hands-free computer vision assistive tools and industrial edge sensing.) Tj ET",

        # Page 2 Footer
        "0.8 0.8 0.8 rg 50 70 495 1 re f",
        "BT /F3 8 Tf 0.5 0.5 0.5 rg 50 56 Td (RAMCO INSTITUTE OF TECHNOLOGY  |  MUTHUBALAMURUGAN RESUME  |  PAGE 02 OF 02) Tj ET",
        "Q"
    ]
    p2_stream = "\n".join(p2_lines).encode("latin-1")

    # Build objects
    # 1: Catalog
    # 2: Pages
    # 3: Page 1
    # 4: Page 2
    # 5: F1 (Helvetica)
    # 6: F2 (Helvetica-Bold)
    # 7: F3 (Courier)
    # 8: Stream 1
    # 9: Stream 2

    output = bytearray()
    offsets = []

    def write_obj(num, content_bytes):
        offsets.append(len(output))
        output.extend(f"{num} 0 obj\n".encode("latin-1"))
        output.extend(content_bytes)
        output.extend(b"\nendobj\n")

    output.extend(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")

    # 1: Catalog
    write_obj(1, b"<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    write_obj(2, b"<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>")
    # 3: Page 1
    write_obj(3, b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 8 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>")
    # 4: Page 2
    write_obj(4, b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 9 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>")
    # 5: Font Helvetica
    write_obj(5, b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
    # 6: Font Helvetica-Bold
    write_obj(6, b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
    # 7: Font Courier
    write_obj(7, b"<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>")
    # 8: Stream 1
    write_obj(8, f"<< /Length {len(p1_stream)} >>\nstream\n".encode("latin-1") + p1_stream + b"\nendstream")
    # 9: Stream 2
    write_obj(9, f"<< /Length {len(p2_stream)} >>\nstream\n".encode("latin-1") + p2_stream + b"\nendstream")

    xref_offset = len(output)
    output.extend(f"xref\n0 {len(offsets) + 1}\n0000000000 65535 f \n".encode("latin-1"))
    for off in offsets:
        output.extend(f"{off:010d} 00000 n \n".encode("latin-1"))

    output.extend(f"trailer\n<< /Size {len(offsets) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode("latin-1"))

    dest_path = r"public\resume\Muthubala_Resume.pdf"
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    with open(dest_path, "wb") as f:
        f.write(output)
    print(f"Successfully generated 2-page PDF: {dest_path} ({len(output)} bytes)")

if __name__ == "__main__":
    create_2page_resume()
