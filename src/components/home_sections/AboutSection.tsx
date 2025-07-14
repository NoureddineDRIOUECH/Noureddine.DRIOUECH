"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Code, Palette, Download, Award, BookOpen, Briefcase, Lightbulb, Clock} from "lucide-react";
import { AboutStars } from "@/components/ui/stars";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiLaravel,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiSocketdotio,
    SiGit,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import {type JSX} from "react";

export function AboutSection() {
    const skills = [
        "JavaScript",
        "TypeScript",
        "Laravel",
        "React",
        "ShadCN UI",
        "Mysql",
        "Java",
        "Python",
        "Framer Motion",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
        "Git",
    ];

    const skillIcons: Record<string, JSX.Element> = {
        JavaScript: <SiJavascript className="text-yellow-400" />,
        TypeScript: <SiTypescript className="text-blue-500" />,
        Laravel: <SiLaravel className="text-red-500" />,
        React: <SiReact className="text-cyan-400" />,
        "ShadCN UI": (
            <img
                src="/shadcn.svg"
                alt="ShadCN UI"
                className="w-4 h-4 dark:hidden"
            />
        ),
        Mysql: <img src="/sql.png" alt="MySQL" className="w-4 h-4" />,
        Java: <img src="/java.png" alt="Java" className="w-4 h-4" />,
        Python: <img src="/py.png" alt="Python" className="w-4 h-4" />,
        "Framer Motion": <img src="/fm.svg" alt="Framer Motion" className="w-4 h-4" />,
        "Node.js": <SiNodedotjs className="text-green-600" />,
        Express: <SiExpress className="text-black dark:text-white" />,
        "Socket.io": <SiSocketdotio className="text-black dark:text-white" />,
        MongoDB: <SiMongodb className="text-green-500" />,
        "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
        Git: <SiGit className="text-orange-500" />,
    };

    const experiences = [
        {
            title: "Full-Stack Developer Intern",
            company: "Tech Support Solutions",
            period: "July 2023 – September 2023",
            description: "Developed a Help Desk web application using Laravel and MySQL with CRUD operations and role-based access.",
        },
        {
            title: "Software Developer Intern",
            company: "SmartMail Technologies",
            period: "April 2023 – June 2023",
            description: "Built an Email Management System with user tagging, categorization, and real-time notifications.",
        },
    ];

    const education = [
        {
            degree: "High School Diploma (Baccalaureate)",
            institution: "National Secondary School",
            period: "2021",
            description: "Completed high school with a focus on science and technology.",
        },
        {
            degree: "University Diploma in Computer Science",
            institution: "Higher School of Technology, Sidi Bennour",
            period: "2022 - 2024",
            description: "Studied software development, databases, and computer systems.",
        },
        {
            degree: "Bachelor's in Software Engineering",
            institution: "Higher School of Technology, Essaouira",
            period: "2024 - Present",
            description: "Pursuing advanced studies in systems architecture and project management.",
        },
    ];

    const services = [
        {
            icon: <Code className="h-10 w-10 text-primary" />,
            title: "Web Development",
            description: "Building fast, responsive websites and web applications.",
        },
        {
            icon: <Palette className="h-10 w-10 text-primary" />,
            title: "UI/UX Design",
            description: "Creating intuitive and visually appealing interfaces.",
        },
        {
            icon: <Briefcase className="h-10 w-10 text-primary" />,
            title: "Full-Stack Solutions",
            description: "Developing end-to-end applications with robust systems.",
        },
        {
            icon: <Lightbulb className="h-10 w-10 text-primary" />,
            title: "Technical Consultation",
            description: "Expert advice on technology choices and architecture.",
        },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
                        About Me
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)] md:text-5xl font-bold tracking-tight mb-4">
                        My Journey & Expertise
                    </h2>
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        A passionate developer creating exceptional digital experiences through design and code.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        className="relative max-w-md mx-auto lg:mx-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <AboutStars />
                        <div className="relative w-full aspect-square">
                            <img
                                src="/memoji-nbg.png"
                                alt="Zakaria's memoji"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-6 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold">
                            Hello, I'm <span className="text-primary">Zakaria</span>
                        </h3>
                        <p className="text-muted-foreground">
                            Full-stack developer with 3+ years experience building solutions that solve real-world problems.
                            I craft functional yet visually engaging web experiences by blending creativity with clean, efficient code.
                        </p>
                        <p className="text-muted-foreground">
                            My balanced approach to design and development ensures every project delivers exceptional user experiences.
                        </p>

                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-green-300" />
                                    <span className="text-sm">Available: 20hrs/week</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm">3+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-red-500" />
                                    <span className="text-sm">Continuous Learner</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-blue-400" />
                                    <span className="text-sm">10+ Projects Completed</span>
                                </div>
                            </div>
                        </div>

                        <h4 className="text-lg sm:text-xl font-semibold mt-6">
                            My Skills
                        </h4>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="flex items-center gap-1 rounded-full px-3 py-1 bg-background/30 backdrop-blur-sm border border-border text-xs"
                                >
                  <span className="flex-shrink-0">
                    {skillIcons[skill]}
                  </span>
                                    <span>{skill}</span>
                                </Badge>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Button className="flex items-center gap-2" variant="outline">
                                <Download className="h-4 w-4" />
                                Download Resume
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <Tabs defaultValue="experience" className="w-full">
                        <TabsList className="grid grid-cols-3 w-full mb-8 bg-background">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="services">Services</TabsTrigger>
                        </TabsList>

                        <TabsContent value="experience" className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                                        <p className="text-muted-foreground">
                                            {exp.company} | {exp.period}
                                        </p>
                                        <p>{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </TabsContent>

                        <TabsContent value="education" className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                                        <p className="text-muted-foreground">
                                            {edu.institution} | {edu.period}
                                        </p>
                                        <p>{edu.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </TabsContent>

                        <TabsContent value="services" className="grid sm:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="space-y-4">
                                        <div>{service.icon}</div>
                                        <h4 className="text-xl font-semibold">{service.title}</h4>
                                        <p className="text-muted-foreground">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
}