import React from "react";

const STACK = [
  "Flutter", "Dart", "React 19", "TypeScript", "FastAPI", "Node.js",
  "Express", "MongoDB", "PostgreSQL", "Firebase", "Docker", "Coolify",
  "Stripe", "TWINT", "Redis", "BLoC", "Riverpod", "TanStack Query",
  "Tailwind CSS", "Vite", "Python", "Google Play",
];

const Ticker = () => {
  const doubled = [...STACK, ...STACK];

  return (
    <div className="py-5 bg-gray-900 border-y border-gray-800 overflow-hidden select-none">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: "ticker 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm text-gray-500 font-medium shrink-0 flex items-center gap-2"
          >
            <span className="w-1 h-1 bg-purple-400 rounded-full" />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;
