
import { ResumeCard } from '@/components/ui/resume-card';
import WordPullUp from "@/components/ui/word-pull-up";
import { motion } from "framer-motion";
import BlurFade from "@/components/ui/blur-fade";
import { IconCloudDemo } from "@/components/pages/iconCloud.jsx";
import { DATA } from "@/data/resume.jsx";

const BLUR_FADE_DELAY = 0.04;
export function Stack() {
  return (
    <div className='my-28 w-[90%] mx-auto'>
      <motion.div className="text-4xl my-10 text-center font-semibold text-black dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: -15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <WordPullUp
          className="text-3xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
          words="Work Experience and Skills"
        />
      </motion.div>
      <div className="flex rounded-[30px] dark:border-[#6C6C6C] border-cyan-500 shadow-2xl p-5 md:p-10 xl:flex-row md:flex-col flex-col lg:flex-col md:w-[75%] w-full justify-center gap-8 md:gap-12 xl:gap-20 text-center m-auto items-center">
        <div className="flex min-h-0 w-full xl:w-1/2 flex-col gap-y-5">
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
        <IconCloudDemo client:load />
      </div>
    </div>
  )
}
