"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import H2 from "./common/H2";
import Button from "./common/button";
import dbData from "../../db.json";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
}

interface ProjectCardProps {
  data: Project[];
  dataIndex: number;
}

interface CarouselRef {
  current: StackedCarousel | undefined;
}

const ProjectsSection = () => {
  const projects = dbData.projects;
  const carouselRef = useRef<StackedCarousel | null>(null);
  const scrollThrottleRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // If already scrolling, ignore additional scroll events
    if (isScrollingRef.current) return;
    
    // Get horizontal or vertical scroll direction
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    const primaryDelta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;
    
    if (Math.abs(primaryDelta) > 10) {
      isScrollingRef.current = true;
      
      if (primaryDelta > 0) {
        // Scroll right/down - go to next
        carouselRef.current?.goNext();
      } else {
        // Scroll left/up - go to previous  
        carouselRef.current?.goBack();
      }
      
      // Clear any existing timeout
      if (scrollThrottleRef.current) {
        clearTimeout(scrollThrottleRef.current);
      }
      
      // Reset scrolling flag after animation completes
      scrollThrottleRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 600); // Slightly longer than transition time (500ms)
    }
  };

  const ProjectCard = (props: ProjectCardProps) => {
    const project = props.data[props.dataIndex];
    
    const technologies = Array.isArray(project?.technologies)
      ? project.technologies
      : [];

    return (
      <div className="rounded-3xl overflow-hidden cursor-pointer glowing-border w-80 h-[400px]">
        <div className="h-full w-full primary-section-gradient rounded-3xl overflow-hidden flex flex-col">
          {/* Image container */}
          <div className="relative h-[60%] w-full overflow-hidden">
            {project?.image ? (
              <Image
                src={project.image}
                alt={project?.title || 'Project'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                <span className="text-white">No Image</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 h-[40%] flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-lg text-white">
                {project?.title || "Untitled"}
              </h3>
              <p className="text-gray-300 mb-3 text-sm line-clamp-2">
                {project?.description || "No description"}
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 3).map((tech: string, index: number) => (
                <span
                  key={index}
                  className="bg-white/10 rounded-full px-2 py-1 text-xs text-white"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="bg-white/10 rounded-full px-2 py-1 text-xs text-white">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="section flex flex-col items-center justify-start gap-8"
    >
      <H2 styles="text-3xl md:text-6xl">Projects</H2>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative w-full max-w-6xl">
        <div className="flex items-center justify-center gap-4 px-4">
          {/* Left Button */}
          <Button
            onClick={() => carouselRef.current?.goBack()}
            styles="rounded-full w-12 aspect-square flex justify-center items-center"
          >
            <IoChevronBack className="w-6 h-6" />
          </Button>

          {/* Carousel */}
          <div 
            className="flex-1" 
            style={{ height: "400px" }}
            onWheel={handleWheel}
          >
            <ResponsiveContainer
              carouselRef={carouselRef as CarouselRef}
              render={(width) => (
                <StackedCarousel
                  ref={carouselRef}
                  data={projects}
                  slideComponent={ProjectCard}
                  carouselWidth={width}
                  slideWidth={320}
                  height={400}
                  maxVisibleSlide={3}
                  disableSwipe={false}
                  customScales={[1, 0.85, 0.75]}
                  transitionTime={500}
                />
              )}
            />
          </div>

          {/* Right Button */}
          <Button
            onClick={() => carouselRef.current?.goNext()}
            styles="rounded-full w-12 aspect-square flex justify-center items-center"
          >
            <IoChevronForward className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Horizontal Scroll Carousel */}
      <div className="md:hidden w-full px-4">
        <div className="flex gap-4 overflow-x-auto projects-scroll pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-[280px] h-[350px]" style={{ scrollSnapAlign: 'start' }}>
              <div className="rounded-3xl overflow-hidden cursor-pointer glowing-border w-full h-full">
                <div className="h-full w-full primary-section-gradient rounded-3xl overflow-hidden flex flex-col">
                  {/* Image container */}
                  <div className="relative h-[60%] w-full overflow-hidden">
                    {project?.image ? (
                      <Image
                        src={project.image}
                        alt={project?.title || 'Project'}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        <span className="text-white">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 h-[40%] flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold mb-2 text-lg text-white">
                        {project?.title || "Untitled"}
                      </h3>
                      <p className="text-gray-300 mb-3 text-sm line-clamp-2">
                        {project?.description || "No description"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(project?.technologies) && project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="bg-white/10 rounded-full px-2 py-1 text-xs text-white"
                        >
                          {tech}
                        </span>
                      ))}
                      {Array.isArray(project?.technologies) && project.technologies.length > 3 && (
                        <span className="bg-white/10 rounded-full px-2 py-1 text-xs text-white">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
