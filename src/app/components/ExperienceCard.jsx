import CompanyLogo from "./CompanyLogo";
import TechStack from "./TechStack";

export default function ExperienceCard({ experience }) {
  return (
    <article className="experience-entry relative grid gap-5 border-t border-white/10 py-8 md:grid-cols-[15rem_1fr] md:gap-8">
      <div className="flex items-start gap-4">
        <CompanyLogo src={experience.logo} company={experience.company} />
        <div>
          <h3 className="text-lg font-semibold text-white">{experience.company}</h3>
          <p className="mt-2 text-xs leading-5 text-gray-400">{experience.date}</p>
        </div>
      </div>
      <div>
        <p className="font-medium text-purple-200">
          {experience.title}
          {experience.employmentType && <span className="font-normal text-gray-400"> · {experience.employmentType}</span>}
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-300 marker:text-pink-300">
          {experience.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <div className="mt-5"><TechStack technologies={experience.technologies} compact /></div>
      </div>
    </article>
  );
}
