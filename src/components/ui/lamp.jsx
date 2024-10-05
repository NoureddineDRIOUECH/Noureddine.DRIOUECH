"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from "@/hooks/use-media-query"
import React from "react";

export const LampContainer = ({
  children,
  className
}) => {

  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    (
      <div
        className={cn(
          "relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-b-xl z-0",
          className
        )}>
        <div
          className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
          {/* <div className="absolute inset-0 flex justify-between items-between">
            <div className="absolute top-28 left-10 p-4">
              <FontAwesomeIcon icon={faHtml5} size="3x" className="text-orange-500" />
            </div>
            <div className="absolute top-28 right-10 p-4">
              <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-blue-500" />
            </div>
            <div className="absolute bottom-0 left-10 p-4">
              <FontAwesomeIcon icon={faJs} size="3x" className="text-yellow-500" />
            </div>
            <div className="absolute bottom-0 right-10 p-4">
              <FontAwesomeIcon icon={faReact} size="3x" className="text-blue-600" />
            </div>
          </div> */}
          <motion.div
            initial={{ opacity: 0.5, width: isDesktop ? "15rem" : "9rem" }}
            whileInView={{ opacity: 1, width: isDesktop ? "30rem" : "19rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
            <div
              className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div
              className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: isDesktop ? "15rem" : "9rem" }}
            whileInView={{ opacity: 1, width: isDesktop ? "30rem" : "19rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
            <div
              className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div
              className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div
            className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
          <div
            className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div
            className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
          <motion.div
            initial={{ width: isDesktop ? "8rem" : "6rem" }}
            whileInView={{ width: isDesktop ? "16rem" : "12rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
          <motion.div
            initial={{ width: isDesktop ? "15rem" : "9rem" }}
            whileInView={{ width: isDesktop ? "30rem" : "19rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 md:w-[30rem] w-[15rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>

          <div
            className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black ">
          </div>
        </div>
        <div className="relative z-50 flex md:-translate-y-96 -translate-y-80 flex-col items-center px-5">
          {children}
        </div>
      </div>
    )
  );
};
