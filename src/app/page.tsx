import HeroSection from "@/components/hero-section";
import CallToAction from "@/components/shared/CallToAction";
import { ContentSection } from "@/components/shared/ContentSection";
import FooterSection from "@/components/shared/Footer";
import TeamSection from "@/components/shared/TeamSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <TeamSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
