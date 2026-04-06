"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight group">
          <span className="text-white">Rehaan</span>
          <span className="text-accent-muted group-hover:text-white transition-colors duration-300">
            .sh
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-accent-muted hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-white/20 mx-2" />
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/rehaan299"
              target="_blank"
              className="text-sm text-accent-muted hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/rehaan-sharma-4b304b250/"
              target="_blank"
              className="text-sm text-accent-muted hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-accent-muted hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] w-full bg-white/10" />
              <div className="flex flex-col gap-4">
                <Link
                  href="https://github.com/rehaan299"
                  className="text-accent-muted hover:text-white"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rehaan-sharma-4b304b250/"
                  className="text-accent-muted hover:text-white"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
