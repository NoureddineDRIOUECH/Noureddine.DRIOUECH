"use client";
import MyComponent from "@/components/pages/mine";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { FlipWords } from "../ui/flip-words";

export function Profile() {

    const words = ["better", "cute", "beautiful", "modern"];
    return (
        (
            <div className="flex  flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Build
                                <FlipWords words={words} />
                                <br />

                                <span className="text-4xl text-cyan-500/50  md:text-[4rem] font-bold mt-1 leading-none">
                                    websites with Me
                                </span>
                            </h1>
                        </>
                    }>
                    <MyComponent />
                </ContainerScroll>
            </div>)
    );
}
