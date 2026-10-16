import Image from "next/image";
import { technologyIcons } from "@/constants";

export default function TechStack({ technologies, compact = false }) {
  return (
    <ul aria-label="Technologies used" className={`flex flex-wrap ${compact ? "gap-2" : "gap-3"}`}>
      {technologies.map((name) => (
        <li key={name} className={`tech-badge inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] ${compact ? "px-2.5 py-2 text-xs" : "px-3 py-2.5 text-sm"} text-gray-200`}>
          {technologyIcons[name] && (
            <Image
              src={technologyIcons[name]}
              alt=""
              width={24}
              height={24}
              className={`h-6 w-6 shrink-0 object-contain ${name === "Express" || name === "Django" ? "rounded-full bg-white p-0.5" : ""}`}
            />
          )}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
