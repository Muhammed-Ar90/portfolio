import { profile } from '../data/content'

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <div className="logo">
          {profile.name.toLowerCase()}<span>{profile.logoSuffix}</span>
        </div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="btn btn-primary" href={profile.resumeUrl} download>
          Resume ↓
        </a>
      </div>
    </header>
  )
}
