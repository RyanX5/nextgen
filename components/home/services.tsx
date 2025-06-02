"use client";

import { BadgeDollarSign, Hospital, PanelsTopLeft } from "lucide-react";
import { ServicesLink } from "./services-link";
import { useState } from "react";
import { ServicesCard } from "./services-card";
import { cards } from "./services-card";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";

export default function Services() {
    type TabKey = "1" | "2" | "3";
    const [selected, setSelected] = useState<TabKey>("1");

    return (
        <div className="flex flex-col items-center text-center p-4 mt-14 md:mt-24">

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="z-10 text-4xl md:text-7xl font-bold mb-4 leading-tight tracking-tighter inline-flex gap-2 items-center"
            >
                Our Services
            </motion.h1>


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="z-10 text-base lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-24"
            >
                At NGConsultancy, we provide a wide array of services to cater to your business needs.
            </motion.p>

            <div className="flex md:hidden z-10 items-center justify-center overflow-x-auto w-full gap-2 pb-4 px-2">
                {[
                    { key: "1", label: "Marketing", icon: <BadgeDollarSign className="size-4" /> },
                    { key: "2", label: "Health", icon: <Hospital className="size-4" /> },
                    { key: "3", label: "Projects", icon: <PanelsTopLeft className="size-4" /> },
                ].map(({ key, label, icon }) => (
                    <Button
                        key={key}
                        variant={selected === key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelected(key as TabKey)}
                        className="flex items-center gap-1 whitespace-nowrap"
                    >
                        {icon}
                        {label}
                    </Button>
                ))}

            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-6 w-full px-4"
                >
                    <ServicesCard {...cards[selected]} />
                </motion.div>
            </AnimatePresence>


            <div className="hidden md:flex flex-col w-full items-center max-w-6xl rounded-t-2xl">
                <div className="flex items-center justify-between w-full">
                    <ServicesLink
                        text="Marketing"
                        selected={selected === "1"}
                        icon={<BadgeDollarSign className="size-5" />}
                        onClicked={() => setSelected("1")}
                    />
                    <ServicesLink
                        text="Health Consulting"
                        selected={selected === "2"}
                        icon={<Hospital className="size-5" />}
                        onClicked={() => setSelected("2")}
                    />
                    <ServicesLink
                        text="Project Management"
                        selected={selected === "3"}
                        icon={<PanelsTopLeft className="size-5" />}
                        onClicked={() => setSelected("3")}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                    className="bg-accent/30 w-full flex justify-between items-center px-12 py-32 rounded-b-2xl overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-between w-full items-center"
                        >
                            <ServicesCard {...cards[selected]} />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>

            <Button variant={"link"} className="mt-12 underline cursor-pointer">
                Explore All Services
            </Button>
        </div>
    );
}
