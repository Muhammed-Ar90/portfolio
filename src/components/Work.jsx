import { projects } from '../data/content'
import useReveal from '../hooks/useReveal'

function ProjectCard({ project }) {
  return (
    <div className="project">
      <div className="project-top">
        <div>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a className="btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          )}
          {project.githubUrl && (
            <a className="btn" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="field">
        <div className="field-key">Stack</div>
        <div className="field-val">
          {project.stack.map((tech, i) => (
            <span className="tag" key={i}>{tech}</span>
          ))}
        </div>
      </div>

      {project.fields.map((f, i) => (
        <div className="field" key={i}>
          <div className="field-key">{f.key}</div>
          <div className="field-val">{f.val}</div>
        </div>
      ))}
    </div>
  )
}

export default function Work() {
  const [ref, visible] = useReveal()
  return (
    <section id="work" ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">02</span>
          <h2>Featured project{projects.length > 1 ? 's' : ''}</h2>
        </div>
        {projects.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))}
      </div>
    </section>
  )
}
