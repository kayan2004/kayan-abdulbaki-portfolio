import React from "react";
import H2 from "./common/H2";
import { FaLinkedin, FaLocationArrow, FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import dbData from "../../db.json";

const ContactSection = () => {
  const contact = dbData.contact;

  const contactItems = [
    {
      icon: FaLinkedin,
      label: contact.social.linkedin,
      value: contact.social.linkedin,
      link: `https://linkedin.com/in/${contact.social.linkedin}`,
    },
    {
      icon: FaLocationArrow,
      label: contact.location,
      value: contact.location,
      link: null,
    },
    {
      icon: FaSquarePhone,
      label: contact.phone,
      value: contact.phone,
      link: `tel:${contact.phone}`,
    },
    {
      icon: FaGithub,
      label: contact.social.github,
      value: contact.social.github,
      link: `https://github.com/${contact.social.github}`,
    },
    {
      icon: SiGmail,
      label: contact.email,
      value: contact.email,
      link: `mailto:${contact.email}`,
    },
  ];

  return (
    <section
      id="contact"
      className="section flex flex-col items-center justify-start text-center gap-8"
    >
      <H2 styles={`text-3xl md:text-6xl mt-2`}>{`Contact`}</H2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-40 mt-20 gap-y-5 md:gap-y-10">
        {contactItems.map((item, index) => (
          <li key={index} className=" text-lg md:text-2xl">
            {item.link ? (
              <button
                className="text-white flex gap-6 group items-center hover:text-[#00E7FF] transition-colors"
                onClick={() => window.open(item.link, "_blank")}
              >
                <item.icon className="w-8 h-8 text-[#00E7FF]" />
                <span>{item.value}</span>
              </button>
            ) : (
              <div className="text-white flex gap-6   items-center">
                <item.icon className="w-8 h-8 text-[#00E7FF]" />
                <span>{item.value}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactSection;
