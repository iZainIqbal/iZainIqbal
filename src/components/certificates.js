import React from "react";

// Certificates Component
const Certificates = () => {
  // TODO: confirm exact completion years for each
  const certificates = [
    {
      title: "Introduction to Cloud Computing",
      provider: "Coursera – IBM",
      year: "2024",
      link: "https://www.coursera.org/learn/introduction-to-cloud",
    },
    {
      title: "Python for Data Science, AI and Development",
      provider: "Coursera – IBM",
      year: "2024",
      link: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
    },
    {
      title: "Introduction to DevOps",
      provider: "Coursera – IBM",
      year: "2024",
      link: "https://www.coursera.org/learn/introduction-to-devops",
    },
    {
      title: "Agile Development and Scrum",
      provider: "Coursera – IBM",
      year: "2024",
      link: "https://www.coursera.org/learn/agile-development-and-scrum",
    },
    {
      title: "Fundamentals of Unity Android Game Development",
      provider: "Coursera – IBM",
      year: "2023",
      link: "https://www.coursera.org/learn/fundamentals-of-unity-android-game-development",
    },
    {
      title: "Effective Problem Solving and Decision-Making",
      provider: "Coursera – IBM",
      year: "2024",
      link: "https://www.coursera.org/learn/effective-problem-solving-and-decision-making",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700 transition-all duration-300 hover:scale-105 block"
              aria-label={`View ${cert.title} certificate`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {cert.provider} · {cert.year}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
