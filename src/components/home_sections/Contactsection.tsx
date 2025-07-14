
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e : any) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log('hello',formData)
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success("Message sent! I'll get back to you soon.")
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
                toast.error("Something went wrong. Please try again.")
            }
        } catch (error) {
            console.error("Error:", error)
            toast.error("Error sending message.")
        }
    }



    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container">
                <motion.div
                    className="max-w-xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="mb-4" variant="secondary">Get In Touch</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)]">Let's Work Together</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <p className="text-muted-foreground">
                            Feel free to reach out through any of these channels or fill out the contact form.
                        </p>

                        <div className="space-y-4 pt-4">
                            <Card>
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <a href="mailto:nourddinedriouech@gmail.com" className="font-medium hover:text-primary transition-colors">
                                            nourddinedriouech@gmail.com
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>



                            <Card>
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="font-medium">Marrakech, MA</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="overflow-hidden">
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Input
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="rounded-lg border-muted-foreground/20"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="rounded-lg border-muted-foreground/20"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Input
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="rounded-lg border-muted-foreground/20"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="min-h-[150px] rounded-lg border-muted-foreground/20"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full rounded-lg gap-2 dark:bg-black text-white dark:border dark:border-secondary-100  hover:bg-opacity-90 cursor-pointer transition-colors"
                                    >
                                        Send Message
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
