export interface Project {
  // TODO: Rehaan to provide actual links
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "agent-micah",
    title: "Agent Micah",
    description:
      "Autonomous AI agent that mimics a claims analyst — reads emails, extracts data from documents, reverse-geocodes addresses, validates records, logs to BigQuery, and sends follow-up reminders. Cut processing time from 13 days to under 24 hours. Built at City of Edmonton.",
    tech: ["Python", "Google ADK", "Vertex AI", "BigQuery", "Gmail API"],
    link: "#",
  },
  {
    id: "taskcard",
    title: "TaskCard",
    description:
      "Full-stack timesheet web app built, deployed, and maintained solo. Used daily by 5 teams and 1,000+ City of Edmonton employees. Handles time entry, multi-stage approval flows, automated PDF generation, and structured BigQuery storage.",
    tech: ["Next.js", "TypeScript", "GCP Cloud Run", "BigQuery", "TailwindCSS"],
    link: "#",
  },
  {
    id: "casecobra",
    title: "CaseCobra",
    description:
      "Full-stack e-commerce platform for custom phone cases built from scratch. Features drag-and-drop uploads, a real-time phone case configurator, Stripe payments, Kinde authentication, and an admin order dashboard.",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Stripe", "AWS S3", "Prisma"],
    link: "https://github.com/rehaan299/casecobra",
  },
  {
    id: "geo-fraud",
    title: "Geo-Spatial Fraud Detection",
    description:
      "End-to-end credit card fraud detection pipeline using spatial anomaly detection to flag impossible transaction patterns across cities. Includes fraud hotspot analysis and BI-ready outputs.",
    tech: ["Python", "Azure Blob Storage", "Databricks", "Spark", "SQL"],
    link: "https://github.com/rehaan299/Geo-Spatial-Fraud-Detection",
  },
  {
    id: "waitwell",
    title: "WaitWell",
    description:
      "Android event lottery app with fair entrant sampling, Google Maps waitlist visualization, Firebase real-time sync, and multi-role organizer/admin flows. CMPUT 301 group project at University of Alberta.",
    tech: ["Java", "Firebase", "Google Maps API", "Android SDK"],
    link: "#",
  },
  {
    id: "snowops",
    title: "SnowOps",
    description:
      "Data-driven snow and ice removal performance forecasting prototype. Estimates next-season operational demand using historical data and GIS-enabled route analysis to help plan crews and equipment earlier.",
    tech: ["Python", "Spatial Analytics", "GIS", "Pandas"],
    link: "https://github.com/rehaan299/SnowOps",
  },
];
