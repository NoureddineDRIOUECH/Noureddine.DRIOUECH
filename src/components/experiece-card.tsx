"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
interface ExperinceProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle: string;
    href: string;
    badges: string[];
    period: string;
    description: string;
}
export const ExpericenCard = ({
                               logoUrl,
                               altText,
                               title,
                               subtitle,
                               href,
                               badges,
                               period,
                               description,
                           } : ExperinceProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        if (description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <a
            href={href || "#"}
            className="block cursor-pointer"
            onClick={handleClick}
        >
            <Card className="flex items-center w-full px-3">
                <Avatar className="border items-center  size-16 m-auto bg-muted-background dark:bg-foreground">
                    <AvatarImage
                        src={logoUrl}
                        alt={altText}
                        className="object-contain"
                    />
                    <AvatarFallback>{altText[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 items-center flex-col group">
                    <CardHeader className="px-6 py-4">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="inline-flex text-nowrap items-center justify-center font-semibold  text-base">
                                {title}

                                <ChevronRightIcon
                                    className={cn(
                                        "size-4 translate-x-0  transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                                        isExpanded ? "rotate-90" : "rotate-0"
                                    )}
                                />
                            </h3>
                            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                                {period}
                            </div>
                        </div>
                        {subtitle && <div className="font-sans text-left text-sm">{subtitle}</div>}
                    </CardHeader>
                    {(description && isExpanded) && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,

                                height: isExpanded ? "auto" : 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="my-2 text-base text-justify md:text-left px-6 sm:text-base"
                        >
                            {badges && (
                                <span className="md:flex space-x-1 space-y-1 lg:block block mb-3 md:gap-x-1">
                  {badges.map((badge, index) => (
                      <Badge
                          variant="secondary"
                          className="align-middle text-nowrap text-sm"
                          key={index}
                      >
                          {badge}
                      </Badge>
                  ))}
                </span>
                            )}
                            {description}
                        </motion.div>
                    )}
                </div>
            </Card>
        </a>
    );
};