import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

// About Component
const About = ({ compact = false }) => {
  const publicUrl = process.env.PUBLIC_URL || "";
  const [activeTab, setActiveTab] = useState("Skills");

  const tabs = {
    Skills: [
      {
        name: "Flutter & Dart",
        desc: "Cross-platform mobile apps with clean architecture, Provider/Riverpod, Firebase, REST APIs",
      },
      {
        name: "React & Node.js",
        desc: "Full-stack web apps with JWT/OAuth, MongoDB, Tailwind, and SSR-ready setups",
      },
      {
        name: "Generative AI",
        desc: "GPT-4 chatbots, RAG over user data, structured output, Dialogflow conversational flows",
      },
      {
        name: "Payments in Flutter",
        desc: "Stripe Connect, Twint (Swiss wallet), NFC tap-to-pay, Apple/Google Pay, Swiss VAT-compliant invoicing",
      },
      {
        name: "Auth & Security",
        desc: "Passkeys (passwordless), Google OAuth, Firebase Auth, secure messaging",
      },
      {
        name: "Backend & Data",
        desc: "Strapi, Firebase/Firestore, MongoDB, FCM push, REST APIs, real-time listeners",
      },
      {
        name: "Unity (C#)",
        desc: "Mobile game development — powerups, shop systems, scoring, UI",
      },
    ],
    Experience: [
      {
        name: "Flutter Developer — Metaviz AI",
        desc: "Aug 2025 – Present · Shipping 5+ production apps including Handman, Snap n Shop, AI Apex, Wellness Accountability, and Rawteen",
      },
      {
        name: "Flutter Developer Intern — BIC, University of Gujrat",
        desc: "Nov 2023 – Apr 2024 · Built real-time blood donor app with Firebase Auth, FCM, secure messaging",
      },
      {
        name: "Freelance & Independent Projects",
        desc: "Dialogflow AI chatbot, Play Store QR Scanner (100+ downloads), Unity 'Chrono Chase' endless runner",
      },
    ],
    Education: [
      {
        name: "BS Computer Science — University of Gujrat",
        desc: "2021 – 2025 · CGPA 3.37 / 4.00",
      },
      {
        name: "Intermediate (Pre-Engineering)",
        desc: "Completed 2019 with focus on Pre-Engineering",
      },
      {
        name: "Matriculation (Science)",
        desc: "Secured 978 / 1100 in science group",
      },
    ],
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative w-full h-96 bg-gray-800 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 bg-gray-700 rounded-full border-4 border-white/10 hover:scale-105 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                  <img
                    src={`${publicUrl}/images/profilepicture.webp`}
                    alt="Zain Iqbal portrait"
                    width="256"
                    height="256"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <span className="text-white font-medium">
                5 Flutter apps shipped from Sep 2025 to now
              </span>{" "}
              — currently leading mobile development on{" "}
              <span className="text-blue-400">Handman</span> (Switzerland's
              AI-native craftsman marketplace) with NFC, Twint, Stripe, and
              passkey auth integrated in Flutter. Earlier: AI Apex (Sep), Snap
              n Shop (Oct), Rawteen (Nov), Wellness full-stack (Dec).
            </p>

            {!compact && (
              <p className="text-gray-400 leading-relaxed">
                I'm a Flutter and full-stack developer based in Pakistan,
                building cross-platform mobile and web products for startups in
                Switzerland, US, UAE, and beyond. Computer Science graduate from
                University of Gujrat (CGPA 3.37) with 10+ IBM Coursera
                certifications across Cloud, DevOps, Python, and Unity. Earlier I
                served as a Junior Developer at Digitalize Blood Bank during a
                6-month internship.
              </p>
            )}

            {compact ? (
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-blue-500/50 text-blue-400 px-6 py-3 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
              >
                <span>Read full bio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
            <div className="space-y-4">
              <div
                className="flex space-x-6 border-b border-gray-700"
                role="tablist"
                aria-label="About tabs"
              >
                {Object.keys(tabs).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`about-panel-${tab}`}
                      id={`about-tab-${tab}`}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 px-1 font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-400 border-b-2 border-blue-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <div
                id={`about-panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`about-tab-${activeTab}`}
                className="space-y-4"
              >
                {tabs[activeTab].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-blue-400 font-medium">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
