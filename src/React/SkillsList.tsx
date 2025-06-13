import React, { useState } from "react";
import DraggableWindow from "./DraggableWindow";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Backend Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 16H13V19H4C2.89543 19 2 18.1046 2 17V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V10H20V5H4V16ZM21.7071 20.7071C21.3166 21.0976 20.6834 21.0976 20.2929 20.7071L17.5 17.9142L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071C12.9024 20.3166 12.9024 19.6834 13.2929 19.2929L16.0858 16.5L13.2929 13.7071C12.9024 13.3166 12.9024 12.6834 13.2929 12.2929C13.6834 11.9024 14.3166 11.9024 14.7071 12.2929L17.5 15.0858L20.2929 12.2929C20.6834 11.9024 21.3166 11.9024 21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071L18.9142 16.5L21.7071 19.2929C22.0976 19.6834 22.0976 20.3166 21.7071 20.7071Z"></path>
    </svg>
  ),
  "Frontend Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-[var(--sec)] opacity-70"
    >
      <path d="M13.2 12L17.5858 7.61423L16.1716 6.2L10.3858 12L16.1716 17.8L17.5858 16.3858L13.2 12ZM6.8 12L11.1858 7.61423L9.77158 6.2L3.98579 12L9.77158 17.8L11.1858 16.3858L6.8 12Z"></path>
    </svg>
  ),
  "AI & Data Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C13.1046 2 14 2.89543 14 4V8.41421L16.2929 6.12132C17.0732 5.341 18.34 5.341 19.1203 6.12132C19.9006 6.90165 19.9006 8.16835 19.1203 8.94868L16.8284 11.2406L21 11.2406C22.1046 11.2406 23 12.135 23 13.2406C23 14.3452 22.1046 15.2406 21 15.2406L16.8284 15.2406L19.1213 17.5335C19.9016 18.3138 19.9016 19.5805 19.1213 20.3608C18.341 21.1411 17.0743 21.1411 16.294 20.3608L14 18.0669V22C14 23.1046 13.1046 24 12 24C10.8954 24 10 23.1046 10 22V18.0669L7.70607 20.3608C6.92574 21.1411 5.659 21.1411 4.87868 20.3608C4.09835 19.5805 4.09835 18.3138 4.87868 17.5335L7.17157 15.2406H3C1.89543 15.2406 1 14.3452 1 13.2406C1 12.135 1.89543 11.2406 3 11.2406H7.17157L4.87868 8.94773C4.09835 8.16741 4.09835 6.90067 4.87868 6.12035C5.659 5.34002 6.92574 5.34002 7.70607 6.12035L10 8.41326V4C10 2.89543 10.8954 2 12 2Z"></path>
    </svg>
  ),
};

interface SkillsListProps {
  onSkillClick?: (skill: string, details: SkillDetails) => void;
}

interface SkillDetails {
  title: string;
  description: string;
  technologies: string[];
  projects: string[];
  experience: string;
  icon: React.ReactNode;
}

const SkillsList: React.FC<SkillsListProps> = ({ onSkillClick }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Backend Development": [
      "Spring Boot REST APIs",
      "API development and integration",
      "Microservices architecture",
    ],
    "Frontend Development": [
      "React and NextJS applications",
      "Component-based architecture",
      "State management and hooks",
    ],
     "AI & Data Engineering": [
    "RAG systems",
    "LLM integration and prompt engineering",
    "AI agent development and orchestration",
    "Data pipeline development",
    "SQL database design and optimization",
  ]
  };

  // Detailed skill information for the draggable windows
  const skillDetails: Record<string, SkillDetails> = {
    "Backend Development": {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs that power modern web applications. Focused on creating scalable, maintainable, and secure backend systems.",
      technologies: [
        "Spring Boot & Java",
        "RESTful API Design",
        "Database Management (MySQL, PostgreSQL)",
        "Authentication & Authorization",
        "Microservices Architecture",
        "Docker & Containerization"
      ],
      projects: [
        "E-commerce API with Spring Boot",
        "User Authentication System",
        "Microservices for Data Processing",
        "Real-time Chat Application Backend"
      ],
      experience: "1+ years of hands-on experience building backend systems during academic projects and personal development.",
      icon: CategoryIcons["Backend Development"]
    },
    "Frontend Development": {
      title: "Frontend Development", 
      description: "Creating intuitive and responsive user interfaces using modern frameworks and libraries. Passionate about delivering exceptional user experiences.",
      technologies: [
        "React & NextJS",
        "TypeScript & JavaScript",
        "Tailwind CSS & Styled Components",
        "State Management (Redux, Zustand)",
        "Modern Build Tools (Vite, Webpack)",
        "Progressive Web Apps (PWA)"
      ],
      projects: [
        "Interactive Portfolio Website",
        "Task Management Dashboard",
        "E-learning Platform Frontend",
        "Real-time Chat Interface"
      ],
      experience: "2+ years developing modern web applications with focus on performance and user experience.",
      icon: CategoryIcons["Frontend Development"]
    },
    "AI & Data Engineering": {
    title: "AI & Data Engineering",
    description: "Building intelligent systems that combine AI capabilities with robust data processing. Specializing in RAG systems, AI agents, and LLM integration alongside traditional data engineering practices.",
    technologies: [
      "RAG (Retrieval-Augmented Generation)",
      "LLM APIs (Gemini, OpenAI, Groq)",
      "Vector Databases & Embeddings",
      "AI Agent Frameworks",
      "Prompt Engineering & Fine-tuning",
      "Python & Pandas",
      "SQL & Database Design",
      "Apache Spark & PySpark",
      "ETL Pipeline Development",
      "Apache Airflow",
      "LangChain & LlamaIndex"
    ],
      projects: [
        "Student Performance Analytics Pipeline",
        "Real-time Data Processing System",
        "Data Warehouse Design for E-commerce",
        "Automated Report Generation System"
      ],
      experience: "1+ year focused on data engineering principles and building data-driven solutions for academic and personal projects.",
      icon: CategoryIcons["Data Engineering"]
    }
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const handleSkillClick = (skillCategory: string) => {
    const details = skillDetails[skillCategory];
    if (details && onSkillClick) {
      onSkillClick(skillCategory, details);
    }
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden group"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Open Detail Window Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSkillClick(category);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[var(--sec)] hover:bg-[var(--sec)]/80 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                      title="View Details"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 7H11V9H13V7ZM13 11H11V17H13V11Z"></path>
                      </svg>
                      Details
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;