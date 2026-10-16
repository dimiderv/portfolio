import HeroSection from "@/app/components/HeroSection";
import NavBar from "@/app/components/NavBar";
import ProjectsSection from "@/app/components/ProjectsSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import WorkExperience from "@/app/components/WorkExperience";
import Technologies from "@/app/components/Technologies";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <div className="page-container">
          <ProjectsSection />
          <WorkExperience />
          <Technologies />
          <EmailSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
