import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-950 relative overflow-hidden pt-16"
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 py-12 text-center relative z-10 w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          I Build MVPs That Help Startups{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ship Fast
          </span>
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed max-w-xl mx-auto mb-4">
          Product developer who turns your concept into a working mobile or web
          app in{" "}
          <span className="text-purple-400 font-semibold">
            weeks, not months.
          </span>
        </p>

        <p className="text-gray-500 leading-relaxed max-w-lg mx-auto mb-10">
          From Flutter mobile apps to React and TypeScript web platforms, I own
          the full cycle: architecture, development, payments, and deployment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="bg-white text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-700 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition-colors"
          >
            Let's Talk About Your Idea
          </a>
        </div>

        <div className="flex gap-12 justify-center pt-10 border-t border-gray-800">
          <div>
            <div className="text-3xl font-bold text-white">8+</div>
            <div className="text-sm text-gray-500 mt-0.5">Production Apps</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4-8</div>
            <div className="text-sm text-gray-500 mt-0.5">Weeks Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-sm text-gray-500 mt-0.5">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
