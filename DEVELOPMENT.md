# Portfolio Website — Development Guide

This repository (`iZainIqbal/iZainIqbal`) doubles as my GitHub **profile repo** (its
`README.md` renders on my profile) **and** the source for my portfolio website,
deployed to GitHub Pages. This document holds the portfolio's build/deploy notes so the
top-level `README.md` can stay focused on the profile.

A modern, responsive portfolio website showcasing my work as a Flutter Developer,
Full-Stack Engineer, and Unity Game Developer.

## 🚀 Live Demo

Visit the live portfolio: **[https://izainiqbal.github.io/iZainIqbal/](https://izainiqbal.github.io/iZainIqbal/)**

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Integrated EmailJS contact form with validation and status feedback
- **Project Showcase**: Interactive project cards with links to live demos and case studies
- **Certifications**: Display of professional certifications with verification links
- **Accessibility**: Built with accessibility in mind (ARIA labels, keyboard navigation, skip links)
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages (`gh-pages`)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/iZainIqbal/iZainIqbal.git
cd iZainIqbal
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> ℹ️ These `REACT_APP_*` values are inlined into the production JS bundle at build time,
> so they are **not secrets** — the EmailJS public key is public by design. Lock down abuse
> via **Allowed Origins** + captcha in the EmailJS dashboard, not by hiding these values.
> `.env` should stay untracked (`git rm --cached .env` if it ever gets committed).

4. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

The portfolio is deployed to GitHub Pages. To deploy:

```bash
npm run deploy
```

> ⚠️ The `homepage` field in `package.json` **must** match the repository's case-sensitive Pages path (`https://izainiqbal.github.io/iZainIqbal`). A lowercase value (`/izainiqbal`) builds asset paths that 404 on the live site.

> ⚠️ Changes only go live after `npm run deploy` regenerates the `gh-pages` branch. A push to
> `devs` (the default branch) alone does **not** update the live site.

## 📱 Sections

- **Home**: Hero section with animated typing effect
- **About**: Skills, experience, and education
- **Services**: Services offered
- **Projects**: Portfolio of projects with descriptions and links
- **Certificates**: Professional certifications
- **Contact**: Contact form and social media links

## 🎨 Customization

- Update personal information in component files
- Replace images in `/public/images/`
- Modify colors and styling in Tailwind config
- Update project data in `src/data/projects.js` (the view lives in `src/components/projects.js`)
- Customize certificates in `src/components/certificates.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
