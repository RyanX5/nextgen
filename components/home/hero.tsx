'use client';
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const inp = useRef<HTMLInputElement>(null);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = inp.current?.value;
        console.log(email);
        await fetch("/api/send-email", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
        });
    };

    return (
        <main className="relative min-h-screen text-center flex flex-col items-center justify-center px-4 max-w-6xl mx-auto z-1">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="z-10 inline-flex gap-2 rounded-full bg-primary/10 px-4 py-2 items-center justify-center mb-6 shadow-sm backdrop-blur-md"
            >
                <Star className="text-yellow-400 w-4 h-4" />
                <p className="text-foreground text-xs">Trusted by 20+ top companies</p>
            </motion.div>

            {/* Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="mb-22"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl lg:text-7xl font-bold mb-4 leading-tight tracking-tighter"
                >
                    Empowering Businesses to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b3aef5] via-[#d7cbe7] to-[#eaa879]">
                        Lead, Innovate, and Grow
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="text-base lg:text-2xl text-muted-foreground max-w-3xl mx-auto"
                >
                    We partner with you to transform ideas into impact — through tailored
                    strategy, operational excellence, and digital innovation.
                </motion.h2>

                {/* Form */}
                <motion.form
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col gap-4 max-w-5/6 md:flex-row md:gap-2 md:w-full md:max-w-sm mx-auto items-center mt-12"
                >
                    <Input
                        type="email"
                        placeholder="your@company.com"
                        aria-label="Business email address"
                        required
                        ref={inp}
                        className="backdrop-blur-sm"
                    />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button
                            type="submit"
                            className="flex items-center gap-2 w-full md:w-auto bg-gradient-to-r from-[#b3aef5] via-[#d7cbe7] to-[#eaa879]"
                        >
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </motion.div>
                </motion.form>
            </motion.section>
        </main>
    );
}
