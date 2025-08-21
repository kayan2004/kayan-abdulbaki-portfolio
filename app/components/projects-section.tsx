"use client";

import { useState } from "react";
import H2 from "./common/H2";
import dbData from "../../db.json";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = dbData.projects;

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <section
      id="projects"
      className="section flex flex-col items-center justify-start gap-4"
    >
      <H2 styles={`text-6xl`}>{`Projects`}</H2>

      <div className="relative w-full max-w-6xl overflow-hidden">
        <div className="flex items-center justify-center gap-4 px-4">
          <button
            onClick={scrollLeft}
            className="z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-6 flex-1 justify-center mt-10">
            {getVisibleProjects().map((project, idx) => {
              const isCenter = project.position === 0;
              const isLeft = project.position === -1;
              const isRight = project.position === 1;

              return (
                <div
                  key={`${project.id}-${currentIndex}`}
                  className={`
                     rounded-lg overflow-hidden cursor-pointer
                    ${
                      isCenter
                        ? "w-80 h-100  z-20"
                        : "w-60 h-76 opacity-70"
                    }
                    ${isLeft ? "-translate-x-4" : ""}
                    ${isRight ? "translate-x-4" : ""}
                  `}
                  // style={{
                  //   border: "1px solid rgba(255, 255, 255, 0.2)",
                  //   boxShadow: isCenter
                  //     ? `
                  //     0px 0px 0.79px 0px rgba(0, 204, 255, 1),
                  //     0px 0px 1.57px 0px rgba(0, 204, 255, 1),
                  //     0px 0px 5.5px 0px rgba(0, 204, 255, 1),
                  //     0px 0px 11px 0px rgba(0, 204, 255, 1),
                  //     0px 0px 18.85px 0px rgba(0, 204, 255, 1),
                  //     0px 0px 33px 0px rgba(0, 204, 255, 1)
                  //   `
                  //     : `
                  //     0px 0px 0.5px 0px rgba(0, 204, 255, 0.6),
                  //     0px 0px 1px 0px rgba(0, 204, 255, 0.6),
                  //     0px 0px 3px 0px rgba(0, 204, 255, 0.6)
                  //   `,
                  // }}
                  onClick={() => {
                    if (!isCenter) {
                      setCurrentIndex(
                        (currentIndex +
                          project.position +
                          projects.length) %
                          projects.length
                      );
                    }
                  }}
                >
                  <div className="h-2/3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl opacity-60">🖼️</div>
                  </div>

                  <div className="p-4 h-1/3 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          isCenter ? "text-lg" : "text-base"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-gray-300 mb-3 ${
                          isCenter ? "text-sm" : "text-xs"
                        } line-clamp-2`}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, isCenter ? 3 : 2)
                        .map((tech) => (
                          <span
                            key={tech}
                            className={`bg-white/10 rounded-full px-2 py-1 ${
                              isCenter ? "text-xs" : "text-[10px]"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > (isCenter ? 3 : 2) && (
                        <span
                          className={`bg-white/10 rounded-full px-2 py-1 ${
                            isCenter ? "text-xs" : "text-[10px]"
                          }`}
                        >
                          +{project.technologies.length - (isCenter ? 3 : 2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={scrollRight}
            className="z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
