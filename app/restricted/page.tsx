"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Mail, ArrowLeft, Code } from "lucide-react";
import Link from "next/link";

export default function RestrictedPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl relative z-10"
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-accent-muted hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          {/* Subtle top edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-8 border border-red-500/30">
            <ShieldAlert className="w-8 h-8 text-red-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Private Access Only
          </h1>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I developed this application privately for an organization. Due to strict data privacy policies, non-disclosure agreements, and operational security protocols, I cannot share the proprietary source code or system data publicly.
            </p>
            
            <div className="p-5 bg-black/40 rounded-xl border border-white/5 flex gap-4 items-start shadow-inner">
              <Code className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <p className="text-sm">
                However, I am extremely passionate about the engineering behind this! If you are interested in the system architecture, design patterns, or want a high-level overview and skeleton code, I would love to connect and share conceptual details.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:rehaan@ualberta.ca?subject=Inquiry%20regarding%20private%20portfolio%20project"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Mail className="w-5 h-5" />
              Email for Skeleton Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
