import { skills } from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Skills() {
  const [ref, visible] = useReveal()
  return (
    <section id="skills" ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">03</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <div className="skill-cat" key={i}>
              <h4>{cat.category}</h4>
              <div className="tags">
                {cat.items.map((item, j) => (
                  <span className="tag" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
