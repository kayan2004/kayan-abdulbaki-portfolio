import React from "react";
import { Amiko } from "next/font/google";

const amiko = Amiko({
  subsets: ["latin"],
  weight: "700",
});

interface LanguageItemProps {
  language: string;
  proficiency: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ language, proficiency }) => {
  return (
    <li className="flex items-center ml-7 md:ml-0">
      <div className="w-10 md:w-20 aspect-square mr-4 bullet-point"></div>
      <div className="flex flex-col">
        <strong className={`${amiko.className} text-lg md:text-3xl`}>{language}</strong>
        <span>{proficiency}</span>
      </div>
    </li>
  );
};

export default LanguageItem;