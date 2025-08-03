import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {  ArrowUp } from "lucide-react"
// import { SiX } from "react-icons/si"
import { FiGithub as Github } from "react-icons/fi";
import { FiLinkedin as Linkedin } from "react-icons/fi";
import { FaInstagram as Instagram } from "react-icons/fa";
import { SiUpwork as Upwork } from "react-icons/si";

export function FooterSection() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className=" py-16 w-full relative">
            <div className="absolute inset-0 w-full -z-10 overflow-hidden">
                <div className="absolute w-full bottom-0 left-1/4  h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div >
                <div className="flex flex-col items-center">
                    <motion.div
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        Noureddine DRIOUECH
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                            Home
                        </a>
                        <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
                            Work
                        </a>
                        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </a>
                        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                        </a>
                    </div>

                    <div className="flex gap-4 mb-8">
                        <motion.a
                            href="https://github.com/NoureddineDRIOUECH"
                            target="_blank"
                            className="h-10 w-10 rounded-full bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            whileHover={{ y: -5 }}
                            rel="noreferrer"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/noureddinedriouech/"
                            target="_blank"
                            className="h-10 w-10 rounded-full bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            whileHover={{ y: -5 }}
                            rel="noreferrer"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </motion.a>
                        <motion.a
                            href="https://www.upwork.com/freelancers/~01c6fba5436d52831a?mp_source=share"
                            target="_blank"
                            className="h-10 w-10 rounded-full bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            whileHover={{ y: -5 }}
                            rel="noreferrer"
                        >
                            <Upwork className="h-5 w-5" />
                            <span className="sr-only">Upwork</span>
                        </motion.a>
                        {/*<motion.a*/}
                        {/*    href="https://x.com/NoureddineDRIOUECH"*/}
                        {/*    target="_blank"*/}
                        {/*    className="h-10 w-10 rounded-full bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"*/}
                        {/*    whileHover={{ y: -5 }}*/}
                        {/*    rel="noreferrer"*/}
                        {/*>*/}
                        {/*    <SiX className="h-5 w-5" />*/}
                        {/*    <span className="sr-only">X</span>*/}
                        {/*</motion.a>*/}
                        <motion.a
                            href="https://www.instagram.com/noureddine.driouech/"
                            target="_blank"
                            className="h-10 w-10 rounded-full bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            whileHover={{ y: -5 }}
                            rel="noreferrer"
                        >
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </motion.a>
                    </div>

                    <div className="text-center text-muted-foreground text-sm mb-8">
                        <p>© {new Date().getFullYear()} Noureddine DRIOUECH. All rights reserved.</p>
                        <p className="mt-1">Designed and built with passion.</p>
                    </div>

                    <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
                        <ArrowUp className="h-4 w-4" />
                        <span className="sr-only">Back to top</span>
                    </Button>
                </div>
            </div>
        </footer>
    )
}