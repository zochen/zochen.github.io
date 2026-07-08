import { projects } from "@/data/projects";
import ProjectList from "./ProjectList";

export default function GameDevelopment() {
  const games = projects.filter((p) => p.category === "games");

  return (
    <section id="game-development" className="py-10 border-t border-warm-200 dark:border-warm-600">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-warm-700 dark:text-warm-200">
          game dev
        </h2>
      </div>

      <ProjectList items={games} />
    </section>
  );
}
