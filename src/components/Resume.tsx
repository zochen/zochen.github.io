import { Download } from "lucide-react";

const timelineItems = [
  {
    title: "University of Irvine, California",
    role: "B.S. in Computer Science and Engineering",
    date: "2025 — Present",
    description: "",
  },
  {
    title: "Valley Christian High School",
    role: "",
    date: "2021 — 2025",
    description: "",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-10 border-t border-warm-200 dark:border-warm-600">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-warm-700 dark:text-warm-200">
          resume
        </h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base px-3 py-1.5 rounded-md text-warm-400 hover:text-warm-600 dark:hover:text-warm-300 transition-colors"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="space-y-8">
        {timelineItems.map((item, i) => (
          <div key={i} className="flex gap-6">
            <span className="text-sm text-warm-400 w-28 shrink-0 pt-0.5">
              {item.date}
            </span>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-medium text-warm-700 dark:text-warm-200">
                {item.title}
              </h3>
              <p className="text-sm text-accent-500 dark:text-accent-400 mt-0.5">
                {item.role}
              </p>
              <p className="text-sm text-warm-500 dark:text-warm-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-warm-700 dark:text-warm-200 mt-10 mb-6">
        skills
      </h3>

      <div className="space-y-4">
        {[
          { category: "Languages", items: "JavaScript, Java, Python, C#, HTML/CSS, C++, SQL" },
          { category: "Developer Tools", items: "Git, Unity, VS Code, Cursor AI, Vim, Figma, PyCharm, Claude" },
          { category: "Spoken", items: "English and Chinese (native/bilingual), French (limited working proficiency)" },
        ].map((group) => (
          <div key={group.category} className="flex gap-4">
            <span className="text-sm font-medium text-warm-400 dark:text-warm-400 w-32 shrink-0 pt-0.5">
              {group.category}
            </span>
            <span className="text-[0.938rem] text-warm-500 dark:text-warm-400">
              {group.items}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
