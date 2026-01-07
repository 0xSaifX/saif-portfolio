export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur border-b border-zinc-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg ">
          Saif<span className="">.</span>
        </span>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-emerald-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-emerald-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-zinc-700 px-4 py-2 rounded-lg text-zinc-200 hover:border-emerald-400 transition">
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
