import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://izainiqbal.github.io/iZainIqbal";
const DEFAULT_DESCRIPTION =
  "Flutter and full-stack developer shipping production apps — including Handman, Switzerland's first AI-native craftsman marketplace. React, FastAPI, Stripe, GPT-4.";

const META = {
  "/": {
    title: "Zain Iqbal — Flutter Developer | GenAI & Full-Stack Engineer",
    description: DEFAULT_DESCRIPTION,
  },
  "/services": {
    title: "Services — Zain Iqbal | Flutter, React & GenAI Development",
    description:
      "Mobile apps, full-stack web, and GenAI integrations — Flutter, React, FastAPI, Stripe, and payment rails for startups worldwide.",
  },
  "/projects": {
    title: "Projects — Zain Iqbal | 5 Production Flutter Apps",
    description:
      "Handman, Wellness Accountability, Rawteen Dubai, Snap n Shop, AI Apex — production Flutter apps with real users and real payments.",
  },
  "/about": {
    title: "About — Zain Iqbal | Flutter & Full-Stack Developer",
    description:
      "Flutter developer based in Lahore, Pakistan, building cross-platform products for startups in Switzerland, the US, and the UAE.",
  },
  "/handman": {
    title: "Handman Case Study — Zain Iqbal | Swiss Craftsman Marketplace",
    description:
      "Flutter mobile lead on Handman — NFC tap-to-pay, Twint + Stripe Connect, passkey auth, and a GenAI Butler across DE/FR/IT/EN.",
  },
  "/experience": {
    title: "Experience — Zain Iqbal | Metaviz AI & BIC",
    description:
      "Professional experience: Flutter developer at Metaviz AI shipping five production apps, plus a real-time blood-donor app internship.",
  },
  "/certificates": {
    title: "Certifications — Zain Iqbal | IBM Coursera",
    description:
      "IBM Coursera certifications across Cloud, DevOps, Python, Agile, and Unity game development.",
  },
  "/contact": {
    title: "Contact — Zain Iqbal | Hire a Flutter Developer",
    description:
      "Hire a Flutter / React Native developer for your next app — remote worldwide, typical response within 24 hours.",
  },
};

// Sets document title, meta description, and canonical URL per route.
// Kept dependency-free (no react-helmet) — a hook is enough for a SPA.
const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = META[pathname] || META["/"];
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`
      );
    }
  }, [pathname]);

  return null;
};

export default RouteMeta;
