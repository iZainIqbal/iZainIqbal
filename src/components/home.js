import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Code2, Rocket } from "lucide-react";

// TODO: replace with your actual Cal.com / Calendly link
const BOOK_CALL_URL = "https://cal.com/zain-iqbal-dev";

const Home = () => {
  const stats = [
    { icon: Rocket, value: "5", label: "Flutter apps shipped in 2025" },
    { icon: Code2, value: "4", label: "Payment rails (Stripe·Twint·NFC·Pay)" },
    { icon: Briefcase, value: "2yr", label: "Professional experience" },
    { icon: MapPin, value: "4", label: "Countries served (CH/US/UAE/PK)" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden pt-28 pb-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Zain Iqbal
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
          Flutter Developer (iOS &amp; Android) · React Native · Full-Stack Web
        </p>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
          Cross-platform mobile and web apps for international startups.
          Currently Flutter mobile lead on{" "}
          <span className="text-blue-400 font-medium">Handman</span> —
          Switzerland's first AI-native craftsman marketplace — wiring NFC,
          Twint, Stripe, and passkey auth in Flutter. Shipped 4 more
          production apps at Metaviz AI since Sep&nbsp;2025.
        </p>

        <div className="space-y-3">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Hire Me
            </Link>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-500/50 text-emerald-300 px-8 py-3.5 rounded-full font-medium hover:bg-emerald-500/10 transition-all duration-300"
            >
              Book a 20-min Call
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            Typical response time: within 24 hours.
          </p>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg border border-gray-700 text-left"
              >
                <Icon className="w-4 h-4 text-blue-400 mb-1.5" />
                <div className="text-white text-2xl font-bold">{s.value}</div>
                <div className="text-gray-400 text-[10px] leading-tight">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Home;
