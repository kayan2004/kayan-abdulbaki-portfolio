import H2 from "./common/H2";
import data from "@/db.json";
const AboutMe = () => {
  const personalData = data.personal;
  return (
    <section
      id="about-me"
      className="section flex flex-col items-center justify-start text-center pt-2 gap-8"
    >
      <H2 styles={`text-3xl md:text-6xl`}>{`About me`}</H2>

      <p className="text-white text-lg md:text-3xl text-start md:text-center  max-w-[80%] md:max-w-3xl">
        {personalData.description}
      </p>
    </section>
  );
};

export default AboutMe;
