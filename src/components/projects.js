import React from "react";
import { ExternalLink } from "lucide-react";

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "Handman: Swiss Craftsmen Marketplace",
      image: "images/handman_banner.jpg",
      description:
        "Live 100+ screen Swiss marketplace (handman.ch) with 4 user roles, real-time chat, biometric/passkey login, 4-language UI (DE/FR/IT/EN), and Stripe/TWINT/PostFinance payments. Built complete Flutter (Google Play) + React 19/TypeScript (web) frontend with FastAPI backend deployed on Docker and Coolify.",
      link: "https://handman.ch",
      tech: ["Flutter", "React 19", "TypeScript", "FastAPI", "Docker", "Stripe", "TWINT"],
      badge: "Live at handman.ch",
    },
    {
      title: "Rawteen: Grocery Delivery Dubai",
      image: "images/rawteen_banner.jpg",
      description:
        "Nutrition-focused grocery delivery app for a Dubai client. Flutter frontend synced with WooCommerce backend via custom REST APIs. Real-time product availability and order tracking.",
      link: "https://metavizai.com/case-study/woocommerce-based-grocery-delivery-app-nutrition-focused-e-commerce-for-rawteen-dubai/",
      tech: ["Flutter", "WooCommerce", "REST APIs", "Firebase"],
      badge: "🟢 Live on Stores",
    },
    {
      title: "AI Apex: Fitness and Nutrition Coaching",
      image: "images/aipex_banner.jpg",
      description:
        "AI-powered coaching app with personalized workout plans and nutrition guidance using generative AI. Onboarding flows, progress dashboards, and habit-building notifications.",
      link: "https://metavizai.com/case-study/ai-apex-personalized-fitness-nutrition-coaching-powered-by-generative-ai/",
      tech: ["Flutter", "Generative AI", "Firebase", "REST APIs"],
      badge: "🟢 Live on Stores",
    },
    {
      title: "Wellness Accountability Platform",
      image: "images/wellness_banner.jpg",
      description:
        "End-to-end wellness tracking with goal setting, habit streaks, daily check-ins, progress analytics, and peer accountability groups with real-time features.",
      link: "https://metavizai.com/case-study/wellness-accountability-app-a-complete-wellness-platform-by-metaviz-ai/",
      tech: ["Flutter", "Firebase", "Real-time", "Push Notifications"],
    },
    {
      title: "Snap and Shop: Visual Search Commerce",
      image: "images/snap_n_shop_banner.jpg",
      description:
        "Camera-first shopping app using image recognition for product discovery. Full commerce flow with AI-powered product matching, cart, and Stripe-integrated checkout.",
      link: "https://metavizai.com/case-study/snap-and-shop-transforming-mobile-commerce-through-visual-discovery/",
      tech: ["Flutter", "Visual AI", "Stripe", "REST APIs"],
    },
    {
      title: "Digitalize Blood Bank",
      image: "images/digitalize_blood_banner.jpg",
      description:
        "Real-time blood donor app with live location matching, Firebase Auth, push notifications, and secure in-app private messaging. Built during 6-month internship.",
      link: "https://www.youtube.com/shorts/XoDwdQPJYMU",
      tech: ["Flutter", "Firebase", "Firestore", "FCM"],
    },
    {
      title: "QR Scanner App: 100+ Downloads",
      image: "images/qr_scanner_banner.jpg",
      description:
        "QR scanning and generation app published on Google Play Store. 100+ downloads in first month. Full release lifecycle with Android MediaStore API.",
      link: "https://www.linkedin.com/posts/netsflow_appdevelopment-flutterdev-netsflow-activity-7243544883993464832-XlSh",
      tech: ["Flutter", "Play Store", "Android API"],
    },
    {
      title: "Chrono Chase: Time Travel Runner",
      image: "images/chrono_chase_banner.jpg",
      description:
        "Cross-platform mobile runner game with time-travel mechanics, stack-based UI navigation, dynamic user profiles, and modular gameplay logic. Final Year Project.",
      link: "https://www.linkedin.com/posts/ali-shan-4469a521a_unity-gamedev-3d-activity-7321482456098848771-M-jd",
      tech: ["Unity", "C#", "Game Design"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Production apps shipped for clients in Switzerland, Dubai, and the US
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.badge && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-green-500/90 text-white text-xs rounded-full font-medium backdrop-blur-sm">
                    {project.badge}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>{project.link.includes("metavizai") ? "View Case Study" : "View Project"}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
