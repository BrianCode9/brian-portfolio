import NavBar from "@/components/section/navbar";
import HeroSection from "@/components/section/hero-section";
import AboutSection from "@/components/section/about-section";
import ProjectSection from "@/components/section/project-section";
import ContactSection from "@/components/section/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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

        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
