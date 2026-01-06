import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
    <Navbar/>
    <main className="max-w-6xl mx-auto px-6 pt-20">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
    </>
  )
}
