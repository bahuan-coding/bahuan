import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/sections/HeroSection";
import FullStorySection from "@/components/sections/FullStorySection";
import CareerTimeline from "@/components/sections/CareerTimeline";
import StrategiesShowcase from "@/components/sections/StrategiesShowcase";
import TechArsenal from "@/components/sections/TechArsenal";
import RecentProjectsSection from "@/components/sections/RecentProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import HowIWorkSection from "@/components/sections/LeadershipSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <HeroSection />

      {/* Story + Career — standard background */}
      <section className="container py-16 md:py-24 space-y-20">
        <FullStorySection />
      </section>

      <CareerTimeline />

      {/* Dark sections — full bleed */}
      <StrategiesShowcase />
      <TechArsenal />
      <RecentProjectsSection />

      {/* Personal sections — standard background */}
      <section className="container py-16 md:py-24 space-y-20">
        <AboutSection />
        <Separator />
        <HowIWorkSection />
        <Separator />
        <FooterSection />
      </section>
    </div>
  );
}
