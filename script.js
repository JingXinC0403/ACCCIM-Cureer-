/* ============================================================
   CUREER — script.js  (Upgraded v2)
   24-question quiz · 20 careers · Goal tracking
   Activity page · Achievements · Dark/light mode
   ============================================================ */

'use strict';

// ─────────────────────────────────────────────
// DATA — 24 QUIZ QUESTIONS (8 categories × 3)
// ─────────────────────────────────────────────

const QUIZ_QUESTIONS = [
  // ── CREATIVITY (Q1–Q3) ──
  {
    id: 1, category: "Creativity", categoryEmoji: "🎨",
    text: "When you have free time, what do you most enjoy doing?",
    options: [
      { label: "Creating something — art, music, writing, or design", value: "creative" },
      { label: "Solving puzzles or learning how things work", value: "analytical" },
      { label: "Spending time with and helping friends or family", value: "social" },
      { label: "Planning projects, organising, or running things", value: "leadership" },
    ]
  },
  {
    id: 2, category: "Creativity", categoryEmoji: "🎨",
    text: "If you had to make a school project, which format would you choose?",
    options: [
      { label: "A visual poster or illustration", value: "creative" },
      { label: "A coded app or interactive website", value: "tech" },
      { label: "A research report with data and analysis", value: "analytical" },
      { label: "A presentation you deliver to the class", value: "leadership" },
    ]
  },
  {
    id: 3, category: "Creativity", categoryEmoji: "🎨",
    text: "When you see a blank canvas or empty page, you feel…",
    options: [
      { label: "Excited — endless possibilities!", value: "creative" },
      { label: "Curious — what problem can I solve here?", value: "analytical" },
      { label: "Grounded — I'll look for proven templates", value: "practical" },
      { label: "Motivated — I see a business opportunity", value: "business" },
    ]
  },
  // ── TECHNOLOGY (Q4–Q6) ──
  {
    id: 4, category: "Technology", categoryEmoji: "💻",
    text: "What is your relationship with technology?",
    options: [
      { label: "I'm obsessed — I love how it works and what it can do", value: "tech" },
      { label: "I use it as a creative tool for art and media", value: "creative" },
      { label: "I'm practical — I use what I need for human connection", value: "social" },
      { label: "I'm interested in how it impacts business and society", value: "business" },
    ]
  },
  {
    id: 5, category: "Technology", categoryEmoji: "💻",
    text: "Pick the tech activity that sounds most fun to you:",
    options: [
      { label: "Building a game or app from scratch", value: "tech" },
      { label: "Designing a beautiful app interface", value: "creative" },
      { label: "Analysing data to find hidden trends", value: "analytical" },
      { label: "Using social media to grow a brand", value: "business" },
    ]
  },
  {
    id: 6, category: "Technology", categoryEmoji: "💻",
    text: "How do you feel about learning to code?",
    options: [
      { label: "I already code or really want to learn", value: "tech" },
      { label: "Sounds useful but not my main passion", value: "analytical" },
      { label: "I'd rather use no-code tools to build things", value: "business" },
      { label: "Not really my thing — I prefer face-to-face work", value: "social" },
    ]
  },
  // ── LEADERSHIP (Q7–Q9) ──
  {
    id: 7, category: "Leadership", categoryEmoji: "🚀",
    text: "How do you prefer to work on a project?",
    options: [
      { label: "Independently — I do my best work alone", value: "independent" },
      { label: "In a small, close-knit team of 2–4 people", value: "teamwork" },
      { label: "In a large collaborative group", value: "teamwork" },
      { label: "Leading the project and coordinating others", value: "leadership" },
    ]
  },
  {
    id: 8, category: "Leadership", categoryEmoji: "🚀",
    text: "Your group project has no leader and everyone is confused. You…",
    options: [
      { label: "Step up, assign roles, and create a plan", value: "leadership" },
      { label: "Suggest a structure but let someone else lead", value: "teamwork" },
      { label: "Focus on your own task and do it well", value: "independent" },
      { label: "Listen to everyone and help mediate ideas", value: "social" },
    ]
  },
  {
    id: 9, category: "Leadership", categoryEmoji: "🚀",
    text: "Which of these sounds like the most satisfying achievement?",
    options: [
      { label: "Leading a team to launch a successful product", value: "leadership" },
      { label: "Solving a technical problem no one else could", value: "tech" },
      { label: "Helping someone through a really difficult time", value: "social" },
      { label: "Creating a piece of work that moves people emotionally", value: "creative" },
    ]
  },
  // ── HELPING OTHERS (Q10–Q12) ──
  {
    id: 10, category: "Helping Others", categoryEmoji: "💛",
    text: "When someone comes to you with a personal problem, you usually…",
    options: [
      { label: "Listen carefully and offer emotional support", value: "social" },
      { label: "Help them analyse and find a logical solution", value: "analytical" },
      { label: "Take charge and help them make an action plan", value: "leadership" },
      { label: "Distract them with humour or creative ideas", value: "creative" },
    ]
  },
  {
    id: 11, category: "Helping Others", categoryEmoji: "💛",
    text: "Which of these would mean the most to you in a career?",
    options: [
      { label: "Knowing I directly improved someone's life", value: "social" },
      { label: "Building something millions of people use", value: "tech" },
      { label: "Running a team that achieves great things", value: "leadership" },
      { label: "Creating art or content that inspires others", value: "creative" },
    ]
  },
  {
    id: 12, category: "Helping Others", categoryEmoji: "💛",
    text: "If you could volunteer for one cause, which would you pick?",
    options: [
      { label: "Mental health awareness and counselling", value: "social" },
      { label: "Teaching coding to underprivileged kids", value: "tech" },
      { label: "Running a community youth leadership programme", value: "leadership" },
      { label: "Organising a local arts and culture festival", value: "creative" },
    ]
  },
  // ── ANALYTICAL THINKING (Q13–Q15) ──
  {
    id: 13, category: "Analytical Thinking", categoryEmoji: "🔬",
    text: "How do you feel about working with data and numbers?",
    options: [
      { label: "I love it — data tells fascinating stories", value: "analytical" },
      { label: "I'm comfortable with it when there's a clear goal", value: "stem" },
      { label: "I prefer working with people over spreadsheets", value: "social" },
      { label: "I'd rather focus on ideas and creative concepts", value: "creative" },
    ]
  },
  {
    id: 14, category: "Analytical Thinking", categoryEmoji: "🔬",
    text: "Which subjects do you enjoy most?",
    options: [
      { label: "Maths, Physics, or Computer Science", value: "stem" },
      { label: "English, History, or Social Studies", value: "humanities" },
      { label: "Art, Music, Drama, or Design", value: "creative" },
      { label: "Biology, Chemistry, or Psychology", value: "science" },
    ]
  },
  {
    id: 15, category: "Analytical Thinking", categoryEmoji: "🔬",
    text: "You're given a complex mystery to solve. Your first move is to…",
    options: [
      { label: "Map out all the clues systematically", value: "analytical" },
      { label: "Talk to people and gather different perspectives", value: "social" },
      { label: "Think outside the box for unexpected answers", value: "creative" },
      { label: "Research every related topic thoroughly", value: "stem" },
    ]
  },
  // ── COMMUNICATION (Q16–Q18) ──
  {
    id: 16, category: "Communication", categoryEmoji: "🗣",
    text: "How do you feel about public speaking or presenting?",
    options: [
      { label: "I love it — I come alive in front of an audience", value: "leadership" },
      { label: "I'm fine with it when I'm passionate about the topic", value: "social" },
      { label: "I prefer writing — I express myself better that way", value: "creative" },
      { label: "I'd rather show data and let the numbers speak", value: "analytical" },
    ]
  },
  {
    id: 17, category: "Communication", categoryEmoji: "🗣",
    text: "If you had to explain a complicated idea to a 10-year-old, you'd…",
    options: [
      { label: "Use a fun story or analogy to make it relatable", value: "creative" },
      { label: "Break it into simple steps one by one", value: "analytical" },
      { label: "Draw a diagram or use visual examples", value: "tech" },
      { label: "Ask them questions to guide them to the answer", value: "social" },
    ]
  },
  {
    id: 18, category: "Communication", categoryEmoji: "🗣",
    text: "When you disagree with someone, you tend to…",
    options: [
      { label: "Calmly present evidence and logical arguments", value: "analytical" },
      { label: "Listen to understand their view before responding", value: "social" },
      { label: "Speak confidently and try to win them over", value: "leadership" },
      { label: "Find a creative compromise that works for both", value: "creative" },
    ]
  },
  // ── BUSINESS MINDSET (Q19–Q21) ──
  {
    id: 19, category: "Business Mindset", categoryEmoji: "📈",
    text: "What kind of work environment excites you most?",
    options: [
      { label: "A fast-moving startup where I wear many hats", value: "leadership" },
      { label: "A creative agency full of designers and ideas people", value: "creative" },
      { label: "A research lab focused on solving big problems", value: "analytical" },
      { label: "A social enterprise that makes a community impact", value: "social" },
    ]
  },
  {
    id: 20, category: "Business Mindset", categoryEmoji: "📈",
    text: "What motivates you most in a job?",
    options: [
      { label: "Making a meaningful difference in people's lives", value: "social" },
      { label: "Financial security and a high earning potential", value: "business" },
      { label: "Creative freedom to express my ideas", value: "creative" },
      { label: "Continuous learning and intellectual challenge", value: "analytical" },
    ]
  },
  {
    id: 21, category: "Business Mindset", categoryEmoji: "📈",
    text: "If you started a business, what would drive you most?",
    options: [
      { label: "Solving a real problem and changing the world", value: "leadership" },
      { label: "Building a brand with a beautiful story and aesthetic", value: "creative" },
      { label: "Using data and strategy to grow revenue", value: "business" },
      { label: "Creating a product that genuinely helps people", value: "social" },
    ]
  },
  // ── PROBLEM SOLVING (Q22–Q24) ──
  {
    id: 22, category: "Problem Solving", categoryEmoji: "🧩",
    text: "Your favourite kind of challenge is one that requires…",
    options: [
      { label: "Creative and out-of-the-box thinking", value: "creative" },
      { label: "Deep research and logical reasoning", value: "analytical" },
      { label: "Getting people to work together effectively", value: "social" },
      { label: "Building or making something tangible", value: "practical" },
    ]
  },
  {
    id: 23, category: "Problem Solving", categoryEmoji: "🧩",
    text: "Which of these excites you most as a career goal?",
    options: [
      { label: "Building technology that changes how people live", value: "tech" },
      { label: "Healing and supporting people who are struggling", value: "social" },
      { label: "Running my own business and calling my own shots", value: "leadership" },
      { label: "Creating beautiful things that move and inspire people", value: "creative" },
    ]
  },
  {
    id: 24, category: "Problem Solving", categoryEmoji: "🧩",
    text: "Finally — if you could only pick one superpower for your career, what would it be?",
    options: [
      { label: "The ability to understand any person deeply", value: "social" },
      { label: "The ability to build anything with technology", value: "tech" },
      { label: "The ability to inspire and lead any team", value: "leadership" },
      { label: "The ability to imagine and create anything from nothing", value: "creative" },
    ]
  },
];

// ─────────────────────────────────────────────
// DATA — 20 CAREERS
// ─────────────────────────────────────────────

const CAREERS = [
  // ── TECHNOLOGY ──
  {
    id: "software-engineer", name: "Software Engineer", icon: "💻",
    desc: "Design, build, and maintain software applications and systems that power the modern world.",
    salary: "$75K – $160K/yr", category: "tech", color: "#bfdbfe",
    gradient: "linear-gradient(135deg, #bfdbfe, #c4b5fd)",
    skills: ["Problem solving", "Python/JavaScript", "Systems thinking", "Debugging", "Collaboration"],
    subjects: "Maths, Computer Science, Physics",
    scores: { tech: 3, analytical: 3, stem: 2 }
  },
  {
    id: "data-analyst", name: "Data Analyst", icon: "📊",
    desc: "Interpret complex data sets to discover trends and insights that drive smarter business decisions.",
    salary: "$55K – $110K/yr", category: "tech", color: "#bfdbfe",
    gradient: "linear-gradient(135deg, #bfdbfe, #a7f3d0)",
    skills: ["SQL", "Excel/Python", "Statistics", "Storytelling", "Attention to detail"],
    subjects: "Maths, Statistics, Computer Science",
    scores: { analytical: 4, stem: 3, tech: 2 }
  },
  {
    id: "cybersecurity", name: "Cybersecurity Analyst", icon: "🔐",
    desc: "Protect organisations from digital threats and data breaches in an ever-evolving tech landscape.",
    salary: "$70K – $140K/yr", category: "tech", color: "#bfdbfe",
    gradient: "linear-gradient(135deg, #c4b5fd, #bfdbfe)",
    skills: ["Network security", "Ethical hacking", "Risk assessment", "Linux", "Problem solving"],
    subjects: "Computer Science, Maths, Physics",
    scores: { tech: 4, analytical: 3, stem: 2 }
  },
  {
    id: "ai-engineer", name: "AI / Machine Learning Engineer", icon: "🤖",
    desc: "Build intelligent systems that learn from data and automate complex real-world tasks.",
    salary: "$90K – $200K/yr", category: "tech", color: "#bfdbfe",
    gradient: "linear-gradient(135deg, #a7f3d0, #bfdbfe)",
    skills: ["Python", "Statistics", "Neural networks", "Data pipelines", "Maths"],
    subjects: "Maths, Computer Science, Statistics",
    scores: { tech: 4, analytical: 4, stem: 3 }
  },
  // ── CREATIVE ──
  {
    id: "graphic-designer", name: "Graphic Designer", icon: "🎨",
    desc: "Create visual concepts and stunning designs across digital media, branding, and print.",
    salary: "$45K – $95K/yr", category: "creative", color: "#fbcfe8",
    gradient: "linear-gradient(135deg, #fbcfe8, #fde68a)",
    skills: ["Adobe Suite", "Typography", "Colour theory", "UX thinking", "Creativity"],
    subjects: "Art, Design, Media Studies",
    scores: { creative: 4, tech: 1, independent: 2 }
  },
  {
    id: "ux-designer", name: "UX/UI Designer", icon: "✏️",
    desc: "Design intuitive and delightful digital products that genuinely put users first.",
    salary: "$65K – $135K/yr", category: "creative", color: "#fbcfe8",
    gradient: "linear-gradient(135deg, #fbcfe8, #bfdbfe)",
    skills: ["Figma", "User research", "Prototyping", "Empathy", "Visual design"],
    subjects: "Design, Computer Science, Psychology",
    scores: { creative: 3, tech: 2, social: 2, analytical: 1 }
  },
  {
    id: "content-creator", name: "Content Creator", icon: "🎬",
    desc: "Build an audience and monetise your creativity through video, writing, podcasts, or social media.",
    salary: "$30K – $200K+ /yr", category: "creative", color: "#fbcfe8",
    gradient: "linear-gradient(135deg, #fbcfe8, #fde68a)",
    skills: ["Storytelling", "Video editing", "SEO", "Social media", "Consistency"],
    subjects: "Media Studies, English, IT",
    scores: { creative: 4, independent: 3, leadership: 1 }
  },
  {
    id: "architect", name: "Architect", icon: "🏛️",
    desc: "Design buildings and spaces that balance aesthetics, functionality, and human experience.",
    salary: "$60K – $130K/yr", category: "creative", color: "#c4b5fd",
    gradient: "linear-gradient(135deg, #c4b5fd, #bfdbfe)",
    skills: ["AutoCAD", "3D modelling", "Spatial reasoning", "Project management", "Creativity"],
    subjects: "Art, Physics, Maths, Design",
    scores: { creative: 3, analytical: 2, stem: 2, practical: 1 }
  },
  {
    id: "fashion-designer", name: "Fashion Designer", icon: "👗",
    desc: "Design clothing, accessories, and collections that blend artistic vision with cultural trends.",
    salary: "$40K – $120K/yr", category: "creative", color: "#fbcfe8",
    gradient: "linear-gradient(135deg, #fbcfe8, #c4b5fd)",
    skills: ["Sketching", "Trend research", "Pattern making", "Storytelling", "Branding"],
    subjects: "Art, Design, Business Studies",
    scores: { creative: 4, business: 1, independent: 2 }
  },
  // ── PEOPLE ──
  {
    id: "psychologist", name: "Psychologist", icon: "🧠",
    desc: "Study human behaviour and help individuals overcome mental health challenges and personal difficulties.",
    salary: "$60K – $130K/yr", category: "people", color: "#a7f3d0",
    gradient: "linear-gradient(135deg, #a7f3d0, #c4b5fd)",
    skills: ["Empathy", "Active listening", "Research", "Communication", "Critical thinking"],
    subjects: "Biology, Psychology, Social Science",
    scores: { social: 4, science: 2, analytical: 2 }
  },
  {
    id: "teacher", name: "Teacher / Educator", icon: "📚",
    desc: "Inspire the next generation by making learning engaging, accessible, and genuinely meaningful.",
    salary: "$35K – $75K/yr", category: "people", color: "#a7f3d0",
    gradient: "linear-gradient(135deg, #a7f3d0, #bfdbfe)",
    skills: ["Communication", "Patience", "Subject knowledge", "Empathy", "Adaptability"],
    subjects: "Education, English, Psychology",
    scores: { social: 3, leadership: 2, humanities: 2 }
  },
  {
    id: "social-worker", name: "Social Worker", icon: "🤝",
    desc: "Support vulnerable individuals and communities to navigate challenges and access the help they need.",
    salary: "$40K – $80K/yr", category: "people", color: "#a7f3d0",
    gradient: "linear-gradient(135deg, #a7f3d0, #fbcfe8)",
    skills: ["Empathy", "Advocacy", "Case management", "Resilience", "Communication"],
    subjects: "Sociology, Psychology, Health Science",
    scores: { social: 5, humanities: 2, practical: 1 }
  },
  {
    id: "counsellor", name: "Career / Life Counsellor", icon: "💬",
    desc: "Guide people through major life decisions, career changes, and personal development journeys.",
    salary: "$45K – $90K/yr", category: "people", color: "#a7f3d0",
    gradient: "linear-gradient(135deg, #c4b5fd, #a7f3d0)",
    skills: ["Active listening", "Coaching", "Goal setting", "Empathy", "Communication"],
    subjects: "Psychology, Education, Business",
    scores: { social: 4, leadership: 2, analytical: 1 }
  },
  // ── BUSINESS ──
  {
    id: "entrepreneur", name: "Entrepreneur", icon: "🚀",
    desc: "Build and grow your own ventures, solving real-world problems while being your own boss.",
    salary: "$40K – $500K+ /yr", category: "business", color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fed7aa, #fbcfe8)",
    skills: ["Leadership", "Resilience", "Marketing", "Finance basics", "Networking"],
    subjects: "Business, Economics, Psychology",
    scores: { leadership: 4, business: 3, independent: 2 }
  },
  {
    id: "digital-marketer", name: "Digital Marketer", icon: "📱",
    desc: "Create and execute campaigns across social media, SEO, and paid ads to grow brands and audiences.",
    salary: "$45K – $100K/yr", category: "business", color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fde68a, #fbcfe8)",
    skills: ["Copywriting", "Analytics", "Social media", "Strategy", "Creativity"],
    subjects: "English, Media Studies, Business",
    scores: { creative: 2, business: 3, leadership: 1, social: 2 }
  },
  {
    id: "financial-analyst", name: "Financial Analyst", icon: "💹",
    desc: "Evaluate financial data and market trends to guide investment and business strategy.",
    salary: "$65K – $130K/yr", category: "business", color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fde68a, #a7f3d0)",
    skills: ["Excel modelling", "Accounting", "Research", "Communication", "Detail-oriented"],
    subjects: "Maths, Economics, Business Studies",
    scores: { analytical: 3, business: 3, stem: 2 }
  },
  {
    id: "product-manager", name: "Product Manager", icon: "📋",
    desc: "Lead the strategy, roadmap, and development of products that millions of users love.",
    salary: "$80K – $170K/yr", category: "business", color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fed7aa, #bfdbfe)",
    skills: ["Strategy", "Communication", "Data analysis", "Leadership", "User empathy"],
    subjects: "Business, Computer Science, Psychology",
    scores: { leadership: 3, analytical: 2, tech: 2, business: 2 }
  },
  {
    id: "hr-manager", name: "HR Manager", icon: "👥",
    desc: "Attract, develop, and retain great talent while building a healthy, thriving workplace culture.",
    salary: "$50K – $100K/yr", category: "business", color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fbcfe8, #fed7aa)",
    skills: ["Communication", "Empathy", "Conflict resolution", "Organisation", "Leadership"],
    subjects: "Business, Psychology, English",
    scores: { social: 3, leadership: 2, business: 2 }
  },
  // ── SCIENCE ──
  {
    id: "nurse", name: "Nurse / Healthcare Worker", icon: "🏥",
    desc: "Provide compassionate care to patients, acting as a critical pillar of the healthcare system.",
    salary: "$50K – $90K/yr", category: "science", color: "#bbf7d0",
    gradient: "linear-gradient(135deg, #bbf7d0, #bfdbfe)",
    skills: ["Clinical skills", "Empathy", "Communication", "Resilience", "Teamwork"],
    subjects: "Biology, Chemistry, Human Sciences",
    scores: { social: 3, science: 3, practical: 2 }
  },
  {
    id: "doctor", name: "Doctor / Physician", icon: "⚕️",
    desc: "Diagnose and treat patients, combining deep scientific knowledge with genuine compassion.",
    salary: "$150K – $350K/yr", category: "science", color: "#bbf7d0",
    gradient: "linear-gradient(135deg, #a7f3d0, #c4b5fd)",
    skills: ["Medical knowledge", "Empathy", "Decision making", "Attention to detail", "Communication"],
    subjects: "Biology, Chemistry, Physics, Maths",
    scores: { science: 4, social: 3, analytical: 3, stem: 2 }
  },
  {
    id: "environmental-scientist", name: "Environmental Scientist", icon: "🌿",
    desc: "Research and develop solutions to protect the environment and combat climate change.",
    salary: "$50K – $100K/yr", category: "science", color: "#bbf7d0",
    gradient: "linear-gradient(135deg, #a7f3d0, #bfdbfe)",
    skills: ["Research", "Data analysis", "Field work", "Report writing", "Critical thinking"],
    subjects: "Biology, Chemistry, Geography, Maths",
    scores: { science: 3, analytical: 3, stem: 2, practical: 2 }
  },
];

// ─────────────────────────────────────────────
// DATA — PERSONALITY TYPES
// ─────────────────────────────────────────────

const PERSONALITY_TYPES = {
  creative: {
    label: "The Creative Visionary",
    emoji: "🎨",
    traits: ["Imaginative", "Expressive", "Original", "Aesthetic", "Intuitive"],
    industries: ["🎨 Design & Arts", "📱 Media & Content", "🎬 Film & TV", "✏️ UX/UI Design"]
  },
  analytical: {
    label: "The Analytical Thinker",
    emoji: "🔬",
    traits: ["Logical", "Detail-oriented", "Methodical", "Curious", "Precise"],
    industries: ["💻 Technology", "📊 Data & Research", "🔬 Science", "💹 Finance"]
  },
  social: {
    label: "The Compassionate Helper",
    emoji: "💛",
    traits: ["Empathetic", "Caring", "Communicative", "Patient", "Collaborative"],
    industries: ["🏥 Healthcare", "📚 Education", "🧠 Psychology", "🤝 Social Work"]
  },
  leadership: {
    label: "The Natural Leader",
    emoji: "🚀",
    traits: ["Decisive", "Motivating", "Strategic", "Resilient", "Ambitious"],
    industries: ["🚀 Entrepreneurship", "💼 Management", "📢 Marketing", "🏢 Business"]
  },
  tech: {
    label: "The Tech Innovator",
    emoji: "⚡",
    traits: ["Innovative", "Systematic", "Problem-solver", "Adaptable", "Forward-thinking"],
    industries: ["💻 Software Dev", "🤖 AI/ML", "🔒 Cybersecurity", "📡 Engineering"]
  },
  business: {
    label: "The Strategic Planner",
    emoji: "📈",
    traits: ["Goal-oriented", "Organised", "Persuasive", "Financially savvy", "Practical"],
    industries: ["💼 Finance", "📢 Marketing", "🏢 Management", "🚀 Startups"]
  },
};

// ─────────────────────────────────────────────
// DATA — GOAL OPTIONS
// ─────────────────────────────────────────────

const GOAL_OPTIONS = [
  {
    id: "communication", icon: "🗣", label: "Improve Communication Skills",
    desc: "Become a clearer, more confident communicator in any setting.",
    steps: [
      "Join a local Toastmasters or debate club",
      "Practice a 2-minute daily voice memo on any topic",
      "Watch 1 TED Talk per week and note communication techniques",
      "Ask friends for honest feedback on how you come across",
      "Read 'How to Win Friends and Influence People' by Dale Carnegie",
    ]
  },
  {
    id: "coding", icon: "💻", label: "Learn to Code",
    desc: "Build real technical skills that open doors in every industry.",
    steps: [
      "Complete freeCodeCamp's Responsive Web Design course (free)",
      "Build a personal website using HTML, CSS, and JavaScript",
      "Solve 1 problem per day on LeetCode or Codewars",
      "Complete a Python beginner course on CS50 (Harvard, free)",
      "Build a small app or tool that solves a problem you have",
    ]
  },
  {
    id: "leadership", icon: "🚀", label: "Build Leadership Skills",
    desc: "Develop the confidence and ability to lead teams and projects.",
    steps: [
      "Volunteer to lead the next group project at school or work",
      "Read 'Leaders Eat Last' by Simon Sinek",
      "Start a club or initiative around something you care about",
      "Find a mentor who is in a leadership role you admire",
      "Reflect weekly: what went well and what would you do differently?",
    ]
  },
  {
    id: "creative", icon: "🎨", label: "Explore Creative Hobbies",
    desc: "Discover your creative voice and build a portfolio of work.",
    steps: [
      "Try one new creative medium per month (drawing, writing, video, etc.)",
      "Complete the free 'Graphic Design Essentials' course on Canva",
      "Start a creative Instagram or Behance portfolio",
      "Enter one local or online creative competition",
      "Collaborate on a creative project with a friend",
    ]
  },
  {
    id: "business", icon: "📈", label: "Study Business & Entrepreneurship",
    desc: "Learn how businesses work and how to build your own.",
    steps: [
      "Complete the free 'Entrepreneurship 101' course on edX or Coursera",
      "Read 'The Lean Startup' by Eric Ries",
      "Come up with 5 business ideas and test one with a survey",
      "Shadow or interview a local business owner",
      "Create a simple business plan for your favourite idea",
    ]
  },
  {
    id: "publicspeaking", icon: "🎤", label: "Practice Public Speaking",
    desc: "Build the confidence to speak powerfully in front of any audience.",
    steps: [
      "Record yourself speaking for 2 minutes and watch it back",
      "Volunteer to present at the next opportunity (class, work, etc.)",
      "Join a free online Toastmasters session",
      "Study great speakers: watch Obama, Malala, or Steve Jobs speeches",
      "Give a talk at a school event, community group, or online",
    ]
  },
  {
    id: "science", icon: "🔬", label: "Deepen Science & Research Skills",
    desc: "Build the analytical mindset and knowledge for STEM careers.",
    steps: [
      "Subscribe to YouTube channels like Kurzgesagt or Veritasium",
      "Complete Khan Academy's free Chemistry or Biology course",
      "Do a small independent research project on a topic you love",
      "Enter a school or regional science fair",
      "Shadow a professional in a science field for a day",
    ]
  },
  {
    id: "networking", icon: "🤝", label: "Build a Professional Network",
    desc: "Connect with people who can open doors to your dream career.",
    steps: [
      "Create or polish your LinkedIn profile with a professional photo",
      "Follow 10 professionals in your target career field",
      "Send 1 LinkedIn connection request per week with a personalised note",
      "Attend a local career fair, networking event, or industry meetup",
      "Find a mentor and schedule a 30-minute coffee chat",
    ]
  },
];

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────

let currentQuestion = 0;
let answers = {};
let quizStarted = false;
let pendingResult = null;   // holds result data while user picks goals
let selectedGoalIds = [];   // goal IDs selected on goal screen

// ─────────────────────────────────────────────
// localStorage HELPERS
// ─────────────────────────────────────────────

function getActivityHistory() {
  try { return JSON.parse(localStorage.getItem('cureer-activity') || '[]'); }
  catch { return []; }
}

function saveActivityResult(result) {
  const history = getActivityHistory();
  history.unshift(result);
  localStorage.setItem('cureer-activity', JSON.stringify(history));
}

function getSavedGoals() {
  try { return JSON.parse(localStorage.getItem('cureer-goals') || '[]'); }
  catch { return []; }
}

function saveGoals(goals) {
  localStorage.setItem('cureer-goals', JSON.stringify(goals));
}

function getGoalProgress() {
  try { return JSON.parse(localStorage.getItem('cureer-goal-progress') || '{}'); }
  catch { return {}; }
}

function saveGoalProgress(progress) {
  localStorage.setItem('cureer-goal-progress', JSON.stringify(progress));
}

// ─────────────────────────────────────────────
// LOADER
// ─────────────────────────────────────────────

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    startTypingEffect();
  }, 1400);
});

// ─────────────────────────────────────────────
// TYPING ANIMATION
// ─────────────────────────────────────────────

function startTypingEffect() {
  const phrases = ["That Fits You", "You've Always Wanted", "Matches Your Personality", "Excites You Every Day", "Is Meant For You"];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const el = document.getElementById('heroTyped');
  if (!el) return;

  function type() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
    } else {
      charIdx--;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 45 : 75);
  }
  type();
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────

const navbar    = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
  const btt = document.getElementById('backToTop');
  if (btt) btt.classList.toggle('visible', window.scrollY > 400);
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
  });
}

document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    if (hamburger) { hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', false); }
  });
});

// ─────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────

const savedTheme = localStorage.getItem('cureer-theme') || 'light';
setTheme(savedTheme);

document.getElementById('themeToggle')?.addEventListener('click', () => {
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

document.getElementById('themeToggleActivity')?.addEventListener('click', () => {
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('cureer-theme', theme);
  document.querySelectorAll('.theme-icon').forEach(ic => ic.textContent = theme === 'dark' ? '🌙' : '☀️');
}

// ─────────────────────────────────────────────
// BACK TO TOP
// ─────────────────────────────────────────────

document.getElementById('backToTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ─────────────────────────────────────────────
// SMOOTH SCROLL
// ─────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

// ─────────────────────────────────────────────
// INTERSECTION OBSERVER (fade-in)
// ─────────────────────────────────────────────

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

new MutationObserver(() => {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => fadeObserver.observe(el));
}).observe(document.body, { childList: true, subtree: true });

// ─────────────────────────────────────────────
// QUIZ — SETUP
// ─────────────────────────────────────────────

const startQuizBtn = document.getElementById('startQuiz');
const loadSavedBtn = document.getElementById('loadSaved');
const quizIntro    = document.getElementById('quizIntro');
const quizBody     = document.getElementById('quizBody');
const quizResults  = document.getElementById('quizResults');
const quizGoals    = document.getElementById('quizGoals');
const nextBtn      = document.getElementById('nextBtn');
const prevBtn      = document.getElementById('prevBtn');

// Show resume button if saved progress exists
if (localStorage.getItem('cureer-quiz-answers') && loadSavedBtn) {
  loadSavedBtn.style.display = 'inline-flex';
}

startQuizBtn?.addEventListener('click', () => {
  answers = {}; currentQuestion = 0; selectedGoalIds = [];
  localStorage.removeItem('cureer-quiz-answers');
  localStorage.removeItem('cureer-quiz-question');
  beginQuiz();
});

loadSavedBtn?.addEventListener('click', () => {
  try {
    answers = JSON.parse(localStorage.getItem('cureer-quiz-answers')) || {};
    currentQuestion = parseInt(localStorage.getItem('cureer-quiz-question')) || 0;
  } catch { answers = {}; currentQuestion = 0; }
  beginQuiz();
});

function beginQuiz() {
  quizIntro.style.display = 'none';
  quizBody.style.display  = 'block';
  renderQuestion();
  quizStarted = true;
}

// ─────────────────────────────────────────────
// QUIZ — RENDER QUESTION
// ─────────────────────────────────────────────

function renderQuestion() {
  const q     = QUIZ_QUESTIONS[currentQuestion];
  const total = QUIZ_QUESTIONS.length;
  const pct   = Math.round((currentQuestion / total) * 100);

  // Progress bar
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = pct + '%';
  const pText = document.getElementById('progressText');
  if (pText) pText.textContent = `Question ${currentQuestion + 1} of ${total}`;
  const pPct = document.getElementById('progressPct');
  if (pPct) pPct.textContent = pct + '%';

  // Category badge
  const badge = document.getElementById('questionCategoryBadge');
  if (badge) badge.textContent = `${q.categoryEmoji} ${q.category}`;

  // Question text
  const numEl = document.getElementById('questionNum');
  const textEl = document.getElementById('questionText');
  if (numEl) numEl.textContent = `Question ${currentQuestion + 1}`;
  if (textEl) textEl.textContent = q.text;

  // Options
  const container = document.getElementById('questionOptions');
  container.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[q.id] === opt.value ? ' selected' : '');
    btn.setAttribute('aria-pressed', answers[q.id] === opt.value ? 'true' : 'false');
    btn.innerHTML = `<span class="option-indicator">${labels[i]}</span><span>${opt.label}</span>`;
    btn.addEventListener('click', () => selectOption(q.id, opt.value, btn, container));
    container.appendChild(btn);
  });

  // Nav
  if (prevBtn) prevBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
  if (nextBtn) nextBtn.textContent = currentQuestion === total - 1 ? 'Continue →' : 'Next →';

  // Animate card
  const card = document.getElementById('questionCard');
  if (card) { card.style.animation = 'none'; requestAnimationFrame(() => { card.style.animation = ''; }); }
}

function selectOption(questionId, value, btn, container) {
  container.querySelectorAll('.option-btn').forEach(b => { b.classList.remove('selected'); b.setAttribute('aria-pressed', 'false'); });
  btn.classList.add('selected');
  btn.setAttribute('aria-pressed', 'true');
  answers[questionId] = value;
  saveProgress();
}

// Add shake animation style
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-8px)} 40%,80%{transform:translateX(8px)} }`;
document.head.appendChild(shakeStyle);

nextBtn?.addEventListener('click', () => {
  const q = QUIZ_QUESTIONS[currentQuestion];
  if (!answers[q.id]) {
    const card = document.getElementById('questionCard');
    if (card) { card.style.animation = 'shake 0.3s ease'; setTimeout(() => card.style.animation = '', 300); }
    return;
  }
  if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showGoalScreen();
  }
});

prevBtn?.addEventListener('click', () => {
  if (currentQuestion > 0) { currentQuestion--; renderQuestion(); }
});

function saveProgress() {
  localStorage.setItem('cureer-quiz-answers', JSON.stringify(answers));
  localStorage.setItem('cureer-quiz-question', currentQuestion);
}

// ─────────────────────────────────────────────
// GOAL SELECTION SCREEN
// ─────────────────────────────────────────────

function showGoalScreen() {
  quizBody.style.display  = 'none';
  quizGoals.style.display = 'block';
  quizGoals.scrollIntoView({ behavior: 'smooth', block: 'start' });

  selectedGoalIds = [];
  const grid = document.getElementById('goalsOptionsGrid');
  grid.innerHTML = '';

  GOAL_OPTIONS.forEach(goal => {
    const card = document.createElement('div');
    card.className = 'goal-option-card';
    card.setAttribute('data-id', goal.id);
    card.setAttribute('role', 'checkbox');
    card.setAttribute('aria-checked', 'false');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="goal-option-icon">${goal.icon}</div>
      <div class="goal-option-info">
        <div class="goal-option-label">${goal.label}</div>
        <div class="goal-option-desc">${goal.desc}</div>
      </div>
      <div class="goal-check-indicator" aria-hidden="true">✓</div>
    `;

    const toggle = () => {
      const checked = card.getAttribute('aria-checked') === 'true';
      if (!checked && selectedGoalIds.length >= 3) {
        card.classList.add('shake'); setTimeout(() => card.classList.remove('shake'), 400); return;
      }
      card.setAttribute('aria-checked', !checked);
      card.classList.toggle('selected', !checked);
      if (!checked) { selectedGoalIds.push(goal.id); }
      else { selectedGoalIds = selectedGoalIds.filter(id => id !== goal.id); }

      const confirmBtn = document.getElementById('confirmGoals');
      if (confirmBtn) {
        confirmBtn.textContent = selectedGoalIds.length > 0
          ? `Save ${selectedGoalIds.length} Goal${selectedGoalIds.length > 1 ? 's' : ''} & See Results →`
          : 'Save Goals & See Results →';
      }
    };

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    grid.appendChild(card);
  });
}

document.getElementById('skipGoals')?.addEventListener('click', () => finaliseResults([]));
document.getElementById('confirmGoals')?.addEventListener('click', () => finaliseResults(selectedGoalIds));

function finaliseResults(goalIds) {
  // Save goals to localStorage
  const existing = getSavedGoals();
  const merged = [...existing];
  goalIds.forEach(id => {
    if (!merged.find(g => g.id === id)) {
      merged.push({ id, addedAt: new Date().toISOString() });
    }
  });
  saveGoals(merged);

  // Calculate results & save to activity
  const resultData = calculateResults();
  pendingResult = resultData;

  const record = {
    id: Date.now(),
    date: new Date().toISOString(),
    personalityType: resultData.dominantType,
    personalityLabel: PERSONALITY_TYPES[resultData.dominantType]?.label || resultData.dominantType,
    personalityEmoji: PERSONALITY_TYPES[resultData.dominantType]?.emoji || '✨',
    topCareers: resultData.careerScores.slice(0, 5).map(c => ({
      id: c.id, name: c.name, icon: c.icon, matchPct: c.matchPct
    })),
    strengthProfile: resultData.strengthProfile,
    goalsSet: goalIds,
  };
  saveActivityResult(record);

  // Clear quiz progress
  localStorage.removeItem('cureer-quiz-answers');
  localStorage.removeItem('cureer-quiz-question');

  // Show results
  quizGoals.style.display = 'none';
  showResults(resultData);
}

// ─────────────────────────────────────────────
// RESULTS CALCULATION
// ─────────────────────────────────────────────

function calculateResults() {

  // ─────────────────────────────────────────────
  // COUNT USER TRAITS
  // ─────────────────────────────────────────────

  const scores = {};

  Object.values(answers).forEach(val => {
    scores[val] = (scores[val] || 0) + 1;
  });

  // ─────────────────────────────────────────────
  // DETERMINE DOMINANT PERSONALITY
  // ─────────────────────────────────────────────

  const personalityKeys = Object.keys(PERSONALITY_TYPES);

  let dominantType = 'creative';
  let maxScore = -1;

  personalityKeys.forEach(key => {
    if ((scores[key] || 0) > maxScore) {
      maxScore = scores[key] || 0;
      dominantType = key;
    }
  });

  // ─────────────────────────────────────────────
  // IMPROVED CAREER MATCHING
  // ─────────────────────────────────────────────

  const careerScores = CAREERS.map(career => {

    let totalDifference = 0;
    let totalTraits = 0;

    // Compare user scores vs career ideal scores
    Object.entries(career.scores).forEach(([trait, careerWeight]) => {

      const userScore = scores[trait] || 0;

      // Scale career weight to realistic trait expectations
      const idealScore = careerWeight * 2.5;

      // Difference between user and ideal career profile
      const difference = Math.abs(userScore - idealScore);

      totalDifference += difference;
      totalTraits++;
    });

    // Convert difference into match percentage
    let matchPct = 100 - ((totalDifference / (totalTraits * 10)) * 100);

    // Add slight randomness for realism
    const randomBoost = Math.floor(Math.random() * 7) - 3;
    matchPct += randomBoost;

    // Bonus if dominant personality aligns with career category
    if (
      (dominantType === 'creative' && career.category === 'creative') ||
      (dominantType === 'tech' && career.category === 'tech') ||
      (dominantType === 'social' && career.category === 'people') ||
      (dominantType === 'leadership' && career.category === 'business') ||
      (dominantType === 'analytical' && career.category === 'science')
    ) {
      matchPct += 6;
    }

    // Clamp realistic range
    if (matchPct > 95) matchPct = 95;
    if (matchPct < 42) matchPct = 42;

    return {
      ...career,
      matchPct: Math.round(matchPct)
    };
  });

  // Sort highest matches first
  careerScores.sort((a, b) => b.matchPct - a.matchPct);

  // ─────────────────────────────────────────────
  // STRENGTH PROFILE
  // ─────────────────────────────────────────────

  const strengthProfile = [
    {
      label: "Creativity",
      value: Math.min(100, ((scores.creative || 0) / 6) * 100),
      color: "linear-gradient(90deg,#fbcfe8,#f9a8d4)"
    },

    {
      label: "Analytical",
      value: Math.min(100, ((scores.analytical || 0) / 6) * 100),
      color: "linear-gradient(90deg,#bfdbfe,#93c5fd)"
    },

    {
      label: "Leadership",
      value: Math.min(100, ((scores.leadership || 0) / 6) * 100),
      color: "linear-gradient(90deg,#fed7aa,#fbbf24)"
    },

    {
      label: "Social",
      value: Math.min(100, ((scores.social || 0) / 6) * 100),
      color: "linear-gradient(90deg,#a7f3d0,#34d399)"
    },

    {
      label: "Tech",
      value: Math.min(100, ((scores.tech || 0) / 6) * 100),
      color: "linear-gradient(90deg,#c4b5fd,#818cf8)"
    },

    {
      label: "Business",
      value: Math.min(100, ((scores.business || 0) / 6) * 100),
      color: "linear-gradient(90deg,#fde68a,#f59e0b)"
    },

    {
      label: "Science",
      value: Math.min(100, ((scores.science || 0) / 6) * 100),
      color: "linear-gradient(90deg,#86efac,#22c55e)"
    },

    {
      label: "STEM",
      value: Math.min(100, ((scores.stem || 0) / 4) * 100),
      color: "linear-gradient(90deg,#bfdbfe,#c4b5fd)"
    }
  ];

  // ─────────────────────────────────────────────
  // RETURN RESULTS
  // ─────────────────────────────────────────────

  return {
    dominantType,
    careerScores,
    strengthProfile
  };
}

  // Dominant personality type
  const personalityKeys = Object.keys(PERSONALITY_TYPES);
  let dominantType = 'creative', maxScore = -1;
  personalityKeys.forEach(key => {
    if ((scores[key] || 0) > maxScore) { maxScore = scores[key] || 0; dominantType = key; }
  });

  // Score each career
  const careerScores = CAREERS.map(career => {
    let total = 0, max = 0;
    Object.entries(career.scores).forEach(([trait, weight]) => {
      total += (scores[trait] || 0) * weight;
      max   += 3 * weight; // assume max 3 questions per trait
    });
    const pct = Math.min(99, Math.round(40 + (total / Math.max(max, 1)) * 59));
    return { ...career, matchPct: pct };
  });
  careerScores.sort((a, b) => b.matchPct - a.matchPct);

  // Strength profile (8 bars)
  const strengthProfile = [
    { label: "Creativity",    value: Math.min(100, ((scores.creative   || 0) / 6)  * 100), color: "linear-gradient(90deg,#fbcfe8,#f9a8d4)" },
    { label: "Analytical",    value: Math.min(100, ((scores.analytical || 0) / 6)  * 100), color: "linear-gradient(90deg,#bfdbfe,#93c5fd)" },
    { label: "Leadership",    value: Math.min(100, ((scores.leadership || 0) / 6)  * 100), color: "linear-gradient(90deg,#fed7aa,#fbbf24)" },
    { label: "Social",        value: Math.min(100, ((scores.social     || 0) / 6)  * 100), color: "linear-gradient(90deg,#a7f3d0,#34d399)" },
    { label: "Tech",          value: Math.min(100, ((scores.tech       || 0) / 6)  * 100), color: "linear-gradient(90deg,#c4b5fd,#a78bfa)" },
    { label: "Business",      value: Math.min(100, ((scores.business   || 0) / 6)  * 100), color: "linear-gradient(90deg,#fde68a,#fbbf24)" },
    { label: "Independent",   value: Math.min(100, ((scores.independent|| 0) / 4)  * 100), color: "linear-gradient(90deg,#bbf7d0,#6ee7b7)" },
    { label: "STEM",          value: Math.min(100, ((scores.stem       || 0) / 4)  * 100), color: "linear-gradient(90deg,#bfdbfe,#c4b5fd)" },
  ];

  return { dominantType, careerScores, strengthProfile };
}

// ─────────────────────────────────────────────
// SHOW RESULTS
// ─────────────────────────────────────────────

function showResults(result) {
  quizBody.style.display    = 'none';
  quizResults.style.display = 'block';
  quizResults.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const { dominantType, careerScores, strengthProfile } = result;
  const personality = PERSONALITY_TYPES[dominantType];

  document.getElementById('personalityTypeText').textContent =
    `You're a ${personality.label} ${personality.emoji} — here are your best career matches.`;

  document.getElementById('personalityBadge').textContent = `${personality.emoji} ${personality.label}`;

  const traitsEl = document.getElementById('personalityTraits');
  traitsEl.innerHTML = personality.traits.map(t => `<span class="trait-tag">${t}</span>`).join('');

  const strengthEl = document.getElementById('strengthBars');
  strengthEl.innerHTML = strengthProfile.map(s => `
    <div class="strength-bar-item">
      <div class="strength-bar-label"><span>${s.label}</span><span>${Math.round(s.value)}%</span></div>
      <div class="strength-bar-track">
        <div class="strength-bar-fill" data-width="${s.value}" style="background:${s.color}"></div>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    document.querySelectorAll('.strength-bar-fill').forEach(bar => {
      setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 100);
    });
  });

  const industriesEl = document.getElementById('industryPills');
  industriesEl.innerHTML = personality.industries.map(ind => `<div class="industry-pill">${ind}</div>`).join('');

  const grid = document.getElementById('careerCardsGrid');
  grid.innerHTML = '';
  careerScores.slice(0, 6).forEach(career => grid.appendChild(buildCareerCard(career)));

  setupResultsFilter(careerScores);
}

// ─────────────────────────────────────────────
// CAREER CARD BUILDER
// ─────────────────────────────────────────────

function buildCareerCard(career) {
  const card = document.createElement('div');
  card.className = 'career-card';
  card.setAttribute('data-category', career.category);
  card.setAttribute('data-id', career.id);

  card.innerHTML = `
    <div class="career-card-header">
      <div class="career-icon" style="background:${career.color}20">${career.icon}</div>
      <div class="career-info">
        <div class="career-name">${career.name}</div>
        <div class="career-desc">${career.desc}</div>
      </div>
      ${career.matchPct !== undefined ? `
        <div class="career-match">
          <div class="match-pct">${career.matchPct}%</div>
          <div class="match-label">match</div>
        </div>
      ` : ''}
    </div>
    <div class="career-card-body">
      <div class="career-detail-row">
        <div class="career-detail-item">
          <div class="career-detail-label">💰 Salary</div>
          <div class="career-detail-value">${career.salary}</div>
        </div>
        <div class="career-detail-item">
          <div class="career-detail-label">📂 Category</div>
          <div class="career-detail-value" style="text-transform:capitalize">${career.category}</div>
        </div>
      </div>
      <div class="career-detail-item" style="margin-bottom:12px">
        <div class="career-detail-label">🛠 Key Skills</div>
      </div>
      <div class="career-skills-list">
        ${career.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
      <div class="career-subjects"><strong>📖 Suggested Subjects:</strong> ${career.subjects}</div>
    </div>
    <button class="career-card-expand-btn" aria-expanded="false">
      <span>View Details</span><span class="expand-arrow" aria-hidden="true">▾</span>
    </button>
  `;

  const expandBtn = card.querySelector('.career-card-expand-btn');
  const body      = card.querySelector('.career-card-body');
  body.id = `body-${career.id}`;
  expandBtn.setAttribute('aria-controls', `body-${career.id}`);

  expandBtn.addEventListener('click', () => {
    const expanded = card.classList.toggle('expanded');
    expandBtn.setAttribute('aria-expanded', expanded);
    expandBtn.querySelector('span').textContent = expanded ? 'Hide Details' : 'View Details';
  });

  return card;
}

// ─────────────────────────────────────────────
// RESULTS FILTER
// ─────────────────────────────────────────────

function setupResultsFilter(allCareers) {
  const searchInput  = document.getElementById('careerSearch');
  const filterSelect = document.getElementById('careerFilter');
  const grid         = document.getElementById('careerCardsGrid');

  function applyFilter() {
    const query    = searchInput.value.toLowerCase();
    const category = filterSelect.value;
    const filtered = allCareers.filter(c => {
      const matchQ = !query || c.name.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query) || c.skills.some(s => s.toLowerCase().includes(query));
      const matchC = !category || c.category === category;
      return matchQ && matchC;
    });
    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:32px">No careers match your search.</p>';
    } else {
      filtered.forEach(c => grid.appendChild(buildCareerCard(c)));
    }
  }

  searchInput?.addEventListener('input', applyFilter);
  filterSelect?.addEventListener('change', applyFilter);
}

// ─────────────────────────────────────────────
// RETAKE / SHARE / VIEW ACTIVITY
// ─────────────────────────────────────────────

document.getElementById('retakeQuiz')?.addEventListener('click', () => {
  answers = {}; currentQuestion = 0;
  quizResults.style.display = 'none';
  quizIntro.style.display   = 'block';
  if (loadSavedBtn) loadSavedBtn.style.display = 'none';
  document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('shareResults')?.addEventListener('click', () => {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'My Cureer Results', text: 'I just discovered my top career matches with Cureer! 🚀', url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('shareResults');
      const orig = btn.textContent;
      btn.textContent = '✅ Link Copied!';
      setTimeout(() => btn.textContent = orig, 2000);
    }).catch(() => alert('Share this link: ' + url));
  }
});

document.getElementById('viewActivity')?.addEventListener('click', () => navigateTo('activity'));

// ─────────────────────────────────────────────
// EXPLORE CAREERS GRID
// ─────────────────────────────────────────────

function buildExploreCard(career) {
  const card = document.createElement('article');
  card.className = 'career-card-explore';
  card.setAttribute('data-category', career.category);

  const catColors = {
    tech:     { bg: '#bfdbfe', text: '#1d4ed8' },
    creative: { bg: '#fbcfe8', text: '#be185d' },
    people:   { bg: '#a7f3d0', text: '#065f46' },
    business: { bg: '#fed7aa', text: '#92400e' },
    science:  { bg: '#c4b5fd', text: '#5b21b6' },
  };
  const colors = catColors[career.category] || catColors.tech;

  card.innerHTML = `
    <div class="career-card-top" style="background:${career.gradient}"></div>
    <div class="career-card-content">
      <span class="career-card-icon" role="img" aria-label="${career.name}">${career.icon}</span>
      <h3 class="career-card-title">${career.name}</h3>
      <p class="career-card-text">${career.desc}</p>
      <div class="career-card-meta">
        <span class="career-salary">💰 ${career.salary}</span>
        <span class="career-category-tag" style="background:${colors.bg};color:${colors.text}">
          ${career.category.charAt(0).toUpperCase() + career.category.slice(1)}
        </span>
      </div>
    </div>
  `;
  return card;
}

function populateCareersGrid(filter = 'all') {
  const grid = document.getElementById('careersGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'all' ? CAREERS : CAREERS.filter(c => c.category === filter);
  filtered.forEach(c => grid.appendChild(buildExploreCard(c)));
}

populateCareersGrid();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    populateCareersGrid(btn.dataset.filter);
  });
});

// ─────────────────────────────────────────────
// FAQ ACCORDION
// ─────────────────────────────────────────────

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').hidden = true;
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });

    item.classList.toggle('open', !isOpen);
    answer.hidden = isOpen;
    btn.setAttribute('aria-expanded', !isOpen);
  });
});

// ─────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form    = e.target;
  const name    = form.querySelector('#contactName').value.trim();
  const email   = form.querySelector('#contactEmail').value.trim();
  const message = form.querySelector('#contactMessage').value.trim();
  const success = document.getElementById('formSuccess');

  if (!name || !email || !message) {
    [['contactName', name], ['contactEmail', email], ['contactMessage', message]].forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (!val) { el.style.borderColor = '#f43f5e'; el.addEventListener('input', () => el.style.borderColor = '', { once: true }); }
    });
    return;
  }

  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  setTimeout(() => {
    success.hidden = false;
    form.reset();
    submitBtn.textContent = 'Send Message ✉️';
    submitBtn.disabled = false;
    setTimeout(() => { success.hidden = true; }, 5000);
  }, 1200);
});

// ─────────────────────────────────────────────
// KEYBOARD NAVIGATION
// ─────────────────────────────────────────────

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu) {
    mobileMenu.classList.remove('open');
    if (hamburger) { hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', false); }
  }
});

// ─────────────────────────────────────────────
// PAGE NAVIGATION (main ↔ activity)
// ─────────────────────────────────────────────

const mainPage     = document.getElementById('page-main');
const activityPage = document.getElementById('page-activity');

function navigateTo(page) {
  if (page === 'activity') {
    mainPage.style.display     = 'none';
    activityPage.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderActivityPage();
  } else {
    activityPage.style.display = 'none';
    mainPage.style.display     = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.getElementById('navActivityBtn')?.addEventListener('click', () => navigateTo('activity'));
document.getElementById('mobileActivityBtn')?.addEventListener('click', () => {
  if (mobileMenu) { mobileMenu.classList.remove('open'); }
  if (hamburger)  { hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', false); }
  navigateTo('activity');
});
document.getElementById('backToMain')?.addEventListener('click', () => navigateTo('main'));

// "Take quiz" buttons from activity page
['historyTakeQuizBtn', 'goalsTakeQuizBtn'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', () => {
    navigateTo('main');
    setTimeout(() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' }), 300);
  });
});

// ─────────────────────────────────────────────
// ACTIVITY PAGE TABS
// ─────────────────────────────────────────────

document.querySelectorAll('.activity-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.activity-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.activity-panel').forEach(p => { p.classList.remove('active'); p.hidden = true; });
    tab.classList.add('active');
    const panel = document.getElementById('tab-' + tab.dataset.tab);
    if (panel) { panel.classList.add('active'); panel.hidden = false; }
  });
});

// ─────────────────────────────────────────────
// ACTIVITY PAGE — RENDER
// ─────────────────────────────────────────────

function renderActivityPage() {
  const history = getActivityHistory();
  const goals   = getSavedGoals();
  const latest  = history[0] || null;

  renderActivityStats(history, goals);
  renderOverviewTab(latest);
  renderHistoryTab(history);
  renderGoalsTab(goals);
  renderAchievementsTab(history, goals);
}

/* ── Stats row ── */
function renderActivityStats(history, goals) {
  const el = document.getElementById('activityHeroStats');
  if (!el) return;
  el.innerHTML = `
    <div class="activity-stat-card">
      <div class="activity-stat-num">${history.length}</div>
      <div class="activity-stat-label">Quizzes Taken</div>
    </div>
    <div class="activity-stat-card">
      <div class="activity-stat-num">${goals.length}</div>
      <div class="activity-stat-label">Active Goals</div>
    </div>
    <div class="activity-stat-card">
      <div class="activity-stat-num">${history.length > 0 ? history[0].topCareers[0].matchPct + '%' : '—'}</div>
      <div class="activity-stat-label">Top Match</div>
    </div>
  `;
}

/* ── Overview tab ── */
function renderOverviewTab(latest) {
  const grid = document.getElementById('overviewGrid');
  if (!grid) return;

  if (!latest) {
    grid.innerHTML = `
      <div class="overview-empty-card">
        <div style="font-size:3rem;margin-bottom:12px">👋</div>
        <h3>No results yet</h3>
        <p>Take the quiz to see your personalised career dashboard.</p>
        <button class="btn btn-primary" onclick="navigateTo('main');setTimeout(()=>document.getElementById('quiz-section').scrollIntoView({behavior:'smooth'}),300)" style="margin-top:16px">Take the Quiz →</button>
      </div>`;
    document.getElementById('overviewCareersSection').style.display = 'none';
    return;
  }

  const personality = PERSONALITY_TYPES[latest.personalityType] || {};
  const topCareer   = latest.topCareers[0];
  const savedGoals  = getSavedGoals();

  grid.innerHTML = `
    <div class="act-card act-personality-card">
      <div class="act-card-label">Latest Personality Type</div>
      <div class="act-personality-badge">${latest.personalityEmoji || '✨'} ${latest.personalityLabel}</div>
      <div class="act-trait-list">
        ${(personality.traits || []).map(t => `<span class="trait-tag">${t}</span>`).join('')}
      </div>
      <div class="act-card-date">${formatDate(latest.date)}</div>
    </div>
    <div class="act-card act-strengths-card">
      <div class="act-card-label">Your Strength Profile</div>
      <div class="act-strength-bars">
        ${(latest.strengthProfile || []).map(s => `
          <div>
            <div class="act-strength-labels"><span>${s.label}</span><span>${Math.round(s.value)}%</span></div>
            <div class="strength-bar-track">
              <div class="strength-bar-fill" style="width:${s.value}%;background:${s.color}"></div>
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="act-card act-match-card">
      <div class="act-card-label">Top Career Match</div>
      <div class="act-match-icon">${topCareer.icon}</div>
      <div class="act-match-name">${topCareer.name}</div>
      <div class="match-pct-badge">${topCareer.matchPct}% match</div>
    </div>
    <div class="act-card act-goals-card">
      <div class="act-card-label">Active Goals</div>
      ${savedGoals.length === 0
        ? '<p style="color:var(--text-muted);font-size:0.9rem;margin-top:8px">No goals set yet.</p>'
        : savedGoals.slice(0, 4).map(g => {
            const gd = GOAL_OPTIONS.find(o => o.id === g.id);
            return gd ? `<div class="act-goal-pill">${gd.icon} ${gd.label}</div>` : '';
          }).join('')}
    </div>
  `;

  // Career recommendations
  const section = document.getElementById('overviewCareersSection');
  const careersGrid = document.getElementById('overviewCareersGrid');
  section.style.display = 'block';
  careersGrid.innerHTML = '';
  latest.topCareers.forEach(c => {
    const full = CAREERS.find(career => career.id === c.id);
    if (!full) return;
    const oc = document.createElement('div');
    oc.className = 'overview-career-card';
    oc.innerHTML = `
      <div style="font-size:2rem;margin-bottom:8px">${full.icon}</div>
      <div style="font-weight:700;font-family:var(--font-display);margin-bottom:4px">${full.name}</div>
      <div style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:12px">${full.desc}</div>
      <div class="match-pct-badge">${c.matchPct}% match</div>
    `;
    careersGrid.appendChild(oc);
  });
}

/* ── History tab ── */
function renderHistoryTab(historyRaw) {
  const sortSelect = document.getElementById('historySortSelect');
  if (!sortSelect) return;

  const doRender = () => {
    let history = [...historyRaw];
    if (sortSelect.value === 'oldest') history.reverse();
    if (sortSelect.value === 'type')   history.sort((a, b) => a.personalityLabel?.localeCompare(b.personalityLabel || '') || 0);

    const listEl  = document.getElementById('historyList');
    const emptyEl = document.getElementById('historyEmpty');
    if (!listEl || !emptyEl) return;

    if (history.length === 0) {
      listEl.innerHTML = '';
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';
    listEl.innerHTML = history.map((r, i) => `
      <div class="history-card fade-in visible">
        <div class="history-card-left">
          <div class="history-num">#${i + 1}</div>
          <div>
            <div class="history-type">${r.personalityEmoji || '✨'} ${r.personalityLabel}</div>
            <div class="history-date">${formatDate(r.date)}</div>
          </div>
        </div>
        <div class="history-careers">
          ${(r.topCareers || []).slice(0, 3).map(c => `
            <div class="history-career-chip">
              ${c.icon} ${c.name}
              <span class="history-match-pct">${c.matchPct}%</span>
            </div>`).join('')}
        </div>
      </div>
    `).join('');
  };

  doRender();
  sortSelect.addEventListener('change', doRender);
}

/* ── Goals tab ── */
function renderGoalsTab(goals) {
  const listEl  = document.getElementById('goalsActiveList');
  const emptyEl = document.getElementById('goalsEmpty');
  if (!listEl || !emptyEl) return;

  if (goals.length === 0) { listEl.innerHTML = ''; emptyEl.style.display = 'block'; return; }
  emptyEl.style.display = 'none';
  listEl.innerHTML = '';

  goals.forEach(g => {
    const data = GOAL_OPTIONS.find(o => o.id === g.id);
    if (!data) return;
    const stepsDone = getGoalProgress()[g.id] || [];

    const card = document.createElement('div');
    card.className = 'goal-card';
    card.innerHTML = `
      <div class="goal-card-header">
        <span class="goal-card-icon">${data.icon}</span>
        <div class="goal-card-info">
          <div class="goal-card-title">${data.label}</div>
          <div class="goal-card-desc">${data.desc}</div>
        </div>
        <div class="goal-progress-ring">
          <div class="goal-progress-num">${stepsDone.length}/${data.steps.length}</div>
          <div class="goal-progress-label">done</div>
        </div>
      </div>
      <div class="goal-progress-bar-track">
        <div class="goal-progress-bar-fill" style="width:${(stepsDone.length / data.steps.length) * 100}%"></div>
      </div>
      <div class="goal-steps">
        ${data.steps.map((step, i) => {
          const done = stepsDone.includes(i);
          return `
            <div class="goal-step ${done ? 'done' : ''}" data-goal="${g.id}" data-step="${i}">
              <div class="goal-step-check ${done ? 'checked' : ''}" role="checkbox" aria-checked="${done}" tabindex="0">${done ? '✓' : ''}</div>
              <div class="goal-step-text">${step}</div>
            </div>`;
        }).join('')}
      </div>
    `;

    // Step toggle
    card.querySelectorAll('.goal-step').forEach(stepEl => {
      const toggle = () => {
        const goalId  = stepEl.dataset.goal;
        const stepIdx = parseInt(stepEl.dataset.step);
        const prog    = getGoalProgress();
        if (!prog[goalId]) prog[goalId] = [];
        const idx = prog[goalId].indexOf(stepIdx);
        if (idx === -1) prog[goalId].push(stepIdx);
        else prog[goalId].splice(idx, 1);
        saveGoalProgress(prog);
        renderGoalsTab(getSavedGoals()); // re-render
      };
      const check = stepEl.querySelector('.goal-step-check');
      check.addEventListener('click', toggle);
      check.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    });

    listEl.appendChild(card);
  });
}

/* ── Achievements tab ── */
function renderAchievementsTab(history, goals) {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;

  const progress = getGoalProgress();
  const uniqueDays = new Set(history.map(r => r.date.slice(0, 10))).size;
  const stepsDoneCount = Object.values(progress).reduce((sum, arr) => sum + arr.length, 0);

  const BADGES = [
    { icon: '🎉', label: 'First Steps',      desc: 'Completed your first quiz',      earned: history.length >= 1  },
    { icon: '🔁', label: 'Triple Thinker',   desc: 'Completed 3 quizzes',            earned: history.length >= 3  },
    { icon: '⭐', label: 'Career Explorer',  desc: 'Completed 5 quizzes',            earned: history.length >= 5  },
    { icon: '🎯', label: 'Goal Setter',      desc: 'Set your first career goal',     earned: goals.length >= 1    },
    { icon: '💪', label: 'Determined',       desc: 'Set 3 different goals',          earned: goals.length >= 3    },
    { icon: '🏆', label: 'Overachiever',     desc: 'Set all 8 available goals',      earned: goals.length >= 8    },
    { icon: '✅', label: 'First Step Taken', desc: 'Completed your first goal step', earned: stepsDoneCount >= 1  },
    { icon: '🔥', label: 'On a Roll',        desc: 'Took quizzes on 3+ different days', earned: uniqueDays >= 3   },
  ];

  grid.innerHTML = BADGES.map(b => `
    <div class="achievement-card ${b.earned ? 'earned' : 'locked'}">
      <div class="achievement-icon">${b.earned ? b.icon : '🔒'}</div>
      <div class="achievement-label">${b.label}</div>
      <div class="achievement-desc">${b.desc}</div>
      ${b.earned
        ? '<div class="achievement-earned-badge">Earned ✓</div>'
        : '<div class="achievement-locked-text">Keep going…</div>'}
    </div>
  `).join('');
}

// Clear history button
document.getElementById('clearHistoryBtn')?.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all quiz history? This cannot be undone.')) {
    localStorage.removeItem('cureer-activity');
    renderActivityPage();
  }
});

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    + ' at ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

// Console branding
console.log('%c✦ Cureer', 'font-family:sans-serif;font-size:20px;font-weight:bold;background:linear-gradient(135deg,#a78bfa,#f9a8d4);-webkit-background-clip:text;color:transparent;');
console.log('%cHelping young people find their path 💛 — v2.0 upgraded', 'font-family:sans-serif;color:#7c6fcd;');
