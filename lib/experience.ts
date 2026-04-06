export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "citi-2026",
    role: "Technology Analyst Intern",
    company: "Citi",
    location: "Mississauga, ON",
    period: "Summer 2026",
    description: [
      "Incoming Technology Analyst in the Technology Production Support team.",
      "Targeting data and quant-adjacent work within the broader TPS organization.",
    ],
  },
  {
    id: "coe-infra-2025",
    role: "Data Engineer & AI Engineer Co-op",
    company: "City of Edmonton — Infrastructure Operations",
    location: "Edmonton, AB",
    period: "Sep 2025 – Apr 2026",
    description: [
      "Built TaskCard, a full-stack timesheet web app (Next.js, TypeScript, GCP Cloud Run, BigQuery) now used daily by 5 teams and 1,000+ city employees — replacing manual spreadsheets and paper forms entirely.",
      "Built Agent Micah, an autonomous AI agent that reads incoming emails, extracts structured data from documents, reverse-geocodes addresses, validates records, logs to BigQuery, and sends follow-up reminders — cutting claims processing time from 13 days to under 24 hours.",
      "Consolidated unstructured data from 25+ city teams into a centralized BigQuery layer using SQL and Python pipelines, powering Tableau dashboards used by leadership for planning and resource decisions.",
      "Built two production Google Apps Script approval workflow engines automating multi-stage expense and travel request routing (Manager → Supervisor → Director) with dynamic state management and PDF handling.",
      "Stack: Google ADK, Vertex AI, Python, Next.js, TypeScript, GCP Cloud Run, BigQuery, Dataform, SQLX, Google Apps Script, Tableau, Grafana, Linux/Unix.",
    ],
  },
  {
    id: "coe-sap-2025",
    role: "Software Test Engineer Co-op",
    company: "City of Edmonton — Enterprise Commons SAP Project",
    location: "Edmonton, AB",
    period: "Jan 2025 – Aug 2025",
    description: [
      "Worked on an $80M SAP ERP migration serving 5,500+ employees and 1.5 million Edmonton residents.",
      "Built a Gemini-powered pipeline that auto-generated UAT testing scripts from raw meeting transcripts — solving a major manual bottleneck, presented to senior leadership, and recognized as a responsible GenAI use case.",
      "Managed 1,500+ test cases across SAP FI/MM/SD modules; acted as the bridge between technical delivery teams and business stakeholders across Finance, HR, and Procurement.",
      "Stack: Gemini, NotebookLM, Python, BigQuery SQL, Google Apps Script, Power BI, Tableau, Jira.",
    ],
  },
  {
    id: "ualberta-ta",
    role: "Lead Teaching Assistant — CMPUT 291 (SQL & Databases)",
    company: "University of Alberta",
    location: "Edmonton, AB",
    period: "Sep 2025 – Present",
    description: [
      "Teaching 350+ students SQL, schema design, indexing, transactions, and joins across two consecutive terms (Fall 2025 and Winter 2026), returning as Lead TA in second term with expanded responsibilities.",
      "Break down complex database concepts into relatable, practical examples — the part I genuinely enjoy most.",
      "Comfortable in the command line for everything day-to-day: Linux/Unix, deploying apps, monitoring performance.",
    ],
  },
  {
    id: "vizuara-2024",
    role: "AI Research Intern",
    company: "Vizuara AI Labs",
    location: "Bengaluru, India (Remote)",
    period: "May 2024 – Aug 2024",
    description: [
      "Developed an adaptive Q&A system using OpenAI and Claude APIs that customizes questions in real-time based on student performance using NLP and embeddings (BERT/GPT).",
    ],
  },
];
