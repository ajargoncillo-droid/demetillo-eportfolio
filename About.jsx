import SectionTitle from './SectionTitle'
import { profile, skills, interests } from './data'

export default function About() {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-display text-xl font-bold">Personal background</h3>
            <p className="max-w-prose leading-relaxed text-ink/85">{profile.background}</p>
            <p className="mt-3 text-moss">{profile.location}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-display text-xl font-bold">Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="rounded-full bg-forest px-3 py-1 text-sm text-white">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-display text-xl font-bold">Interests</h3>
              <ul className="flex flex-wrap gap-2">
                {interests.map((s) => (
                  <li key={s} className="rounded-full border border-forest/40 px-3 py-1 text-sm text-forest">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
