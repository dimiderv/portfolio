import Image from "next/image";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import portrait from "../../../public/images/grad.jpeg";
import webisoft from "@/tech/webisoft.png";
import CompanyLogo from "./CompanyLogo";

export default function HeroSection() {
  return (
    <section id="about" aria-labelledby="intro-title" className="hero-section page-container pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="hero-intro min-w-0">
          <p className="eyebrow">Hello, I’m</p>
          <h1 id="intro-title" className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">
            <span className="name-gradient">Dejvi</span><br />Dervishi<span className="text-pink-300">.</span>
          </h1>
          <p className="mt-6 text-xl font-medium leading-relaxed text-gray-100 sm:text-2xl">
            Full-stack developer.<br /> MSc in Electrical and Computer Engineering.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-gray-400">
            Based in Montréal, I build web applications, payment systems, and integrations.
            My work spans React and Next.js interfaces, Django and Node.js backends, and crypto products—from wallet checkout to transaction tracking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">Explore my work <ArrowDownIcon aria-hidden="true" className="h-4 w-4" /></a>
            <a href="#contact" className="button-secondary">Let’s connect <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" /></a>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 text-sm text-gray-400">
            <CompanyLogo src={webisoft} company="Webisoft" small />
            <p>Currently building at <span className="text-gray-200">Webisoft</span></p>
          </div>
        </div>
        <div className="portrait-scene relative mx-auto mb-4 w-full max-w-64 sm:max-w-80">
          <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-[#1b1b1e] p-2.5">
            <Image src={portrait} alt="Dejvi Dervishi" className="h-full w-full rounded-full object-cover object-top" sizes="(max-width: 639px) 256px, 320px" preload />
          </div>
        </div>
      </div>
    </section>
  );
}
