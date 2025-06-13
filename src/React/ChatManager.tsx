import React, { useState, useEffect } from 'react';
import ChatTerminal from './ChatTerminal';

const ChatManager = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');

  const tooltipMessages = [
    "Ask me anything! 💬",
    "Let's chat! 🚀",
    "Questions? I'm here! 💡",
    "Say hello! 👋",
    "Need help? Ask away! ❓"
  ];

  useEffect(() => {
    // Cycle through tooltip messages
    const interval = setInterval(() => {
      const randomMessage = tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)];
      setTooltipText(randomMessage);
    }, 3000);

    // Set initial message
    setTooltipText(tooltipMessages[0]);

    return () => clearInterval(interval);
  }, []);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setShowTooltip(false);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button with Tooltip */}
      <div className={`fixed bottom-14 sm:bottom-6 right-6 z-50 ${isChatOpen ? 'hidden' : 'flex'}`}>
        {/* Animated Background Rings */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-[var(--sec)]/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-[var(--sec)]/10 animate-pulse"></div>
        </div>

        {/* Tooltip */}
        <div 
          className={`absolute bottom-full right-0 mb-3 px-3 py-2 bg-[var(--sec)] text-white text-sm rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 transform ${
            showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          {tooltipText}
          {/* Tooltip Arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--sec)]"></div>
        </div>

        {/* Main Button */}
        <button
          onClick={handleToggleChat}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-14 h-14 bg-[var(--sec)] hover:bg-[var(--sec)]/80 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95"
          aria-label="Open Chat"
        >
          {/* Chat Icon with Animation */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="currentColor"
            className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
          >
            <path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"></path>
          </svg>

          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </button>
      </div>
      
      {/* Chat Terminal */}
      {isChatOpen && (
        <ChatTerminal 
          isOpen={isChatOpen} 
          onClose={handleCloseChat}
        />
      )}
    </>
  );
};

export default ChatManager;