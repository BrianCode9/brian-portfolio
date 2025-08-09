import NavBar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectSection from "@/components/project-section";
import YouTubeSection from "@/components/youtube-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";


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
