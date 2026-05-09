import { BookOpenCheck, Atom, Monitor, ArrowUpRight, Baby, Briefcase, Cloud, Globe, Bot } from 'lucide-react';

const categoryIcons = {
  'Company Profile': Briefcase,
  'Media pembelajaran': BookOpenCheck,
  SAAS: Cloud,
  'AI and Automation': Atom,
  'Machine Learning': Bot,
};

export default function ProjectCard({ project, index }) {
  const Icon = categoryIcons[project.category] || BookOpenCheck;

  return (
    <a
      href={`/${project.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pop-in block group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <article className="bg-white border-[3px] border-comic-dark shadow-brutal transition-all duration-200 hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] overflow-hidden">
        {/* Colored top block */}
        <div
          className="relative h-36 flex items-center justify-center border-b-[3px] border-comic-dark overflow-hidden"
          style={{ backgroundColor: project.accent.hex }}
        >
          {/* Decorative grid dots */}
          <div className="absolute inset-0 halftone-bg opacity-100" />

          {/* Decorative corner squares */}
          <div className="absolute top-2 left-2 w-4 h-4 border-[2px] border-comic-dark/20 rotate-12" />
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-comic-dark/10 rotate-45" />

          <Icon
            size={52}
            strokeWidth={1.8}
            className="text-white drop-shadow-[2px_2px_0px_rgba(26,26,26,0.25)] relative z-10 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-[-4deg]"
          />

          {/* Arrow indicator */}
          <div className="absolute top-3 right-3 w-7 h-7 bg-white border-[2px] border-comic-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 translate-x-2">
            <ArrowUpRight size={14} strokeWidth={3} className="text-comic-dark" />
          </div>
        </div>

        {/* Content bottom */}
        <div className="p-4">
          <h3 className="font-extrabold text-lg uppercase leading-tight text-comic-dark tracking-tight mb-3 line-clamp-2">
            {project.title}
          </h3>

          <span
            className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider border-[2px] border-comic-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] ${project.accent.bg} ${project.accent.text}`}
          >
            {project.category}
          </span>
        </div>
      </article>
    </a>
  );
}
