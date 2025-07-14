import { GlowEffect } from '@/components/ui/glow-effect';
import { ArrowRight } from "lucide-react"

export function ProjectButton() {
    return (
        <div className='relative flex justify-center md:justify-start'>
            <GlowEffect
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                mode='colorShift'
                blur='soft'
                duration={3}
                scale={0.9}
            />
            <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className='relative  inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f] cursor-pointer'>
                View Projects
                <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
}