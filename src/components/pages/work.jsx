"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion } from "framer-motion";


const content = [
    {
        title: "Opendental Software",
        description:
            "A responsive React-based table component with a built-in calendar view, enabling sorting, filtering, pagination, and column customization. The calendar integration allows users to navigate between months, select dates, and associate data with specific days.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/opendentaleSoftware.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="opendentaleSoftware" />
            </div>
        ),
    },
    {
        title: "Car Repair Management System",
        description:
            `Car Repair Management System with an Admin Panel for managing repairs, tracking work orders, handling client information, and reporting. Additionally, build a Client Site for customers to schedule repair services, track the status of their car, and view past repairs.

Project Overview:
Admin Panel (Back-end & Front-end): The Admin Panel is designed for car repair shop staff to manage the day-to-day operations of the business, including handling customer requests, assigning jobs to mechanics, and tracking progress.

Client Site (Front-end): The Client Site allows car owners to book services,...`,
        content: (
            <div className="h-full w-full  flex  items-center justify-center text-white">
                <img
                    src="/carRepairManagement.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="carRepairManagement" />
            </div>
        ),
    },

    {
        title: "Coffee Store WebSite",
        description:
            "A Coffee Store Website with an E-commerce Platform that allows customers to browse coffee products, add items to their cart, place orders, and track them. The website should also include an Admin Panel to manage products, inventory, and customer orders.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/cofeeStore.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="cofeeStore" />
            </div>
        ),
    },
];
export function Work() {
    return (
        <div className="md:px-10 px-5 w-[95%] m-auto flex flex-col justify-between gap-8">
            <motion.h6
                className="text-4xl text-center text-black md:text-[3rem] font-bold mt-1 leading-none dark:text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Here are my favorite projects
            </motion.h6>
            <StickyScroll content={content} />
        </div>);
}
