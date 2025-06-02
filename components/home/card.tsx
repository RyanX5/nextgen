"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface InfoCardProps {
    heading: string;
    subHeading: string;
    icon: React.ReactNode;
    last?: boolean;
    details: string;
}



export const InfoCard: React.FC<InfoCardProps> = ({
    // color = "violet",
    heading,
    subHeading,
    icon,
    last = false,
    details,
}) => {
    // const { gradient, border } = colorVariants[color];
    const [info, setInfo] = useState<boolean>(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            className=" w-full max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                ref={ref}

                className={`group relative md:h-140 rounded-xl px-6 sm:px-10 md:px-12 py-24 sm:py-32 md:mt-12 mb-24  bg-background text-foreground border  border-neutral-700 transition-all`}
            >
                <div
                    className={`absolute inset-0 -z-10 rounded-2xl transition-all duration-700 ease-in-out ${isInView ? "blur-sm md:blur-lg opacity-50" : "blur-none"
                        } bg-gradient-to-r from-[#b3aef5] via-[#d7cbe7] to-[#eaa879]`}
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
                                <p className="font-bold text-2xl md:3xl tracking-tighter inline-flex gap-2 items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#b3aef5] via-[#d7cbe7] to-[#eaa879]">
                                    Details
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
                                <p className="font-bold text-2xl md:text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#b3aef5] via-[#d7cbe7] to-[#eaa879]">{heading}</p>
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
