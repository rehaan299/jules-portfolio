"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-medium mb-8 tracking-tighter">
            Let&apos;s build something.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="mailto:rehaan@example.com" // TODO: Rehaan to provide email
              className="group flex items-center gap-2 text-lg text-accent-muted hover:text-white transition-colors"
            >
              Email
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="https://linkedin.com/in/rehaansharma" // TODO: Rehaan to provide LinkedIn
              className="group flex items-center gap-2 text-lg text-accent-muted hover:text-white transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="https://github.com/rehaansharma" // TODO: Rehaan to provide GitHub
              className="group flex items-center gap-2 text-lg text-accent-muted hover:text-white transition-colors"
            >
              GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-white/20 text-xs tracking-widest uppercase">
          <span>&copy; {currentYear} Rehaan Sharma</span>
          <span className="mt-4 md:mt-0 font-medium">Design by AI Specialized Engineer</span>
        </div>
      </div>
    </footer>
  );
}
