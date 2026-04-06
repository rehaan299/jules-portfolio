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
    description: ["Incoming Technology Analyst intern focusing on enterprise solutions."],
  },
  {
    id: "cmput-291-ta",
    role: "Teaching Assistant (CMPUT 291)",
    company: "University of Alberta",
    location: "Edmonton, AB",
    period: "Present",
    description: ["Assisting students with Introduction to File and Database Management."],
  },
  {
    id: "coe-coop",
    role: "Co-op Student (Multiple Terms)",
    company: "City of Edmonton",
    location: "Edmonton, AB",
    period: "2023 - 2024",
    description: [
      "Worked with the OPM team on various production applications.",
      "Developed TaskCard and Approval Workflow Engine.",
    ],
  },
];
