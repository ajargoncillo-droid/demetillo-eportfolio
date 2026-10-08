import { profile } from './data'

export default function Home() {
  return (
    <section id="home" className="bg-forest px-5 pb-20 pt-32 text-white">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div>
        <p className="mb-3 text-lg text-gold">Welcome to my e-portfolio</p>
        <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-7xl">
          Hi, I&rsquo;m {profile.name}.
        </h1>
        <p className="mt-2 font-display text-xl text-white/80 sm:text-2xl">
          {profile.title}, {profile.school}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-gold px-5 py-3 font-semibold text-ink transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-white">
            View my projects
          </a>
          <a href="#contact" className="rounded-lg border border-white/50 px-5 py-3 font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white">
            Contact me
          </a>
        </div>
        </div>
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-48 w-48 rounded-full border-4 border-gold object-cover sm:h-64 sm:w-64" />
      </div>
    </section>
  )
}
