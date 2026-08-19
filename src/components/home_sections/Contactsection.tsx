import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { toast } from "sonner";
import { 
  Mail, 
  Copy, 
  Check, 
  Globe2, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText("nourddinedriouech@gmail.com");
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Encrypting and transmitting message...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/nourddinedriouech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _captcha: "false",
          _template: "table",
          _honey: "",
        }),
      });

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        toast.success("Message delivered successfully! I will reply within 24 hours.", {
          id: toastId,
          duration: 5000,
        });
        reset();
      } else {
        toast.error("Transmission failed. Please email directly at nourddinedriouech@gmail.com", {
          id: toastId,
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("Failed to transmit. Please email directly at nourddinedriouech@gmail.com", {
        id: toastId,
        duration: 5000,
      });
    }
  };

  return (
    <section id="contact" className="py-28 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Section Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <MessageSquare className="w-3.5 h-3.5 text-foreground" />
          <span>Executive Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-foreground">
          Let’s Build Something <span className="shimmer-text">Extraordinary</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Have an upcoming product, SaaS architecture, or automation system? Reach out directly or send a message below.
        </p>
      </motion.div>

      {/* 2-Column Consultation Studio Layout */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Channels & Telemetry (5 Cols) */}
        <motion.div
          className="lg:col-span-5 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Direct Email Card */}
          <div className="p-6 rounded-2xl glass-panel space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Direct Email
                  </div>
                  <div className="text-sm sm:text-base font-bold text-foreground">
                    nourddinedriouech@gmail.com
                  </div>
                </div>
              </div>

              <button
                onClick={copyToClipboard}
                className="p-2.5 rounded-xl glass-pill text-muted-foreground hover:text-foreground active:scale-95 transition-all"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> &lt;24h Response Time SLA
              </span>
              <span>Encrypted</span>
            </div>
          </div>

          {/* Location & Time Zone Card */}
          <div className="p-6 rounded-2xl glass-panel space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Globe2 className="w-4 h-4 text-blue-400" />
                <span>Casablanca, Morocco</span>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                GMT+1 Timezone
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Working globally across European (CET), UK (GMT), and US Eastern (EST) timezones with seamless async and sync collaboration.
            </p>
          </div>

          {/* Social Profiles Bento */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href="https://www.linkedin.com/in/noureddinedriouech/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-4 rounded-xl glass-panel flex flex-col items-center justify-center gap-2 text-center hover:border-foreground/30 transition-all group"
            >
              <FiLinkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
              <span className="text-xs font-semibold text-foreground">LinkedIn</span>
            </a>

            <a
              href="https://github.com/NoureddineDRIOUECH"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-4 rounded-xl glass-panel flex flex-col items-center justify-center gap-2 text-center hover:border-foreground/30 transition-all group"
            >
              <FiGithub className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
              <span className="text-xs font-semibold text-foreground">GitHub</span>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01c6fba5436d52831a"
              target="_blank"
              rel="noreferrer"
              aria-label="Upwork Profile"
              className="p-4 rounded-xl glass-panel flex flex-col items-center justify-center gap-2 text-center hover:border-foreground/30 transition-all group"
            >
              <SiUpwork className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
              <span className="text-xs font-semibold text-foreground">Upwork</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: High-End Contact Form (7 Cols) */}
        <motion.div
          className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 shadow-2xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Alex Morgan"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/80 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/20 transition-all"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="alex@company.com"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/80 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/20 transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="E.g., SaaS Platform Development / Automation Engine"
                {...register("subject")}
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/80 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/20 transition-all"
              />
              {errors.subject && (
                <p className="text-xs text-red-500 font-medium">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project Details & Scope
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your goals, timeline, and key requirements..."
                {...register("message")}
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/80 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/20 transition-all resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-foreground dark:bg-white dark:text-black hover:opacity-90 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-black/10 dark:shadow-white/5 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Transmitting...</span>
                </div>
              ) : (
                <>
                  <span>Send Direct Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
