import React from "react";
import H2 from "./common/H2";
import Image from "next/image";
import data from "@/db.json";
import LanguageItem from "./LanguageItem";
import { Amiko } from "next/font/google";

const amiko = Amiko({
  subsets: ["latin"],
  weight: "700",
});

const EducationAndLanguageSection = () => {
  const educationData = data.education
  const languagesData = data.languages
  return (
    <section id="education" className="section grid grid-cols-2 gap-8">
      <article className=" flex flex-col items-center  text-white">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/assets/svg/purple triangle(education tab).svg"
            alt=""
            width={100}
            height={100}
            className="mr-4"
          />
          <H2 styles={`text-6xl`}>{`Education`}</H2>
        </div>
        <div className="flex flex-col text-white text-center mt-8">
          <span>{`${educationData.institution}, ${educationData.location}`}</span>
          <strong className={`${amiko.className} text-3xl`}>
            {`${educationData.degree}`}
          </strong>
          <span className="text-sm italic">{`${educationData.duration}`}</span>
        </div>
        <ul className="grid text-white mt-8 space-y-4 custom-list custom-list-education">
          <li className="flex items-center">
            <div className="w-20 h-20 mr-3 bullet-point"></div>
            <strong className={`${amiko.className} text-3xl`}>
              {`GPA: ${educationData.gpa}`}
            </strong>
          </li>
          <li className="flex items-center">
            <div className="w-20 h-20 mr-3 bullet-point"></div>
            <strong className={`${amiko.className} text-3xl`}>
              {` ${educationData.achievements[0]}`}
            </strong>
          </li>
        </ul>
      </article>
      <article className=" text-white ">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/assets/svg/purple triangle(education tab).svg"
            alt=""
            width={100}
            height={100}
            className="mr-4"
          />
          <H2 styles={`text-6xl`}>{`Languages`}</H2>
        </div>
        <ul className="grid gap-y-3 mt-8 ml-[20%] custom-list custom-list-languages">
          {languagesData.map((language) => (
            <LanguageItem
              key={language.id}
              language={language.language}
              proficiency={language.proficiency}
            />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default EducationAndLanguageSection;
