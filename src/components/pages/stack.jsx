"use client";
import { IconCloudDemo } from './iconCloud'
import { ResumeCard } from '@/components/ui/resume-card';
import WordPullUp from "@/components/ui/word-pull-up";
import { motion } from "framer-motion";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume.jsx";

const BLUR_FADE_DELAY = 0.04;
export function Stack() {
  return (
    <div className='my-28 w-[90%] mx-auto'>
      <motion.h1 className="text-4xl my-10 text-center font-semibold text-black dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: -15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* <span className="text-3xl  md:text-[3rem] font-bold  leading-none">
          Work Experience
        </span> */}
        <WordPullUp
          className="text-3xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
          words="Work Experience and Skills"
        />
      </motion.h1>
      <div className="flex rounded-[30px] dark:border-[#6C6C6C] border-cyan-500 shadow-2xl p-5 md:p-10 md:flex-row flex-col lg:flex-col md:w-[75%] w-full justify-center gap-8 md:gap-20 text-center m-auto items-center">
        <div className="flex min-h-0 w-full md:w-1/2 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
          </BlurFade>
          {DATA.work.map((work, id) =>
          (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          )
          )}
        </div>
        <IconCloudDemo />
      </div>
    </div>
  )
}
{/* <h3 class="font-bold text-3xl ml-36 self-start">Stack</h3> */ }
{/* <div className="h-[7rem] self-start dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className=" text-6xl font-bold text-center dark:text-white relative z-20">
          Stack
        </h1>
        <div className="w-[15rem] h-14 relative">
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-1 w-3/4" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-1 w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={1200}
            className="w-10/12   mx-auto h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div> */}