import { Command, Cloud, Database, ShieldCheck } from "lucide-react";
const techStacks = [
  {
    title: "Frontend",
    icon: Cloud,
    skills: [
      "HTML & CSS",
      "JavaScript",
      "Framer Motion",
      "React.js",
      "Tailwind CSS & Bootstrap",
      "Shadcn UI",
    ],
    description: "Building responsive user interfaces and cloud solutions",
  },
  {
    title: "Backend",
    icon: Command,
    skills: ["Node.js", "Express.js", "Java & Spring Boot", "Python & Flask"],
    description: "Developing scalable APIs and backend services",
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Git & GitHub",
      "Shell Scripting",
      "Linux & Bash",
    ],
    description: "Managing databases and infrastructure",
  },
  {
    title: "Testing",
    icon: ShieldCheck,
    skills: [
      "Cypress & Selenium",
      "Postman",
      "GitHub Actions",
    ],
    description: "Writing tests and automating workflows",
  },
];

export default techStacks;
