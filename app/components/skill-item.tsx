import React from "react";
import GlowingBar from "./common/glowing-bar";

type SkillItemProps = {
  category: string;
  technologies: string[];
};
const SkillItem = ({ category, technologies }: SkillItemProps) => {
  return (
    <li className="flex gap-4 items-start max-w-xs h-full">
      <div className="flex-shrink-0 h-full">
        <GlowingBar />
      </div>
      <div className="flex flex-col ml-3  flex-1">
        <strong className="text-white text-3xl text-start">{category}</strong>
        <span className="text-gray-300 text-lg text-start">
          {technologies.map((tech, index) => tech +(index + 1 === technologies.length ? '.' : ", "))}
        </span>
      </div>
    </li>
  );
};

export default SkillItem;
