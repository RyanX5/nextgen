"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InfoCardProps {
    color?: "violet" | "blue" | "red" | "green" | "yellow" | "pink";
    heading: string;
    subHeading: string;
    icon: React.ReactNode;
    last?: boolean;
    details: string;
}

const colorVariants = {
    violet: {
        gradient: "from-violet-500/100 to-transparent",
        border: "border-violet-500/20",
    },
    blue: {
        gradient: "from-blue-500/100 to-transparent",
        border: "border-blue-500/20",
    },
    red: {
        gradient: "from-red-500/100 to-transparent",
        border: "border-red-500/20",
    },
    green: {
        gradient: "from-emerald-500/100 to-transparent",
        border: "border-green-500/20",
    },
    yellow: {
        gradient: "from-yellow-500/100 to-transparent",
        border: "border-yellow-500/20",
    },
    pink: {
        gradient: "from-pink-500/100 to-transparent",
        border: "border-pink-500/20",
    },
};

export const InfoCard: React.FC<InfoCardProps> = ({
    color = "violet",
    heading,
    subHeading,
    icon,
    last = false,
    details,
}) => {
    const { gradient, border } = colorVariants[color];
    const [info, setInfo] = useState<boolean>(false);

    return (
        <motion.div
            className="md:px-12 w-full max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                whileHover={{ scale: 1.01 }}
                className={`group relative md:h-140 rounded-xl px-6 sm:px-10 md:px-12 py-24 sm:py-32 mt-12 mb-24 backdrop-blur-xl bg-background/10 text-foreground border ${border} transition-all`}
            >
                <span
                    className={`z-0 absolute inset-0 bg-radial ${gradient} blur-3xl group-hover:animate-pulse opacity-30 dark:opacity-30`}
                />

                {!last && (
                    <div>
                        <span className="w-px absolute bottom-0 translate-y-full h-36 bg-muted-foreground/10" />
                        <span className="w-2 h-2 bottom-0 translate-y-full -translate-x-1/2 rounded-full bg-muted-foreground/30 absolute" />
                    </div>
                )}

                {/* Toggle Views with AnimatePresence */}
                <AnimatePresence mode="wait">
                    {info ? (
                        <motion.div
                            key="info"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="relative flex flex-col md:flex-row text-center md:text-left items-center z-10"
                        >
                            <div className="flex flex-col items-center gap-6 md:gap-4 text-center">
                                <p className="font-bold text-3xl tracking-tighter inline-flex gap-2 items-center justify-center">
                                    Details <Info />
                                </p>
                                <p className="text-muted-foreground md:max-w-2/3">{details}</p>
                                <Button
                                    variant="outline"
                                    className="w-min mt-6 md:mt-8 bg-background/10 hover:bg-background/30 cursor-pointer"
                                    onClick={() => setInfo(false)}
                                >
                                    Back
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="default"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="relative flex flex-col md:flex-row text-center md:text-left items-center z-10"
                        >
                            <div className="flex flex-col items-center md:items-start gap-4 md:gap-2 md:w-2/3">
                                <p className="font-bold text-3xl tracking-tighter">{heading}</p>
                                <p className="text-muted-foreground md:max-w-2/3">
                                    {subHeading}
                                </p>
                                <Button
                                    variant="outline"
                                    className="w-min mt-6 md:mt-8 bg-background/10 hover:bg-background/30 cursor-pointer"
                                    onClick={() => setInfo(true)}
                                >
                                    Learn More
                                </Button>
                            </div>
                            <div className="w-1/3 hidden md:flex items-center justify-center">
                                {icon}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};
