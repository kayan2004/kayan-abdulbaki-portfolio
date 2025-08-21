import Navigation from "./navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Button from "./common/button";
import { useState } from "react";
import data from "@/db.json";
const Header = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

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

  const contacts = data.contact;

  return (
    <>
      <header className="flex justify-between px-6">
        <Navigation />
        <div className="flex justify-center gap-20">
          <div className="flex gap-8 mt-4">
            <button onClick={copyPhoneNumber} className="w-8 h-8 relative">
              <FaSquarePhone className="w-full h-full text-[#00E7FF] hover:text-white transition-colors" />
              {showCopiedMessage && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 text-white px-3 py-1 rounded text-xs whitespace-nowrap animate-fade-in-out">
                  Phone number copied!
                </div>
              )}
            </button>
            <a
              href={`https://www.linkedin.com/in/${contacts.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8"
            >
              <FaLinkedin className="w-full h-full text-[#00E7FF] hover:text-white transition-colors" />
            </a>
            <a
              href={`https://github.com/${contacts.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8"
            >
              <FaGithub className="w-full h-full text-[#00E7FF] hover:text-white transition-colors" />
            </a>
            <a href={`mailto:${contacts.email}`} className="w-8 h-8">
              <SiGmail className="w-full h-full text-[#00E7FF] hover:text-white transition-colors" />
            </a>
          </div>
          <Button styles="px-6 py-4" onClick={scrollToContact}>
            Reach out
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
