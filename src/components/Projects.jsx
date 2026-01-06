import { motion } from "framer-motion";
import { projects } from "../data/project";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-10">
        Selected <span className="text-emerald-400">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-zinc-800 rounded-xl p-6 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-emerald-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.live} target="_blank" className="text-emerald-400 hover:underline">
                Live
              </a>
              <a href={project.github} target="_blank" className="text-zinc-400 hover:text-emerald-400">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
