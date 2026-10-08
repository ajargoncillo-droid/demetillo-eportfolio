import { useState } from 'react'
import { profile } from './data'

export default function Navbar({ sections, active }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="font-display text-lg font-extrabold text-forest">
          {profile.name.split(' ')[0]}
        </a>

        <button
          className="rounded-md border border-forest/30 px-3 py-1.5 text-sm font-semibold text-forest focus-visible:outline-2 focus-visible:outline-gold md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 border-b border-forest/10 bg-paper p-4 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-semibold capitalize transition-colors ${
                  active === id ? 'bg-forest text-white' : 'text-forest hover:bg-forest/10'
                }`}
              >
                {id === 'about' ? 'About Me' : id === 'resume' ? 'Resume' : id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
