import React from "react";
import { Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    Icon: Smartphone,
    color: "bg-blue-500",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with Flutter: clean architecture, BLoC/Riverpod state management, offline support, push notifications, and Google Play deployment.",
  },
  {
    Icon: Globe,
    color: "bg-purple-500",
    title: "Full-Stack Web Development",
    description:
      "React 19 and TypeScript frontends with FastAPI or Node.js/Express backends. REST APIs, real-time SSE, Stripe payments, Firebase auth, and Docker-based deployment on Coolify.",
  },
  {
    Icon: Zap,
    color: "bg-orange-500",
    title: "AI and API Integrations",
    description:
      "Claude API, generative AI, WooCommerce REST, Twilio OTP, PostFinance, TWINT. I wire up complex third-party services and own the full integration lifecycle.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white">What I Do</h2>
          <div className="mt-3 w-14 h-0.5 bg-purple-500" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ Icon, color, title, description }, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
            >
              <div
                className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-6`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
