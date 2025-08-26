import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // tinggi navbar (sesuaikan)
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`navbar lg:py-4 py-5 lg:px-10 px-5 flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          active
            ? "w-[90%] bg-white/5 backdrop-blur-3xl rounded-b-lg shadow-lg"
            : "w-full bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="logo">
          <h1 className="lg:text-3xl text-xl font-bold text-white">
            JACKQQQ<span className="text-yellow-400">_</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                className="font-medium text-white hover:text-yellow-400 transition"
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-5 p-6 bg-white/5 backdrop-blur-3xl rounded-lg shadow-lg md:hidden z-40"
          >
            <ul className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    className="font-medium text-white hover:text-yellow-400 transition"
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer supaya konten gak ketutup navbar */}
      <div className="lg:h-8 h-20"></div>
    </>
  );
};

export default Navbar;
