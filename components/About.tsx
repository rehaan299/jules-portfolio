"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "SQLX", "C/C++"],
  },
  {
    category: "Frameworks & Tools",
    items: ["Next.js", "React", "Node.js", "TailwindCSS", "Google ADK", "Android SDK"],
  },
  {
    category: "Data & Cloud",
    items: ["BigQuery", "GCP Cloud Run", "Dataform", "Vertex AI", "Firebase", "Tableau", "Databricks"],
  },
  {
    category: "Other",
    items: ["Google Apps Script", "Linux/Unix", "Grafana", "Docker", "Git", "Figma"],
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
              I&apos;m a final-year Computing Science student at the University of Alberta, specializing in Artificial Intelligence. I&apos;ve spent the last 16+ months building production systems at the City of Edmonton — tools that real teams use every day.
            </p>
            <p>
              I&apos;m most drawn to agentic AI engineering and environments with creative freedom. I&apos;ve built autonomous pipelines that actually get deployed, full-stack apps used by thousands of employees, and data infrastructure that powers leadership decisions.
            </p>
            <p>
              Incoming Technology Analyst at Citi for Summer 2026. Outside of work: cricket and Game of Thrones (four times through).
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
