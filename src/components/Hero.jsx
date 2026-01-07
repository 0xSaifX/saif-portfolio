import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-emerald-400">Saif</span> 
        </h1>

        <p className="text-zinc-400 max-w-xl mb-8">
          Junior Frontend Developer building clean, responsive web interfaces
          with React and Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-emerald-400 text-zinc-100 px-6 py-3 rounded-lg font-medium hover:bg-emerald-300 transition">
            View Projects
          </a>

          <a
            href="https://github.com/0xSaifX"
            target="_blank"
            className="border border-zinc-700 px-6 py-3 rounded-lg hover:border-emerald-400 transition">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
