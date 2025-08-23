import Image from "next/image";
import H1 from "./common/H1";
import H2 from "./common/H2";
import data from "@/db.json";

const First = () => {
  const personalData = data.personal;
  return (
    <section className="section flex flex-col items-center text-center py-4 gap-8">
      <H1>{`Hello, I'm ${personalData.name}`}</H1>
      <H2 styles={`text-3xl md:text-8xl`}>{personalData.welcomeMessage}</H2>
      <Image
        className="w-60 h-60 object-cover  rounded-full"
        src={personalData.profileImage}
        alt="profile picture"
        priority={true}
        width={990}
        height={1280}
      />
    </section>
  );
};

export default First;
