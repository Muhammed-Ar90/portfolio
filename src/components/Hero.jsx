import { hero } from '../data/content'

function ConsoleLine({ line }) {
  if (line.type === 'comment') {
    return <p className="console-line console-comment">{line.text}</p>
  }
  if (line.type === 'kv') {
    return (
      <p className="console-line console-kv">
        <span className="console-key">{line.key}</span>
        <span className="console-val">
          {line.val}
          {line.cursor && <span className="cursor" />}
        </span>
      </p>
    )
  }
  return (
    <p className="console-line">
      {line.prompt && <span className="console-prompt">› </span>}
      {line.text}
    </p>
  )
}

export default function Hero() {
  return (
    <section className="hero" style={{ paddingTop: 60 }}>
      <div>
        <p className="eyebrow">portfolio / ai + data</p>
        <h1>
          {hero.headlineParts.map((part, i) =>
            typeof part === 'string' ? (
              <span key={i}>{part}</span>
            ) : (
              <em key={i}>{part.text}</em>
            )
          )}
        </h1>
        <p className="lede">{hero.lede}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#work">View project ↓</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>

      <div
        className="console"
        role="img"
        aria-label="Terminal panel showing a mock query returning candidate details"
      >
        <div className="console-bar">
          <div className="console-dot" />
          <div className="console-dot" />
          <div className="console-dot" />
        </div>
        {hero.console.map((line, i) => (
          <ConsoleLine line={line} key={i} />
        ))}
      </div>
    </section>
  )
}
