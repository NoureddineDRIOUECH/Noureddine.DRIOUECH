import React, { useState, type JSX } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Briefcase,
  Cpu,
  GraduationCap,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Terminal,
  Bot,
  Layers,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiLinux,
  SiJest,
  SiSelenium,
  SiSocketdotio,
  SiGit,
  SiShadcnui,
  SiPytorch,
  SiRedux,
  SiFigma,
  SiSpringboot
} from "react-icons/si";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "education">("experience");
  const [activeSkillCategory, setActiveSkillCategory] = useState<"ai" | "frontend" | "backend" | "devops" | "automation">("ai");

  const experiences = [
    {
      company: "FEV North Africa",
      role: "AI Software Engineer Intern",
      period: "Jul 2026 - Sep 2026",
      location: "Casablanca, Morocco · On-site",
      type: "Current Internship",
      highlight: "Enterprise Local RAG",
      website: "https://fev.com",
      description:
        "Architecting an enterprise-grade, offline Retrieval-Augmented Generation (RAG) system for proprietary engineering knowledge extraction and intelligent semantic search.",
      bullets: [
        "Constructed a private local RAG pipeline leveraging open-weights LLMs, LangChain/LlamaIndex, and local vector embeddings with zero external cloud data leakage",
        "Applied Machine Learning (ML) and Deep Learning (DL) embedding models with specialized token chunking for automotive & engineering technical documentation",
        "Implemented high-accuracy vector retrieval and similarity ranking using local vector databases (FAISS / Chroma)",
        "Designed and deployed a responsive conversational intelligence UI for internal engineering teams"
      ],
      badges: ["Python", "RAG", "Local LLMs", "LangChain", "PyTorch", "Machine Learning", "Deep Learning", "Vector DBs"]
    },
    {
      company: "VNB-IT",
      role: "Mobile Developer",
      period: "Jul 2025 - Sep 2025 · 3 mos",
      location: "Pontoise, France · Remote",
      type: "Internship",
      highlight: "UFS Mobile Application",
      website: "https://universfrancesucces.com/",
      description:
        "Contributed to the core development of the Univers France Succès (UFS) mobile application, transforming Figma UI designs into responsive functional screens.",
      bullets: [
        "Turned comprehensive UI/UX designs from Figma into pixel-perfect, highly responsive React Native mobile screens",
        "Engineered smooth cross-platform mobile components with fluid gesture interactions for iOS and Android",
        "Integrated REST APIs and streamlined local state to maintain fast 60fps mobile performance"
      ],
      badges: ["React Native", "Expo", "Figma", "TypeScript", "Mobile UI/UX"]
    },
    {
      company: "Garista",
      role: "Frontend Developer",
      period: "Jul 2024 - Aug 2025 · 1 yr 2 mos",
      location: "Casablanca, Morocco · Remote",
      type: "Seasonal / Contract",
      highlight: "Restaurant SaaS · GITEX Africa",
      website: "https://garista.com",
      description:
        "Led frontend architecture of a modern SaaS restaurant management platform using React, TypeScript, Redux, and Shadcn UI.",
      bullets: [
        "Architected responsive component library reducing initial interface latency by 35%",
        "Employed React.js, Redux, and TanStack React Query to boost state efficiency and user experience",
        "Applied React Hook Form and Zod for streamlined validation pipelines and reliable form handling",
        "Demonstrated the application and engaged with industry leaders at the GITEX Africa tech conference"
      ],
      badges: ["React.js", "TypeScript", "Redux Toolkit", "React Query", "React Hook Form", "Shadcn UI", "Stripe"]
    },
    {
      company: "WHD Agency",
      role: "Software Developer",
      period: "Apr 2024 - Jun 2024 · 3 mos",
      location: "Casablanca, Morocco · On-site",
      type: "Internship",
      highlight: "50k+ Records / Mo",
      website: "https://whd.agency",
      description:
        "Developed full-stack web solutions for e-commerce platforms and automated business operations.",
      bullets: [
        "Built automated product management workflows reducing manual inventory entry by 80%",
        "Engineered web extraction pipelines harvesting 50,000+ commercial product records monthly using Python & BeautifulSoup",
        "Optimized Next.js and React client bundles improving Core Web Vitals performance scores by 45%",
        "Integrated REST APIs connecting Laravel backend services with interactive Next.js interfaces"
      ],
      badges: ["Next.js", "Laravel", "Python", "BeautifulSoup", "REST APIs", "MySQL"]
    },
    {
      company: "Digimperial",
      role: "Developer",
      period: "Jul 2023 - Aug 2023 · 2 mos",
      location: "Casablanca, Morocco · On-site",
      type: "Internship",
      highlight: "92% Precision",
      website: "https://digimperial.com",
      description:
        "Specialized in web automation, high-speed data extraction, and CAPTCHA bypass solutions.",
      bullets: [
        "Developed CAPTCHA-solving algorithms achieving a 92% automated success rate",
        "Automated high-frequency form submission pipelines processing 500+ daily requests",
        "Refactored Selenium workflows decreasing execution duration by 40%"
      ],
      badges: ["Python", "Selenium", "Data Automation", "Reverse Engineering"]
    }
  ];

  const skillMatrix = {
    ai: [
      { name: "RAG Architectures", icon: <Bot className="text-emerald-400" />, level: "Specialist" },
      { name: "Local LLMs / Ollama", icon: <Cpu className="text-purple-400" />, level: "Advanced" },
      { name: "Machine Learning (ML)", icon: <Terminal className="text-blue-400" />, level: "Advanced" },
      { name: "Deep Learning (DL)", icon: <SiPytorch className="text-red-500" />, level: "Advanced" },
      { name: "LangChain / LlamaIndex", icon: <Bot className="text-amber-400" />, level: "Advanced" },
      { name: "Vector DBs (Chroma/FAISS)", icon: <Layers className="text-cyan-400" />, level: "Advanced" },
      { name: "Embeddings & Chunking", icon: <Sparkles className="text-yellow-400" />, level: "Advanced" },
      { name: "PyTorch & NumPy", icon: <SiPytorch className="text-orange-500" />, level: "Proficient" },
    ],
    frontend: [
      { name: "React 19", icon: <SiReact className="text-cyan-400" />, level: "Expert" },
      { name: "Next.js 15", icon: <SiNextdotjs className="text-foreground" />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: "Expert" },
      { name: "React Native", icon: <SiReact className="text-cyan-400" />, level: "Advanced" },
      { name: "Tailwind CSS v4", icon: <SiTailwindcss className="text-sky-400" />, level: "Expert" },
      { name: "Shadcn UI", icon: <SiShadcnui className="text-foreground" />, level: "Expert" },
      { name: "Redux & React Query", icon: <SiRedux className="text-purple-400" />, level: "Advanced" },
      { name: "Figma (UI/UX)", icon: <SiFigma className="text-pink-400" />, level: "Advanced" },
    ],
    backend: [
      { name: "Python", icon: <SiPython className="text-blue-400" />, level: "Expert" },
      { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-500" />, level: "Advanced" },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: "Advanced" },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" />, level: "Advanced" },
      { name: "PHP", icon: <SiPhp className="text-purple-400" />, level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: "Advanced" },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: "Advanced" },
      { name: "Redis", icon: <SiRedis className="text-red-500" />, level: "Proficient" },
      { name: "REST APIs & WebSockets", icon: <SiSocketdotio className="text-foreground" />, level: "Expert" },
    ],
    devops: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" />, level: "Advanced" },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" />, level: "Proficient" },
      { name: "CI/CD Pipelines", icon: <Terminal className="text-foreground" />, level: "Advanced" },
      { name: "Linux Administration", icon: <SiLinux className="text-foreground" />, level: "Advanced" },
      { name: "Vercel & Cloud Deploy", icon: <SiVercel className="text-foreground" />, level: "Expert" },
      { name: "Git Version Control", icon: <SiGit className="text-orange-500" />, level: "Expert" },
    ],
    automation: [
      { name: "Selenium", icon: <SiSelenium className="text-green-400" />, level: "Expert" },
      { name: "BeautifulSoup", icon: <SiPython className="text-blue-400" />, level: "Expert" },
      { name: "Scrapy", icon: <Terminal className="text-emerald-400" />, level: "Advanced" },
      { name: "CAPTCHA Resolution", icon: <ShieldCheck className="text-amber-400" />, level: "Specialist" },
      { name: "Jest & Testing", icon: <SiJest className="text-red-500" />, level: "Advanced" },
    ]
  };

  const education = [
    {
      degree: "State Engineering Degree in Artificial Intelligence & Data Science",
      institution: "National Higher School of AI and Data Sciences (ENSIASD)",
      period: "2024 - Present",
      location: "Taroudant, Morocco",
      status: "In Progress (Final Cycle)",
      badge: "Master's Level Engineering",
      focus: "Distributed Systems, Deep Learning & Neural Architectures, Machine Learning Engineering, Cloud Infrastructure",
      highlights: [
        "Advanced research in Retrieval-Augmented Generation (RAG) and Local LLM systems",
        "Deep exploration of neural networks, mathematical optimization, and computer vision",
        "Cloud-native microservices architecture and distributed data processing"
      ]
    },
    {
      degree: "University Diploma of Technology (DUT) in Computer Science",
      institution: "Higher School of Technology (EST Sidi Bennour - Chouaib Doukkali University)",
      period: "2022 - 2024",
      location: "Sidi Bennour, Morocco",
      status: "Graduated with Honors",
      badge: "Ranked Top Tier",
      focus: "Software Engineering, Relational Database Modeling (SQL/UML), Algorithms & Complexity, Web & Mobile Architectures",
      highlights: [
        "Comprehensive foundations in data structures, algorithms, and OOP paradigm",
        "Full-stack web application development and database management systems",
        "Graduated with distinction and academic honors"
      ]
    },
    {
      degree: "Baccalaureate in Mathematical & Physical Sciences",
      institution: "National High School Jaafar El Fassi",
      period: "2022",
      location: "Casablanca, Morocco",
      status: "Graduated with Distinction",
      badge: "Scientific Honors",
      focus: "Advanced Mathematics, Analytical Physics, Technical Sciences",
      highlights: [
        "Rigorous foundation in calculus, linear algebra, and mechanics",
        "Strong analytical and scientific problem-solving background"
      ]
    }
  ];

  return (
    <section id="about" className="py-28 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <Sparkles className="w-3.5 h-3.5 text-foreground" />
          <span>Background & Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-foreground">
          Engineering Craftsmanship & <span className="shimmer-text">Track Record</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Combining deep AI, RAG & Machine Learning expertise with full-stack software architecture and high-throughput automation.
        </p>
      </motion.div>

      {/* Bento Grid Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12">
        {/* Profile & Story Card (7 Cols) */}
        <motion.div
          className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                <img
                  src="/NoureddineDRIOUECH.webp"
                  alt="Noureddine Driouech"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Noureddine Driouech
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  AI & Full-Stack Software Engineer
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                  <Globe2 className="w-3.5 h-3.5" /> Casablanca, Morocco · Open Worldwide
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I specialize in bridging <strong className="text-foreground font-semibold">Generative AI / Local RAG systems</strong> with <strong className="text-foreground font-semibold">resilient SaaS web & mobile architectures</strong>. Currently engineering local RAG applications at <strong className="text-foreground font-semibold">FEV North Africa</strong>, with a proven track record delivering SaaS at <strong className="text-foreground font-semibold">Garista</strong> and mobile at <strong className="text-foreground font-semibold">VNB-IT France</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-foreground border border-border">
                Local RAG & LLMs
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-foreground border border-border">
                React & Next.js SaaS
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-foreground border border-border">
                React Native Mobile
              </span>
            </div>

            <a
              href="/CV%20Noureddine%20DRIOUECH%20.pdf"
              download="CV Noureddine DRIOUECH"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-foreground dark:bg-white dark:text-black hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full CV</span>
            </a>
          </div>
        </motion.div>

        {/* Quantified Metrics Bento Card (5 Cols) */}
        <motion.div
          className="lg:col-span-5 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            { label: "AI & Software Experience", value: "3+ Yrs", sub: "Production & RAG", icon: Bot, color: "text-emerald-500" },
            { label: "Data Extraction", value: "50k+/mo", sub: "Catalog records", icon: TrendingUp, color: "text-blue-500" },
            { label: "Production Deployments", value: "10+", sub: "Web, Mobile, AI", icon: Cpu, color: "text-purple-500" },
            { label: "Automation Precision", value: "92%", sub: "Resolution rate", icon: ShieldCheck, color: "text-amber-500" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-5 flex flex-col justify-between space-y-2 hover:border-foreground/20 transition-all"
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-foreground mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-muted-foreground">{stat.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Deep Dive Interactive Tabs (Experience, Skills, Education) */}
      <motion.div
        className="rounded-2xl glass-panel p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Tab Selector Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-muted/60 rounded-xl mb-8 max-w-md mx-auto">
          {[
            { key: "experience", label: "Experience", icon: Briefcase },
            { key: "skills", label: "Skills Matrix", icon: Cpu },
            { key: "education", label: "Education", icon: GraduationCap },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === tab.key
                  ? "bg-background text-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-10"
            >
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-3 last:pb-0"
                >
                  <span className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    idx === 0 ? "bg-emerald-500 border-emerald-300 animate-pulse" : "bg-background border-foreground"
                  } inline-block`} />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-muted-foreground font-normal">·</span>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                        </a>
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded bg-muted text-foreground text-[10px] font-semibold">{exp.type}</span>
                      </p>
                    </div>

                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                      {exp.highlight}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                  <ul className="space-y-1.5 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-muted/60 text-muted-foreground border border-border/40"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Category selector */}
              <div className="flex flex-wrap gap-2 justify-center pb-2">
                {[
                  { key: "ai", label: "🤖 AI, RAG & Machine Learning" },
                  { key: "frontend", label: "💻 Frontend & Mobile" },
                  { key: "backend", label: "⚙️ Backend & Systems" },
                  { key: "devops", label: "☁️ DevOps & Cloud" },
                  { key: "automation", label: "⚡ Automation & Scraping" },
                ].map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveSkillCategory(cat.key as any)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      activeSkillCategory === cat.key
                        ? "bg-foreground text-background shadow-sm"
                        : "glass-pill text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Grid of skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skillMatrix[activeSkillCategory].map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-background/50 border border-border/60 flex items-center justify-between gap-2 hover:border-foreground/20 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg flex-shrink-0">{skill.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono font-medium">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl glass-panel border border-border/70 space-y-4 hover:border-foreground/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
                          {edu.badge}
                        </span>
                        <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {edu.status}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{edu.degree}</span>
                      </h4>
                      <p className="text-sm font-semibold text-primary/90">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {edu.location} · <Calendar className="w-3 h-3 ml-1" /> {edu.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-medium border-t border-border/50 pt-3">
                    <strong className="text-foreground">Core Focus:</strong> {edu.focus}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}