import { about } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">01</span>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <p>{about.paragraph}</p>
          <div className="stat-list">
            {about.stats.map((s, i) => (
              <div className="stat" key={i}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
