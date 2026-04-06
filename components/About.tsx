"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Java", "C/C++", "SQL", "JavaScript"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Cloud",
    items: ["Google Cloud", "Firebase", "Git", "Docker", "Vercel", "BigQuery"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <h2 className="text-3xl md:text-5xl font-medium mb-8 tracking-tight">
            The Philosophy
          </h2>
          <div className="space-y-6 text-lg text-accent-muted leading-relaxed font-light">
            <p>
              I&apos;m a Computing Science student at the University of Alberta, specializing in Artificial Intelligence. Currently, I&apos;m exploring the intersection of agentic workflows and production software.
            </p>
            <p>
              My work focuses on building systems that don&apos;t just process data, but think and act autonomously to solve complex problems. From optimizing claims processing to engineering internal enterprise tools, I prioritize efficiency and scale.
            </p>
            <p>
              Currently building at the City of Edmonton and preparing for my next chapter as a Technology Analyst intern at Citi.
            </p>
          </div>
        </motion.div>

        {/* Right: Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 space-y-12"
        >
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-medium">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-sm text-accent-muted transition-colors hover:text-white hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
