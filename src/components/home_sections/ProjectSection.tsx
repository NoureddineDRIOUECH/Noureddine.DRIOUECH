"use client";

import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
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
    SiGooglemaps,
    SiSocketdotio,
    SiStripe,
} from "react-icons/si";

export function ProjectSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Web", "Mobile", "Scripts"];

    const projects = [
        {
            id: 1,
            title: "Real-Time Vehicle Tracking System",
            description: "Real-time fleet monitoring platform with GPS tracking and smart alerts.",
            image: "Real-Time Vehicle Tracking System.jpg",
            category: "Web",
            tags: ["React", "Node.js", "MongoDB", "Socket.io"],
            liveUrl: "#",
            githubUrl: "https://github.com/Zakaria12e/vehicle-tracker-sys-frontend",
        },
        {
            id: 2,
            title: "Travel Experience App",
            description: "Mobile app for discovering and booking unique travel experiences.",
            image: "coming-soon.jpg",
            category: "Mobile",
            tags: ["React", "Framer Motion", "Google Maps API"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            id: 3,
            title: "Admin Dashboard UI",
            description: "Comprehensive dashboard with data visualization and user management.",
            image: "coming-soon.jpg",
            category: "Scripts",
            tags: ["Figma", "UI/UX", "Design System"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            id: 4,
            title: "Creative Social Platform",
            description: "Network for creative professionals to showcase their work.",
            image: "coming-soon.jpg",
            category: "Web",
            tags: ["React", "GraphQL", "Socket.io"],
            liveUrl: "#",
            githubUrl: "#",
        },
    ];

    const tagIcons: Record<string, JSX.Element> = {
        JavaScript: <SiJavascript className="text-yellow-400" />,
        TypeScript: <SiTypescript className="text-blue-500" />,
        React: <SiReact className="text-cyan-400" />,
        "Node.js": <SiNodedotjs className="text-green-600" />,
        MongoDB: <SiMongodb className="text-green-500" />,
        TailwindCSS: <SiTailwindcss className="text-sky-400" />,
        Git: <SiGit className="text-orange-500" />,
        "Framer Motion": (
            <img
                src="/framerMotion.svg"
                alt="Framer Motion"
                className="w-4 h-4"
            />
        ),
        MySQL: <SiMysql className="text-blue-700" />,
        Python: <SiPython className="text-blue-600" />,
        GraphQL: <SiMongodb className="text-pink-500" />,
        Stripe: <SiStripe className="text-indigo-500" />,
        "Google Maps API": <SiGooglemaps className="text-red-500" />,
        "Socket.io": <SiSocketdotio className="text-black dark:text-white" />,
        Figma: <SiFigma className="text-pink-600" />,
        "UI/UX": <SiTailwindcss className="text-sky-400" />,
        "Design System": <SiTailwindcss className="text-sky-400" />,
    };

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(project => project.category === activeFilter);

    return (
        <section id="work" className="py-24 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 sm:px-6">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="mb-4 px-4 py-1 text-sm" variant="secondary">
                        Projects
                    </Badge>
                    <h2 className="text-3xl drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)] sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Featured Projects
                    </h2>

                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        Explore my recent work and discover how I bring ideas to life through code and design.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? "default" : "outline"}
                                size="sm"
                                className="rounded-full transition-all"
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="flex"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="flex flex-col h-full dark:bg-background/5 backdrop-blur-sm dark:border-white/10 border-neutral-300 shadow-lg transition-all duration-300 hover:shadow-xl">
                                <CardContent className="flex-1 px-5">
                                    <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                                        <img
                                            src={`/${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.src = "/coming-soon.jpg";
                                                e.currentTarget.alt = "Coming soon";
                                            }}
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold mt-4 line-clamp-1">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 h-12">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-background/30 backdrop-blur-sm border-white/10 flex items-center gap-1 text-xs font-normal px-2 py-1"
                                            >
                        <span className="flex-shrink-0">
                          {tagIcons[tag] || null}
                        </span>
                                                <span className="truncate max-w-[70px]">{tag}</span>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="px-5 pb-2 gap-2 flex-wrap">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="flex-1 min-w-[120px] border-neutral-800 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-800 dark:text-white"
                                        asChild
                                        disabled={project.githubUrl === "#"}
                                    >
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 justify-center"
                                        >
                                            <Github className="h-4 w-4 flex-shrink-0" />
                                            <span>Code</span>
                                        </a>
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="flex-1 min-w-[120px] border-neutral-800 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-800 dark:text-white"
                                        asChild
                                        disabled={project.liveUrl === "#"}
                                    >
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 justify-center"
                                        >
                                            <ExternalLink className="h-4 w-4 flex-shrink-0" />
                                            <span>Live Demo</span>
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 group border-neutral-800 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/5"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
}