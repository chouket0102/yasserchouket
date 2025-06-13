import React, { useRef } from "react";

const AboutSection = () => {
  const aboutRef = useRef(null);

  return (
    <section id="about" className="w-full py-12 border-t border-[#ffffff10] text-[var(--white)]" ref={aboutRef}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">Who am I</h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-8">About Me</h3>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
          <div className="profile-container relative w-full max-w-md mx-auto md:mx-0">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-[#ffffff15] group">
              <img 
                className="w-full h-full object-cover"
                src="/picyasser.jpg" 
                alt="Profile"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--sec)]/20 via-transparent to-[var(--sec)]/20 mix-blend-overlay group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-[100px] h-[100px] bg-[var(--sec)] rounded-full flex items-center justify-center shadow-lg shadow-[var(--sec)]/20">
              <div className="absolute inset-[3px] rounded-full bg-[var(--background)] flex flex-col items-center justify-center text-[var(--white)]">
                <span className="text-xs font-medium">Yasser</span>
                <span className="text-lg font-bold">Chouket</span>
              </div>
            </div>
          </div>

          <div className="text w-full flex flex-col justify-between">
            <div className="space-y-6">
             <p className="text-[var(--white-icon)] text-lg leading-relaxed">
                I'm a creative problem-solver with a passion for turning complex challenges into 
                <span className="relative mx-2 inline-block group">
                  <span className="relative z-10 text-[var(--white)] px-3 py-1 font-semibold">elegant solutions</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-[var(--sec)]/30 rounded-lg transform skew-x-12 group-hover:skew-x-0 transition-transform duration-300"></span>
                </span>
                that make a real difference.
              </p>
              
              <p className="text-[var(--white-icon)] text-lg leading-relaxed">
                With experience in full-stack development, I thrive on building
                <span className="relative mx-2 inline-block group">
                  <span className="relative z-10 text-[var(--white)] px-3 py-1 font-semibold">intuitive, scalable</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-[var(--sec)]/30 rounded-lg transform skew-x-12 group-hover:skew-x-0 transition-transform duration-300"></span>
                </span> 
                web experiences through clean code and thoughtful design.
              </p>
              
              <p className="text-[var(--white-icon)] text-lg leading-relaxed">
                Currently pursuing Software Engineering at 
                <span className="text-[var(--sec)]">INSAT</span> with a growing passion for
                <span className="text-[var(--sec)]"> Data Engineering</span> and AI.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-[#1414149c] text-[var(--white)] hover:text-white border border-[var(--white-icon-tr)] rounded-lg hover:bg-[#ffffff15] transition-all duration-300"
              >
                <span className="font-medium">Get in touch</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;