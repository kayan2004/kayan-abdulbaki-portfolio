'use client';

import React from "react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navItems = [
    { label: "About Me", id: "about-me" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
  ];

  return (
    <nav>
      <ul className="flex gap-8 text-xl mt-4 text-white">
        {navItems.map((item) => (
          <li 
            key={item.id}
            className="nav-item cursor-pointer hover:text-[#00E7FF] transition-colors duration-300" 
            data-text={item.label}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
