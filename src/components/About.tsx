export default function About() {
  const skills = [
    { category: "Languages", items: "JavaScript, Java, Python, C#, HTML/CSS, C++, SQL" },
    { category: "Developer Tools", items: "Git, Unity, VS Code, Cursor AI, Vim, Figma, PyCharm, Claude" },
    { category: "Spoken", items: "English and Chinese (native/bilingual), French (limited working proficiency)" },
  ];

  return (
    <section className="py-16 border-t border-warm-200 dark:border-warm-600">
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-warm-700 dark:text-warm-200 mt-12 mb-6">
        skills
      </h3>

      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.category} className="flex gap-4">
            <span className="text-sm font-medium text-warm-400 dark:text-warm-400 w-32 shrink-0 pt-0.5">
              {group.category}
            </span>
            <span className="text-[1.05rem] text-warm-500 dark:text-warm-400">
              {group.items}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
