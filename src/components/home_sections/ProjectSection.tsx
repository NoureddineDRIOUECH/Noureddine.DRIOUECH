import React, { useState, type JSX } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiNextdotjs,
  SiSelenium,
  SiPhp,
  SiHtml5,
  SiCss,
  SiShadcnui,
  SiScrapy,
  SiAppwrite,
  SiStripe,
  SiRedux
} from "react-icons/si";

export function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "SaaS & Web", "Mobile Apps", "Automation & AI"];

  const projects = [
    {
      id: "garista",
      title: "Garista SaaS Platform",
      category: "SaaS & Web",
      badge: "Flagship Enterprise",
      metric: "GITEX Africa 2024",
      description:
        "Led frontend engineering of a restaurant management & analytics platform. Built high-throughput real-time dashboards reducing interface latency by 35%.",
      impact: "Presented at GITEX Africa & UN World Forum on Gastronomy Tourism",
      image: "garista_team.jpg",
      tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI", "Redux", "Stripe"],
      liveUrl: "https://garista.com",
      githubUrl: "",
      featured: true,
    },
    {
      id: "companions-ai",
      title: "Companions AI",
      category: "Automation & AI",
      badge: "AI Ecosystem",
      metric: "Personalized AI",
      description:
        "A platform where you can create, manage, and interact with personalized AI-powered companions designed to help you learn and explore various subjects.",
      impact: "Interactive conversational AI with streaming responses and custom persona configuration",
      image: "companions.webp",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Figma", "UI/UX", "Git"],
      liveUrl: "https://companions-nine.vercel.app/",
      githubUrl: "https://github.com/NoureddineDRIOUECH/Companions",
      featured: true,
    },
    {
      id: "fast-food",
      title: "Fast Food Mobile Application",
      category: "Mobile Apps",
      badge: "Cross-Platform Mobile",
      metric: "Fluid Gestures",
      description:
        "Cross-platform mobile ordering application with instant menu discovery, real-time cart state management, and backend authentication via Appwrite.",
      impact: "Engineered with React Native & Expo for smooth 60fps animations across iOS & Android",
      image: "fastFoodMobileApp.webp",
      tags: ["React Native", "Appwrite", "Figma", "Git"],
      liveUrl: "",
      githubUrl: "https://github.com/NoureddineDRIOUECH/Fast-Food.git",
      featured: false,
    },
    {
      id: "automation-engine",
      title: "Data Scraping & Automation Suite",
      category: "Automation & AI",
      badge: "High-Throughput ETL",
      metric: "50k+ Records / Mo",
      description:
        "Automated data extraction and pipeline suite capable of harvesting 50,000+ catalog listings monthly with 92% CAPTCHA solving accuracy.",
      impact: "Cut manual data entry workflows by 80% for e-commerce client operations",
      image: "dataScraping.webp",
      tags: ["Python", "Selenium", "Scrapy", "Automation"],
      liveUrl: "",
      githubUrl: "https://github.com/NoureddineDRIOUECH/-wordpress-product-automation",
      featured: false,
    },
  ];

  const tagIcons: Record<string, JSX.Element> = {
    JavaScript: <SiJavascript className="text-yellow-400" />,
    HTML: <SiHtml5 className="text-orange-500" />,
    CSS: <SiCss className="text-blue-500" />,
    PHP: <SiPhp className="text-purple-400" />,
    Selenium: <SiSelenium className="text-green-400" />,
    "Next.js": <SiNextdotjs className="text-foreground" />,
    "Shadcn UI": <SiShadcnui className="text-foreground" />,
    Scrapy: <SiScrapy className="text-emerald-500" />,
    TypeScript: <SiTypescript className="text-blue-400" />,
    React: <SiReact className="text-cyan-400" />,
    "React Native": <SiReact className="text-cyan-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    Git: <SiGit className="text-orange-500" />,
    MySQL: <SiMysql className="text-blue-500" />,
    Python: <SiPython className="text-blue-400" />,
    Stripe: <SiStripe className="text-indigo-400" />,
    Redux: <SiRedux className="text-purple-500" />,
    Figma: <SiFigma className="text-pink-400" />,
    Appwrite: <SiAppwrite className="text-red-400" />,
    Automation: <TbSettingsAutomation className="text-emerald-400" />,
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => {
          if (activeFilter === "SaaS & Web") return p.category === "SaaS & Web";
          if (activeFilter === "Mobile Apps") return p.category === "Mobile Apps";
          if (activeFilter === "Automation & AI") return p.category === "Automation & AI";
          return true;
        });

  return (
    <section id="work" className="py-28 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <Layers className="w-3.5 h-3.5 text-foreground" />
          <span>Selected Work & Systems</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-foreground">
          Engineered for <span className="shimmer-text">Scale & Reliability</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          A showcase of production SaaS platforms, AI-driven applications, high-throughput web automation, and cross-platform mobile software.
        </p>

        {/* Filter Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-foreground text-background shadow-md scale-105"
                  : "glass-pill text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Bento & Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`group flex flex-col rounded-2xl glass-panel overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:shadow-2xl ${
                project.featured && idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/20 dark:bg-black/40 border-b border-border/60 flex items-center justify-center p-2">
                <img
                  src={encodeURI(`/${project.image}`)}
                  alt={project.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-background/90 backdrop-blur-md text-foreground border border-border/80 shadow-sm">
                    {project.badge}
                  </span>
                </div>

                {/* Metric Overlay */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/90 text-white shadow-sm flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {project.metric}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/[0.06] p-2.5 rounded-xl border border-emerald-500/10">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span className="line-clamp-1">{project.impact}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2 border-t border-border/60">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-medium bg-muted/60 text-muted-foreground border border-border/40"
                      >
                        {tagIcons[tag] && <span className="flex-shrink-0" aria-hidden="true">{tagIcons[tag]}</span>}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-foreground dark:bg-white dark:text-black hover:opacity-90 active:scale-95 transition-all"
                      >
                        <span>Live Platform</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-foreground glass-pill hover:bg-muted active:scale-95 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}