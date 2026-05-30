import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/95 backdrop-blur-md py-3 border-b border-gray-800"
          : "bg-gray-950/80 backdrop-blur-sm py-5"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-white"
          aria-label="Zain Iqbal - Home"
        >
          Zain Iqbal
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Zain_Iqbal_CV.pdf"
            download
            className="text-sm bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors ml-2"
          >
            Download Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-t border-gray-800"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="px-6 pt-3 pb-2">
              <a
                href="/Zain_Iqbal_CV.pdf"
                download
                className="block text-center text-sm bg-gray-900 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
