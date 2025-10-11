import NavBar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ProjectSection from "@/components/ui/project-section";
import YouTubeSection from "@/components/ui/youtube-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-cl flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <YouTubeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
