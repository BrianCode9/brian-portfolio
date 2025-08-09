import NavBar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectSection from "@/components/project-section";
import YouTubeSection from "@/components/youtube-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="bg-pink-400 bg-pink-400 min-h-screen w-full">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <YouTubeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
