import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Handman Case Study", to: "/handman" },
  { label: "Experience", to: "/experience" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 border-t border-gray-700 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Zain Iqbal
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Flutter, GenAI, and full-stack developer shipping production
              apps for startups in Switzerland, the US, the UAE, and beyond.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:appdev.zain@gmail.com"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>appdev.zain@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/iZainIqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/iZainIqbal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zain-iqbal-devs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>zain-iqbal-devs</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center space-y-1">
          <p className="text-gray-400 text-sm">
            © {year} Zain Iqbal — Full Stack Developer (Flutter · Web · GenAI)
          </p>
          <p className="text-gray-500 text-xs">
            Based in Lahore, Pakistan · Available for remote roles and
            freelance projects
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
