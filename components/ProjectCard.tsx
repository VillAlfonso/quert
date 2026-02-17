import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  icon,
}: ProjectCardProps) {
  return (
    <div className="project-card p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-hollow-accent/30 to-hollow-void flex items-center justify-center border border-hollow-mist/20">
            {icon}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="font-cinzel text-xl text-hollow-glow tracking-wide mb-2">
            {title}
          </h3>
          <p className="font-cormorant text-hollow-mist text-sm mb-4 italic">
            {subtitle}
          </p>
          <p className="font-cormorant text-lg text-hollow-light leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="skill-tag font-cinzel text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
