import React from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Download,
  Bot,
  Layers,
  Sparkles,
  MapPin
} from "lucide-react";
import { HeroStars } from "@/components/ui/stars";
import { 
  SiReact, 
  SiNextdotjs, 
  SiPython, 
  SiTypescript 
} from "react-icons/si";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Upwork = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.787.025-.1c.254-1.074.406-2.153.406-3.233V4.526h2.893v3.286c0 .823 0 1.679-.153 2.624h.026c.712-.588 1.606-1.025 2.654-1.025 1.872 0 3.36 1.482 3.36 3.744 0 2.288-1.488 3.744-3.36 3.744h-.005zM3.432 13.16c0-2.066 1.566-2.465 2.382-2.465.814 0 2.38.399 2.38 2.465 0 1.536-.74 2.466-2.38 2.466s-2.382-.93-2.382-2.466zm2.382-7.54C2.617 5.62 0 7.21 0 11.48s2.488 5.86 5.814 5.86c1.642 0 3.13-.693 4.024-1.788.15-.176.26-.367.364-.566h.03c.022.26.043.523.064.785h2.832v-4.48c0-1.247-.074-2.43-.595-3.456-.543-1.036-1.538-1.643-2.87-1.643-1.305 0-2.267.569-2.998 1.447l-.388 1.626c.668-.893 1.486-1.567 2.583-1.567.788 0 1.306.381 1.53 1.102.275.815.285 1.771.285 2.625v.251c-.508 1.895-1.977 2.934-3.878 2.934-1.13 0-2.032-.365-2.688-1.132-.93-1.078-1.144-2.352-1.144-3.769v-.076c-.002-2.797 1.325-4.542 3.814-4.542 1.227 0 2.35.5 3.149 1.416l.785-2.122c-.593-.649-1.47-1.466-3.19-1.466z"/>
  </svg>
);

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full max-w-7xl mx-auto flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient background atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-emerald-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[120px] opacity-70" />
      </div>

      <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Editorial Hero Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability Radar Beacon */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/30 bg-emerald-500/[0.05] dark:bg-emerald-500/[0.08]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-pulse inline-block" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300 tracking-wide">
              Available for Software & AI Engineering Projects
            </span>
          </div>

          {/* Luxury Main Display Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-[4.4rem] font-extrabold tracking-[-0.04em] leading-[1.08] text-foreground">
              Architecting <br />
              <span className="shimmer-text">AI & Full-Stack Systems</span>
            </h1>
          </div>

          {/* Value Proposition Editorial Statement */}
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground font-normal leading-relaxed max-w-xl">
            Hi, I’m <span className="text-foreground font-semibold">Noureddine Driouech</span> — a Software Engineer specializing in building scalable web platforms, local RAG / AI applications, and high-performance mobile software.
          </p>

          {/* Action Triggers & Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 rounded-full font-medium text-xs sm:text-sm text-white bg-foreground dark:bg-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 rounded-full font-medium text-xs sm:text-sm text-foreground bg-muted/80 hover:bg-muted border border-border/80 hover:border-foreground/20 backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
            >
              <span>Get In Touch</span>
            </a>

            <a
              href="/CV%20Noureddine%20DRIOUECH%20.pdf"
              download="CV Noureddine DRIOUECH"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground glass-pill transition-colors w-full sm:w-auto"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Network Glass Links */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/70 font-semibold mr-1">
              Connect:
            </span>
            {[
              { label: "GitHub Profile", href: "https://github.com/NoureddineDRIOUECH", icon: Github },
              { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/noureddinedriouech/", icon: Linkedin },
              { label: "Upwork Profile", href: "https://www.upwork.com/freelancers/~01c6fba5436d52831a", icon: Upwork },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Clean Editorial Portrait & Tech Stack Showcase */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-sm">
            <HeroStars />

            {/* Ambient Portrait Card */}
            <div className="relative z-10 rounded-3xl glass-panel p-6 sm:p-7 shadow-2xl border border-white/10 dark:border-white/[0.08] flex flex-col items-center text-center space-y-5">
              {/* Portrait Image with subtle frame */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-border/80 shadow-xl group">
                <img
                  src="/NoureddineDRIOUECH.webp"
                  alt="Noureddine Driouech"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  width={192}
                  height={192}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Identity & Current Focus */}
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-foreground">Noureddine Driouech</h2>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>AI & Software Engineer @ FEV North Africa</span>
                </p>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 pt-0.5">
                  <MapPin className="w-3 h-3" aria-hidden="true" /> Casablanca, Morocco
                </p>
              </div>

              {/* Core Stack Badges */}
              <div className="w-full pt-3 border-t border-border/60">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/80 mb-2">
                  Core Technologies
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {[
                    { name: "Local RAG", icon: <Bot className="text-emerald-400" aria-hidden="true" /> },
                    { name: "Python", icon: <SiPython className="text-blue-400" aria-hidden="true" /> },
                    { name: "React 19", icon: <SiReact className="text-cyan-400" aria-hidden="true" /> },
                    { name: "Next.js 15", icon: <SiNextdotjs className="text-foreground" aria-hidden="true" /> },
                    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" aria-hidden="true" /> },
                  ].map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-background/60 border border-border/60"
                    >
                      <span className="text-xs" aria-hidden="true">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}