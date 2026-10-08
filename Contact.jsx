import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { profile } from './data'

const empty = { name: '', email: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!v.email.trim()) e.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email, like name@example.com.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setSent(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSent(true)
      setValues(empty)
    }
  }

  const field = 'mt-1 w-full rounded-lg border border-forest/30 bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-gold'

  return (
    <section id="contact" className="bg-forest/5 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Contact</SectionTitle>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="max-w-prose">Have a question or want to work together? Send a message or reach me here.</p>
            <p className="mt-4"><a href={`mailto:${profile.email}`} className="font-semibold text-forest underline">{profile.email}</a></p>
            <ul className="mt-4 space-y-2">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="font-semibold text-forest underline">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} noValidate className="space-y-4">
            {['name', 'email'].map((n) => (
              <div key={n}>
                <label htmlFor={n} className="font-semibold capitalize">{n}</label>
                <input id={n} name={n} type={n === 'email' ? 'email' : 'text'} value={values[n]} onChange={onChange} className={field} aria-invalid={!!errors[n]} />
                {errors[n] && <p className="mt-1 text-sm text-red-700">{errors[n]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="font-semibold">Message</label>
              <textarea id="message" name="message" rows="4" value={values.message} onChange={onChange} className={field} aria-invalid={!!errors.message} />
              {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}
            </div>
            <button type="submit" className="rounded-lg bg-forest px-5 py-3 font-semibold text-white transition hover:bg-forest/90 focus-visible:outline-2 focus-visible:outline-gold">
              Send message
            </button>
            {sent && <p role="status" className="rounded-lg bg-gold/30 p-3 font-semibold text-forest">Message sent. Thank you for reaching out.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
