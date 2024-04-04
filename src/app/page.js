import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import NavBar from "@/app/components/NavBar";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import AchievementsSection from "@/app/components/AchievementsSection";
import WorkExperience from "@/app/components/WorkExperience";
import Technologies from "@/app/components/Technologies";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <NavBar/>
          <HeroSection/>
          {/*<div className="container mt-24 mx-auto px-12 py-4">*/}

          <AchievementsSection/>
          {/*</div>*/}
          <WorkExperience/>


          <div className="container mt-12 sm:mt-12 mx-auto px-12 py-4">
              {/*<AboutSection/>*/}
              <Technologies/>
              <ProjectsSection/>
              <EmailSection/>
          </div>
              <Footer/>
      </main>
);
}
