/* ============================================================
   CUREER — script.js
   Complete interactive functionality
   ============================================================ */

'use strict';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const QUIZ_QUESTIONS = [
  {
    id: 1,
    text: "When you have free time, what do you most enjoy doing?",
    options: [
      { label: "Creating something — art, music, writing, or design", value: "creative" },
      { label: "Solving puzzles or learning how things work", value: "analytical" },
      { label: "Spending time with and helping friends or family", value: "social" },
      { label: "Planning projects, organising, or running things", value: "leadership" },
    ]
  },
  {
    id: 2,
    text: "How do you prefer to work on a project?",
    options: [
      { label: "Independently — I do my best work alone", value: "independent" },
      { label: "In a small close-knit team of 2–4 people", value: "teamwork" },
      { label: "In a large collaborative group", value: "teamwork" },
      { label: "Leading the project and coordinating others", value: "leadership" },
    ]
  },
  {
    id: 3,
    text: "Which subjects do you enjoy most at school?",
    options: [
      { label: "Maths, Physics, or Computer Science", value: "stem" },
      { label: "English, History, or Social Studies", value: "humanities" },
      { label: "Art, Music, Drama, or Design", value: "creative" },
      { label: "Biology, Chemistry, or Psychology", value: "science" },
    ]
  },
  {
    id: 4,
    text: "When someone comes to you with a problem, you usually…",
    options: [
      { label: "Listen carefully and offer emotional support", value: "social" },
      { label: "Help them analyse and find a logical solution", value: "analytical" },
      { label: "Come up with creative or unconventional ideas", value: "creative" },
      { label: "Take charge and help them make a plan of action", value: "leadership" },
    ]
  },
  {
    id: 5,
    text: "What kind of environment do you want to work in?",
    options: [
      { label: "A creative studio — colourful, free-flowing, inspiring", value: "creative" },
      { label: "A corporate office — structured, professional, clear", value: "business" },
      { label: "Outdoors or in the field — hands-on, active", value: "practical" },
      { label: "Anywhere with internet — I want flexibility", value: "independent" },
    ]
  },
  {
    id: 6,
    text: "Which of these excites you most as a career goal?",
    options: [
      { label: "Building technology that changes people's lives", value: "tech" },
      { label: "Helping and healing people who are struggling", value: "social" },
      { label: "Running my own business and being my own boss", value: "leadership" },
      { label: "Creating beautiful things that inspire people", value: "creative" },
    ]
  },
  {
    id: 7,
    text: "How do you feel about working with data and numbers?",
    options: [
      { label: "I love it — data tells fascinating stories", value: "analytical" },
      { label: "I'm okay with it when needed", value: "stem" },
      { label: "I prefer working with people over numbers", value: "social" },
      { label: "I'd rather focus on ideas and creativity", value: "creative" },
    ]
  },
  {
    id: 8,
    text: "Pick the activity that sounds most appealing:",
    options: [
      { label: "Writing code to build an app or game", value: "tech" },
      { label: "Designing a logo or brand identity", value: "creative" },
      { label: "Teaching a class or mentoring someone", value: "social" },
      { label: "Analysing business data to find insights", value: "analytical" },
    ]
  },
  {
    id: 9,
    text: "What motivates you most in a job?",
    options: [
      { label: "Making a meaningful difference in people's lives", value: "social" },
      { label: "Earning a high salary and financial security", value: "business" },
      { label: "Creative freedom and expressing myself", value: "creative" },
      { label: "Continuous learning and intellectual challenge", value: "analytical" },
    ]
  },
  {
    id: 10,
    text: "How do you feel about public speaking or presenting?",
    options: [
      { label: "I love it — I thrive in front of an audience", value: "leadership" },
      { label: "I'm okay with it when the topic interests me", value: "social" },
      { label: "I prefer small groups or one-on-one conversations", value: "social" },
      { label: "I'd much rather communicate through writing or visuals", value: "creative" },
    ]
  },
  {
    id: 11,
    text: "Which of these sounds like the most satisfying achievement?",
    options: [
      { label: "Launching an app used by thousands of people", value: "tech" },
      { label: "Helping someone through a really difficult time", value: "social" },
      { label: "Designing something that wins an award", value: "creative" },
      { label: "Growing a startup into a successful company", value: "leadership" },
    ]
  },
  {
    id: 12,
    text: "What is your relationship with technology?",
    options: [
      { label: "I'm obsessed — I love how it works and what it can do", value: "tech" },
      { label: "I use it comfortably as a tool for creative or social work", value: "creative" },
      { label: "I'm practical — I use what I need but prefer human interaction", value: "social" },
      { label: "I'm interested in how it impacts business and society", value: "business" },
    ]
  },
];

const CAREERS = [
  {
    id: "software-engineer",
    name: "Software Engineer",
    icon: "💻",
    desc: "Design, build, and maintain software applications and systems that power the modern world.",
    salary: "$75K – $160K/yr",
    category: "tech",
    color: "#bfdbfe",
    gradient: "linear-gradient(135deg, #bfdbfe, #c4b5fd)",
    skills: ["Problem solving", "Python/JavaScript", "Systems thinking", "Debugging", "Collaboration"],
    subjects: "Maths, Computer Science, Physics",
    scores: { tech: 3, analytical: 3, stem: 2 }
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    icon: "🎨",
    desc: "Create visual concepts and stunning designs across digital media, branding, and print.",
    salary: "$45K – $95K/yr",
    category: "creative",
    color: "#fbcfe8",
    gradient: "linear-gradient(135deg, #fbcfe8, #fde68a)",
    skills: ["Adobe Suite", "Typography", "Colour theory", "UX thinking", "Creativity"],
    subjects: "Art, Design, Media Studies",
    scores: { creative: 4, tech: 1, independent: 2 }
  },
  {
    id: "psychologist",
    name: "Psychologist",
    icon: "🧠",
    desc: "Study human behaviour and help individuals overcome mental health challenges and personal difficulties.",
    salary: "$60K – $130K/yr",
    category: "people",
    color: "#a7f3d0",
    gradient: "linear-gradient(135deg, #a7f3d0, #c4b5fd)",
    skills: ["Empathy", "Active listening", "Research", "Communication", "Critical thinking"],
    subjects: "Biology, Psychology, Social Science",
    scores: { social: 4, science: 2, analytical: 2 }
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    icon: "📊",
    desc: "Interpret complex data sets to discover trends and insights that drive business decisions.",
    salary: "$55K – $110K/yr",
    category: "tech",
    color: "#bfdbfe",
    gradient: "linear-gradient(135deg, #bfdbfe, #a7f3d0)",
    skills: ["SQL", "Excel/Python", "Statistics", "Storytelling", "Attention to detail"],
    subjects: "Maths, Statistics, Computer Science",
    scores: { analytical: 4, stem: 3, tech: 2 }
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    icon: "🚀",
    desc: "Build and grow your own ventures, solving real-world problems while being your own boss.",
    salary: "$40K – $500K+ /yr",
    category: "business",
    color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fed7aa, #fbcfe8)",
    skills: ["Leadership", "Resilience", "Marketing", "Finance basics", "Networking"],
    subjects: "Business, Economics, Psychology",
    scores: { leadership: 4, business: 3, independent: 2 }
  },
  {
    id: "digital-marketer",
    name: "Digital Marketer",
    icon: "📱",
    desc: "Create and execute campaigns across social media, SEO, and paid ads to grow brands and audiences.",
    salary: "$45K – $100K/yr",
    category: "business",
    color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fde68a, #fbcfe8)",
    skills: ["Copywriting", "Analytics", "Social media", "Strategy", "Creativity"],
    subjects: "English, Media Studies, Business",
    scores: { creative: 2, business: 3, leadership: 1, social: 2 }
  },
  {
    id: "teacher",
    name: "Teacher / Educator",
    icon: "📚",
    desc: "Inspire the next generation by making learning engaging, accessible, and genuinely meaningful.",
    salary: "$35K – $75K/yr",
    category: "people",
    color: "#a7f3d0",
    gradient: "linear-gradient(135deg, #a7f3d0, #bfdbfe)",
    skills: ["Communication", "Patience", "Subject knowledge", "Empathy", "Adaptability"],
    subjects: "Education, English, Psychology",
    scores: { social: 3, leadership: 2, humanities: 2 }
  },
  {
    id: "ux-designer",
    name: "UX/UI Designer",
    icon: "✏️",
    desc: "Design intuitive and delightful digital products that genuinely put users first.",
    salary: "$65K – $135K/yr",
    category: "creative",
    color: "#fbcfe8",
    gradient: "linear-gradient(135deg, #fbcfe8, #bfdbfe)",
    skills: ["Figma", "User research", "Prototyping", "Empathy", "Visual design"],
    subjects: "Design, Computer Science, Psychology",
    scores: { creative: 3, tech: 2, social: 2, analytical: 1 }
  },
  {
    id: "nurse",
    name: "Nurse / Healthcare Worker",
    icon: "🏥",
    desc: "Provide compassionate care to patients, acting as a critical pillar of the healthcare system.",
    salary: "$50K – $90K/yr",
    category: "science",
    color: "#bbf7d0",
    gradient: "linear-gradient(135deg, #bbf7d0, #bfdbfe)",
    skills: ["Clinical skills", "Empathy", "Communication", "Resilience", "Teamwork"],
    subjects: "Biology, Chemistry, Human Sciences",
    scores: { social: 3, science: 3, practical: 2 }
  },
  {
    id: "content-creator",
    name: "Content Creator",
    icon: "🎬",
    desc: "Build an audience and monetise your creativity through video, writing, podcasts, or social media.",
    salary: "$30K – $200K+ /yr",
    category: "creative",
    color: "#fbcfe8",
    gradient: "linear-gradient(135deg, #fbcfe8, #fde68a)",
    skills: ["Storytelling", "Video editing", "SEO", "Social media", "Consistency"],
    subjects: "Media Studies, English, IT",
    scores: { creative: 4, independent: 3, leadership: 1 }
  },
  {
    id: "financial-analyst",
    name: "Financial Analyst",
    icon: "💹",
    desc: "Evaluate financial data and market trends to guide investment and business strategy.",
    salary: "$65K – $130K/yr",
    category: "business",
    color: "#fed7aa",
    gradient: "linear-gradient(135deg, #fde68a, #a7f3d0)",
    skills: ["Excel modelling", "Accounting", "Research", "Communication", "Attention to detail"],
    subjects: "Maths, Economics, Business Studies",
    scores: { analytical: 3, business: 3, stem: 2 }
  },
  {
    id: "architect",
    name: "Architect",
    icon: "🏛️",
    desc: "Design buildings and spaces that balance aesthetics, functionality, and human experience.",
    salary: "$60K – $130K/yr",
    category: "creative",
    color: "#c4b5fd",
    gradient: "linear-gradient(135deg, #c4b5fd, #bfdbfe)",
    skills: ["AutoCAD", "3D modelling", "Spatial reasoning", "Project management", "Creativity"],
    subjects: "Art, Physics, Maths, Design",
    scores: { creative: 3, analytical: 2, stem: 2, practical: 1 }
  },
];

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
// STATE
// ─────────────────────────────────────────────

let currentQuestion = 0;
let answers = {};
let quizStarted = false;

// ─────────────────────────────────────────────
// LOADER
// ─────────────────────────────────────────────

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    startTypingEffect();
  }, 1200);
});

// ─────────────────────────────────────────────
// TYPING ANIMATION
// ─────────────────────────────────────────────

function startTypingEffect() {
  const phrases = [
    "That Fits You",
    "You've Always Wanted",
    "Matches Your Personality",
    "Excites You Every Day",
    "Is Meant For You",
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  const el = document.getElementById('heroTyped');

  function type() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
    } else {
      charIdx--;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    const speed = deleting ? 45 : 75;
    setTimeout(type, speed);
  }

  type();
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────

const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// ─────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('cureer-theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('cureer-theme', theme);
  themeToggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

// ─────────────────────────────────────────────
// BACK TO TOP
// ─────────────────────────────────────────────

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─────────────────────────────────────────────
// SMOOTH SCROLL (for all anchor links)
// ─────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─────────────────────────────────────────────
// INTERSECTION OBSERVER (Fade-in animations)
// ─────────────────────────────────────────────

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ─────────────────────────────────────────────
// QUIZ
// ─────────────────────────────────────────────

const startQuizBtn = document.getElementById('startQuiz');
const loadSavedBtn = document.getElementById('loadSaved');
const quizIntro   = document.getElementById('quizIntro');
const quizBody    = document.getElementById('quizBody');
const quizResults = document.getElementById('quizResults');
const nextBtn     = document.getElementById('nextBtn');
const prevBtn     = document.getElementById('prevBtn');

// Check for saved progress
const savedAnswers = localStorage.getItem('cureer-quiz-answers');
const savedQuestion = localStorage.getItem('cureer-quiz-question');
if (savedAnswers) {
  loadSavedBtn.style.display = 'inline-flex';
}

startQuizBtn.addEventListener('click', () => {
  answers = {};
  currentQuestion = 0;
  localStorage.removeItem('cureer-quiz-answers');
  localStorage.removeItem('cureer-quiz-question');
  beginQuiz();
});

loadSavedBtn.addEventListener('click', () => {
  try {
    answers = JSON.parse(localStorage.getItem('cureer-quiz-answers')) || {};
    currentQuestion = parseInt(localStorage.getItem('cureer-quiz-question')) || 0;
    beginQuiz();
  } catch {
    beginQuiz();
  }
});

function beginQuiz() {
  quizIntro.style.display = 'none';
  quizBody.style.display = 'block';
  renderQuestion();
  quizStarted = true;
}

function renderQuestion() {
  const q = QUIZ_QUESTIONS[currentQuestion];
  const total = QUIZ_QUESTIONS.length;

  // Progress
  const pct = ((currentQuestion) / total) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${total}`;

  // Question number
  document.getElementById('questionNum').textContent = `Question ${currentQuestion + 1}`;
  document.getElementById('questionText').textContent = q.text;

  // Options
  const container = document.getElementById('questionOptions');
  container.innerHTML = '';

  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[q.id] === opt.value ? ' selected' : '');
    btn.setAttribute('aria-pressed', answers[q.id] === opt.value ? 'true' : 'false');
    btn.innerHTML = `
      <span class="option-indicator">${labels[i]}</span>
      <span>${opt.label}</span>
    `;
    btn.addEventListener('click', () => selectOption(q.id, opt.value, btn, container));
    container.appendChild(btn);
  });

  // Nav buttons
  prevBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
  nextBtn.textContent = currentQuestion === total - 1 ? 'See Results ✨' : 'Next →';

  // Animate in
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  requestAnimationFrame(() => {
    card.style.animation = '';
  });
}

function selectOption(questionId, value, btn, container) {
  // Remove selection from siblings
  container.querySelectorAll('.option-btn').forEach(b => {
    b.classList.remove('selected');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('selected');
  btn.setAttribute('aria-pressed', 'true');
  answers[questionId] = value;
  saveProgress();
}

nextBtn.addEventListener('click', () => {
  const q = QUIZ_QUESTIONS[currentQuestion];
  if (!answers[q.id]) {
    // Shake the options to prompt answer
    const card = document.getElementById('questionCard');
    card.style.animation = 'shake 0.3s ease';
    setTimeout(() => card.style.animation = '', 300);
    return;
  }
  if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

// Add shake animation
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-8px)} 40%,80%{transform:translateX(8px)} }`;
document.head.appendChild(shakeStyle);

function saveProgress() {
  localStorage.setItem('cureer-quiz-answers', JSON.stringify(answers));
  localStorage.setItem('cureer-quiz-question', currentQuestion);
}

// ─────────────────────────────────────────────
// RESULTS CALCULATION
// ─────────────────────────────────────────────

function calculateResults() {
  // Tally scores per trait
  const scores = {};
  Object.values(answers).forEach(val => {
    scores[val] = (scores[val] || 0) + 1;
  });

  // Determine dominant personality type
  const personalityKeys = Object.keys(PERSONALITY_TYPES);
  let dominantType = 'creative';
  let maxScore = -1;
  personalityKeys.forEach(key => {
    if ((scores[key] || 0) > maxScore) {
      maxScore = scores[key] || 0;
      dominantType = key;
    }
  });

  // Score each career
  const careerScores = CAREERS.map(career => {
    let total = 0;
    let max = 0;
    Object.entries(career.scores).forEach(([trait, weight]) => {
      total += (scores[trait] || 0) * weight;
      max += 3 * weight; // max 3 questions per trait
    });
    const pct = Math.min(99, Math.round(40 + (total / Math.max(max, 1)) * 59));
    return { ...career, matchPct: pct };
  });

  // Sort by match
  careerScores.sort((a, b) => b.matchPct - a.matchPct);

  // Strength profile
  const strengthProfile = [
    { label: "Creativity",   value: Math.min(100, ((scores.creative || 0) / 4) * 100),  color: "linear-gradient(90deg, #fbcfe8, #f9a8d4)" },
    { label: "Analytical",   value: Math.min(100, ((scores.analytical || 0) / 4) * 100), color: "linear-gradient(90deg, #bfdbfe, #93c5fd)" },
    { label: "Leadership",   value: Math.min(100, ((scores.leadership || 0) / 4) * 100), color: "linear-gradient(90deg, #fed7aa, #fbbf24)" },
    { label: "Social",       value: Math.min(100, ((scores.social || 0) / 4) * 100),     color: "linear-gradient(90deg, #a7f3d0, #34d399)" },
    { label: "Tech",         value: Math.min(100, ((scores.tech || 0) / 4) * 100),       color: "linear-gradient(90deg, #c4b5fd, #a78bfa)" },
  ];

  return { dominantType, careerScores, strengthProfile };
}

// ─────────────────────────────────────────────
// SHOW RESULTS
// ─────────────────────────────────────────────

function showResults() {
  quizBody.style.display = 'none';
  quizResults.style.display = 'block';
  quizResults.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const { dominantType, careerScores, strengthProfile } = calculateResults();
  const personality = PERSONALITY_TYPES[dominantType];

  // Header
  document.getElementById('personalityTypeText').textContent =
    `You're a ${personality.label} ${personality.emoji} — here are your best career matches.`;

  // Personality badge
  document.getElementById('personalityBadge').textContent =
    `${personality.emoji} ${personality.label}`;

  // Traits
  const traitsEl = document.getElementById('personalityTraits');
  traitsEl.innerHTML = personality.traits
    .map(t => `<span class="trait-tag">${t}</span>`)
    .join('');

  // Strength bars
  const strengthEl = document.getElementById('strengthBars');
  strengthEl.innerHTML = strengthProfile.map(s => `
    <div class="strength-bar-item">
      <div class="strength-bar-label">
        <span>${s.label}</span>
        <span>${Math.round(s.value)}%</span>
      </div>
      <div class="strength-bar-track">
        <div class="strength-bar-fill" data-width="${s.value}" style="background: ${s.color}"></div>
      </div>
    </div>
  `).join('');

  // Animate bars after paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.strength-bar-fill').forEach(bar => {
      setTimeout(() => {
        bar.style.width = bar.dataset.width + '%';
      }, 100);
    });
  });

  // Industry pills
  const industriesEl = document.getElementById('industryPills');
  industriesEl.innerHTML = personality.industries
    .map(ind => `<div class="industry-pill">${ind}</div>`)
    .join('');

  // Career cards (top 5)
  const grid = document.getElementById('careerCardsGrid');
  grid.innerHTML = '';
  careerScores.slice(0, 6).forEach(career => {
    grid.appendChild(buildCareerCard(career));
  });

  // Setup search/filter for results
  setupResultsFilter(careerScores);

  // Clear saved progress
  localStorage.removeItem('cureer-quiz-answers');
  localStorage.removeItem('cureer-quiz-question');
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
      <div class="career-icon" style="background: ${career.color}20">${career.icon}</div>
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
          <div class="career-detail-value" style="text-transform: capitalize">${career.category}</div>
        </div>
      </div>
      <div class="career-detail-item" style="margin-bottom:12px">
        <div class="career-detail-label">🛠 Key Skills</div>
      </div>
      <div class="career-skills-list">
        ${career.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
      <div class="career-subjects">
        <strong>📖 Suggested Subjects:</strong> ${career.subjects}
      </div>
    </div>
    <button class="career-card-expand-btn" aria-expanded="false" aria-controls="body-${career.id}">
      <span>View Details</span>
      <span class="expand-arrow" aria-hidden="true">▾</span>
    </button>
  `;

  // Expand toggle
  const expandBtn = card.querySelector('.career-card-expand-btn');
  const body = card.querySelector('.career-card-body');
  body.id = `body-${career.id}`;

  expandBtn.addEventListener('click', () => {
    const expanded = card.classList.toggle('expanded');
    expandBtn.setAttribute('aria-expanded', expanded);
    expandBtn.querySelector('span').textContent = expanded ? 'Hide Details' : 'View Details';
  });

  return card;
}

// ─────────────────────────────────────────────
// RESULTS SEARCH / FILTER
// ─────────────────────────────────────────────

function setupResultsFilter(allCareers) {
  const searchInput = document.getElementById('careerSearch');
  const filterSelect = document.getElementById('careerFilter');
  const grid = document.getElementById('careerCardsGrid');

  function applyFilter() {
    const query = searchInput.value.toLowerCase();
    const category = filterSelect.value;

    const filtered = allCareers.filter(c => {
      const matchesQuery = !query ||
        c.name.toLowerCase().includes(query) ||
        c.desc.toLowerCase().includes(query) ||
        c.skills.some(s => s.toLowerCase().includes(query));
      const matchesCat = !category || c.category === category;
      return matchesQuery && matchesCat;
    });

    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 32px;">No careers match your search. Try different terms.</p>';
    } else {
      filtered.forEach(c => grid.appendChild(buildCareerCard(c)));
    }
  }

  searchInput.addEventListener('input', applyFilter);
  filterSelect.addEventListener('change', applyFilter);
}

// ─────────────────────────────────────────────
// RETAKE / SHARE
// ─────────────────────────────────────────────

document.getElementById('retakeQuiz').addEventListener('click', () => {
  answers = {};
  currentQuestion = 0;
  quizResults.style.display = 'none';
  quizIntro.style.display = 'block';
  loadSavedBtn.style.display = 'none';
  document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('shareResults').addEventListener('click', () => {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: 'My Cureer Results',
      text: 'I just discovered my top career matches with Cureer! 🚀',
      url
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('shareResults');
      const original = btn.textContent;
      btn.textContent = '✅ Link Copied!';
      setTimeout(() => btn.textContent = original, 2000);
    }).catch(() => {
      alert('Share this link: ' + url);
    });
  }
});

// ─────────────────────────────────────────────
// EXPLORE CAREERS GRID
// ─────────────────────────────────────────────

function buildExploreCard(career) {
  const card = document.createElement('article');
  card.className = 'career-card-explore';
  card.setAttribute('data-category', career.category);

  const catColors = {
    tech:     { bg: '#bfdbfe', text: '#1d4ed8', border: '#3b82f6' },
    creative: { bg: '#fbcfe8', text: '#be185d', border: '#ec4899' },
    people:   { bg: '#a7f3d0', text: '#065f46', border: '#10b981' },
    business: { bg: '#fed7aa', text: '#92400e', border: '#f59e0b' },
    science:  { bg: '#c4b5fd', text: '#5b21b6', border: '#7c3aed' },
  };

  const colors = catColors[career.category] || catColors.tech;

  card.innerHTML = `
    <div class="career-card-top" style="background: ${career.gradient}"></div>
    <div class="career-card-content">
      <span class="career-card-icon" role="img" aria-label="${career.name} icon">${career.icon}</span>
      <h3 class="career-card-title">${career.name}</h3>
      <p class="career-card-text">${career.desc}</p>
      <div class="career-card-meta">
        <span class="career-salary">💰 ${career.salary}</span>
        <span class="career-category-tag" style="background:${colors.bg}; color:${colors.text}">
          ${career.category.charAt(0).toUpperCase() + career.category.slice(1)}
        </span>
      </div>
    </div>
  `;

  return card;
}

function populateCareersGrid(filter = 'all') {
  const grid = document.getElementById('careersGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? CAREERS : CAREERS.filter(c => c.category === filter);
  filtered.forEach(c => grid.appendChild(buildExploreCard(c)));
}

populateCareersGrid();

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
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

    // Close all others
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').hidden = true;
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current
    item.classList.toggle('open', !isOpen);
    answer.hidden = isOpen;
    btn.setAttribute('aria-expanded', !isOpen);
  });
});

// ─────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name    = form.querySelector('#contactName').value.trim();
  const email   = form.querySelector('#contactEmail').value.trim();
  const message = form.querySelector('#contactMessage').value.trim();
  const success = document.getElementById('formSuccess');

  if (!name || !email || !message) {
    // Highlight empty fields
    [['contactName', name], ['contactEmail', email], ['contactMessage', message]].forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (!val) {
        el.style.borderColor = '#f43f5e';
        el.addEventListener('input', () => el.style.borderColor = '', { once: true });
      }
    });
    return;
  }

  // Simulate submission
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
// KEYBOARD NAVIGATION HELPERS
// ─────────────────────────────────────────────

// Allow Enter/Space on option buttons (already buttons, but ensure accessibility)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

// ─────────────────────────────────────────────
// INITIALISE — re-observe dynamically added .fade-in
// ─────────────────────────────────────────────

// Re-run fade observer when new content is added (e.g. career cards)
const reobserveMutations = new MutationObserver(() => {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => fadeObserver.observe(el));
});

reobserveMutations.observe(document.body, { childList: true, subtree: true });

console.log('%c✦ Cureer', 'font-family: sans-serif; font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #a78bfa, #f9a8d4); -webkit-background-clip: text; color: transparent;');
console.log('%cHelping young people find their path 💛', 'font-family: sans-serif; color: #7c6fcd;');
