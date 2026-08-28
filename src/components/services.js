import React from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Layers,
  Wallet,
  Bot,
  Database,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Reveal from "./reveal";

const Services = ({ limit, showSeeAll = false }) => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      tag: "iOS + Android",
      description:
        "I build mobile apps that work on both iPhone and Android from a single codebase — so you ship faster and pay for one app instead of two.",
      deliverables: [
        "iPhone + Android from one codebase",
        "Smooth, app-store-ready design",
        "Push notifications and deep links",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "hover:border-blue-500/60",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Website Development",
      tag: "React · Next.js · Node",
      description:
        "Fast, modern websites and web apps — from a marketing site to a full customer portal with logins, dashboards, and admin tools.",
      deliverables: [
        "Marketing sites and landing pages",
        "Customer portals with logins",
        "Admin dashboards and CMS",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "hover:border-purple-500/60",
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      icon: Wallet,
      title: "Payments in Your App",
      tag: "Stripe · Twint · Apple/Google Pay",
      description:
        "Let customers pay you inside your app — credit cards, Apple Pay, Google Pay, Twint (Switzerland), and tap-to-pay NFC. With receipts and refunds handled.",
      deliverables: [
        "Card, Apple Pay, Google Pay",
        "Twint and NFC tap-to-pay",
        "Receipts, invoices, refunds",
      ],
      gradient: "from-emerald-500/20 to-green-600/20",
      border: "hover:border-emerald-500/60",
      iconBg: "from-emerald-500 to-green-700",
    },
    {
      icon: Bot,
      title: "AI Features & Chatbots",
      tag: "GPT-4o · ChatGPT-style",
      description:
        "Add AI that actually helps your users — a smart chatbot, an assistant that answers questions about your own data, or AI-powered search and recommendations.",
      deliverables: [
        "Chatbots trained on your data",
        "AI-powered search and answers",
        "Streaming chat that feels instant",
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
      border: "hover:border-orange-500/60",
      iconBg: "from-orange-500 to-amber-500",
    },
    {
      icon: ShieldCheck,
      title: "Login & Security",
      tag: "Passkeys · Google · Apple",
      description:
        "Modern sign-in that's easier for your users and safer than passwords — Face ID / Touch ID logins, Google and Apple sign-in, and secure sessions.",
      deliverables: [
        "Face ID / Touch ID sign-in",
        "Sign in with Google or Apple",
        "Phishing-resistant authentication",
      ],
      gradient: "from-indigo-500/20 to-blue-500/20",
      border: "hover:border-indigo-500/60",
      iconBg: "from-indigo-500 to-blue-500",
    },
    {
      icon: Database,
      title: "Backends & Integrations",
      tag: "Firebase · Strapi · Postgres",
      description:
        "The behind-the-scenes side of your product — data storage, user accounts, real-time updates, and connecting your app to the tools you already use.",
      deliverables: [
        "User accounts and data",
        "Real-time updates and sync",
        "Connecting to third-party tools",
      ],
      gradient: "from-rose-500/20 to-red-500/20",
      border: "hover:border-rose-500/60",
      iconBg: "from-rose-500 to-red-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <span className="text-blue-400 text-sm font-medium">
              Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Can Build for You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mobile apps, websites, payments, and AI features — built end-to-end
            so you can launch faster.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(limit ? services.slice(0, limit) : services).map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 75} className="h-full">
              <div
                className={`group relative h-full bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 ${service.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-gray-900/60 border border-gray-700 px-2 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {service.deliverables.map((d, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-xs flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-0.5">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    aria-label={`Discuss ${service.title}`}
                  >
                    <span>Discuss a project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-4">
          {showSeeAll && (
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-blue-500/50 text-blue-400 px-7 py-3 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
            >
              <span>View all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>Start a project together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
