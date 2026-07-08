import type { Project } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

export default function ProjectList({ items }: { items: Project[] }) {
  return (
    <div className="space-y-0">
      {items.map((project) => (
        <a
          key={project.id}
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 px-4 py-4 -mx-4 rounded-lg hover:bg-warm-200/50 dark:hover:bg-warm-600/20 transition-colors duration-150"
        >
          {/* Thumbnail */}
          <div className="w-32 rounded overflow-hidden shrink-0 self-stretch">
            <img
              src={project.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-[family-name:var(--font-heading)] font-medium text-lg text-warm-700 dark:text-warm-200">
                {project.title}
              </h3>
              <ArrowUpRight
                size={16}
                className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
              />
            </div>
            <p className="text-[0.938rem] text-warm-500 dark:text-warm-300 mt-0.5">
              {project.description}
            </p>
            <div className="flex gap-2 mt-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-warm-400 dark:text-warm-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Date — revealed on hover */}
          {project.date && (
            <span className="text-xs text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 pt-1">
              {project.date}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
