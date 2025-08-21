import GlowingBar from "./common/glowing-bar";
import H2 from "./common/H2";

import data from "@/db.json";
import SkillItem from "./skill-item";
const SkillsSection = () => {
  const skillsData = data.skills;
  return (
    <section
      id="skills"
      className="section flex flex-col items-center justify-start text-center pt-2 gap-8"
    >
      <H2 styles={`text-6xl`}>{`Skills`}</H2>
      <ul className=" grid grid-cols-3 gap-x-10 gap-y-14 place-items-center auto-rows-auto">
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
