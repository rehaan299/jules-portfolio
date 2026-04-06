"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Custom ease curve
    } 
  },
};

export default function ProjectGrid() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-medium mb-4 tracking-tight">
          Selected Projects
        </h2>
        <div className="w-16 h-1 bg-white/20 rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
      >
        {projects.map((project, index) => {
          // Alternative layout patterns for the bento grid
          const gridColSpan =
            index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";

          return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${gridColSpan} group relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-white/5 transition-all duration-500 hover:bg-card-hover hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-accent-muted bg-white/5 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="p-2 bg-white/5 rounded-full text-accent-muted transition-all duration-300 group-hover:text-white group-hover:scale-110"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3 group-hover:text-white/90">
                  {project.title}
                </h3>
                <p className="text-accent-muted text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
