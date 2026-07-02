import { experience } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const [ref, visible] = useReveal()
  return (
    <section id="experience" ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">04</span>
          <h2>Experience</h2>
        </div>
        {experience.map((job, i) => (
          <div className="record" key={i}>
            <div className="record-top">
              <h3>{job.company} — {job.role}</h3>
              <span>{job.dates}</span>
            </div>
            <p className="record-location">{job.location}</p>
            <ul className="record-bullets">
              {job.bullets.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
            <div className="tags">
              {job.tags.map((tag, j) => (
                <span className="tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}