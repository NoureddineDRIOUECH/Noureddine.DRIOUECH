import React from "react";
import { ArrowUp, Sparkles, MapPin } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { SiUpwork as Upwork } from "react-icons/si";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative border-t border-border/60">
      {/* Subtle ambient backlight */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-gradient-to-t from-primary/10 via-emerald-500/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="flex flex-col space-y-10">
        {/* Upper Footer Row: Bold WOW Brand Display */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-border/40">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-pulse inline-block" />
              <span>Available for Software & AI Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] shimmer-text">
              Noureddine Driouech
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
              Architecting intelligent AI platforms, full-stack SaaS ecosystems, and automated data infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl glass-pill text-xs font-mono text-muted-foreground border border-border/60">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Casablanca, Morocco · GMT+1</span>
          </div>
        </div>

        {/* Middle Row: Navigation Links & Social Media */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-xs sm:text-sm font-medium text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#work" className="hover:text-foreground transition-colors">
              Selected Works
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About & Experience
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/resume" className="hover:text-foreground transition-colors">
              Resume View
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/NoureddineDRIOUECH", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/noureddinedriouech/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.upwork.com/freelancers/~01c6fba5436d52831a", icon: Upwork, label: "Upwork" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:scale-110 active:scale-95 transition-all"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:scale-110 active:scale-95 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Lower Row: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/80 pt-4 border-t border-border/40 font-mono">
          <p>© {new Date().getFullYear()} Noureddine Driouech. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built by Noureddine Driouech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}