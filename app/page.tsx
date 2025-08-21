"use client";

import { useState, useEffect } from "react";
import AboutMe from "./components/about-me-section";
import First from "./components/intro-section";
import Header from "./components/header";
import EducationAndLanguageSection from "./components/education-language-section";
import SkillsSection from "./components/skills-section";
import ExperiencesSection from "./components/experiences-section";
import { Praise } from "next/font/google";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // const main = document.querySelector('main');
    const sections = document.querySelectorAll(
      ".section, .section-multi-viewport"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(sections).indexOf(
              entry.target as Element
            );
            setCurrentSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getBackgroundClass = () => {
    switch (currentSection) {
      case 0:
        return "primary-section-gradient";
      case 1:
        return "secondary-section-gradient";
      case 2:
        return "bg-black";
      case 3:
        return "secondary-section-gradient";
      case 4:
        return "bg-black";
      case 5:
        return "primary-section-gradient";
      case 6:
        return "bg-black";
      case 7:
        return "bg-black";
      case 8:
        return "primary-section-gradient";
      default:
        return "bg-black";
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 transition-all duration-500 ${getBackgroundClass()}`}
      />
      <div className="relative z-10">
        <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
          <Header />
        </div>
        <main className="px-4">
          <First />
          <AboutMe />
          <EducationAndLanguageSection />
          <SkillsSection />
          <ExperiencesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
