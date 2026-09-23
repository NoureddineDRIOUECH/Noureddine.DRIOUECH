import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Bot, Sparkles } from "lucide-react";

export const homeFaqs = [
  {
    question: "Who is Noureddine Driouech?",
    answer:
      "Noureddine Driouech (also known as Nour Driouech or Driouech Noureddine) is a Moroccan AI Software Engineer and Full-Stack Systems Architect based in Casablanca, Morocco. He specializes in private Local RAG architectures, high-performance SaaS platforms (Next.js, Nest.js, Spring Boot, React Native), and DevOps automation. He is currently Open to Work for full-time engineering roles and high-impact projects worldwide."
  },
  {
    question: "What technologies and frameworks does Noureddine Driouech specialize in?",
    answer:
      "Noureddine's core technology stack includes: AI & Local RAG (Ollama, ChromaDB, BGE-M3 / BM25 Hybrid Search, LangChain, LlamaIndex, FastAPI), Core Languages (Python, TypeScript, Java), Backend & DevOps (Next.js, Nest.js, Spring Boot, Node.js, Docker, Kubernetes, CI/CD, PostgreSQL, Redis), Frontend & Mobile (React 19, Next.js 15, React Native / Expo, Tailwind CSS v4, Shadcn UI), and Web Automation (Selenium, BeautifulSoup, Scrapy)."
  },
  {
    question: "What is Noureddine Driouech's experience with Local RAG and LLMs?",
    answer:
      "At FEV North Africa, Noureddine architected an enterprise-grade private offline Retrieval-Augmented Generation (RAG) platform with zero external cloud data leakage. The production architecture integrates: Ollama (Open-Weights LLM) + ChromaDB (Vector Store) + Hybrid Semantic Search (BGE-M3 dense embeddings / BM25 lexical search) + FastAPI backend + Next.js UI."
  },
  {
    question: "What notable projects has Noureddine Driouech built?",
    answer:
      "Key projects include: 1) Companions AI — a full-stack Web & AI SaaS conversational platform featuring custom AI personas, streaming token responses, and persistent multi-tenant chat. 2) Garista — a restaurant management SaaS platform presented at GITEX Africa 2024. 3) Fast Food Mobile App — a cross-platform React Native ordering system. 4) Data Scraping & Automation Suite — a high-throughput Python ETL pipeline harvesting 50k+ records monthly with 92% CAPTCHA resolution."
  },
  {
    question: "Is Noureddine Driouech available for software engineering roles or consulting?",
    answer:
      "Yes, Noureddine Driouech is actively Open to Work and available for full-time AI Software Engineering, Full-Stack, and Backend Developer roles, as well as high-impact architecture consulting worldwide."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-primary">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Common Inquiries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Direct insights into background, technical specializations, AI architecture work, and engagement availability.
        </p>
      </div>

      <div className="space-y-4">
        {homeFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl glass-panel border border-border/70 overflow-hidden transition-all duration-300 hover:border-foreground/20"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-foreground focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full glass-pill flex items-center justify-center text-xs font-mono text-primary flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-foreground" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
