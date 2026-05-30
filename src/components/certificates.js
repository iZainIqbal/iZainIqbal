import React from "react";
import { Award, ExternalLink } from "lucide-react";

// Certificates Component
const Certificates = () => {
  const certifications = [
    { 
      title: "IBM DevOps, Cloud, and Agile Foundations Specialization", 
      provider: "Coursera, IBM",
      link: "https://www.coursera.org/specializations/devops-cloud-and-agile-foundations"
    },
    {
      title: "Introduction to Agile Development and Scrum",
      provider: "Coursera, IBM",
      link: "https://www.coursera.org/learn/agile-development-and-scrum"
    },
    { 
      title: "Introduction to Front-End Development", 
      provider: "Coursera, Meta",
      link: "https://www.coursera.org/learn/introduction-to-front-end-development"
    },
    { 
      title: "Fundamentals of Unity Android Game Development", 
      provider: "Coursera",
      link: "https://www.coursera.org/learn/fundamentals-of-unity-android-game-development"
    },
    {
      title: "Effective Problem-Solving and Decision-Making",
      provider: "Coursera, UCI",
      link: "https://www.coursera.org/learn/effective-problem-solving-and-decision-making"
    },
  ];

  const recognitions = [
    {
      title: "Certificate of Internship",
      provider: "BIC in collaboration with Punjab Information Technology Board",
    },
    {
      title: "Certificate of Leadership: Finance Secretary",
      provider: "Hayatian Computing Society, University of Gujrat",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Recognition</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 block group"
                aria-label={`View ${cert.title} certificate`}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{cert.provider}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            🏅 Recognition & Leadership
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recognitions.map((rec, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {rec.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{rec.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
