import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Star, ArrowRight } from "lucide-react";

const publicUrl = process.env.PUBLIC_URL || "";
const SCREENS = `${publicUrl}/images/screens`;
const HANDMAN = `${publicUrl}/images/handman`;
const IMG = `${publicUrl}/images`;

const featuredProjects = [
  {
    title: "Handman",
    tagline: "Swiss craftsman OS · NFC + Twint + Stripe in Flutter",
    period: "Current · In Production",
    description:
      "Lead Flutter mobile developer on Switzerland's first AI-native craftsman marketplace. Built NFC tap-to-pay, integrated Twint and Stripe Connect inside Flutter, shipped passkey authentication, and wired the GenAI Butler across four languages (DE/FR/IT/EN).",
    link: "/handman",
    tech: ["Flutter", "NFC", "Twint", "Stripe", "Passkeys", "GPT-4o"],
    accent: "from-blue-500 to-purple-600",
    internal: true,
    screens: [
      `${HANDMAN}/butler_car_lockout.webp`,
      `${HANDMAN}/pro_assistant_quotes.webp`,
      `${HANDMAN}/reviews.webp`,
    ],
  },
  {
    title: "Wellness Accountability",
    tagline: "Full-stack · Flutter + Strapi + Stripe",
    period: "Dec 2025",
    description:
      "Built end-to-end: Flutter mobile frontend with rich-text editor, Google authentication, user profiles, earnings dashboard, and content feed — backed by a Strapi backend with Stripe payments integration.",
    link: "https://metavizai.com/case-study/wellness-accountability-app-a-complete-wellness-platform-by-metaviz-ai/",
    tech: ["Flutter", "Strapi", "Stripe", "Google Auth", "Rich Text"],
    accent: "from-amber-500 to-orange-600",
    // wellness_login.webp is broken/unreadable — re-export and add back
    screens: [
      `${SCREENS}/wellness_splash_logo.webp`,
      `${SCREENS}/wellness_splash.webp`,
      `${SCREENS}/wellness_Welcome.webp`,
      `${SCREENS}/wellness_onboarding.webp`,
      `${SCREENS}/wellness_Role.webp`,
      `${SCREENS}/wellness_invite.webp`,
      `${SCREENS}/wellness_Home.webp`,
      `${SCREENS}/wellness_homepage.webp`,
      `${SCREENS}/wellness_products.webp`,
      `${SCREENS}/wellness_shop.webp`,
      `${SCREENS}/wellness_progressscreen.webp`,
      `${SCREENS}/wellness_Profile.webp`,
    ],
  },
  {
    title: "Rawteen Dubai",
    tagline: "WooCommerce grocery delivery + Stripe",
    period: "Nov 2025",
    description:
      "Built Stripe payment integration and shipped enhancements to a nutrition-focused grocery delivery app on a WooCommerce backend — product catalog, cart, order tracking, and a clean Dubai-market consumer experience.",
    link: "https://metavizai.com/case-study/woocommerce-based-grocery-delivery-app-nutrition-focused-e-commerce-for-rawteen-dubai/",
    tech: ["Flutter", "Stripe", "WooCommerce", "REST APIs"],
    accent: "from-lime-500 to-green-600",
    // rawteen_notification.webp is actually an AI Apex screen (hydration/workout/calorie) — replace with a real Rawteen notification export
    screens: [
      `${SCREENS}/rawteen_splash2.webp`,
      `${SCREENS}/rawteen_splash.webp`,
      `${SCREENS}/rawteen_login.webp`,
      `${SCREENS}/rawteen_choose_diet.webp`,
      `${SCREENS}/rawteen_home.webp`,
      `${SCREENS}/rawteen_productdisplay.webp`,
      `${SCREENS}/rawteen_product_details.webp`,
      `${SCREENS}/rawteen_drawer.webp`,
    ],
  },
  {
    title: "Snap n Shop",
    tagline: "Visual-discovery mobile commerce",
    period: "Oct 2025",
    description:
      "Built the Flutter mobile frontend and Stripe Checkout integration for a visual-discovery e-commerce app with Google OAuth, image-based product search, and Provider state management.",
    link: "https://metavizai.com/case-study/snap-and-shop-transforming-mobile-commerce-through-visual-discovery/",
    tech: ["Flutter", "Stripe", "Google OAuth", "Provider"],
    accent: "from-pink-500 to-rose-600",
    // Drop these files into public/images/screens/ then uncomment to wire them up:
    //   snap_splash.webp, snap_onboarding.webp, snap_login.webp,
    //   snap_home.webp, snap_search.webp, snap_product.webp,
    //   snap_cart.webp, snap_checkout.webp
    screens: [],
  },
  {
    title: "AI Apex",
    tagline: "GenAI personal fitness coach",
    period: "Sep 2025",
    description:
      "Built the full Flutter frontend for a GenAI fitness coaching app — personalized workout/meal plans, body-metrics tracking, dark/light theming, and an AI chatbot with conversation history.",
    link: "https://metavizai.com/case-study/ai-apex-personalized-fitness-nutrition-coaching-powered-by-generative-ai/",
    tech: ["Flutter", "Generative AI", "GPT-4", "Provider", "Firebase"],
    accent: "from-sky-500 to-blue-600",
    screens: [
      `${SCREENS}/aipex_splash.webp`,
      `${SCREENS}/aipex_onboarding.webp`,
      `${SCREENS}/aipex_onboarding1.webp`,
      `${SCREENS}/aipex_login.webp`,
      `${SCREENS}/aipex_signup.webp`,
      `${SCREENS}/aipex_home.webp`,
      `${SCREENS}/aipex_meal_plan.webp`,
      `${SCREENS}/aipex_mealplan.webp`,
      `${SCREENS}/aipex_coach.webp`,
      `${SCREENS}/aipex_profile.webp`,
    ],
  },
];

const olderProjects = [
  {
    title: "Digitalize Blood Bank",
    period: "2024",
    description:
      "Real-time blood donor app — live location matching, Firebase Auth, FCM notifications, secure in-app messaging. 6-month BIC internship.",
    image: `${IMG}/digitalizeblood.webp`,
    link: "https://www.youtube.com/shorts/XoDwdQPJYMU",
    tech: ["Flutter", "Firebase", "FCM"],
  },
  {
    title: "AI Chatbot",
    period: "2024",
    description:
      "Dialogflow-powered conversational AI integrated into Flutter — natural intent-based routing.",
    image: `${IMG}/chat_screen.webp`,
    link: "https://github.com/iZainIqbal/chatbot",
    tech: ["Flutter", "Dialogflow"],
  },
  {
    title: "QR Scanner",
    period: "2023",
    description:
      "Real-time QR scanner and generator. Published on Google Play with 100+ downloads.",
    image: `${IMG}/qr_scanner.webp`,
    link: "https://www.linkedin.com/posts/netsflow_appdevelopment-flutterdev-netsflow-activity-7243544883993464832-XlSh",
    tech: ["Flutter", "Play Store"],
  },
  {
    title: "Chrono Chase",
    period: "2023",
    description:
      "Unity endless runner with time-travel mechanics, shop, profiles, and powerups. Showcased at university.",
    image: `${IMG}/chrono_chase.webp`,
    link: "https://www.linkedin.com/posts/ali-shan-4469a521a_unity-gamedev-3d-activity-7321482456098848771-M-jd",
    tech: ["Unity", "C#"],
  },
];

const PhoneFrame = ({ src, alt }) => (
  <div className="flex-shrink-0 w-[240px] md:w-[280px]">
    <div className="relative aspect-[9/19] bg-black rounded-[2rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-2xl z-10"></div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  </div>
);

const PlaceholderFrame = ({ label }) => (
  <div className="flex-shrink-0 w-[240px] md:w-[280px]">
    <div className="relative aspect-[9/19] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-2xl z-10"></div>
      <div className="text-center px-4">
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          Coming soon
        </p>
        <p className="text-gray-600 text-[10px]">{label}</p>
      </div>
    </div>
  </div>
);

const FeaturedProject = ({ project, index }) => {
  const isReverse = index % 2 === 1;
  return (
    <div className="mb-20 last:mb-0">
      <div
        className={`grid lg:grid-cols-12 gap-8 items-start ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Description column */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${project.accent} bg-opacity-10 rounded-full text-white text-xs font-medium shadow-lg`}
            >
              <Star className="w-3 h-3" />
              Featured
            </span>
            <span className="text-gray-500 text-sm">{project.period}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h3>

          <p
            className={`text-lg bg-gradient-to-r ${project.accent} bg-clip-text text-transparent font-medium`}
          >
            {project.tagline}
          </p>

          <p className="text-gray-400 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.internal ? (
            <Link
              to={project.link}
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.accent} text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              <span>See Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.accent} text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Screens column */}
        <div className="lg:col-span-7 -mx-6 lg:mx-0 overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {project.screens.length > 0 ? (
              project.screens.map((src, i) => (
                <div key={i} className="snap-start">
                  <PhoneFrame src={src} alt={`${project.title} screen ${i + 1}`} />
                </div>
              ))
            ) : (
              <>
                <div className="snap-start">
                  <PlaceholderFrame label={project.title} />
                </div>
                <div className="snap-start">
                  <PlaceholderFrame label={project.title} />
                </div>
                <div className="snap-start">
                  <PlaceholderFrame label={project.title} />
                </div>
              </>
            )}
          </div>
          {project.screens.length > 0 && (
            <p className="text-gray-500 text-xs mt-2 text-center lg:text-left">
              ← scroll for {project.screens.length} screens →
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ limit, showSeeAll = false, hideOlder = false }) => {
  const featured = limit ? featuredProjects.slice(0, limit) : featuredProjects;
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            5 Flutter apps shipped at Metaviz AI from Sep 2025 to now — each
            with real users, real payments, and a full UI flow. Plus earlier
            independent work.
          </p>
        </div>

        {/* Featured projects */}
        <div>
          {featured.map((project, index) => (
            <FeaturedProject key={index} project={project} index={index} />
          ))}
        </div>

        {/* Older projects */}
        {!hideOlder && (
        <div className="mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Earlier Work</h3>
            <p className="text-gray-500 text-sm">
              Internship, freelance, and student projects (2023 – 2024)
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {olderProjects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/60 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]"
              >
                <div className="aspect-video bg-gray-900 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-white font-semibold">{p.title}</h4>
                    <span className="text-gray-500 text-xs">{p.period}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-blue-400 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Open</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20 flex flex-wrap items-center justify-center gap-4">
          {showSeeAll && (
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-blue-500/50 text-blue-400 px-7 py-3 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
            >
              <span>See all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
