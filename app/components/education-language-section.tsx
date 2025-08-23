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
  const educationData = data.education;
  const languagesData = data.languages;
  return (
    <section
      id="education"
      className="section flex flex-col gap-10 md:flex-row md:justify-around "
    >
      <article className=" flex flex-col md:items-center  text-white">
        <div className="flex md:items-center md:justify-center md:mb-4">
          <Image
            src="/svg/purple triangle(education tab).svg"
            alt=""
            width={100}
            height={100}
            className=" w-10 md:w-[80px] aspect-square"
          />
          <H2 styles={`text-3xl md:text-5xl`}>{`Education`}</H2>
        </div>
        <div className="flex flex-col text-sm md:text-lg text-white px-8 md:text-center mt-4 md:mt-8">
          <span>{`${educationData.institution}, ${educationData.location}`}</span>
          <strong className={`${amiko.className} text-xl`}>
            {`${educationData.degree}`}
          </strong>
          <span className="text-xs md:text-sm italic">{`${educationData.duration}`}</span>
        </div>
        <ul className="grid text-white mt-8 ml-7 md:ml-0 space-y-4 custom-list custom-list-education">
          <li className="flex items-center">
            <div className=" w-10 md:w-20 aspect-square mr-1 md:mr-3 bullet-point"></div>
            <strong className={`${amiko.className} text-lg md:text-3xl`}>
              {`GPA: ${educationData.gpa}`}
            </strong>
          </li>
          <li className="flex items-center">
            <div className=" w-10 md:w-20 aspect-square mr-1 md:mr-3 bullet-point"></div>
            <strong className={`${amiko.className} text-lg md:text-3xl`}>
              {` ${educationData.achievements[0]}`}
            </strong>
          </li>
        </ul>
      </article>
      <article className=" text-white">
        <div className="flex items-center md:justify-center mb-4">
          <Image
            src="/svg/purple triangle(education tab).svg"
            alt=""
            width={100}
            height={100}
            className=" w-10 md:w-[80px] aspect-square"
          />
          <H2 styles={`text-3xl md:text-5xl`}>{`Languages`}</H2>
        </div>
        <ul className="grid gap-y-3 mt-8 custom-list custom-list-languages">
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
