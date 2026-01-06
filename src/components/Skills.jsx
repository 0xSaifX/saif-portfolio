const skills = [
  "React",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "Figma",
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
