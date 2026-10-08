import { useState } from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from './data'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="bg-forest/5 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Projects</SectionTitle>
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                filter === c ? 'bg-forest text-white' : 'border border-forest/40 text-forest hover:bg-forest/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {shown.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
