import { motion } from "motion/react";
import { ProjectButton } from "@/components/ui/glow-effect-button.tsx";
import { TextLoop } from "@/components/ui/text-loop";
import { HeroStars } from "@/components/ui/stars";
import {SparklesText} from "@/components/ui/sparkles-text.tsx";
import Magnet from "@/ui/Animations/Magnet/Magnet.tsx";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const Upwork = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.787.025-.1c.254-1.074.406-2.153.406-3.233V4.526h2.893v3.286c0 .823 0 1.679-.153 2.624h.026c.712-.588 1.606-1.025 2.654-1.025 1.872 0 3.36 1.482 3.36 3.744 0 2.288-1.488 3.744-3.36 3.744h-.005zM3.432 13.16c0-2.066 1.566-2.465 2.382-2.465.814 0 2.38.399 2.38 2.465 0 1.536-.74 2.466-2.38 2.466s-2.382-.93-2.382-2.466zm2.382-7.54C2.617 5.62 0 7.21 0 11.48s2.488 5.86 5.814 5.86c1.642 0 3.13-.693 4.024-1.788.15-.176.26-.367.364-.566h.03c.022.26.043.523.064.785h2.832v-4.48c0-1.247-.074-2.43-.595-3.456-.543-1.036-1.538-1.643-2.87-1.643-1.305 0-2.267.569-2.998 1.447l-.388 1.626c.668-.893 1.486-1.567 2.583-1.567.788 0 1.306.381 1.53 1.102.275.815.285 1.771.285 2.625v.251c-.508 1.895-1.977 2.934-3.878 2.934-1.13 0-2.032-.365-2.688-1.132-.93-1.078-1.144-2.352-1.144-3.769v-.076c-.002-2.797 1.325-4.542 3.814-4.542 1.227 0 2.35.5 3.149 1.416l.785-2.122c-.593-.649-1.47-1.466-3.19-1.466z"/>
  </svg>
);

export function HeroSection() {
    return (
        <main>
            <section
                id="home"
                className="relative px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen flex items-center py-10"
            >
                <div className="container grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content - Left Column */}
                    <motion.div
                        className="space-y-6 md:space-y-8  order-1 mt-10 lg:mt-0"
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block whitespace-pre-wrap text-sm md:text-base rounded-full bg-transparent px-4 py-1.5 font-semibold text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700">
                            Hello, You, I'm{" "}
                            <TextLoop
                                transition={{
                                    type: "spring",
                                    stiffness: 900,
                                    damping: 80,
                                    mass: 10,
                                }}
                                variants={{
                                    initial: { y: 20, rotateX: 90, opacity: 0, filter: "blur(4px)" },
                                    animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
                                    exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" },
                                }}
                            >
                                <span>Engineer 🧑‍💻</span>
                                <span>Gamer 🎮</span>
                            </TextLoop>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)] leading-tight">
                            Noureddine DRIOUECH
                        </h1>

                        <p >
                            <SparklesText className="text-lg md:text-2xl text-muted-foreground max-w-full">Software Engineer</SparklesText>

                        </p>

                        <div className="flex justify-center items-center gap-6 pt-2">
                            <Magnet padding={50} disabled={false} magnetStrength={5}>


                            <ProjectButton />
                            </Magnet>

                            <div className="flex gap-6">
                                <motion.a
                                    href="https://github.com/NoureddineDRIOUECH"
                                    target="_blank"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    rel="noreferrer"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/noureddinedriouech/"
                                    target="_blank"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    rel="noreferrer"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </motion.a>
                                <motion.a
                                    href="https://www.upwork.com/freelancers/~01c6fba5436d52831a?mp_source=share"
                                    target="_blank"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    rel="noreferrer"
                                >
                                    <Upwork className="h-5 w-5" />
                                    <span className="sr-only">Upwork</span>
                                </motion.a>
                                <motion.a
                                    href="https://www.instagram.com/noureddine.driouech/"
                                    target="_blank"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    rel="noreferrer"
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Graphic - Right Column */}
                    <motion.div
                        className="relative flex justify-center order-2"
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <HeroStars />
                            <div className="relative z-10">
                            <picture>
                                <source srcSet="/mainIconsdark.svg" media="(prefers-color-scheme: dark)" />
                                <img
                                    src="/mainIcons.svg"
                                    alt="Illustration"
                                    className="w-full h-auto object-contain mx-auto"
                                    loading="eager"
                                    fetchPriority="high"
                                    width={400}
                                    height={400}
                                />
                            </picture>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}