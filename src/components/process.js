import React from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We talk through your idea, goals, and target users. I ask the right questions to scope the MVP: no fluff, just what ships.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "I pick the right stack (Flutter, React, FastAPI, Node.js) and plan the data model, API contracts, and delivery milestones.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly demos, clean code, real features. Payments, real-time, auth, push notifications. Whatever your product needs.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Google Play deployment, web hosting on Coolify or Vercel, and post-launch support. You own the code, 100%.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white">How I Work</h2>
          <div className="mt-3 w-14 h-0.5 bg-purple-500" />
          <p className="mt-4 text-gray-400 max-w-xl">
            From first call to shipped product: a clear, no-surprise process
            every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-700 z-0" />
              )}
              <div className="relative z-10">
                <span className="font-mono text-4xl font-bold text-gray-700 select-none leading-none">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
