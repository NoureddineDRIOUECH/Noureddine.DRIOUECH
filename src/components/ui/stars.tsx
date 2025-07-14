import { motion } from "framer-motion"

export function HeroStars() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
                { top: '10%', left: '13%', size: 'text-xl', delay: 0 },
                { top: '0%', left: '60%', size: 'text-3xl', delay: 0.3 },
                { top: '70%', left: '20%', size: 'text-lg', delay: 0.6 },
                { top: '80%', left: '75%', size: 'text-base', delay: 0.1 },
                { top: '30%', left: '90%', size: 'text-2xl', delay: 0.5 },
            ].map((star, i) => (
                <motion.div
                    key={i}
                    className={`absolute fill-black/30 dark:fill-white/30 ${star.size} drop-shadow-[0_0_10px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_10px_rgba(200,200,200,1)]`}
                    style={{ top: star.top, left: star.left }}
                    animate={{
                        y: [0, -5, 0],
                        opacity: [0.4, 0.5, 0.4], // Adjusted opacity for a more transparent effect
                        rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: star.delay,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}


export function AboutStars(){
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
                { top: '10%', left: '20%', size: 'text-xl', delay: 0 },
                { top: '40%', left: '60%', size: 'text-3xl', delay: 0.3 },
                { top: '70%', left: '30%', size: 'text-lg', delay: 0.6 },
                { top: '80%', left: '75%', size: 'text-base', delay: 0.1 },
                { top: '30%', left: '90%', size: 'text-2xl', delay: 0.5 },
            ].map((star, i) => (
                <motion.div
                    key={i}
                    className={`absolute fill-black/70 dark:fill-white/70 ${star.size} drop-shadow-[0_0_10px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_10px_rgba(200,200,200,1)]`}
                    style={{ top: star.top, left: star.left }}
                    animate={{
                        y: [0, -5, 0],
                        opacity: [0.8, 1, 0.8],
                        rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: star.delay,
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                </motion.div>
            ))}
        </div>
    )
}