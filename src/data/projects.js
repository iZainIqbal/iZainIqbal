const publicUrl = process.env.PUBLIC_URL || "";
const SCREENS = `${publicUrl}/images/screens`;
const HANDMAN = `${publicUrl}/images/handman`;
const IMG = `${publicUrl}/images`;

// Every featured project uses the same shape: `role` is the one-line
// engagement summary, `highlights` are the scannable proof bullets, and
// `links` is always an array whose first entry renders as the primary CTA.
// `categories` drives the filter chips on the Projects page — keys must
// match FILTERS there. `flagship: true` marks the lead case study.
export const featuredProjects = [
  {
    title: "Handman",
    tagline: "Switzerland's first AI-native craftsman marketplace",
    period: "Current · In Production",
    role: "Lead Flutter mobile developer",
    flagship: true,
    categories: ["payments", "genai"],
    highlights: [
      "NFC tap-to-pay with Twint and Stripe Connect, built inside Flutter",
      "Passkey authentication shipped end to end",
      "GenAI Butler assistant in four languages (DE/FR/IT/EN)",
    ],
    links: [
      { label: "See Case Study", url: "/handman", internal: true },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=ch.handyman.app",
      },
    ],
    tech: ["Flutter", "NFC", "Twint", "Stripe", "Passkeys", "GPT-4o"],
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
    tagline: "Wellness platform built end to end, mobile to backend",
    period: "Dec 2025",
    role: "Full-stack build — Flutter + Strapi",
    categories: ["fullstack", "payments"],
    highlights: [
      "Flutter app with rich-text editor, profiles, and content feed",
      "Strapi backend with Stripe payments integration",
      "Google authentication and an earnings dashboard",
    ],
    links: [
      {
        label: "View Case Study",
        url: "https://metavizai.com/case-study/fitness-wellness/wellness-and-accountability-app",
      },
    ],
    tech: ["Flutter", "Strapi", "Stripe", "Google Auth", "Rich Text"],
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
    tagline: "Nutrition-focused grocery delivery for the Dubai market",
    period: "Nov 2025",
    role: "Payments and feature development",
    categories: ["ecommerce", "payments"],
    highlights: [
      "Stripe payment integration on a WooCommerce backend",
      "Product catalog, cart, and order tracking",
      "Clean consumer shopping experience end to end",
    ],
    links: [
      {
        label: "View Case Study",
        url: "https://metavizai.com/case-study/e-commerce-retail/rawteen-app",
      },
      { label: "Instagram", url: "https://www.instagram.com/raw.teen/" },
    ],
    tech: ["Flutter", "Stripe", "WooCommerce", "REST APIs"],
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
    role: "Flutter frontend and payments",
    categories: ["ecommerce", "payments"],
    highlights: [
      "Image-based product search in a Flutter storefront",
      "Stripe Checkout integration",
      "Google OAuth with Provider state management",
    ],
    links: [
      {
        label: "View Case Study",
        url: "https://metavizai.com/case-study/e-commerce-retail/snap-and-shop-online-store",
      },
    ],
    tech: ["Flutter", "Stripe", "Google OAuth", "Provider"],
    screens: [
      `${SCREENS}/snapnshop_logo.webp`,
      `${SCREENS}/snapnshop_home.webp`,
      `${SCREENS}/snapnshop_search_filter.webp`,
      `${SCREENS}/snapnshop_product_scan.webp`,
      `${SCREENS}/snapnshop_product_2.webp`,
      `${SCREENS}/snapnshop_scan_and_earn.webp`,
      `${SCREENS}/snapnshop_shopping_cart.webp`,
      `${SCREENS}/snapnshop_profile.webp`,
    ],
  },
  {
    title: "AI Apex",
    tagline: "GenAI personal fitness coach",
    period: "Sep 2025",
    role: "Full Flutter frontend",
    categories: ["genai"],
    highlights: [
      "Personalized GenAI workout and meal plans",
      "Body-metrics tracking with dark/light theming",
      "AI chatbot with conversation history",
    ],
    links: [
      {
        label: "View Case Study",
        url: "https://metavizai.com/case-study/sports-fitness/ai-apex-app",
      },
    ],
    tech: ["Flutter", "Generative AI", "GPT-4", "Provider", "Firebase"],
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
    categories: ["fullstack"],
    description:
      "Real-time blood donor app — live location matching, Firebase Auth, FCM notifications, secure in-app messaging. 6-month BIC internship.",
    image: `${IMG}/digitalizeblood.webp`,
    link: "https://www.youtube.com/shorts/XoDwdQPJYMU",
    tech: ["Flutter", "Firebase", "FCM"],
  },
  {
    title: "AI Chatbot",
    period: "2024",
    categories: ["genai"],
    description:
      "Dialogflow-powered conversational AI integrated into Flutter — natural intent-based routing.",
    image: `${IMG}/chat_screen.webp`,
    link: "https://github.com/iZainIqbal/chatbot",
    tech: ["Flutter", "Dialogflow"],
  },
  {
    title: "QR Scanner",
    period: "2023",
    categories: [],
    description:
      "Real-time QR scanner and generator. Published on Google Play with 100+ downloads.",
    image: `${IMG}/qr_scanner.webp`,
    link: "https://www.linkedin.com/posts/netsflow_appdevelopment-flutterdev-netsflow-activity-7243544883993464832-XlSh",
    tech: ["Flutter", "Play Store"],
  },
  {
    title: "Chrono Chase",
    period: "2023",
    categories: [],
    description:
      "Unity endless runner with time-travel mechanics, shop, profiles, and powerups. Showcased at university.",
    image: `${IMG}/chrono_chase.webp`,
    link: "https://www.linkedin.com/posts/ali-shan-4469a521a_unity-gamedev-3d-activity-7321482456098848771-M-jd",
    tech: ["Unity", "C#"],
  },
];
