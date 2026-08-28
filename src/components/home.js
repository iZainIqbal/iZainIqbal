import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Code2, Rocket } from "lucide-react";

const Home = () => {
  const publicUrl = process.env.PUBLIC_URL || "";
  const stats = [
    { icon: Rocket, value: "5", label: "Production apps shipped since Sep 2025" },
    { icon: Code2, value: "4", label: "Payment rails integrated" },
    { icon: Briefcase, value: "2yr+", label: "Professional experience" },
    { icon: MapPin, value: "4", label: "Countries served" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm text-blue-300 border border-blue-400/30 bg-blue-400/10 rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Available for selected remote projects
          </div>
          <p className="text-blue-400 font-medium tracking-wide mb-4">FLUTTER · FULL-STACK · GENAI</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            Production mobile and AI products for ambitious startups.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mt-6">
            I'm Zain, a Flutter and full-stack engineer who turns complex product ideas into reliable iOS, Android, and web experiences—from the first screen to payments, auth, and launch.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mt-4">
            Currently leading mobile development on <span className="text-white font-medium">Handman</span>, a multilingual Swiss craftsman marketplace with NFC, Twint, Stripe, passkeys, and a GenAI assistant.
          </p>
          <div className="space-y-3 mt-8">
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-blue-400 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-300">
                Start a project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border border-gray-600 text-gray-200 px-6 py-3.5 rounded-lg font-medium hover:border-gray-400 hover:bg-white/5 transition-colors duration-300">
                View selected work
              </Link>
            </div>
            <p className="text-gray-500 text-sm">Typical response time: within 24 hours.</p>
          </div>
        </div>

        <div className="relative max-w-md w-full justify-self-center lg:justify-self-end">
          <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative bg-gray-800/70 border border-gray-700 rounded-2xl p-5 sm:p-6 shadow-2xl">
            <div className="flex items-center gap-4 pb-5 border-b border-gray-700">
              <img src={`${publicUrl}/images/profilepicture.webp`} alt="" width="64" height="64" className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/50" />
              <div>
                <p className="text-white font-semibold">Zain Iqbal</p>
                <p className="text-gray-400 text-sm">Mobile &amp; full-stack engineer</p>
                <p className="text-gray-500 text-xs mt-1">Lahore, Pakistan · Remote worldwide</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-5">
              {stats.map((s) => {
                const Icon = s.icon;
                return <div key={s.label} className="bg-gray-900/70 p-4 rounded-xl border border-gray-700/80 text-left"><Icon className="w-4 h-4 text-blue-400 mb-1.5" aria-hidden="true" /><div className="text-white text-2xl font-bold">{s.value}</div><div className="text-gray-400 text-[10px] leading-tight">{s.label}</div></div>;
              })}
            </div>
            <div className="mt-4 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-200">Building products people can use, pay for, and trust.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
