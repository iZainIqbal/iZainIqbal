import React, { useState } from "react";
import { Calendar, MapPin, Code, Users, Zap, Award } from "lucide-react";

// Experience Component with Case Study Style
const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      company: "Metaviz AI",
      role: "Flutter Developer | Mobile & GenAI Apps",
      period: "Aug 2025 – Present",
      location: "Remote",
      type: "Full-time",
      description:
        "Flutter mobile developer shipping production apps for startups across Switzerland, the US, and the UAE — including Handman, Switzerland's AI-native craftsman OS, plus four published GenAI and e-commerce case studies.",
      achievements: [
        "Currently leading Flutter mobile development on Handman — Switzerland's first AI-native craftsman marketplace — integrating NFC tap-to-pay, Twint, and Stripe Connect inside Flutter, plus passkey authentication for a four-language (DE/FR/IT/EN) Swiss product.",
        "Built the full Flutter frontend for AI Apex (Sep 2025) — a GenAI fitness coaching app with personalized workout/meal plans, body-metrics tracking, dark/light theming, and AI chatbot with conversation history via Provider state.",
        "Shipped the Flutter mobile frontend and Stripe Checkout integration for Snap n Shop (Oct 2025) — a visual-discovery e-commerce app with Google OAuth, image-based product search, and a polished checkout flow.",
        "Delivered Rawteen Dubai enhancements (Nov 2025) — integrated Stripe payments and built nutrition-focused product catalog, cart, and order tracking on a WooCommerce backend.",
        "Built the Wellness Accountability platform end-to-end (Dec 2025) — Flutter mobile frontend with rich-text editor, Google authentication, user profiles, and a content feed, backed by a Strapi backend with Stripe integration.",
        "Integrated Stripe, Twint, and NFC payments inside Flutter across multiple production apps with clean architecture, reusable widget systems, and Swiss VAT-compliant invoicing.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Generative AI",
        "GPT-4",
        "Firebase",
        "Strapi",
        "Stripe Connect",
        "Twint",
        "NFC",
        "Passkeys",
        "Google OAuth",
        "Provider",
        "REST APIs",
        "WooCommerce",
        "Clean Architecture",
      ],
      metrics: [
        "5 Production Apps Shipped",
        "4 Payment Rails Integrated (Stripe · Twint · NFC · Apple/Google Pay)",
        "4 Languages Supported on Handman (DE/FR/IT/EN)",
      ],
      projects: [
        {
          name: "Handman — Swiss Craftsman OS",
          period: "Current · In Production",
          description:
            "Leading Flutter mobile development on Switzerland's first AI-native craftsman marketplace. Integrated NFC tap-to-pay, Twint, Stripe Connect inside Flutter, passkey auth, and the GenAI Butler chat surface across four languages.",
          tech: [
            "Flutter",
            "NFC",
            "Twint",
            "Stripe Connect",
            "Passkeys",
            "i18next",
            "GPT-4o",
          ],
        },
        {
          name: "Wellness Accountability — Full-Stack",
          period: "Dec 2025",
          description:
            "Full-stack social wellness app — Flutter mobile frontend with rich-text editor, Google auth, profiles, and content feed, plus Strapi backend with Stripe integration.",
          tech: ["Flutter", "Strapi", "Stripe", "Google Auth", "Rich Text"],
        },
        {
          name: "Rawteen Dubai — Grocery Delivery",
          period: "Nov 2025",
          description:
            "Built Stripe payment integration and nutrition-focused product catalog, cart, and order tracking on a WooCommerce backend.",
          tech: ["Flutter", "Stripe", "WooCommerce", "REST APIs"],
        },
        {
          name: "Snap n Shop — Visual Discovery Commerce",
          period: "Oct 2025",
          description:
            "Built the Flutter mobile frontend and Stripe Checkout integration for a visual-discovery e-commerce app with Google OAuth and image-based product search.",
          tech: ["Flutter", "Stripe", "Google OAuth", "Provider"],
        },
        {
          name: "AI Apex — GenAI Fitness Coach",
          period: "Sep 2025",
          description:
            "Built the full Flutter frontend — personalized workout/meal plans, body-metrics tracking, dark/light themes, and an AI chatbot with conversation history.",
          tech: ["Flutter", "Generative AI", "GPT-4", "Provider"],
        },
      ],
    },
    {
      company: "Business Incubation Center (BIC), University of Gujrat",
      role: "Flutter Developer Intern | Real-Time Apps",
      period: "Nov 2023 – Apr 2024",
      location: "Gujrat, Pakistan",
      type: "Internship",
      description:
        "Developed a real-time blood donation app serving live users, implementing secure messaging and push notifications during a 6-month production internship.",
      achievements: [
        "Developed a real-time blood donor app serving live users by implementing live location-based donor matching with Firebase Auth, Firestore, and FCM push notifications.",
        "Implemented secure in-app messaging using third-party SDKs, enabling private donor-requester chat with end-to-end delivery tracking.",
        "Collaborated with a multi-person engineering team through code reviews, sprint planning, and technical documentation across a 6-month production internship.",
        "Reduced donor-match latency by integrating real-time Firestore listeners and FCM, replacing manual phone-based coordination.",
      ],
      technologies: [
        "Flutter",
        "Firebase",
        "Firestore",
        "FCM",
        "Real-time Database",
      ],
      metrics: [
        "6-Month Production Internship",
        "Real-time Donor Matching",
        "Live App Users",
      ],
      projects: [
        {
          name: "Digitalize Blood Bank",
          period: "Nov 2023 – Apr 2024",
          description:
            "Real-time blood donor app with live location matching, Firebase Auth, real-time notifications, and secure in-app messaging.",
          tech: ["Flutter", "Firebase", "Firestore", "FCM", "Google Maps"],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Outcome-driven engineering across mobile, web, and GenAI — shipping
            real apps for startups in CH, US, UAE, and PK.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl overflow-hidden border transition-all duration-300 ${
                activeExperience === index
                  ? "border-blue-500/50 shadow-2xl shadow-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              {/* Header */}
              <button
                type="button"
                className="w-full text-left p-6 cursor-pointer"
                onClick={() =>
                  setActiveExperience(activeExperience === index ? -1 : index)
                }
                aria-expanded={activeExperience === index}
                aria-controls={`experience-panel-${index}`}
                id={`experience-trigger-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {index === 0 && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Code className="w-4 h-4" />
                        <span className="font-semibold text-blue-400">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {activeExperience === index && (
                <div
                  id={`experience-panel-${index}`}
                  role="region"
                  aria-labelledby={`experience-trigger-${index}`}
                  className="border-t border-gray-700 p-6 space-y-6"
                >
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                      >
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                          <Zap className="w-4 h-4" />
                          <span className="font-semibold text-sm">
                            {metric}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        Projects
                      </h4>
                      <div className="space-y-4">
                        {exp.projects.map((project, i) => (
                          <div
                            key={i}
                            className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-white">
                                {project.name}
                              </h5>
                              <span className="text-xs text-gray-400">
                                {project.period}
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, j) => (
                                <span
                                  key={j}
                                  className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
