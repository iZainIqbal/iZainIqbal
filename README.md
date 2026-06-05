# Zain Iqbal - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Flutter Developer, Full-Stack Engineer, and Unity Game Developer.

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

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages (`gh-pages`)

## 💼 Featured Projects

| Project | Stack | Link |
|---|---|---|
| **Handman** — Swiss craftsmen marketplace (live, 100+ screens, 4 roles) | Flutter · React 19 · TypeScript · FastAPI · Docker · Stripe/TWINT | [handman.ch](https://handman.ch) |
| **Rawteen** — Nutrition grocery delivery (Dubai) | Flutter · WooCommerce · REST | [Case study](https://metavizai.com/case-study/woocommerce-based-grocery-delivery-app-nutrition-focused-e-commerce-for-rawteen-dubai/) |
| **AI Apex** — AI fitness & nutrition coaching | Flutter · Generative AI · Firebase | [Case study](https://metavizai.com/case-study/ai-apex-personalized-fitness-nutrition-coaching-powered-by-generative-ai/) |
| **Snap & Shop** — Visual-search commerce | Flutter · Visual AI · Stripe | [Case study](https://metavizai.com/case-study/snap-and-shop-transforming-mobile-commerce-through-visual-discovery/) |
| **Wellness Accountability** — Habit & goal tracking | Flutter · Firebase · Real-time | [Case study](https://metavizai.com/case-study/wellness-accountability-app-a-complete-wellness-platform-by-metaviz-ai/) |
| **Digitalize Blood Bank** — Real-time donor matching | Flutter · Firebase · FCM | [Code](https://github.com/iZainIqbal/digitalize-blood-bank) · [Demo](https://www.youtube.com/shorts/XoDwdQPJYMU) |
| **QR Scanner** — 100+ Play Store downloads | Flutter · Android API | [Post](https://www.linkedin.com/posts/netsflow_appdevelopment-flutterdev-netsflow-activity-7243544883993464832-XlSh) |
| **Chrono Chase** — Time-travel runner game | Unity · C# | [Post](https://www.linkedin.com/posts/ali-shan-4469a521a_unity-gamedev-3d-activity-7321482456098848771-M-jd) |

> Project data lives in [`src/components/projects.js`](src/components/projects.js).

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
- Update project data in `src/components/projects.js`
- Customize certificates in `src/components/certificates.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: appdev.zain@gmail.com
- **LinkedIn**: [zain-iqbal-devs](https://www.linkedin.com/in/zain-iqbal-devs/)
- **GitHub**: [iZainIqbal](https://github.com/iZainIqbal)

---

Made with ❤️ and lots of coffee ☕
