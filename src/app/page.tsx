import NavBar from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";
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
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectSection />
        </section>

        <section id="youtube">
          <YouTubeSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div >
  );
}
