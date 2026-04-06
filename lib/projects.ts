export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string; // TODO: Rehaan to provide actual links
}

export const projects: Project[] = [
  {
    id: "agent-micah",
    title: "Agent Micah",
    description: "Agentic claims processing pipeline. Reduced turnaround from 13 days to under 24 hours.",
    tech: ["Python", "OpenAI", "LangChain", "Vector DBs"],
    link: "#",
  },
  {
    id: "taskcard",
    title: "TaskCard",
    description: "Production timesheet web app for City of Edmonton. Streamlining internal workflows and data entry.",
    tech: ["Next.js", "BigQuery", "Google Cloud Run", "TypeScript"],
    link: "#",
  },
  {
    id: "waitwell",
    title: "WaitWell",
    description: "Android event lottery app designed for fair ticket distribution. University group project.",
    tech: ["Java", "Firebase", "Google Maps API", "Android SDK"],
    link: "#",
  },
  {
    id: "approval-engine",
    title: "Approval Workflow Engine",
    description: "Dual Google Apps Script multi-step approval system used in production at City of Edmonton.",
    tech: ["Google Apps Script", "JavaScript", "Google Workspace API"],
    link: "#",
  },
];
