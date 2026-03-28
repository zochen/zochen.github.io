"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Games", value: "games" },
  { label: "Web", value: "web" },
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-10 border-t border-warm-200 dark:border-warm-600">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-warm-700 dark:text-warm-200">
          Projects
        </h2>
        <div className="flex gap-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                active === filter.value
                  ? "text-warm-700 dark:text-warm-200 font-medium bg-warm-200/50 dark:bg-warm-600/30"
                  : "text-warm-400 hover:text-warm-600 dark:hover:text-warm-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm text-warm-400 dark:text-warm-400 mb-6">games and sites galore</p>

      <div className="space-y-0">
        {filtered.map((project) => (
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
                <h3 className="font-[family-name:var(--font-heading)] font-medium text-lg text-warm-700 dark:text-warm-200" style={{ textTransform: "none" }}>
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
                />
              </div>
              <p className="text-[0.938rem] text-warm-400 dark:text-warm-400 mt-0.5">
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
    </section>
  );
}
