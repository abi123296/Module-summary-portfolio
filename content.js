const LECTURE_DATA = [
  {
    week: 1,
    title: "Introduction & Self-Awareness",
    subtitle: "Employability Skills & The Johari Window",
    instructor: "Mrs. Ishara Weerasinghe",
    overview: "This module introduces the core definition of professional and employability skills—the non-technical capabilities that complement technical expertise and drive workplace success. It covers the categorization of workplace skills into Technical (hard), Soft (interpersonal), and Transferable (versatile across roles). A major focus is placed on personal self-awareness as the foundation of development, explored practically through the Johari Window model. The Johari Window represents personal traits, strengths, and vulnerabilities from four perspectives based on what is known/unknown to ourselves and others: the Open Area, Blind Spot, Hidden Area, and Unknown Area.",
    skills: [
      "Categorization of workplace skills (Technical, Soft, Transferable)",
      "Self-reflection and identifying personal core values, beliefs, and attitudes",
      "Using the Johari Window to map self-awareness and request constructive feedback",
      "Character building and understanding traits required for professional environments"
    ],
    activities: "Students engaged in a 'Skills Match-Up' exercise mapping skills like leadership, communication, and adaptability to specific corporate roles. They also completed a personal Johari Window worksheet, selecting their top five strengths and comparing them with feedback from peers to identify hidden strengths and blind spots.",
    reflection: "As a future IT professional, technical skills like coding get me through the door, but soft skills keep me in the room. The Johari Window exercise taught me that my 'Blind Area' contains strengths I underutilize, such as calm decision-making during crisis. By actively seeking feedback from peers and professors, I can expand my 'Open Area' and build stronger collaborative relationships, which is vital for agile software development teams.",
    video: ""
  },
  {
    week: 2,
    title: "Emotional Intelligence (EQ) ",
    subtitle: "Understanding Emotions in the Workplace",
    instructor: "Mrs. Hubika Joshi",
    overview: "This lecture explores Emotional Intelligence Quotient (EQ) and its comparison with Intelligence Quotient (IQ). EQ refers to the ability to identify, understand, manage, and influence emotions in oneself and others. The curriculum details the five key pillars of EQ defined by Daniel Goleman: Self-Awareness, Self-Regulation, Internal Motivation, Empathy, and Social Skills. It also addresses the concept of 'Emotional Leakage'—how repressed or unmanaged emotions manifest unconsciously in our body language and tone of voice, potentially disrupting professional interactions.",
    skills: [
      "Distinguishing EQ from IQ and understanding why EQ is critical for leadership",
      "Self-regulation techniques to control impulsive behaviors and responses",
      "Empathy development to understand diverse perspectives in team dynamics",
      "Detecting and managing 'Emotional Leakage' in high-stress situations"
    ],
    activities: "Analyzed case studies of workplace friction and mapped out self-regulation strategies. Practiced reading non-verbal emotional cues from teammates and discussed active methods to manage stress and de-escalate conflicts.",
    reflection: "In software engineering, technical debates about architecture or code reviews can easily become emotional. A high EQ allows me to decouple my personal identity from my code, accepting constructive criticism without getting defensive (Self-Regulation). Developing empathy ensures that when a colleague is struggling with a deadline, I approach them with support rather than frustration, keeping the project aligned and team morale high.",
    video: ""
  },
  {
    week: 3,
    title: "Portfolio Management",
    subtitle: "Documenting Professional Growth",
    instructor: "Mrs. Ishara Weerasinghe",
    overview: "This module defines the purpose and structure of professional portfolios. It covers the four primary types of portfolios: Personal (hobbies and personal growth), Career/Dossier (work history and certifications), Employment (tailored samples for job applications), and Assessment (academically oriented showcasing learning outcomes). It highlights how a portfolio functions as a dynamic, living document that provides tangible proof of competencies and learning journeys, rather than just listing job titles.",
    skills: [
      "Understanding the structural requirements of different portfolio types",
      "Selecting and refining work samples to showcase versatility and expertise",
      "Writing reflective statements that contextualize artifacts and demonstrate learning",
      "Utilizing modern digital platforms (GitHub, LinkedIn, custom web apps) for portfolio hosting"
    ],
    activities: "Reviewed various portfolio platforms and analyzed what makes a writing or technical portfolio effective. Created an outline of artifacts for our current Professional Skills module assessment portfolio.",
    reflection: "Creating this portfolio is itself an exercise in Week 3's concepts. A portfolio is not a static archive; it is a story of my professional evolution. By compiling my lecture learnings, worksheets, and reflections into an interactive J.A.R.V.I.S. interface, I am showcasing not just my knowledge of soft skills, but my technical web development abilities. It serves as an active bridge between my academic credentials and my real-world capabilities.",
    video: ""
  },
  {
    week: 4,
    title: "CV & Cover Letter Writing",
    subtitle: "Crafting a Positive First Impression",
    instructor: "Mrs. Ishara Weerasinghe",
    overview: "This lecture guides students through the principles of writing high-impact Curriculum Vitaes (CVs) and Cover Letters. It emphasizes the importance of tailoring these documents to specific job descriptions rather than sending generic applications. Key topics include understanding the structural layout of a modern CV, highlighting achievements using action-oriented language, researching target companies to align cover letters with their corporate mission, and avoiding common blunders that lead to immediate rejection by recruiters.",
    skills: [
      "Structuring a professional CV (Header, Profile, Education, Experience, Skills, Projects)",
      "Writing persuasive cover letters that link personal achievements to company goals",
      "Tailoring applications based on thorough keyword research of job descriptions",
      "Formatting standards to pass Automated Tracking Systems (ATS)"
    ],
    activities: "Analyzed job advertisements, conducted company research, and drafted a customized CV and Cover Letter. Watched a recruiter feedback video identifying common CV design mistakes (such as excessive text, spelling errors, and irrelevant details).",
    reflection: "Learning to write a CV made me realize that recruiters only spend about 6 seconds on an initial scan. I must format my experience using strong action verbs and metrics (e.g., 'improved database efficiency by 20%') rather than listing simple tasks. My CV must be dynamic—tailored for every role I apply to. The cover letter is my opportunity to tell a story that connects my technical passion to the company's specific challenges.",
    video: "./extracted_lectures/week4/how-to-write-a-successful-cv.mp4"
  },
  {
    week: 5,
    title: "Job Hunting & Interview Skills",
    subtitle: "Mastering the Art of Selection",
    instructor: "Mrs. Ishara Weerasinghe",
    overview: "This module covers the comprehensive pipeline of job hunting and interviews. It focuses on effective interview preparation, including company research, dress codes, grooming, and body language. It teaches the STAR method (Situation, Task, Action, Result) for structuring responses to behavioral questions. The lecture also outlines the '6 Cs' of effective verbal communication (Clear, Concise, Concrete, Correct, Coherent, Courteous) and the critical role of non-verbal cues (eye contact, posture, handshakes) in establishing confidence.",
    skills: [
      "Applying the STAR method to structure behavioral interview answers",
      "Mastering professional grooming, body language, and non-verbal communication",
      "Practicing active listening during interviews to ensure responses are relevant",
      "Deploying the 6 Cs of communication to maintain conciseness and clarity"
    ],
    activities: "Participated in mock interviews acting as both interviewer and candidate. Practiced formulating STAR stories for common questions like 'Tell me about a time you handled a team conflict'. Watched and critiqued video clips showing good and bad interview performances.",
    reflection: "Interviews are not interrogation sessions; they are professional conversations. Using the STAR method has transformed how I discuss my projects. Instead of vaguely saying 'I worked on a team project', I can state the specific situation, my assigned task, the technical action I took, and the successful result. This makes my contributions concrete and proves my value to potential employers.",
    video: "./extracted_lectures/week5/job-interviews-good-and-bad.mp4"
  },
  {
    week: 6,
    title: "Digital & Office Communication",
    subtitle: "Netiquette, Emails, and Telephone Etiquette",
    instructor: "Mrs. Ishara Weerasinghe",
    overview: "This lecture addresses communication protocols in modern corporate environments, focusing on written netiquette (online behavior) and vocal phone communication. It details the structural rules of professional email writing (greetings, clear subject lines, spacing, professional sign-offs) and warns against informalities like contractions, emojis, and writing in ALL CAPS. For verbal communication, it presents the 7 essential guidelines for professional telephone use, highlighting promptness, vocal tone, active listening, and taking responsibility for inquiries.",
    skills: [
      "Drafting professional emails with structured, action-oriented layouts",
      "Adhering to netiquette rules in virtual workspaces (Slack, Teams, Email)",
      "Executing proper telephone etiquette (greeting, active listening, handling hold/transfer protocols)",
      "Maintaining professional boundaries in digital text communication"
    ],
    activities: "Completed an email editing worksheet identifying grammatical and formatting errors in a sample job application. Conducted role-play scenarios simulating customer service telephone calls, focusing on handling frustrated clients and using appropriate phone scripts.",
    reflection: "In a world of remote work and global IT teams, written communication is my primary representation. A messy email with no subject line or full of slang signals a lack of professionalism. I learned that telephone etiquette relies entirely on my vocal tone, since the caller cannot see my body language. Smiling while speaking actually changes the tone of my voice, making me sound welcoming and helpful, which is vital for IT client support.",
    video: "./extracted_lectures/week6/proper-telephone-etiquette.mp4"
  },
  {
    week: 7,
    title: "Dining Etiquette",
    subtitle: "Confidence at the Table",
    instructor: "Ms. Samudini Sandalika",
    overview: "This module covers the rules of business dining etiquette, proving that table manners are an extension of professional respect. It details the setup of formal table settings using the BMW rule (Bread on the left, Meal in the center, Water/Drinks on the right) and the 'outside-in' rule for utensil usage. It contrasts the American (cut and switch hands) and Continental (keep cutlery in original hands) styles of eating. The module also covers conversation boundaries (topics to avoid like money, politics, and gossip) and modern digital dining norms (phone-free tables).",
    skills: [
      "Correctly identifying and using multi-course formal table settings",
      "Mastering American and Continental styles of cutlery management",
      "Managing dietary requirements and awkward table blunders with grace",
      "Maintaining professional conversation topics during business dining"
    ],
    activities: "Participated in 'The Dinner Party Challenge' role-play simulating a formal awards dinner, where group members had to spot deliberate dining blunders (e.g., placing a phone on the table, using the wrong glass, or buttering an entire bread slice at once).",
    reflection: "Business decisions are frequently made over meals. If I am nervous about which fork to use, I cannot focus on the business discussion. The BMW rule and the 'outside-in' cutlery system give me a simple framework to navigate any table. Keeping my phone off the table is a crucial mark of respect in 2025; it signals to my hosts and clients that they have my complete, undivided attention.",
    video: ""
  },
  {
    week: 8,
    title: "Grooming & Personal Branding",
    subtitle: "Establishing Professional Credibility",
    instructor: "Ms. Oshini Wimalasena",
    overview: "This lecture connects daily hygiene and dress codes to the broader concept of personal branding. Grooming is defined as removing visual and sensory distractions (e.g., wrinkles, poor hygiene) so that one's ideas and talents can shine. It introduces color coordination guides (neutral bases with pastel accents) and guidelines for setting physical, emotional, digital, and professional boundaries in the workplace. Respecting diversity in backgrounds, cultures, and values is emphasized as a core professionalism competency.",
    skills: [
      "Defining and maintaining a consistent professional personal brand",
      "Selecting appropriate attire (Business Formal vs. Business Casual) matching industry norms",
      "Identifying and respecting personal, digital, and professional boundaries",
      "Creating and delivering a concise, compelling 10-second professional introduction"
    ],
    activities: "Drafted a personal daily grooming checklist and mapped outfits for interviews. Practiced delivering a 10-second elevator pitch to introduce ourselves to recruiters. Reviewed boundary-respecting and repair phrases for accidental violations.",
    reflection: "Personal branding isn't just about my LinkedIn profile; it's the sum of my daily habits. Dressing appropriately and maintaining grooming signals that I take my work and the people around me seriously. Respecting boundaries—like not sending late-night work messages unless it's a critical production outage—shows respect for my colleagues' personal lives and builds long-term professional trust.",
    video: ""
  },
  {
    week: 9,
    title: "Negotiation Skills",
    subtitle: "Reaching Mutually Acceptable Agreements",
    instructor: "Mrs. Maneesha Aishcharya",
    overview: "This module outlines the structured process of negotiation, focusing on collaboration rather than conflict. Key negotiation principles include placing 'people before problems', focusing on underlying interests rather than rigid positions, and co-owning the negotiation process. A major technical concept introduced is the BATNA (Best Alternative to a Negotiated Agreement), which acts as a negotiator's safety net and benchmarks when to accept an offer or walk away.",
    skills: [
      "Preparing for negotiations by defining goals, trade-offs, and target agreements",
      "Calculating and utilizing a personal BATNA to assess negotiation leverage",
      "Applying interest-based negotiation to find win-win outcomes",
      "Avoiding common negotiation pitfalls, such as emotional reactions and rushing agreements"
    ],
    activities: "Conducted simulated salary and project scope negotiation scenarios. Practiced identifying the counterpart's interests (e.g., timeline safety, budget constraints) to draft mutually beneficial proposals.",
    reflection: "Negotiation is not about 'winning' and making the other party lose. In the IT sector, software project scopes and timelines are constantly negotiated. If I push too hard, I ruin the working relationship. By understanding my BATNA and focusing on interests rather than rigid demands, I can collaborate with project managers to adjust deliverables, ensuring high quality without burning out the development team.",
    video: ""
  },
  {
    week: 10,
    title: "Codes of Ethics & Responsibilities",
    subtitle: "Professional Ethics in Computing",
    instructor: "Mr. Nukshan Nismi",
    overview: "This lecture explores the ethical frameworks and professional responsibilities of computer science and IT practitioners. It defines the concepts of a profession (specialized service to society), a professional (one who works to ethical standards), and professionalism (attitude and accountability). It reviews computing ethical codes, such as the ACM and IEEE codes, emphasizing public safety, data privacy, intellectual property rights, and the duty to report system vulnerabilities ethically.",
    skills: [
      "Defining professional computing standards and social responsibilities",
      "Analyzing technical activities through major professional ethical frameworks",
      "Applying ethical decision-making models to resolve complex technical dilemmas",
      "Understanding intellectual property, software licensing, and user privacy protections"
    ],
    activities: "Reviewed code of ethics documents and discussed real-world dilemmas, such as discovering security flaws in public systems, managing user tracking data, and handling pressure to bypass software testing phases.",
    reflection: "As a software engineer, my code has direct power over users' lives, privacy, and safety. Ethical frameworks are not just theoretical policies; they are guardrails. If I am asked to implement a feature that compromises user data privacy without consent, my professional code of ethics demands that I raise concerns. Acting ethically is a core part of my professional identity.",
    video: ""
  },
  {
    week: 11,
    title: "Business Ethics in Practice",
    subtitle: "Navigating Real-World Dilemmas",
    instructor: "Mrs. Ishara Weerasinghe",
    overview: "Building on ethical theory, this final workshop focuses on the practical execution of business ethics in corporate environments. It examines case studies in corporate governance, conflict of interest, whistleblower protocols, and ethical auditing. It introduces the 'Ethics Checklist' as a decision-making tool to evaluate whether a proposed action is legal, fair, aligned with organizational values, and transparent to the public.",
    skills: [
      "Using an Ethics Checklist to audit business decisions and projects",
      "Identifying and declaring conflicts of interest in procurement and development",
      "Navigating company whistleblower policies and escalation paths safely",
      "Evaluating the corporate social responsibility (CSR) of tech architectures"
    ],
    activities: "Conducted a team workshop analyzing case studies on conflicts of interest in software bidding. Completed an ethical checklist audit on a simulated company decision to launch a flawed product to beat a competitor's deadline.",
    reflection: "In the pressure of business deadlines, it's easy to make ethical shortcuts. The Ethics Checklist provides a objective way to pause and evaluate: 'Would I be proud if this decision was published on the front page of the news tomorrow?' Practicing ethics in real scenarios taught me that transparency is key. Declaring conflicts of interest immediately protects both my personal integrity and the organization's reputation.",
    video: ""
  }
];
