import Image from "next/image";
import { ArrowUpRightIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import ProjectCard from "./ProjectCard";
import TechStack from "./TechStack";
import Reveal from "./Reveal";
import { internalWork, projects } from "@/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title" className="section-title">A little of what I’ve built<span className="text-pink-300">.</span></h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          Public-facing work and the internal tools behind everyday workflows.
        </p>
      </Reveal>
      <div className="mt-10 space-y-8">
        {projects.map((project) => <Reveal key={project.id}><ProjectCard project={project} /></Reveal>)}
        <Reveal>
          <article className="internal-project grid gap-7 rounded-2xl border border-white/10 p-6 sm:p-9 md:grid-cols-[5rem_1fr]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#13101c] p-3">
              <Image src={internalWork.logo} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">{internalWork.company}</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-gray-300"><LockClosedIcon aria-hidden="true" className="h-3 w-3" /> Internal tools</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{internalWork.title}</h3>
              <p className="mt-4 max-w-2xl leading-7 text-gray-300">{internalWork.description}</p>
              <p className="mt-3 text-sm leading-6 text-gray-400">This work was for the internal platform. The company’s public website is linked below for context.</p>
              <div className="mt-5"><TechStack technologies={internalWork.technologies} compact /></div>
              <a href={internalWork.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-purple-200 hover:text-white" aria-label="About AddAd Media, company website (opens in a new tab)">
                About AddAd Media <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
