import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import { profile } from './data'

const SECTIONS = ['home', 'about', 'projects', 'resume', 'contact']

export default function App() {
  const [active, setActive] = useState('home')

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar sections={SECTIONS} active={active} />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-forest py-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
      </footer>
    </>
  )
}
