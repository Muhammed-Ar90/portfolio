import { profile } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const [ref, visible] = useReveal()
  return (
    <section id="contact" ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <div className="contact-panel">
          <h2>Let's talk</h2>
          <p>-- open to AI Developer / Data Scientist / Data Analyst roles</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.resumeUrl} download>Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
