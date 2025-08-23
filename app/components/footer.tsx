import Button from "./common/button";
import { IoMdDownload } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-4 md:pr-6 pb-6 z-50">
      <Button styles=" px-2 py-3 md:px-6 md:py-4 justify-self-end">
        <a
          href="/resume.pdf"
          download="Kayan_Abdulbaki_Resume.pdf"
          className="block w-full h-full"
        >
          <span className="hidden md:inline-block">Download my resume</span>
          <IoMdDownload className='w-4 h-4 md:hidden'/>
        </a>
      </Button>
    </footer>
  );
};

export default Footer;
