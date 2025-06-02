import { BadgeDollarSign, Globe, Hospital, PanelsTopLeft, Pen } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import marketingImage from "@/public/marketing.jpg"
import healthImage from "@/public/healthcare.jpg"
import productImage from "@/public/product.jpg"

import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
    title?: string;
    description?: string;
    logo?: React.ReactNode;
    cta?: string;
    image: string | StaticImport;
    first?: boolean
}

export const cards = {
    "1": {
        title: "Marketing",
        description: "At NGConsultancy, we provide a wide array of services to cater to your business needs.",
        logo: <BadgeDollarSign />,
        cta: "Get Started",
        image: marketingImage,
        first: true,
    },
    "2": {
        title: "Health Consulting",
        description: "Empowering health businesses with innovative consulting and expert insights.",
        logo: <Hospital />,
        cta: "Book a Session",
        image: healthImage,
    },
    "3": {
        title: "Project Management",
        description: "Streamline your operations and deliver projects with precision and clarity.",
        logo: <PanelsTopLeft />,
        cta: "Consult Now",
        image: productImage,
    },
};

export const ServicesCard: React.FC<CardProps> = ({ title, description, logo, cta, image, first = false }) => {
    return (
        <>
            <div className="md:hidden  relative w-full h-42 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-neutral-500/30 transition-all">
                <Image
                    src={image}
                    alt="..."
                    fill
                    priority={first || false}
                    placeholder="blur"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col items-start text-left z-11">
                <span className="hidden md:block bg-accent/30 rounded-full p-4">
                    {logo}
                </span>
                <div className="flex gap-2 items-center justify-center">
                    <p className="font-bold text-2xl md:text-5xl tracking-tighter mt-8 text-transparent bg-clip-text bg-gradient-to-r from-[#b3aef5] via-[#d7cbe7] to-[#eaa879]">{title}</p>
                    <span className="md:hidden rounded-full mt-8">
                        {logo}
                    </span>
                </div>
                <p className="text-muted-foreground mt-2 md:max-w-2/3">
                    {description}
                </p>


                <Button className="md:mt-12 mt-8 cursor-pointer">{cta}</Button>
            </div>
            <div className="hidden md:block relative w-62 h-72 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-neutral-500/30 transition-all">
                <Image
                    src={image}
                    alt="..."
                    fill
                    className="object-cover"
                />
            </div>
        </>
    )
}

