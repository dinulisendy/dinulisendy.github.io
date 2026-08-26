# Dinuli Galgamuwa — Portfolio & Blog

Personal portfolio and blog website for Dinuli Galgamuwa — Engineering Undergraduate, CIMA Student, and Consulting & Strategy Aspirant.

**Live site:** https://dinulisendy.github.io

---

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server (available at http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Adding a New Blog Post

1. Create a new `.md` file in `src/content/blog/`, e.g. `src/content/blog/my-new-post.md`
2. Add the required frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "A short description of your post (used in listings and SEO)."
pubDate: 2026-09-01
tags: ["Tag One", "Tag Two"]
featured: false
---

Your post content here...
```

3. The post will automatically appear on `/blog` and be accessible at `/blog/my-new-post`.

---

## Replacing Placeholder Content

| Item | Location | Action |
|------|----------|--------|
| **Hero avatar photo** | `public/images/avatar-placeholder.png` | Replace with your real photo, update filename in `src/pages/index.astro` |
| **About page photo** | `public/images/about-placeholder.png` | Replace with your real photo, update filename in `src/pages/about.astro` |
| **Resume PDF** | `public/resume.pdf` | Replace with your real PDF — it links to `/resume.pdf` from the Resume page |
| **Formspree endpoint** | `src/pages/contact.astro` | Sign up at [formspree.io](https://formspree.io), create a form, replace `yourFormId` in the `action` attribute |
| **LinkedIn URL** | `src/components/Footer.astro` + `src/pages/contact.astro` + `src/pages/resume.astro` | Search for `linkedin.com/in/dinuligalgamuwa` and confirm/update the URL |
| **GitHub URL** | `src/components/Footer.astro` | Replace the placeholder GitHub URL if you have a public profile |
| **Site URL** | `astro.config.mjs` | Replace `username` in `site: 'https://username.github.io'` |

---

## Deployment to GitHub Pages

### One-time Setup

1. Create a new GitHub repository named `username.github.io` (exactly — replacing `username` with your GitHub username)
2. In the repository settings → **Pages** → set **Source** to **GitHub Actions**
3. Update `astro.config.mjs`:
   ```js
   site: 'https://your-real-username.github.io',
   ```

### Push and Deploy

```bash
git init
git add .
git commit -m "Initial commit: Dinuli Galgamuwa portfolio site"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the site on every push to `main`. Deployment takes ~1–2 minutes. You can monitor progress in the **Actions** tab of your repository.

---

## Project Structure

```
/
├── astro.config.mjs          # Astro config — update site URL here
├── package.json
├── src/
│   ├── components/
│   │   ├── Nav.astro         # Sticky navigation with mobile hamburger
│   │   └── Footer.astro      # Footer with social links
│   ├── content/
│   │   ├── config.ts         # Content Collections schema
│   │   └── blog/             # Blog posts (Markdown .md files)
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Base HTML shell with SEO meta tags
│   │   └── BlogPostLayout.astro  # Blog post layout with reading time
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   ├── blog/
│   │   │   ├── index.astro   # Blog listing
│   │   │   └── [...slug].astro  # Individual blog post
│   │   ├── about.astro       # About page
│   │   ├── portfolio.astro   # Portfolio / case studies
│   │   ├── resume.astro      # Resume / CV
│   │   └── contact.astro     # Contact form
│   └── styles/
│       └── global.css        # Design tokens + all global styles
├── public/
│   ├── images/               # Static images (replace placeholders here)
│   ├── resume.pdf            # TODO: replace with real PDF
│   └── favicon.svg
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions deployment pipeline
```

---

## Tech Stack

- **[Astro](https://astro.build)** — static site generator
- **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)** — type-safe blog content
- **Plain CSS** with CSS custom properties — no framework
- **[Formspree](https://formspree.io)** — contact form backend
- **IntersectionObserver API** — vanilla JS scroll animations
- **GitHub Actions + GitHub Pages** — automated deployment
