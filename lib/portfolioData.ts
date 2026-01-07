export interface Project {
  slug: string
  title: string
  yearOrGrade: string
  type: string
  role: string
  tags: string[]
  oneLineHook: string
  overview: string
  problem: string
  processSteps: string[]
  impactBullets: string[]
  tools: string[]
  coverImage: string
  galleryImages: string[]
  relatedCertificateIds: string[]
  featured: boolean
  awardBadge?: string
  whatILearned?: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  year: string
  image: string
  description: string
  relatedProjectSlugs: string[]
}

export interface Honor {
  title: string
  level: string
  yearOrGrade: string
  description: string
  relatedProjectSlug?: string
}

export interface MiniBuild {
  title: string
  description: string
  tags: string[]
  badge?: string
}

export const projects: Project[] = [
  {
    slug: "nexus",
    title: "Nexus Volunteer Coordination Platform",
    yearOrGrade: "Grade 11",
    type: "Community Service / Systems Building",
    role: "Co-Founder & Lead Developer",
    tags: ["Community Service", "Computer Science", "Leadership"],
    oneLineHook: "Turning volunteer intention into measurable impact through technology",
    overview:
      "Nexus is a web-based platform that connects students with meaningful volunteer opportunities while providing organizations with tools to manage, track, and report on volunteer engagement. Built to solve the coordination challenges in Ethiopia's growing youth volunteer movement.",
    problem:
      "Many students wanted to volunteer but didn't know where to start. Organizations struggled with recruitment, attendance tracking, and impact reporting. There was no central system connecting motivated students with meaningful opportunities.",
    processSteps: [
      "Conducted interviews with 20+ students and 5 organizations to identify pain points",
      "Designed database schema and user flows for both students and organizations",
      "Built responsive web application with real-time updates and notifications",
      "Tested with pilot organizations and iterated based on feedback",
      "Launched with 3 partner organizations and grew to 5+ within first semester",
    ],
    impactBullets: [
      "1,000+ students registered and connected with opportunities",
      "5+ partner organizations using the platform for volunteer management",
      "Reduced administrative overhead for organizations by ~60%",
      "Enabled data-driven decision making for program improvement",
    ],
    tools: ["React", "Node.js", "PostgreSQL", "Vercel"],
    coverImage: "/projects/nexus/cover.jpg",
    galleryImages: ["/projects/nexus/gallery-1.jpg", "/projects/nexus/gallery-2.jpg", "/projects/nexus/gallery-3.jpg"],
    relatedCertificateIds: [],
    featured: true,
    whatILearned:
      "Building Nexus taught me that the best technology solutions start with deep user research. I learned to balance ambitious feature ideas with pragmatic MVP decisions, and discovered that maintainability matters as much as initial functionality.",
  },
  {
    slug: "prime-adcoder",
    title: "Prime AdCoder – Python & DSA Mentorship Program",
    yearOrGrade: "Grade 11-12",
    type: "Computer Science / Community Service",
    role: "Co-Founder & Lead Instructor",
    tags: ["Computer Science", "Leadership", "Community Service"],
    oneLineHook: "Democratizing computer science education through peer mentorship",
    overview:
      "Prime AdCoder is a structured mentorship program teaching Python programming and data structures & algorithms to high school students. We designed a complete curriculum, created practice problems, and mentored students through live sessions and code reviews.",
    problem:
      "Quality computer science education is scarce in Ethiopia. While AddisCoder exists, it only accepts ~50 students annually. Hundreds of motivated students lack structured learning paths and mentorship to develop their programming skills.",
    processSteps: [
      "Designed 12-week curriculum covering Python basics through advanced DSA",
      "Created 50+ practice problems with test cases and solutions",
      "Recruited and trained 3 co-instructors to ensure quality instruction",
      "Held weekly live coding sessions and office hours",
      "Provided personalized code reviews and mentorship",
    ],
    impactBullets: [
      "40+ students successfully completed the full program",
      "Students gained skills to compete in programming competitions",
      "3 alumni were accepted to the next AddisCoder cohort",
      "Program continues to run with new cohorts each semester",
    ],
    tools: ["Python", "Jupyter Notebooks", "Zoom", "GitHub"],
    coverImage: "/projects/prime-adcoder/cover.jpg",
    galleryImages: ["/projects/prime-adcoder/gallery-1.jpg", "/projects/prime-adcoder/gallery-2.jpg"],
    relatedCertificateIds: ["addiscoder"],
    featured: true,
    whatILearned:
      "Teaching is one of the best ways to solidify your own understanding. I learned to break down complex concepts, adapt explanations to different learning styles, and build a sustainable program that outlives its founders.",
  },
  {
    slug: "addiscoder",
    title: "AddisCoder Summer Program",
    yearOrGrade: "Summer 2024",
    type: "Computer Science / Personal Development",
    role: "Selected Participant",
    tags: ["Computer Science", "Personal Development"],
    oneLineHook: "Intensive computer science bootcamp – one of ~50 selected from ~1,000 applicants",
    overview:
      "AddisCoder is a rigorous 5-week summer program teaching computer science fundamentals to Ethiopian high school students. I was selected as one of approximately 50 students from nearly 1,000 applicants to participate in the 2024 cohort.",
    problem:
      "I wanted to accelerate my computer science learning and gain exposure to university-level concepts. AddisCoder offered an intensive, structured environment with experienced instructors and a cohort of highly motivated peers.",
    processSteps: [
      "Completed competitive application process including coding challenges",
      "Attended daily lectures on algorithms, data structures, and problem-solving",
      "Solved 100+ programming problems across various difficulty levels",
      "Collaborated on group projects implementing learned concepts",
      "Participated in mock programming competitions",
    ],
    impactBullets: [
      "Mastered Python and fundamental data structures (arrays, linked lists, trees, graphs)",
      "Learned key algorithms: BFS/DFS, dynamic programming, recursion, sorting, searching",
      "Built strong foundation for competitive programming and technical interviews",
      "Formed network with Ethiopia's top young programmers",
    ],
    tools: ["Python", "Git", "Algorithms & Data Structures"],
    coverImage: "/projects/addiscoder/cover.jpg",
    galleryImages: ["/projects/addiscoder/gallery-1.jpg", "/projects/addiscoder/gallery-2.jpg"],
    relatedCertificateIds: ["addiscoder"],
    featured: true,
    awardBadge: "Top ~50 / ~1,000",
  },
  {
    slug: "it-internship",
    title: "IT Department Internship – Lebawi International Academy",
    yearOrGrade: "Summer 2023",
    type: "Internship / Computer Science",
    role: "IT Intern",
    tags: ["Internship", "Computer Science"],
    oneLineHook: "Hands-on IT infrastructure work supporting 500+ students and staff",
    overview:
      "Summer internship in the IT department at Lebawi International Academy, where I supported network infrastructure, hardware deployment, and software installation across the school's technology systems.",
    problem:
      "The school was expanding its campus and needed additional IT support to deploy new infrastructure, update existing systems, and ensure reliable technology access for teachers and students during the transition.",
    processSteps: [
      "Mapped network requirements and assisted with Wi-Fi expansion to new buildings",
      "Configured and deployed 15+ teacher computers with required software",
      "Installed and troubleshot 20+ software packages across various machines",
      "Set up Safe Exam Browser on 50+ student computers for standardized testing",
      "Documented processes and created maintenance guides for future staff",
    ],
    impactBullets: [
      "Enabled reliable internet access for 200+ additional students",
      "Reduced teacher setup time by creating standardized computer images",
      "Ensured secure, fair testing environment for 500+ students",
      "Gained practical experience in enterprise IT operations",
    ],
    tools: ["Windows", "Networking", "Safe Exam Browser", "IT Support"],
    coverImage: "/projects/it-internship/cover.jpg",
    galleryImages: ["/projects/it-internship/gallery-1.jpg", "/projects/it-internship/gallery-2.jpg"],
    relatedCertificateIds: [],
    featured: true,
    whatILearned:
      "Real-world IT work taught me patience, attention to detail, and the importance of documentation. I learned that technology infrastructure is invisible when it works perfectly – and that making it work perfectly requires careful planning and execution.",
  },
  {
    slug: "mun",
    title: "Model United Nations (MUN)",
    yearOrGrade: "Grade 10-11",
    type: "Debate / Leadership",
    role: "Delegate",
    tags: ["Debate", "Leadership"],
    oneLineHook: "Developing diplomacy, research, and public speaking skills through Model UN",
    overview:
      "Active participant in Model United Nations conferences, representing various countries and engaging in structured debate on international issues. Researched complex geopolitical topics, crafted position papers, and negotiated resolutions with delegates.",
    problem:
      "I wanted to develop skills in research, public speaking, negotiation, and understanding multiple perspectives on global issues. MUN provided a structured environment to practice these skills while learning about international relations.",
    processSteps: [
      "Researched assigned country's positions on conference topics",
      "Wrote detailed position papers analyzing issues and proposing solutions",
      "Participated in committee sessions, delivering speeches and debating resolutions",
      "Built coalitions with other delegates to advance shared objectives",
      "Refined communication and persuasion strategies based on feedback",
    ],
    impactBullets: [
      "Received 'Best Delegate' award for outstanding performance",
      "Developed strong research and analytical writing skills",
      "Improved public speaking confidence and clarity",
      "Learned to understand and articulate multiple perspectives on complex issues",
    ],
    tools: ["Research", "Public Speaking", "Negotiation", "Writing"],
    coverImage: "/projects/mun/cover.jpg",
    galleryImages: ["/projects/mun/gallery-1.jpg", "/projects/mun/gallery-2.jpg"],
    relatedCertificateIds: [],
    featured: false,
    awardBadge: "Best Delegate",
  },
  {
    slug: "robotics",
    title: "Robotics Team – Ethiopian Robotics Organization",
    yearOrGrade: "Grade 9-10",
    type: "Robotics / Computer Science",
    role: "Design & Programming Team Member",
    tags: ["Robotics", "Computer Science"],
    oneLineHook: "Building and programming robots for competitive challenges",
    overview:
      "Member of a competitive robotics team, working on robot design, construction, and programming. Collaborated with teammates to build autonomous and remote-controlled robots for various challenge scenarios.",
    problem:
      "I wanted hands-on experience applying programming and engineering concepts to real physical systems. Robotics competitions provided a structured environment to learn mechanical design, sensors, actuators, and control systems.",
    processSteps: [
      "Collaborated on robot design considering competition requirements and constraints",
      "Programmed robot behaviors using block-based and text-based languages",
      "Tested and debugged robot performance through iterative refinement",
      "Participated in team strategy sessions and competition preparation",
      "Competed in regional robotics competitions",
    ],
    impactBullets: [
      "Qualified for continental-level robotics competition",
      "Learned to integrate hardware and software systems",
      "Developed troubleshooting skills under time pressure",
      "Strengthened teamwork and communication abilities",
    ],
    tools: ["Arduino", "Block Programming", "Mechanical Design"],
    coverImage: "/projects/robotics/cover.jpg",
    galleryImages: ["/projects/robotics/gallery-1.jpg", "/projects/robotics/gallery-2.jpg"],
    relatedCertificateIds: [],
    featured: false,
  },
  {
    slug: "alx-expense",
    title: "ALX Hackathon – Expense Management System",
    yearOrGrade: "Grade 11",
    type: "Hackathon / Computer Science",
    role: "Team Member / Developer",
    tags: ["Hackathon", "Computer Science"],
    oneLineHook: "Built a practical expense tracking solution in 24 hours",
    overview:
      "Participated in the ALX Hackathon and developed an expense management system to help individuals and small businesses track spending, categorize expenses, and generate financial reports. Our team secured second place.",
    problem:
      "Many individuals and small businesses struggle to track expenses systematically. Paper receipts get lost, spreadsheets become messy, and there's no easy way to visualize spending patterns. We built a simple, intuitive tool to solve this.",
    processSteps: [
      "Brainstormed ideas and selected expense management as our focus",
      "Divided work: backend API, frontend interface, database design, presentation",
      "Built MVP with core features: add expenses, categorize, view summaries",
      "Integrated data visualization for spending insights",
      "Pitched solution to judges emphasizing usability and impact",
    ],
    impactBullets: [
      "Awarded second place out of 15+ competing teams",
      "Built working MVP in under 24 hours",
      "Learned rapid prototyping and time management under pressure",
      "Gained experience presenting technical work to non-technical judges",
    ],
    tools: ["React", "Node.js", "Express", "MongoDB"],
    coverImage: "/projects/alx-expense/cover.jpg",
    galleryImages: ["/projects/alx-expense/gallery-1.jpg", "/projects/alx-expense/gallery-2.jpg"],
    relatedCertificateIds: ["alx-hackathon"],
    featured: true,
    awardBadge: "Second Place",
  },
  {
    slug: "nasa-space-apps",
    title: "NASA Space Apps Challenge",
    yearOrGrade: "Grade 10",
    type: "Hackathon / Computer Science",
    role: "Team Member / Developer",
    tags: ["Hackathon", "Computer Science"],
    oneLineHook: "Solving space-related challenges using NASA's open data",
    overview:
      "Participated in NASA's annual Space Apps Challenge, an international hackathon where teams use NASA data to solve challenges related to space exploration, Earth science, and technology. Worked with a team to develop a solution over 48 hours.",
    problem:
      "NASA provides vast amounts of open data, but it's often inaccessible to the public. We tackled a challenge to make this data more understandable and actionable for students and educators interested in space science.",
    processSteps: [
      "Selected challenge from NASA's list of problems",
      "Explored available NASA datasets and APIs",
      "Designed user interface to visualize complex space data",
      "Built interactive web application for data exploration",
      "Prepared presentation explaining our solution and its educational value",
    ],
    impactBullets: [
      "Created tool making NASA data accessible to students",
      "Learned to work with real scientific datasets and APIs",
      "Developed skills in data visualization and user experience design",
      "Gained exposure to global hackathon competition format",
    ],
    tools: ["React", "NASA APIs", "Data Visualization", "JavaScript"],
    coverImage: "/projects/nasa-space-apps/cover.jpg",
    galleryImages: ["/projects/nasa-space-apps/gallery-1.jpg", "/projects/nasa-space-apps/gallery-2.jpg"],
    relatedCertificateIds: ["nasa-space-apps"],
    featured: false,
  },
  {
    slug: "quran-memorization",
    title: "Religious Studies – Qur'an Memorization",
    yearOrGrade: "Grade 6-11",
    type: "Personal Development / Religious Studies",
    role: "Student",
    tags: ["Personal Development"],
    oneLineHook: "Multi-year commitment to memorizing and understanding the Qur'an",
    overview:
      "Dedicated years to memorizing portions of the Qur'an through structured study with instructors. This discipline required daily practice, review, and understanding of meaning and context alongside memorization.",
    problem:
      "I wanted to deepen my religious knowledge and develop the discipline required for long-term memorization. This required building sustainable habits, managing time effectively, and maintaining consistency despite other academic commitments.",
    processSteps: [
      "Established daily memorization routine with instructor guidance",
      "Used spaced repetition techniques to retain previous material",
      "Studied context and meaning to deepen understanding",
      "Reviewed regularly with instructor to ensure accuracy",
      "Balanced religious studies with academic and extracurricular commitments",
    ],
    impactBullets: [
      "Memorized significant portions of the Qur'an over multi-year period",
      "Developed exceptional memory and concentration skills",
      "Built discipline and consistency through daily practice",
      "Strengthened time management abilities balancing multiple priorities",
    ],
    tools: ["Memorization Techniques", "Discipline", "Time Management"],
    coverImage: "/projects/quran-memorization/cover.jpg",
    galleryImages: ["/projects/quran-memorization/gallery-1.jpg"],
    relatedCertificateIds: ["quran-memorization"],
    featured: false,
  },
  {
    slug: "stem-club",
    title: "STEM Club Leadership",
    yearOrGrade: "Grade 10",
    type: "Leadership / Research",
    role: "Project Manager",
    tags: ["Leadership", "Research"],
    oneLineHook: "Leading peers in hands-on science projects and competitions",
    overview:
      "Served as project manager for school STEM club, coordinating team projects and representing the club in regional competitions. Led team to second place at regional science fair with our Mini-Dam project.",
    problem:
      "Our school needed stronger representation in regional STEM competitions. The STEM club had many interested members but lacked coordinated project management and clear competition preparation strategy.",
    processSteps: [
      "Organized club meetings and established project selection process",
      "Led brainstorming sessions to identify impactful project ideas",
      "Coordinated Mini-Dam project: research, design, construction, testing",
      "Managed team roles, timelines, and resource allocation",
      "Prepared presentation and demonstration for competition judges",
    ],
    impactBullets: [
      "Achieved second place at regional science fair",
      "Increased club participation by 30% through better organization",
      "Developed project management and team coordination skills",
      "Built practical understanding of engineering design process",
    ],
    tools: ["Project Management", "Team Coordination", "Research"],
    coverImage: "/projects/stem-club/cover.jpg",
    galleryImages: ["/projects/stem-club/gallery-1.jpg", "/projects/stem-club/gallery-2.jpg"],
    relatedCertificateIds: [],
    featured: false,
    awardBadge: "Second Place",
  },
]

export const miniBuilds: MiniBuild[] = [
  {
    title: "Flight Booking System",
    description: "Fully functional flight search and booking interface with real-time availability checking",
    tags: ["Computer Science"],
  },
  {
    title: "Citizen Science Asteroid Hunting",
    description: "Participated in asteroid discovery program analyzing telescope data",
    tags: ["Research"],
    badge: "Certificate",
  },
  {
    title: "Pharmacy Management System",
    description: "Inventory tracking and prescription management system for local pharmacy",
    tags: ["Hackathon", "Computer Science"],
    badge: "Project Incubation Winner",
  },
  {
    title: "Climate Science Olympiad",
    description: "Competed in international climate science competition",
    tags: ["Research"],
    badge: "Quarterfinalist (Top 10%)",
  },
]

export const honors: Honor[] = [
  {
    title: "Full-Tuition Merit Scholarship",
    level: "School-Level",
    yearOrGrade: "Grade 9",
    description:
      "Awarded full-tuition merit scholarship as one of top 3 students selected from approximately 100 applicants",
  },
  {
    title: "Best Delegate Award",
    level: "Conference-Level",
    yearOrGrade: "Grade 11",
    description: "Recognized for outstanding performance in Model United Nations conference",
    relatedProjectSlug: "mun",
  },
  {
    title: "AddisCoder Program Selection",
    level: "National-Level",
    yearOrGrade: "Summer 2024",
    description:
      "Selected as one of approximately 50 students from nearly 1,000 applicants for intensive computer science summer program",
    relatedProjectSlug: "addiscoder",
  },
  {
    title: "Continental Robotics Competition Participant",
    level: "Continental-Level",
    yearOrGrade: "Grade 10",
    description: "Qualified for and competed in continental-level robotics competition",
    relatedProjectSlug: "robotics",
  },
  {
    title: "ALX Hackathon Second Place",
    level: "Competition",
    yearOrGrade: "Grade 11",
    description: "Secured second place in ALX Hackathon with Expense Management System",
    relatedProjectSlug: "alx-expense",
  },
  {
    title: "Climate Science Olympiad Quarterfinalist",
    level: "International-Level",
    yearOrGrade: "Grade 11",
    description: "Achieved quarterfinalist status, placing in top 10% of 55,000 participants worldwide",
  },
  {
    title: "BITS Hackathon Project Incubation Winner",
    level: "Competition",
    yearOrGrade: "Grade 11",
    description: "Won project incubation award for Pharmacy Management System at BITS Hackathon",
  },
]

export const certificates: Certificate[] = [
  {
    id: "addiscoder",
    title: "AddisCoder Certificate of Completion",
    issuer: "AddisCoder",
    year: "2024",
    image: "/certificates/addiscoder.jpg",
    description:
      "Completed intensive 5-week computer science program covering Python programming, data structures, and algorithms. Selected as one of ~50 students from ~1,000 applicants.",
    relatedProjectSlugs: ["addiscoder", "prime-adcoder"],
  },
  {
    id: "alx-hackathon",
    title: "ALX Hackathon Second Place",
    issuer: "ALX",
    year: "2023",
    image: "/certificates/alx-hackathon.jpg",
    description: "Awarded second place for developing an Expense Management System at the ALX Hackathon",
    relatedProjectSlugs: ["alx-expense"],
  },
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge Participant",
    issuer: "NASA",
    year: "2023",
    image: "/certificates/nasa-space-apps.jpg",
    description:
      "Participated in NASA's international Space Apps Challenge, using NASA data to solve space-related challenges",
    relatedProjectSlugs: ["nasa-space-apps"],
  },
  {
    id: "asteroid-hunting",
    title: "Citizen Science Asteroid Discovery",
    issuer: "International Astronomical Search Collaboration",
    year: "2023",
    image: "/certificates/asteroid-hunting.jpg",
    description: "Participated in citizen science program analyzing telescope data for asteroid discovery",
    relatedProjectSlugs: [],
  },
  {
    id: "quran-memorization",
    title: "Qur'an Memorization Certificate",
    issuer: "Islamic Institute",
    year: "2023",
    image: "/certificates/quran-memorization.jpg",
    description: "Recognition for memorizing significant portions of the Qur'an through years of dedicated study",
    relatedProjectSlugs: ["quran-memorization"],
  },
]
