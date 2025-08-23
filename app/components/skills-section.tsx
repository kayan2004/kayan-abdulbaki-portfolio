import GlowingBar from "./common/glowing-bar";
import H2 from "./common/H2";

import data from "@/db.json";
import SkillItem from "./skill-item";
const SkillsSection = () => {
  const skillsData = data.skills;
  return (
    <section
      id="skills"
      className="section flex flex-col pt-2 gap-8"
    >
      <H2 styles={`text-3xl md:text-6xl`}>{`Skills`}</H2>
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-14 md:place-items-center auto-rows-auto px-4">
        {skillsData.map((skill) => {
          return (
            <SkillItem
              key={skill.id}
              category={skill.category}
              technologies={skill.technologies}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SkillsSection;
