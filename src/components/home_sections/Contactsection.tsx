
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import {Dribbble, Github, Linkedin, Mail, MapPin, Twitter} from "lucide-react"
import {cn} from "@/lib/utils.ts";
import {Label} from "@/components/ui/label.tsx";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",

    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const [isSubmitting, setIsSubmitting] = useState(false);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const toastId = toast.loading("Sending your message...");

        try {
            const response = await fetch("https://formsubmit.co/ajax/nourddinedriouech@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    _subject: formData.subject,
                    message: formData.message,
                    _captcha: "false",
                    _template: "table",
                    _honey: ""
                })
            });

            const data = await response.json();

            if (data.success === "true") {
                toast.success("Message sent successfully! I'll get back to you soon.", {
                    id: toastId,
                    duration: 5000
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                throw new Error(data.message || "Submission failed");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to send message. Please try again later.", {
                id: toastId,
                duration: 5000
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"/>
            </div>

            <div className="container">
                <motion.div
                    className="max-w-xl mx-auto text-center mb-16"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <Badge className="mb-4" variant="secondary">Get In Touch</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)]">Let's
                        Work Together</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                    {/* Contact Info Section */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-5">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Contact Information
                            </h3>
                            <p className="text-muted-foreground">
                                Feel free to reach out through any of these channels or fill out the contact form.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden group hover:border-indigo-500">
                                    <CardContent className="p-5 flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                                            <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a
                                                href="mailto:nourddinedriouech@gmail.com"
                                                className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all text-base"
                                            >
                                                nourddinedriouech@gmail.com
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden group hover:border-indigo-500">
                                    <CardContent className="p-5 flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                                            <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className={'w-full'}>
                                            <p className="text-sm text-muted-foreground">Location</p>
                                            <p className="font-medium text-base">Casablanca, MA</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <Card className="h-full">
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <LabelInputContainer>
                                            <Label htmlFor="name">Your name</Label>
                                            <Input
                                                id="name"
                                                name={'name'}
                                                placeholder="Your name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </LabelInputContainer>

                                        <LabelInputContainer>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                placeholder="name@example.com"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </LabelInputContainer>
                                    </div>

                                    <LabelInputContainer>
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="Ex. Contrat Freelance..."
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </LabelInputContainer>

                                    <LabelInputContainer>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="min-h-[150px]"
                                            required
                                        />
                                    </LabelInputContainer>
                                    {/*<input type="hidden" name="_captcha" value="false"/>*/}
                                    {/*<input type="hidden" name="_template" value="table"/>*/}
                                    {/*<input type="text" name="_honey" className="hidden"/>*/}
                                    <button
                                        disabled={isSubmitting}
                                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                        type="submit"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </div>
                                        ) : (
                                            "Send Message →"
                                        )}
                                        <BottomGradient/>
                                    </button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};