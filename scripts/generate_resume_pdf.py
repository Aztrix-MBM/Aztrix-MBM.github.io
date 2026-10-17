import os

def create_2page_resume():
    # Helper to construct a valid 2-page PDF with Helvetica fonts
    objects = []
    
    def add_object(content):
        objects.append(content)
        return len(objects)

    # Page 1 stream content
    p1_lines = [
        "q",
        # Header (Centered)
        "BT /F2 22 Tf 0.12 0.25 0.68 rg 180 795 Td (Muthubalamurugan) Tj ET",
        "BT /F1 11 Tf 0.2 0.25 0.35 rg 145 778 Td (B.Tech Artificial Intelligence & Data Science Student) Tj ET",
        "0.8 0.83 0.88 rg 45 765 505 1 re f",

        # ABOUT ME Section
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 45 748 Td (ABOUT ME) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 734 Td (Motivated and detail oriented B.Tech Artificial Intelligence and Data Science student with a strong passion for) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 722 Td (software development, artificial intelligence, system architecture, and modern technologies. Continuously learning) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 710 Td (through certifications, technical projects, and hands-on experience. Dedicated to solving complex problems, optimizing) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 698 Td (systems, and building innovative software solutions while expanding technical expertise and professional skills.) Tj ET",
        "0.8 0.83 0.88 rg 45 686 505 1 re f",

        # Vertical Divider Line
        "0.8 0.83 0.88 rg 235 50 1 630 re f",

        # ================= LEFT COLUMN =================
        # Contact
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 45 665 Td (CONTACT) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 650 Td (- Srivilliputhur, Tamil Nadu, India) Tj ET",
        "BT /F1 8.2 Tf 0.12 0.25 0.68 rg 45 637 Td (- https://aztrix-mbm.github.io/) Tj ET",
        "BT /F1 8.2 Tf 0.12 0.25 0.68 rg 45 624 Td (- Aztrixdev@gmail.com) Tj ET",
        "BT /F1 8.2 Tf 0.12 0.25 0.68 rg 45 611 Td (- github.com/Aztrix-MBM) Tj ET",
        "BT /F1 8.2 Tf 0.12 0.25 0.68 rg 45 598 Td (- linkedin.com/in/muthubalamurugan) Tj ET",

        # Education
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 45 568 Td (EDUCATION) Tj ET",
        "BT /F2 8.5 Tf 0.12 0.23 0.54 rg 45 552 Td (RAMCO INSTITUTE OF TECHNOLOGY (RIT)) Tj ET",
        "BT /F2 7.8 Tf 0.1 0.1 0.1 rg 45 540 Td (B.TECH - AI AND DATA SCIENCE) Tj ET",
        "BT /F2 7.8 Tf 0.3 0.3 0.3 rg 45 528 Td (2025 - 2029) Tj ET",
        "BT /F1 8 Tf 0.2 0.25 0.35 rg 45 515 Td (- Currently pursuing 2nd Year (7.8 CGPA).) Tj ET",
        "BT /F1 8 Tf 0.2 0.25 0.35 rg 45 503 Td (- Specializing in Artificial Intelligence,) Tj ET",
        "BT /F1 8 Tf 0.2 0.25 0.35 rg 45 491 Td (  Data Science, ML & Software Dev.) Tj ET",

        "BT /F2 8.5 Tf 0.12 0.23 0.54 rg 45 464 Td (KALAIMAGAL HIGHER SEC. SCHOOL) Tj ET",
        "BT /F2 7.8 Tf 0.1 0.1 0.1 rg 45 452 Td (HIGHER SECONDARY EDUCATION) Tj ET",
        "BT /F2 7.8 Tf 0.3 0.3 0.3 rg 45 440 Td (2011 - 2025) Tj ET",
        "BT /F1 8 Tf 0.2 0.25 0.35 rg 45 427 Td (- Completed Primary, Secondary & Higher Sec.) Tj ET",
        "BT /F1 8 Tf 0.2 0.25 0.35 rg 45 415 Td (- Graduated in 2025.) Tj ET",

        # Languages
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 45 382 Td (LANGUAGES) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 367 Td (- Tamil) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 353 Td (- English) Tj ET",

        # ================= RIGHT COLUMN =================
        # Projects
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 250 665 Td (PROJECTS) Tj ET",
        
        "BT /F2 9.2 Tf 0.12 0.23 0.54 rg 250 649 Td (EchoVerse AI (In Development)) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 637 Td (- Developed a generative AI platform featuring dynamic timeline simulation) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 626 Td (  across branching realities with real-time streaming intelligence.) Tj ET",
        "BT /F2 8.2 Tf 0.1 0.1 0.1 rg 250 615 Td (- Tech: Python, FastAPI, React, Google Gemini API) Tj ET",

        "BT /F2 9.2 Tf 0.12 0.23 0.54 rg 250 595 Td (AI Student OS (In Development)) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 583 Td (- Built student productivity ecosystem with course management, automated) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 572 Td (  syllabus-to-flashcard generation, and adaptive study scheduling.) Tj ET",
        "BT /F2 8.2 Tf 0.1 0.1 0.1 rg 250 561 Td (- Tech: Next.js, TypeScript, PostgreSQL, Supabase) Tj ET",

        "BT /F2 9.2 Tf 0.12 0.23 0.54 rg 250 541 Td (Motor Health Monitor (In Development)) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 529 Td (- Designing edge IoT condition monitoring with 3-axis vibration FFT spectrum,) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 518 Td (  contactless thermal sensing, and predictive anomaly alerting.) Tj ET",
        "BT /F2 8.2 Tf 0.1 0.1 0.1 rg 250 507 Td (- Tech: Python, Arduino, Embedded C++, MQTT) Tj ET",

        # Technical Experience
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 250 481 Td (TECHNICAL EXPERIENCE) Tj ET",
        "BT /F2 8.5 Tf 0.1 0.1 0.1 rg 250 467 Td (Self Learning & Personal Projects) Tj /F2 8 Tf 0.3 0.3 0.3 rg 150 0 Td (2025 - Present) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 454 Td (- Developed multiple software & AI projects using Python, React, full-stack.) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 442 Td (- Completed 29+ professional certifications across AI, Data Science & Cloud.) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 430 Td (- Enhancing expertise in ML, databases, system architecture & modern SWE.) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 418 Td (- Exploring full-stack development, agentic AI pipelines & backend systems.) Tj ET",

        # Skills
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 250 392 Td (SKILLS) Tj ET",
        # Col 1
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 250 378 Td (- AI Fundamentals) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 250 366 Td (- Data Science Fundamentals) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 250 354 Td (- Python Programming (Advanced)) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 250 342 Td (- Java Programming (Advanced)) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 250 330 Td (- C Programming (Advanced)) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 250 318 Td (- MySQL Architecture (Advanced)) Tj ET",
        # Col 2
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 405 378 Td (- Advanced Computing) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 405 366 Td (- System Architecture) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 405 354 Td (- Code Analysis) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 405 342 Td (- Problem Solving) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 405 330 Td (- System Optimization) Tj ET",
        "BT /F1 8.0 Tf 0.2 0.25 0.35 rg 405 318 Td (- Continuous Learning) Tj ET",

        "Q"
    ]
    p1_stream = "\n".join(p1_lines).encode("latin-1")

    # Page 2 stream content
    p2_lines = [
        "q",
        # Header (Centered)
        "BT /F2 22 Tf 0.12 0.25 0.68 rg 165 795 Td (MUTHUBALAMURUGAN) Tj ET",
        "BT /F1 11 Tf 0.2 0.25 0.35 rg 145 778 Td (B.Tech Artificial Intelligence & Data Science Student) Tj ET",
        "BT /F1 8.5 Tf 0.3 0.35 0.45 rg 95 763 Td (Aztrixdev@gmail.com  |  https://aztrix-mbm.github.io/  |  Srivilliputhur, Tamil Nadu, India) Tj ET",
        "0.8 0.83 0.88 rg 45 750 505 1 re f",

        # Vertical Divider Line
        "0.8 0.83 0.88 rg 235 50 1 690 re f",

        # ================= LEFT COLUMN =================
        # Profile
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 45 730 Td (PROFILE) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 715 Td (B.Tech Artificial Intelligence and Data Science) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 703 Td (student passionate about AI, software development,) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 691 Td (backend engineering, databases, and system) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 679 Td (architecture. Strong foundation in Python, Java,) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 667 Td (MySQL, React, and modern development practices) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 655 Td (with hands-on experience through personal projects) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 45 643 Td (and 29+ professional certifications.) Tj ET",

        # Interests
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 45 605 Td (INTERESTS) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 590 Td (- Artificial Intelligence) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 576 Td (- Software Development) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 562 Td (- Machine Learning) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 548 Td (- Data Science) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 534 Td (- System Architecture) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 520 Td (- Database Systems) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 506 Td (- Open Source) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 45 492 Td (- Modern Computing) Tj ET",

        # ================= RIGHT COLUMN =================
        # Certifications
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 250 730 Td (CERTIFICATIONS) Tj ET",
        "BT /F2 8.5 Tf 0.2 0.25 0.35 rg 250 715 Td (Professional Certifications) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 701 Td (- HP LIFE - Data Science & Analytics Certified) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 688 Td (- HP LIFE - Introduction to Cybersecurity Awareness) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 675 Td (- Infosys Springboard - Explore Machine Learning using Python) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 662 Td (- Forage - Cyber Job Simulation Experience) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 649 Td (- Forage - Controllers Job Simulation) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 636 Td (- Microsoft Applied Skills (GitHub Copilot, AI Chat, AI Research)) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 623 Td (- Google Developer Community Participation) Tj ET",
        "BT /F1 8.2 Tf 0.2 0.25 0.35 rg 250 610 Td (- Python, Java & MySQL Technical Accreditations) Tj ET",
        "BT /F2 8.5 Tf 0.12 0.23 0.54 rg 250 592 Td (29+ Industry Certifications Completed) Tj ET",

        # Professional Skills
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 250 560 Td (PROFESSIONAL SKILLS) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 546 Td (- English Communication) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 533 Td (- Typewriting) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 520 Td (- Critical Thinking) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 507 Td (- Analytical Thinking) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 494 Td (- Team Collaboration) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 481 Td (- Time Management) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 468 Td (- Continuous Learning) Tj ET",

        # Achievements
        "BT /F2 10.5 Tf 0.12 0.23 0.54 rg 250 435 Td (ACHIEVEMENTS) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 421 Td (- 29+ Professional Certifications Completed) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 408 Td (- Academic Performance: 7.8 CGPA at Ramco Institute of Tech.) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 395 Td (- Founder of Aztrix & Co - Software & AI Development Initiative) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 382 Td (- Active Technical Event & Hackathon Participant) Tj ET",
        "BT /F1 8.5 Tf 0.2 0.25 0.35 rg 250 369 Td (- Google Developer Community Participant) Tj ET",

        "Q"
    ]
    p2_stream = "\n".join(p2_lines).encode("latin-1")

    # Build objects
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
