"use client";

import { Twirl as Hamburger, Twirl } from "hamburger-react";
import { useState } from "react";
const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
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

  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div
        className="block md:hidden text-[#00E7FF] hamburger-menu"
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul className="hidden md:flex gap-4 md:gap-6 text-xs md:text-lg lg:text-xl mt-4 text-white">
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
      {isOpen && (
        <div className="glowing-border-menu mt-2">
          <ul className="md:hidden grid grid-cols-1 gap-4 text-lg p-4 bg-black text-white ">
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
        </div>
      )}
    </nav>
  );
};

export default Navigation;
