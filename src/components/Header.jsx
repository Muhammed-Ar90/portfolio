import { useState } from 'react'
import { profile } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header>
      <div className="wrap nav">
        <div className="logo">
          {profile.name.toLowerCase()}<span>{profile.logoSuffix}</span>
        </div>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className="nav-right">
          <a className="btn btn-primary" href={profile.resumeUrl} download>
            Resume ↓
          </a>
          <button
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`menu-icon ${open ? 'is-open' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} download onClick={() => setOpen(false)}>
                Resume ↓
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
