import React, { useState } from "react";
import {
  Smartphone,
  CreditCard,
  Fingerprint,
  Radio,
  Languages,
  Bot,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Code2,
  Star,
} from "lucide-react";

const Handman = () => {
  const [expanded, setExpanded] = useState(false);
  const publicUrl = process.env.PUBLIC_URL || "";

  const myContributions = [
    {
      icon: Smartphone,
      label: "Flutter Mobile App",
      desc: "Built the customer + craftsman mobile experience end-to-end on iOS and Android, matching the four-language design system (DE / FR / IT / EN).",
    },
    {
      icon: Radio,
      label: "NFC Payments",
      desc: "Integrated tap-to-pay NFC flows on the craftsman field-ops app so technicians can collect payments on-site without paper invoices.",
    },
    {
      icon: CreditCard,
      label: "Twint + Stripe (Flutter)",
      desc: "Wired up Twint (Switzerland's leading mobile wallet) alongside Stripe Connect inside Flutter — Swiss VAT-correct invoicing on every transaction.",
    },
    {
      icon: Fingerprint,
      label: "Passkey Authentication",
      desc: "Shipped passkey-based passwordless auth in the mobile app for a frictionless, phishing-resistant sign-in experience.",
    },
    {
      icon: Bot,
      label: "GenAI Butler Integration",
      desc: "Embedded the Butler assistant across mobile screens — quote drafting, scheduling, and customer chat surfaces hooked into the streaming AI backend.",
    },
    {
      icon: Languages,
      label: "Multilingual UX",
      desc: "Implemented i18n flows in Flutter so every screen, error state, and notification renders correctly in DE / FR / IT / EN.",
    },
  ];

  const projectStats = [
    { value: "4", label: "Languages (DE/FR/IT/EN)" },
    { value: "iOS + Android", label: "Mobile platforms" },
    { value: "Twint + Stripe + NFC", label: "Payment rails" },
    { value: "CHF 5.76M", label: "ARR target market" },
  ];

  const promoCards = [
    {
      src: `${publicUrl}/images/handman/handman_butler_car_lockout.webp`,
      caption: "AI Butler — Job Detail",
      desc: "Context-rich job details with location, media, and AI guidance in one surface.",
    },
    {
      src: `${publicUrl}/images/handman/handman_pro_assistant_quotes.webp`,
      caption: "Pro Assistant — Quotes",
      desc: "Recent quotes with one-tap open, follow-up actions, and faster turnaround.",
    },
    {
      src: `${publicUrl}/images/handman/handman_reviews.webp`,
      caption: "Reviews & Trust Score",
      desc: "Reputation signals that make the marketplace feel safe and predictable.",
    },
  ];

  // Same three screens as the promo cards, framed as phone shots
  const screenshots = promoCards.map(({ src, caption }) => ({ src, caption }));

  const aboutProject = [
    "Handman is Switzerland's first AI-native operating system for craftsmen — replacing the three software packages every Swiss tradesperson uses today (quoting & invoicing, scheduling, CRM) and folding them into the country's largest AI-powered craftsman marketplace.",
    "Where legacy directories like Renovero and shut-down marketplaces like Buildigo stopped at lead generation, Handman owns the full workflow: search → quote → book → pay → track → dispute. Every module is API-first so external AI agents (Apple Intelligence, Gemini, ChatGPT, insurance chatbots) can deterministically book a craftsman by 2029 via the Annex B 'Preferred Partner' surface.",
    "Built at Metaviz AI as a four-language platform (DE / FR / IT / EN) across iOS, Android, and web, with a GenAI Butler embedded on every screen instead of behind a chat icon.",
  ];

  const techStack = [
    ["Mobile", "Flutter (iOS + Android), offline-capable job sheets"],
    ["Web", "React 19 + TypeScript + Vite + Tailwind 4"],
    ["Backend", "FastAPI (Python 3.11), SQLAlchemy 2, Alembic"],
    ["Data", "PostgreSQL · Redis · S3-compatible storage"],
    ["AI Layer", "GPT-4o-class LLMs · RAG · structured tool calls"],
    ["Workers", "Celery — PDFs, scraping, scoring, notifications"],
    ["Payments", "Stripe Connect · Twint · NFC · Swiss VAT"],
    ["Auth", "Passkeys (mobile), email/OAuth (web)"],
    ["i18n", "i18next across DE / FR / IT / EN"],
    ["DevOps", "GitHub Actions · Docker Compose · nginx"],
  ];

  const outcomes = [
    "Net savings of CHF 1,700–3,900/year per craftsman versus the legacy Bexio + scheduler + Treuhänder stack.",
    "Three software packages replaced per craftsman (quotes & invoicing, scheduling, CRM).",
    "Four-language coverage from day one — DE / FR / IT / EN — versus competitors shipping German-only.",
    "Annex B API surface ready to plug into Apple Intelligence, Gemini, and ChatGPT by 2029.",
    "6,000 paying businesses targeted in Year 1 out of a ~96,000-profile scrapeable craftsman corpus.",
  ];

  return (
    <section
      id="handman"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Featured Project · 2025 — Present
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Handman
          </h2>
          <p className="text-lg md:text-xl text-blue-400 mb-3">
            Switzerland's First AI-Native Craftsman Marketplace
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Flutter mobile lead on the customer and craftsman field-ops apps —
            wiring NFC payments, Twint + Stripe, passkey authentication, and
            the GenAI Butler into a four-language Swiss product. Built at
            Metaviz AI.
          </p>
        </div>

        {/* MY ROLE — front and center */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">My Role</h3>
              <p className="text-gray-400 text-sm">
                What I personally shipped on Handman
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {myContributions.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-800/60 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-1.5">{c.label}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {projectStats.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-5 rounded-xl border border-blue-500/20 text-center"
            >
              <div className="text-white text-xl md:text-2xl font-bold mb-1">
                {s.value}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Promo gallery — wide marketing cards at natural ratio */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            Product Highlights
          </h3>
          <p className="text-gray-400 text-sm text-center mb-8">
            Three flows from Handman — job creation, quoting, and the
            map-first marketplace.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {promoCards.map((p, i) => (
              <div
                key={i}
                className="bg-gray-800/40 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="aspect-[9/16] bg-[#1f3d4a] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-1">{p.caption}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App screens — real screenshots in phone frames */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            App Screens
          </h3>
          <p className="text-gray-400 text-sm text-center mb-8">
            Real screens from the Handman mobile app — AI Butler, Pro
            Assistant, and the Reviews / Trust Score surface.
          </p>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory justify-center md:justify-center scrollbar-hide">
            {screenshots.map((s, i) => (
              <div key={i} className="snap-start flex-shrink-0 w-[200px] md:w-[220px]">
                <div className="relative aspect-[9/19] bg-gray-900 rounded-[2rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-2xl z-10"></div>
                  <img
                    src={s.src}
                    alt={s.caption}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-300 text-xs text-center mt-3 font-medium">
                  {s.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle expand for project context */}
        <div className="text-center mb-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/50 rounded-full text-blue-400 transition-all duration-300"
            aria-expanded={expanded}
          >
            <span>
              {expanded
                ? "Hide product context"
                : "About the product & stack"}
            </span>
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {expanded && (
          <div className="space-y-8">
            {/* About */}
            <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                About the Product
              </h3>
              <div className="space-y-4">
                {aboutProject.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Technical Stack
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Monorepo with strict separation between API, web, mobile, and AI
                workers — every layer independently deployable.
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {techStack.map(([k, v], i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-blue-400 font-semibold min-w-[110px]">
                      {k}:
                    </span>
                    <span className="text-gray-300">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Product Impact
              </h3>
              <ul className="space-y-3">
                {outcomes.map((o, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Handman;
