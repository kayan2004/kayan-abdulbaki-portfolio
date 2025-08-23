import Navigation from "./navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Button from "./common/button";
import { useState } from "react";
import data from "@/db.json";

const Header = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const contacts = data.contact;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(contacts.phone);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  const socialLinks = [
    {
      icon: FaSquarePhone,
      action: copyPhoneNumber,
      isButton: true,
      showTooltip: true,
    },
    {
      icon: FaLinkedin,
      href: `https://www.linkedin.com/in/${contacts.social.linkedin}`,
      isButton: false,
      showTooltip: false,
    },
    {
      icon: FaGithub,
      href: `https://github.com/${contacts.social.github}`,
      isButton: false,
      showTooltip: false,
    },
    {
      icon: SiGmail,
      href: `mailto:${contacts.email}`,
      isButton: false,
      showTooltip: false,
    },
  ];

  return (
    <>
      <header className="flex justify-between max-h-10">
        <Navigation />
        <div className="flex items-center  gap-6">
          <div className="hidden lg:flex justify-center items-center gap-8">
            {socialLinks.map((link, index) =>
              link.isButton ? (
                <button
                  key={index}
                  onClick={link.action}
                  className="w-8 h-8 relative"
                >
                  <link.icon className="w-full h-full text-[#00E7FF] hover:text-white transition-colors" />
                  {link.showTooltip && showCopiedMessage && (
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 text-white px-3 py-1 rounded text-xs whitespace-nowrap animate-fade-in-out">
                      Phone number copied!
                    </div>
                  )}
                </button>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8"
                >
                  <link.icon className="w-full h-full text-[#00E7FF] hover:text-white transition-colors" />
                </a>
              )
            )}
          </div>
          <Button
            styles=" px-4 py-2 text-sm max-h-12 md:text-sm font-extrabold md:px-6 md:py-4"
            onClick={scrollToContact}
          >
            Reach out
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
