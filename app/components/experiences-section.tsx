import React, { useState, useEffect } from "react";
import H2 from "./common/H2";
import GlowingBar from "./common/glowing-bar";
import dbData from "../../db.json";

const ExperiencesSection = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  const experiences = dbData.experience.map((exp, index) => ({
    ...exp,
    side: index % 2 === 0 ? "left" : "right",
  }));

  useEffect(() => {
    const handleScroll = () => {
      const experiencesSections = document.querySelectorAll(
        ".experience-section"
      );
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if we're in the experiences section
      let inExperiencesSection = false;
      experiencesSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          inExperiencesSection = true;
          setCurrentExperience(index);
        }
      });

      // Show/hide the glowing bar
      // const glowingBar = document.querySelector(".fixed-glowing-bar");
      // if (glowingBar) {
      //   glowingBar.style.opacity = inExperiencesSection ? "1" : "0";
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [experiences.length]);

  return (
    <section id="experience" className="relative">
      <div className="relative">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
          style={{
            top: "6%", // Start after title area (about 20% down from top)
            bottom: "0", // End at bottom
            height: "80%", // Span 80% of the container height
          }}
        >
          <div className="h-full flex items-start">
            <GlowingBar styles="rounded-full" />
          </div>
        </div>

        {experiences.map((exp, index) => (
          <section
            key={exp.id}
            className="section-multi-viewport relative z-20"
          >
            <div className="flex flex-col items-center justify-start h-screen px-8 
              ">
              {index === 0 && <H2 styles="text-6xl mb-16 ">Experience</H2>}

              <div
                className={`grid grid-cols-2 gap-16 max-w-6xl w-full ${
                  exp.side === "right"
                    ? "grid-cols-[1fr_1fr]"
                    : "grid-cols-[1fr_1fr]"
                }`}
              >
                {exp.side === "left" ? (
                  <>
                    {/* Content on left side */}
                    <div className="text-right pr-16">
                      <h3 className="text-white text-3xl font-bold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 text-xl mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 mb-6">{exp.duration}</p>
                      <p className="text-gray-300 text-lg mb-6">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Empty right side */}
                    <div className="pl-16"></div>
                  </>
                ) : (
                  <>
                    {/* Empty left side */}
                    <div className="pr-16"></div>
                    {/* Content on right side */}
                    <div className="text-left pl-16">
                      <h3 className="text-white text-3xl font-bold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 text-xl mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 mb-6">{exp.duration}</p>
                      <p className="text-gray-300 text-lg mb-6">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
