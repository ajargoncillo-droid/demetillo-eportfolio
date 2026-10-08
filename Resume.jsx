import SectionTitle from './SectionTitle'
import { profile, education, experience, skills } from './data'

function downloadCV() {
  const lines = [
    profile.name, profile.title, profile.email, '',
    'EDUCATION',
    ...education.map((e) => `- ${e.detail}, ${e.school} (${e.years})`), '',
    'EXPERIENCE',
    ...experience.map((e) => `- ${e.role}, ${e.place} (${e.years}): ${e.detail}`), '',
    'SKILLS', skills.join(', '),
  ]
  const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain' }))
  const a = document.createElement('a')
  a.href = url
  a.download = `${profile.name.replace(/\s+/g, '_')}_CV.txt`
  a.click()
  URL.revokeObjectURL(url)
}

export default function Resume() {
  return (
    <section id="resume" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Resume</SectionTitle>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-xl font-bold">Education</h3>
            <ul className="space-y-4 border-l-2 border-forest/20 pl-5">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-semibold text-forest">{e.detail}</p>
                  <p>{e.school}</p>
                  <p className="text-sm text-moss">{e.years}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-xl font-bold">Experience</h3>
            <ul className="space-y-4 border-l-2 border-forest/20 pl-5">
              {experience.map((e) => (
                <li key={e.role}>
                  <p className="font-semibold text-forest">{e.role}</p>
                  <p>{e.place}</p>
                  <p className="text-sm text-moss">{e.years}</p>
                  <p className="mt-1 text-sm">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="mb-3 font-display text-xl font-bold">Skills</h3>
          <p className="max-w-prose">{skills.join(', ')}.</p>
        </div>
        <button
          onClick={downloadCV}
          className="mt-8 rounded-lg bg-forest px-5 py-3 font-semibold text-white transition hover:bg-forest/90 focus-visible:outline-2 focus-visible:outline-gold"
        >
          Download CV
        </button>
      </div>
    </section>
  )
}
