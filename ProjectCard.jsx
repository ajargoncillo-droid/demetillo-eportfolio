import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-forest/15 bg-white">
      {project.image ? (
        <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
      ) : (
        <div className="flex h-40 items-center justify-center bg-forest/90 font-display text-4xl font-extrabold text-gold">
          {project.title.charAt(0)}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-forest">{project.title}</h3>
        <p className="mt-1 text-sm text-moss">{project.tech.join(', ')}</p>
        <p className="mt-3 text-ink/85">{project.summary}</p>

        {open && (
          <div className="mt-3 rounded-lg bg-paper p-3 text-sm leading-relaxed transition-all">
            {project.details}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-2 block font-semibold text-forest underline">
                Open project
              </a>
            )}
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-auto self-start pt-4 font-semibold text-forest underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-gold"
        >
          {open ? 'Show less' : 'View more'}
        </button>
      </div>
    </article>
  )
}
