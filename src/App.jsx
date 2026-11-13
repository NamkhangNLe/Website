import { useRef, useState } from 'react'
import { profile, projects } from './data/content.js'

const resumeHref = `${import.meta.env.BASE_URL}Namkhang_Le_Resume.pdf`

export default function App() {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState('')
  const tabs = useRef([])
  const current = projects[active]

  const onKey = (e) => {
    const n = projects.length
    let next = null
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (active + 1) % n
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (active - 1 + n) % n
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = n - 1
    if (next !== null) {
      e.preventDefault()
      setActive(next)
      tabs.current[next]?.focus()
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied('Copied')
    } catch {
      setCopied('Copy unavailable here. Use the email link above.')
    }
    setTimeout(() => setCopied(''), 3000)
  }

  return (
    <div className="page">
      <header className="top">
        <span className="top__mark" aria-hidden="true" />
        <span>{profile.name}</span>
        <span className="top__sp" />
        <a href={resumeHref} target="_blank" rel="noopener noreferrer">Resume</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </header>

      <main>
        <section className="intro" aria-labelledby="name">
          <p className="tag">Georgia Tech CS &apos;25 / Meta</p>
          <h1 id="name">
            <span>Namkhang</span>
            <span>Le.</span>
          </h1>
          <div className="bio">
            {profile.bio.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </section>

        <section className="work" aria-labelledby="work-h">
          <h2 id="work-h" className="tag">Hackathon and side projects</h2>
          <div className="split">
            <div role="tablist" aria-orientation="vertical" aria-label="Projects" className="rows" onKeyDown={onKey}>
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  ref={(el) => (tabs.current[i] = el)}
                  role="tab"
                  id={`tab-${p.id}`}
                  aria-selected={active === i}
                  aria-controls="panel"
                  tabIndex={active === i ? 0 : -1}
                  className="row"
                  onClick={() => setActive(i)}
                >
                  <span className="row__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="row__t">{p.title}</span>
                  <span className="row__arrow" aria-hidden="true">→</span>
                </button>
              ))}
            </div>
            <div id="panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} className="panel" key={current.id}>
              <h3>{current.title}</h3>
              <p>{current.description}</p>
              <ul className="tags">
                {current.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a className="cta" href={current.link} target="_blank" rel="noopener noreferrer">
                {current.linkText} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="hello" aria-labelledby="hello-h">
          <h2 id="hello-h" className="tag">Say hello</h2>
          <p className="hello__mail">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="hello__btns">
            <button type="button" className="cta cta--ghost" onClick={copyEmail}>
              Copy email
            </button>
            <span role="status" className="copied">{copied}</span>
          </div>
        </section>
      </main>
    </div>
  )
}
