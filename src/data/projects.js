const publicUrl = process.env.PUBLIC_URL || "";
const SCREENS = `${publicUrl}/images/screens`;
const HANDMAN = `${publicUrl}/images/handman`;
const IMG = `${publicUrl}/images`;

// Every project uses the same shape: links is always an array,
// the first entry renders as the primary CTA.
export const featuredProjects = [
  {
    title: "Handman",
    tagline: "Swiss craftsman OS · NFC + Twint + Stripe in Flutter",
    period: "Current · In Production",
    description:
      "Lead Flutter mobile developer on Switzerland's first AI-native craftsman marketplace. Built NFC tap-to-pay, integrated Twint and Stripe Connect inside Flutter, shipped passkey authentication, and wired the GenAI Butler across four languages (DE/FR/IT/EN).",
    links: [
      { label: "See Case Study", url: "/handman", internal: true },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=ch.handyman.app",
      },
    ],
    tech: ["Flutter", "NFC", "Twint", "Stripe", "Passkeys", "GPT-4o"],
    accent: "from-blue-500 to-purple-600",
    screens: [
      `${HANDMAN}/handman_jobs.webp`,
      `${HANDMAN}/handman_quotes.webp`,
      `${HANDMAN}/handman_invoice.webp`,
      `${HANDMAN}/handman_butler_car_lockout.webp`,
      `${HANDMAN}/handman_pro_assistant_quotes.webp`,
      `${HANDMAN}/handman_reviews.webp`,
    ],
  },
  {
    title: "Wellness Accountability",
    tagline: "Full-stack · Flutter + Strapi + Stripe",
    period: "Dec 2025",
    description:
      "Built end-to-end: Flutter mobile frontend with rich-text editor, Google authentication, user profiles, earnings dashboard, and content feed — backed by a Strapi backend with Stripe payments integration.",
    links: [
      {
        label: "View Case Study",
        url: "https://metavizai.com/case-study/wellness-accountability-app-a-complete-wellness-platform-by-metaviz-ai/",
      },
    ],
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
    links: [
      { label: "Visit Website", url: "https://rawteen.com/" },
      { label: "Instagram", url: "https://www.instagram.com/raw.teen/" },
      {
        label: "Case Study",
        url: "https://metavizai.com/case-study/woocommerce-based-grocery-delivery-app-nutrition-focused-e-commerce-for-rawteen-dubai/",
      },
    ],
    tech: ["Flutter", "Stripe", "WooCommerce", "REST APIs"],
    accent: "from-lime-500 to-green-600",
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
    links: [
      {
        label: "View Case Study",
        url: "https://metavizai.com/case-study/snap-and-shop-transforming-mobile-commerce-through-visual-discovery/",
      },
    ],
    tech: ["Flutter", "Stripe", "Google OAuth", "Provider"],
    accent: "from-pink-500 to-rose-600",
    // No screenshots exported yet — the screens strip is simply not rendered
    // until real exports land in public/images/screens/.
    screens: [],
  },
  {
    title: "AI Apex",
    tagline: "GenAI personal fitness coach",
    period: "Sep 2025",
    description:
      "Built the full Flutter frontend for a GenAI fitness coaching app — personalized workout/meal plans, body-metrics tracking, dark/light theming, and an AI chatbot with conversation history.",
    links: [
      {
        label: "View Case Study",
        url: "https://metavizai.com/case-study/ai-apex-personalized-fitness-nutrition-coaching-powered-by-generative-ai/",
      },
    ],
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

export const olderProjects = [
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
