'use client';
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRef } from "react";


export default function Hero() {

    const inp = useRef<HTMLInputElement>(null);

    const sendEmail = async () => {
        const email = inp.current?.value;
        console.log(email)
        await fetch("/api/send-email", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
        });
    };
    return (

        <main className="min-h-screen text-center flex flex-col items-center justify-center px-4 max-w-6xl mx-auto z-1">
            {/* Badge */}
            <div className="z-10 inline-flex gap-2 rounded-full bg-secondary/50 px-4 py-2 items-center justify-center mb-6 shadow-sm backdrop-blur-md">
                <Star className="text-yellow-400 w-4 h-4" />
                <p className="text-foreground text-xs">
                    Trusted by 20+ top companies
                </p>
            </div>
            <section className="mb-22">
                <h1 className="text-4xl lg:text-7xl font-bold mb-4 leading-tight tracking-tighter">
                    Empowering Businesses to <span className="text-muted-foreground">
                        Lead, Innovate, and Grow
                    </span>
                </h1>
                <h2 className="text-base lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                    We partner with you to transform ideas into impact — through tailored
                    strategy, operational excellence, and digital innovation.
                </h2>

                {/* Form Section */}
                <form
                    className="flex flex-col gap-4 md:flex-row md:gap-2 md:w-full md:max-w-sm mx-auto items-center mt-12"
                >
                    <Input
                        type="email"
                        placeholder="your@company.com"
                        aria-label="Business email address"
                        required
                        ref={inp}
                    />
                    <Button type="submit" onClick={sendEmail} className="flex items-center gap-2 w-full md:w-auto">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </form>
            </section>

        </main>
    );
}
