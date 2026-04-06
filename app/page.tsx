"use client";

import { motion, AnimatePresence } from "framer-motion";
import InteractiveDotGrid from "@/components/InteractiveDotGrid";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex min-h-screen flex-col items-center justify-between selection:bg-white selection:text-black"
      >
        <Nav />
        
        {/* Sections Wrapper */}
        <div className="w-full">
          <Hero />
          
          <div className="relative z-10 bg-black">
            <ProjectGrid />
            <About />
            <Timeline />
            <Contact />
          </div>
        </div>

        {/* Interactive Dot Grid Background */}
        <InteractiveDotGrid />

        {/* Global Grainy Texture Overlay (on top of everything) */}
        <div className="fixed inset-0 pointer-events-none z-[9999] bg-noise-pattern opacity-[0.03]" />
      </motion.main>
    </AnimatePresence>
  );
}
