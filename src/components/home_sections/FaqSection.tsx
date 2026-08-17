import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Bot, Sparkles } from "lucide-react";

export const homeFaqs = [
  {
    question: "Who is Noureddine Driouech?",
    answer:
      "Noureddine Driouech (also known as Nour Driouech or Driouech Noureddine) is a Moroccan AI Software Engineer and Full-Stack Systems Architect based in Casablanca, Morocco. He specializes in designing local RAG (Retrieval-Augmented Generation) architectures, high-performance SaaS platforms in React/Next.js, and automated web data pipelines."
  },
  {
    question: "What technologies and AI frameworks does Noureddine Driouech specialize in?",
    answer:
      "Noureddine specializes in Generative AI (LangChain, LlamaIndex, Local LLMs with Ollama/vLLM, FAISS/Chroma Vector DBs, PyTorch), Modern Web & SaaS (React 19, Next.js 15, TypeScript, Tailwind CSS, Redux Toolkit, PostgreSQL), Cross-Platform Mobile (React Native, Expo), and Web Automation (Python, Selenium, Scrapy)."
  },
  {
    question: "What is Noureddine Driouech's experience with Local RAG and LLMs?",
    answer:
      "At FEV North Africa, Noureddine architected private offline Retrieval-Augmented Generation (RAG) applications that index technical automotive and engineering specifications into local vector databases with zero external data leakage, using open-weights LLMs and hybrid semantic search."
  },
  {
    question: "What notable projects has Noureddine Driouech built?",
    answer:
      "Key projects include: 1) Companions AI — a full-stack conversational platform with streaming token responses and custom AI personas. 2) Garista — a restaurant management SaaS platform presented at GITEX Africa 2024. 3) Fast Food Mobile App — a React Native cross-platform ordering system. 4) Web Automation Suite — a Python ETL pipeline extracting 50k+ records monthly with 92% CAPTCHA resolution."
  },
  {
    question: "Is Noureddine Driouech available for software engineering roles or consulting?",
    answer:
      "Yes, Noureddine Driouech is available for full-time engineering positions, high-impact AI/software contract roles, and architecture consulting for global companies and forward-thinking startups."
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
