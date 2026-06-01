import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
        <p className="text-gray-400">
          © {year} Zain Iqbal — Full Stack Developer (Flutter · Web · GenAI)
        </p>
        <p className="text-gray-500 text-sm">
          Based in Lahore, Pakistan · Available for remote roles and freelance projects
        </p>
      </div>
    </footer>
  );
};

export default Footer;
