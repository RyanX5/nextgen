"use client";
import Image from 'next/image'
import { motion } from 'framer-motion';
import adriaLogo from "@/public/adria.png";
import drbeautyLogo from "@/public/drbeauty.png";
import luteriaLogo from "@/public/luteria.png";
import healthhubLogo from "@/public/healthhub.png";

export default function LogoSection() {
    return (
        <div className="relative text-center flex flex-col items-center justify-center  py-4 px-4 md:py-8 gap-6 tracking-tighter">
            {/* <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 blur-md opacity-80 -z-10" /> */}
            <p className="text-base lg:text-2xl max-w-3xl mx-auto font-bold ">Our Trusted Partners</p>
            <ul className='flex gap-4 md:gap-16 items-center justify-center max-w-6xl brightness-0 invert-0 dark:invert '>
                {[
                    { src: adriaLogo, alt: "adria-logo" },
                    { src: drbeautyLogo, alt: "drbeauty-logo" },
                    { src: luteriaLogo, alt: "luteria-logo" },
                    { src: healthhubLogo, alt: "healthhub-logo" },
                ].map((logo, index) => (
                    <motion.li
                        key={index}
                        className="max-w-40"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Image src={logo.src} alt={logo.alt} />
                    </motion.li>
                ))}
            </ul>
            <span className='absolute bottom-0 h-px bg-radial from-muted-foreground/20 via-muted-foreground/10 to-transparent w-3/4'></span>
            <span className='absolute top-0 h-px bg-radial from-muted-foreground/20 via-muted-foreground/10 to-transparent w-3/4'></span>
        </div >
    )
}
