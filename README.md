# Portfolio

React + Vite portfolio site.

## Run locally

```bash
npm install
npm run dev
```

## Edit your content

Everything text/link-based lives in **`src/data/content.js`** — name, resume link,
email, GitHub/LinkedIn, hero copy, project details, skills, and experience.
You shouldn't need to touch the components to update content.

Placeholders to fill in before publishing:
- `profile.resumeUrl`, `profile.email`, `profile.github`, `profile.linkedin`
- `projects[0].liveUrl`, `projects[0].githubUrl`
- `experience[0]` — company name, dates, description
- `skills` — trim/adjust to your real toolset

## Structure

```
src/
  components/   Header, Hero, About, Work, Skills, Experience, Contact, Footer
  data/         content.js — single source of truth for all text/links
  hooks/        useReveal.js — scroll-fade-in effect
  index.css     design tokens + all styles
  App.jsx       composes the sections
```

## Deploy

```bash
npm run build
```

Deploy the `dist/` folder to Vercel (matches your existing deploy setup).
