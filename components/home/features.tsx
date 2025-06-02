import { Gauge, Globe, Hammer, Lightbulb, SquareChartGantt } from "lucide-react";
import { InfoCard } from "./card";


export default function Features() {
    return (
        <div className="min-h-screen flex flex-col items-center pt-12 z-10 text-center p-4 mt-24">
            <h1 className="z-10 text-4xl md:text-7xl font-bold mb-4 leading-tight tracking-tighter inline-flex gap-2 items-center">
                How We Work
            </h1>
            <h2 className="z-10 text-base lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-24">
                We partner with you to transform ideas into impact — through tailored
                strategy, operational excellence, and digital innovation.
            </h2>

            <InfoCard

                heading="Planning & Research"
                subHeading="We start by analyzing current market trends, evaluating communication behaviors, and exploring demographic insights to uncover what truly motivates your target audience."
                icon={<SquareChartGantt className="w-36 h-36" />}
                details="Every successful strategy begins with a deep understanding of your audience, market, and message. At Next Generation Consultancy (NGC), our Planning & Research services lay the foundation for smart, data-informed decisions that drive real results.
We start by analyzing current market trends, evaluating communication behaviors, and exploring demographic insights to uncover what truly motivates your target audience. Our goal is to help you reach the right people, at the right time, with the right message."
            />


            <InfoCard

                heading="Ideation"
                subHeading="Ideation is where we bring that understanding to life through smart, creative, and actionable strategies."
                icon={<Lightbulb className="w-36 h-36" />}
                details="If Planning & Research is about understanding your audience, Ideation is where we bring that understanding to life through smart, creative, and actionable strategies.
At Next Generation Consultancy (NGC), we don’t just generate ideas; we develop data-informed concepts that resonate with your audience and drive engagement. Whether it’s discovering that your audience prefers texting over emails or testing offers that spark action, we align our creative thinking with real-world behavior."

            />

            <InfoCard

                heading="Optimization"
                subHeading="We believe every campaign, message, and tactic has room to evolve. Through continuous monitoring and strategic refinement, we turn good results into great ones."
                icon={<Gauge className="w-36 h-36" />}
                last={true}
                details="At Next Generation Consultancy (NGC), we believe every campaign, message, and tactic has room to evolve. Through continuous monitoring and strategic refinement, we turn good results into great ones, optimizing every touchpoint for maximum impact.
Using real-time data, performance metrics, and behavioral insights, we evaluate what’s working, what’s not, and how we can make it better. From message adjustments to channel performance, we fine-tune every element to ensure your strategy performs at its peak."
            />

        </div>
    )
}