import React, { useState } from "react";
import SkillsList from "./SkillsList";
import SkillDetailWindow from "./SkillDetailWindow";

interface SkillDetails {
  title: string;
  description: string;
  technologies: string[];
  projects: string[];
  experience: string;
  icon: React.ReactNode;
}

const SkillsContainer: React.FC = () => {
  const [openSkillWindows, setOpenSkillWindows] = useState<Array<{
    id: string;
    skill: SkillDetails;
    position: { x: number; y: number };
  }>>([]);

  const handleSkillClick = (skillName: string, skillDetails: SkillDetails) => {
    // Check if window is already open
    const existingWindow = openSkillWindows.find(window => window.id === skillName);
    if (existingWindow) {
      return; // Don't open duplicate windows
    }

    // Calculate position for the window (right side of the screen)
    const windowWidth = 450;
    const windowHeight = 600;
    const rightPosition = window.innerWidth - windowWidth - 50;
    const topPosition = Math.max(50, (window.innerHeight - windowHeight) / 2);

    // Add staggered positioning if multiple windows
    const offsetMultiplier = openSkillWindows.length;
    const finalPosition = {
      x: rightPosition - (offsetMultiplier * 30),
      y: topPosition + (offsetMultiplier * 30),
    };

    const newWindow = {
      id: skillName,
      skill: skillDetails,
      position: finalPosition,
    };

    setOpenSkillWindows(prev => [...prev, newWindow]);
  };

  const handleCloseSkillWindow = (skillName: string) => {
    setOpenSkillWindows(prev => prev.filter(window => window.id !== skillName));
  };

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 relative">
      {/* Skills List */}
      <div className="flex flex-col w-full space-y-4">
        <SkillsList onSkillClick={handleSkillClick} />
      </div>

      {/* Terminal Section */}
      <div className="flex justify-center mt-14 md:w-full md:h-[292px] size-[290px] pt-3 md:pt-9 md:ml-16">
        <div className="terminal-container">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-controls">
              <div className="control red"></div>
              <div className="control yellow"></div>
              <div className="control green"></div>
            </div>
            <div className="terminal-title">yasser@portfolio:~$</div>
          </div>
          
          {/* Terminal Body */}
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command typing-animation">npm run build-dreams</span>
            </div>
            <div className="terminal-line delay-1">
              <span className="output">✓ Compiling creativity...</span>
            </div>
            <div className="terminal-line delay-2">
              <span className="output">✓ Bundling innovation...</span>
            </div>
            <div className="terminal-line delay-3">
              <span className="output">✓ Deploying solutions...</span>
            </div>
            <div className="terminal-line delay-4">
              <span className="success">🚀 Ready to change the world!</span>
            </div>
            <div className="terminal-cursor">_</div>
          </div>
        </div>
      </div>

      {/* Skill Detail Windows */}
      {openSkillWindows.map((window) => (
        <SkillDetailWindow
          key={window.id}
          skill={window.skill}
          isOpen={true}
          onClose={() => handleCloseSkillWindow(window.id)}
          position={window.position}
        />
      ))}
    </div>
  );
};

export default SkillsContainer;