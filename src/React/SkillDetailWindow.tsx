import React from "react";
import DraggableWindow from "./DraggableWindow";

interface SkillDetails {
  title: string;
  description: string;
  technologies: string[];
  projects: string[];
  experience: string;
  icon: React.ReactNode;
}

interface SkillDetailWindowProps {
  skill: SkillDetails;
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
}

const SkillDetailWindow: React.FC<SkillDetailWindowProps> = ({
  skill,
  isOpen,
  onClose,
  position,
}) => {
  if (!isOpen) return null;

  return (
    <DraggableWindow
      title={`${skill.title} - Details`}
      onClose={onClose}
      initialPosition={position}
      initialSize={{ width: 450, height: 600 }}
      className="skill-detail-window"
    >
      <div className="h-full overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[var(--sec)]/20 to-purple-600/20 p-6 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[var(--sec)]/20 rounded-xl backdrop-blur-sm border border-[var(--sec)]/30">
              {skill.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{skill.title}</h2>
              <p className="text-[var(--sec)] text-sm font-medium">{skill.experience}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sec)] mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 7H11V9H13V7ZM13 11H11V17H13V11Z"></path>
              </svg>
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">{skill.description}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sec)] mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 5H4V19H20V5ZM7.5 8L11.5 12L7.5 16H9.5L12.5 13L15.5 16H17.5L13.5 12L17.5 8H15.5L12.5 11L9.5 8H7.5Z"></path>
              </svg>
              Technologies & Tools
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {skill.technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[var(--sec)]/50 transition-colors">
                  <div className="w-2 h-2 bg-[var(--sec)] rounded-full"></div>
                  <span className="text-gray-200">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects
          <div>
            <h3 className="text-lg font-semibold text-[var(--sec)] mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M13.5 2C13.7761 2 14 2.22386 14 2.5V4H18C18.5523 4 19 4.44772 19 5V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4H10V2.5C10 2.22386 10.2239 2 10.5 2H13.5ZM12 6H7V18H17V6H12ZM11 8V10H9V12H11V14H13V12H15V10H13V8H11Z"></path>
              </svg>
              Related Projects
            </h3>
            <div className="space-y-3">
              {skill.projects.map((project, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-6 h-6 bg-gradient-to-br from-[var(--sec)] to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-200 flex-1">{project}</span>
                </div>
              ))}
            </div> 
          </div>*/}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[var(--sec)]/10 to-purple-600/10 p-4 rounded-lg border border-[var(--sec)]/20">
            <p className="text-center text-gray-300 text-sm">
              Interested in working together on {skill.title.toLowerCase()} projects?
            </p>
            <div className="flex gap-2 mt-3 justify-center">
              <a
                href="https://github.com/chouket0102"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--sec)] hover:bg-[var(--sec)]/80 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
                </svg>
                View GitHub
              </a>
              <a
                href="mailto:yasserchouket2101@gmail.com"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/>
                </svg>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </DraggableWindow>
  );
};

export default SkillDetailWindow;