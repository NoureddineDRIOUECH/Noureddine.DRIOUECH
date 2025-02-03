
import BlurFade from "@/components/ui/blur-fade";

export default function Footer() {

    const BLUR_FADE_DELAY = 0.04;
    return (
        <div className="grid shadow-2xl rounded-3xl w-[90%] border-2 border-b-0 rounded-b-none items-center justify-center gap-4 px-4 text-center md:px-6 m-auto py-12 pb-32">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Let’s Connect!
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground text-lg/relaxed md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                        Looking to collaborate or discuss a project? {" "}
                        <a
                            href="https://www.linkedin.com/in/noureddinedriouech"
                            target="_blank"
                            className="text-cyan-500 hover:underline hover:cursor-pointer	"
                        >
                            Feel free to reach out via LinkedIn.
                        </a>{" "}
                        I prioritize meaningful connections and technical discussions.
                    </p>
                </div>
            </BlurFade>
        </div>
    )
}
