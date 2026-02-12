import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/sections/HeroSection";
import FullStorySection from "@/components/sections/FullStorySection";
import CareerTimeline from "@/components/sections/CareerTimeline";
import StrategiesShowcase from "@/components/sections/StrategiesShowcase";
import TechArsenal from "@/components/sections/TechArsenal";
import AboutSection from "@/components/sections/AboutSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import VibeCodingSection from "@/components/sections/VibeCodingSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <HeroSection />

      <main className="container py-12 md:py-24 lg:py-32 space-y-24">
        <FullStorySection />
        <Separator />
      </main>

      <CareerTimeline />
      <StrategiesShowcase />
      <TechArsenal />

      <main className="container py-12 md:py-24 space-y-24">
        <AboutSection />
        <Separator />
        <LeadershipSection />
        <Separator />
        <VibeCodingSection />
        <FooterSection />
      </main>
    </div>
  );
}
