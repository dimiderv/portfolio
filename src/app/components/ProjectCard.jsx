import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import TechStack from "./TechStack";

export default function ProjectCard({ project }) {
  return (
    <article className="featured-project overflow-hidden rounded-2xl border border-purple-300/20 bg-[#19151f] md:grid md:grid-cols-[1.1fr_1fr]">
      <div className="project-window relative min-w-0 overflow-hidden bg-[#130e24] p-5 sm:p-8 md:flex md:items-center">
        <div className="w-full overflow-hidden rounded-lg border border-white/15 bg-[#161022] shadow-2xl">
          <div aria-hidden="true" className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#211b2c] px-3">
            <span className="h-2 w-2 rounded-full bg-pink-300/70" /><span className="h-2 w-2 rounded-full bg-purple-300/70" /><span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="ml-2 truncate text-[10px] tracking-wide text-gray-400">securityalliance.org</span>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src={project.image} alt="Security Alliance public website" fill sizes="(max-width: 767px) calc(100vw - 80px), 540px" className="object-cover object-top" />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 sm:p-9">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-2"><Image src={project.logo} alt="" width={28} height={28} className="h-7 w-7 object-contain" /></div>
          <p className="text-xs font-medium uppercase tracking-wider text-purple-200">{project.category}</p>
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-4 leading-7 text-gray-200">{project.description}</p>
        <p className="mt-3 text-sm leading-7 text-gray-400">{project.contribution}</p>
        <div className="mb-7 mt-6"><TechStack technologies={project.technologies} compact /></div>
        <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`} className="button-primary mt-auto self-start">
          Visit Security Alliance <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
