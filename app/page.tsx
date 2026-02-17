import ParallaxBackground from "@/components/ParallaxBackground";
import FloatingParticles from "@/components/FloatingParticles";
import VineDecorations from "@/components/VineDecorations";
import Navbar from "@/components/Navbar";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <main>
      {/* Background Effects */}
      <ParallaxBackground />
      <FloatingParticles />
      <VineDecorations />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
