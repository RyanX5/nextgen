import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import NavBar from "@/components/home/navbar";
import Upper from "@/components/home/upper";
import { AuroraBackground } from "@/components/ui/aurora";
import LogoSection from "@/components/ui/logos";

export default function Home() {
  return (
    <AuroraBackground>
      <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
        <Upper />
        <NavBar />
        <Hero />
        <LogoSection />
        <Features />
        <Footer />
      </div >
    </AuroraBackground >
  );
}
