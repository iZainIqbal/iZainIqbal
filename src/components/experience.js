import React, { useState } from "react";
import { Calendar, MapPin, Code, Zap, Award, ExternalLink, GraduationCap } from "lucide-react";

// Experience Component with Case Study Style
const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      company: "Metaviz AI",
      role: "Full Stack Engineer",
      period: "Aug 2025 - Present",
      location: "Lahore, Pakistan (Remote)",
      type: "Full-time",
      description: "Ship production Flutter apps and React/TypeScript web applications for international clients (Switzerland, Dubai, US) in marketplace, e-commerce, health, and fitness verticals.",
      achievements: [
        "Built complete Flutter (100+ screens, 4 roles) + React 19/TypeScript web frontend for a live Swiss marketplace (handman.ch, Google Play)",
        "Developed FastAPI backend endpoints for payments (Stripe, TWINT, PostFinance), Twilio OTP, and SSE real-time updates",
        "Deployed services with Docker on Coolify using Redis-backed Celery workers for background jobs",
        "Integrated Stripe, Firebase Auth, Firestore, Claude API, and WooCommerce REST across multiple live client apps"
      ],
      technologies: ["Flutter", "React 19", "TypeScript", "FastAPI", "Node.js", "Docker", "Firebase", "Stripe", "TWINT", "PostgreSQL", "MongoDB", "Redis"],
      metrics: [
        "5+ Production Apps",
        "3 Countries (CH · AE · US)",
        "Full Stack Ownership"
      ],
      projects: [
        {
          name: "Handman: Swiss Craftsmen Marketplace",
          period: "Mar 2026 - Present",
          description: "Live Swiss marketplace with 100+ screens, 4 user roles, real-time chat, biometric/passkey login, offline-first storage, 4-language UI (DE/FR/IT/EN), and Stripe/TWINT/PostFinance payments. Built full Flutter + React 19/TypeScript frontend with FastAPI backend.",
          tech: ["Flutter", "React 19", "TypeScript", "FastAPI", "Docker", "Stripe", "TWINT"],
          link: "https://handman.ch"
        },
        {
          name: "RawTeen: Grocery Delivery (Dubai)",
          period: "Jan - Feb 2026",
          description: "Flutter frontend for a Dubai grocery-delivery app with Stripe checkout, WooCommerce REST catalog, and Google Maps store locator with delivery zones.",
          tech: ["Flutter", "WooCommerce", "REST APIs", "Stripe", "Google Maps"],
          link: "https://metavizai.com/case-study/woocommerce-based-grocery-delivery-app-nutrition-focused-e-commerce-for-rawteen-dubai/"
        },
        {
          name: "AI Apex: Fitness and Nutrition Coaching",
          period: "Sep - Oct 2025",
          description: "Sole developer (frontend + backend): Flutter client + Node.js/Python APIs; integrated Claude API, Firebase, and Stripe subscriptions.",
          tech: ["Flutter", "Node.js", "Python", "Claude API", "Firebase", "Stripe"],
          link: "https://metavizai.com/case-study/ai-apex-personalized-fitness-nutrition-coaching-powered-by-generative-ai/"
        },
        {
          name: "AOE Wellness: Wellness Platform",
          period: "Nov - Dec 2025",
          description: "End-to-end wellness platform with gamified habit tracking, role-based Member/Distributor dashboards, and REST APIs.",
          tech: ["Flutter", "Node.js", "Firebase", "REST APIs"],
          link: "https://metavizai.com/case-study/wellness-accountability-app-a-complete-wellness-platform-by-metaviz-ai/"
        }
      ]
    },
    {
      company: "BIC, University of Gujrat",
      role: "Flutter Developer: Digitalize Blood Bank",
      period: "Nov 2023 - Apr 2024",
      location: "Gujrat, Pakistan",
      type: "Internship",
      description: "Built a full iOS and Android blood donation platform with real-time donor matching, Firebase Auth, live push notifications, and Firestore sync.",
      achievements: [
        "Built a full iOS and Android blood donation platform with real-time donor matching and Firebase Auth",
        "Developed an in-app private chat module supporting text and media sharing between donors and recipients",
        "Implemented Provider state management for smooth, responsive UX across concurrent real-time updates",
        "Delivered in an Agile team with code reviews, sprint ceremonies, and technical documentation"
      ],
      technologies: ["Flutter", "Firebase", "Firestore", "FCM", "Provider", "Google Maps"],
      metrics: [
        "6-Month Internship",
        "Real-time System",
        "Production App"
      ],
      projects: [
        {
          name: "Digitalize Blood Bank",
          period: "Nov 2023 - Apr 2024",
          description: "Real-time blood donor app with live location matching, Firebase Auth, real-time notifications, and secure in-app private messaging",
          tech: ["Flutter", "Firebase", "Firestore", "FCM", "Google Maps"]
        }
      ]
    }
  ];

  const education = {
    degree: "B.Sc. Computer Science",
    gpa: "GPA: 3.37 / 4.00",
    institution: "University of Gujrat",
    period: "Nov 2021 - Aug 2025",
    location: "Gujrat, Pakistan",
    courses: "OOP, Data Structures & Algorithms, DBMS, Machine Learning, Deep Learning, AI, Web Development, Statistics"
  };

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            2+ years shipping production apps to App Store & Google Play
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
              <div
                className="p-6 cursor-pointer"
                onClick={() => setActiveExperience(activeExperience === index ? -1 : index)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      {index === 0 && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Code className="w-4 h-4" />
                        <span className="font-semibold text-blue-400">{exp.company}</span>
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
              </div>

              {/* Expanded Content */}
              {activeExperience === index && (
                <div className="border-t border-gray-700 p-6 space-y-6 animate-fade-in">
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                      >
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                          <Zap className="w-4 h-4" />
                          <span className="font-semibold text-sm">{metric}</span>
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
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
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
                        <Code className="w-5 h-5 text-blue-400" />
                        Featured Projects
                      </h4>
                      <div className="space-y-4">
                        {exp.projects.map((project, i) => (
                          <div
                            key={i}
                            className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-white">{project.name}</h5>
                              <span className="text-xs text-gray-400">{project.period}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {project.tech.map((tech, j) => (
                                <span
                                  key={j}
                                  className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                              >
                                <span>View Case Study</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
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

        {/* Education Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                  <p className="text-blue-400 font-semibold">{education.gpa}</p>
                  <p className="text-gray-400">{education.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-500 text-sm mb-2">Key Courses:</p>
              <div className="flex flex-wrap gap-2">
                {education.courses.split(", ").map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
