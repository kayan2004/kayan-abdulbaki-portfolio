import React from "react";
import H2 from "./common/H2";
import {
  FaLinkedin,
  FaLocationArrow,
  FaGithub,
  FaMailchimp,
  FaPhone,
} from "react-icons/fa";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section flex flex-col items-center justify-start text-center pt-8 gap-8"
    >
      <H2 styles={`text-6xl`}>{`Contact`}</H2>

      <ul className="grid grid-cols-2 gap-x-40 mt-20 gap-y-10">
        <button className="text-white">
          <li className="flex gap-2 items-center text-2xl">
            <FaLinkedin className="w-8 h-8 text-[#00E7FF]" />
            <span>kayan-abdulbaki</span>
          </li>
        </button>
        <button className="text-white">
          <li className="flex gap-2 items-center text-2xl">
            <FaLocationArrow className="w-8 h-8 text-[#00E7FF]" />
            <span>Beirut, Lebanon</span>
          </li>
        </button>
        <button className="text-white">
          <li className="flex gap-2 items-center text-2xl">
            <FaPhone className="w-8 h-8 text-[#00E7FF]" />
            <span>+961 81 932 462</span>
          </li>
        </button>
        <button className="text-white">
          <li className="flex gap-2 items-center text-2xl ">
            <FaGithub className="w-8 h-8 text-[#00E7FF]" />
            <span>kayan2004</span>
          </li>
        </button>
        <button className="text-white">
          <li className="flex gap-2 items-center text-2xl">
            <FaMailchimp className="w-8 h-8 text-[#00E7FF]" />
            <span>kayanabdepbaki@gmail.com</span>
          </li>
        </button>
      </ul>
    </section>
  );
};

export default ContactSection;
