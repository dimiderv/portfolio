import { skillGroups } from "@/constants";
import TechStack from "./TechStack";
import Reveal from "./Reveal";

export default function Technologies() {
  return (
    <section id="technologies" aria-labelledby="skills-title" className="section">
      <Reveal>
        <p className="eyebrow">My stack</p>
        <h2 id="skills-title" className="section-title">Tools I reach for<span className="text-pink-300">.</span></h2>
      </Reveal>
      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.name} delay={index * 80} className="stack-group rounded-2xl border border-white/10 bg-[#19161d] p-6">
            <h3 className="mb-5 font-semibold text-white">{group.name}</h3>
            <TechStack technologies={group.skills} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
