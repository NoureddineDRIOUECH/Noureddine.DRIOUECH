"use client";
import { motion } from "framer-motion";
import { Github, Linkedin ,Instagram} from "lucide-react";
import { ProjectButton } from "@/components/ui/glow-effect-button.tsx";
import { TextLoop } from "@/components/ui/text-loop";
import { HeroStars } from "@/components/ui/stars";
import {SparklesText} from "@/components/ui/sparkles-text.tsx";
import Magnet from "@/ui/Animations/Magnet/Magnet.tsx";

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
                        initial={{ opacity: 0, y: 50 }}
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
                            <SparklesText className="text-lg md:text-2xl text-muted-foreground max-w-full">Software Enginner</SparklesText>

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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <HeroStars />
                            <div className="relative z-10">
                                <img
                                    src="/mainIcons.svg"
                                    alt="Light mode illustration"
                                    className="w-full h-auto object-contain mx-auto block dark:hidden"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                                <img
                                    src="/mainIconsdark.svg"
                                    alt="Dark mode illustration"
                                    className="w-full h-auto object-contain mx-auto hidden dark:block"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}