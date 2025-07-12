"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CursorPosition {
    x: number
    y: number
    id: number
}

export function MouseTrail() {
    const [cursorTrail, setCursorTrail] = useState<CursorPosition[]>([])
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setCursorTrail((prevTrail) => [
            { x: e.clientX, y: e.clientY, id: Date.now() },
            ...prevTrail.slice(0, 5), // Keep only the last 6 positions
        ])
    }, [])

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [handleMouseMove])

    if (!isClient) {
        return null // Return null on server-side
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <AnimatePresence>
                {cursorTrail.map((cursor, index) => (
                    <motion.div
                        key={cursor.id}
                        initial={{ opacity: 0.7, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            left: cursor.x,
                            top: cursor.y,
                            transform: "translate(-50%, -50%)",
                        }}
                        className="text-primary"
                    >
                        <div
                            className="h-3 w-3 rounded-full bg-primary"
                            style={{
                                opacity: 1 - index * 0.15,
                            }}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

