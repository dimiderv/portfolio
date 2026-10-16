import Image from "next/image";
import { experiences, educationLogo, internshipLogo } from "@/constants";
import Reveal from "./Reveal";
import ExperienceCard from "./ExperienceCard";

export default function WorkExperience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <p className="eyebrow">Experience</p>
      <h2 id="experience-title" className="section-title">Where I’ve been building.</h2>
      <p className="mt-4 max-w-2xl leading-7 text-gray-400">
        My work spans business applications, content platforms, and blockchain projects, with a focus on making complex workflows easier to use.
      </p>
      <div className="mt-10">
        {experiences.map((experience) => <Reveal key={experience.id}><ExperienceCard experience={experience} /></Reveal>)}
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-[#19191c] p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <Image src={educationLogo} alt="" width={48} height={48} className="h-12 w-12 rounded-full bg-white object-contain p-1" />
          <h3 className="text-lg font-semibold text-white">Engineering background</h3>
        </div>
        <p className="mt-3 text-sm leading-7 text-gray-300">
          BSc and MSc in Electrical and Computer Engineering, Democritus University of Thrace, Greece.
          My master’s research explored food supply chain traceability with Hyperledger Fabric.
        </p>
        <div className="mt-5 flex items-center gap-4">
          <Image src={internshipLogo} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full bg-white object-contain p-1" />
          <p className="text-sm leading-7 text-gray-400">Earlier, I developed an internal onboarding application during an engineering internship at Circuits Integrated in Athens.</p>
        </div>
      </div>
    </section>
  );
}
