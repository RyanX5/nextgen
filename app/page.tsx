import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import NavBar from "@/components/home/navbar";
import Services from "@/components/home/services";
import Upper from "@/components/home/upper";
import { AuroraBackground } from "@/components/ui/aurora";
import LogoSection from "@/components/ui/logos";
import backgroundImage from "@/public/bg.jpg"
import Image from "next/image";

export default function Home() {
  return (
    //<AuroraBackground>
    <div className="min-h-screen  w-full flex flex-col  bg-background text-foreground">
      <div className="relative">
        <div className="absolute inset-0 h-[100vh] z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            priority
            className="object-cover brightness-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-background dark:to-background" />

        </div>
      </div>
      <Upper />
      <NavBar />
      <Hero />
      <LogoSection />
      <Features />
      <Services />
      <Footer />
    </div >
    // {/* </AuroraBackground > */}
  );
}
