import React from "react";

const STACK = [
  { name: "Flutter",    abbr: "Fl", bg: "bg-blue-500" },
  { name: "Dart",       abbr: "Da", bg: "bg-blue-600" },
  { name: "BLoC",       abbr: "BL", bg: "bg-indigo-600" },
  { name: "Riverpod",   abbr: "Ri", bg: "bg-indigo-500" },
  { name: "React 19",   abbr: "Re", bg: "bg-cyan-500" },
  { name: "TypeScript", abbr: "TS", bg: "bg-blue-700" },
  { name: "Tailwind",   abbr: "Tw", bg: "bg-sky-500" },
  { name: "Vite",       abbr: "Vi", bg: "bg-purple-500" },
  { name: "FastAPI",    abbr: "FA", bg: "bg-teal-600" },
  { name: "Node.js",    abbr: "No", bg: "bg-green-600" },
  { name: "Express",    abbr: "Ex", bg: "bg-gray-600" },
  { name: "MongoDB",    abbr: "Mo", bg: "bg-green-700" },
  { name: "PostgreSQL", abbr: "PG", bg: "bg-blue-800" },
  { name: "Firebase",   abbr: "Fi", bg: "bg-orange-500" },
  { name: "Redis",      abbr: "Rd", bg: "bg-red-600" },
  { name: "Docker",     abbr: "Do", bg: "bg-blue-400" },
  { name: "Coolify",    abbr: "Co", bg: "bg-gray-500" },
  { name: "Stripe",     abbr: "St", bg: "bg-violet-600" },
  { name: "TWINT",      abbr: "TW", bg: "bg-pink-600" },
  { name: "Celery",     abbr: "Ce", bg: "bg-lime-600" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="mt-3 w-14 h-0.5 bg-purple-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-800">
            <img
              src={`${process.env.PUBLIC_URL}/images/min.jpeg`}
              alt="Zain Iqbal"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi, I'm Zain Iqbal
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Full Stack Engineer with 2+ years shipping production apps for
              international clients. Most recently built the complete Flutter
              and React 19/TypeScript frontend and FastAPI backend for{" "}
              <a
                href="https://handman.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline font-medium"
              >
                Handman
              </a>
              : a live Swiss craftsmen marketplace with 100+ screens and 4 user
              roles, deployed with Docker on Coolify.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              I own the full cycle: architecture, development, payments (Stripe,
              TWINT, PostFinance), real-time features, and deployment. Clean
              architecture is non-negotiable.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-500 mt-0.5">Apps Shipped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-sm text-gray-500 mt-0.5">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-gray-500 mt-0.5">Countries</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {STACK.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full hover:border-gray-600 transition-colors"
              >
                <span
                  className={`w-5 h-5 rounded text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 ${s.bg}`}
                >
                  {s.abbr}
                </span>
                <span className="text-sm text-gray-300">{s.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Expanding into: Next.js, Nest.js, T3 Stack
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
