export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur border-b border-zinc-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Saif
        </h1>

        <div className="flex items-center gap-6 text-sm text-white/90">
          <a href="#projects" className="hover:text-emerald-400 no-underline transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-emerald-400 no-underline transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-emerald-400 no-underline transition">
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-zinc-300 px-4 py-2 no-underline rounded-lg text-zinc-200 hover:border-emerald-400 transition">
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
