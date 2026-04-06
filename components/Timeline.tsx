"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/experience";
import { MapPin } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-medium mb-4 tracking-tight">
          Journey
        </h2>
        <div className="w-16 h-1 bg-white/20 rounded-full mx-auto" />
      </motion.div>

      <div className="relative">
        {/* The Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] z-10" />

              {/* Content Card */}
              <div className={`pl-8 md:pl-0 w-full md:w-5/12 ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}>
                <div className="bg-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-medium mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-1.5 text-sm text-accent-muted mb-4 ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="text-white/20">•</span>
                    <span>{exp.company}</span>
                  </div>
                  <ul className={`space-y-2 text-sm text-accent-muted list-none`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
