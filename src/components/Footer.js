import images from "../Assets/images.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-bgShade py-28 md:px-8 px-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
        <a href="/">
          <img src={images} alt="" />
        </a>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <Link
            to="/Home"
            className="block text-primary hover:text-gray-400 py-2 px-4"
          >
            Home
          </Link>
          <Link to="/Portfolio" className="block hover:text-gray-400 py-2 px-4">
            Portfolio
          </Link>
          <Link to="/About" className="block  hover:text-gray-400 py-2 px-4">
            About me
          </Link>
          <Link to="/Contact" className="block  hover:text-gray-400 py-2 px-4">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
        </div>
      </div>
      <hr />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
        <p>Made By DevShahidUllah</p>
        <div className="space-x-6">
          <a href="/" className="hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-slate-400">
            Terms of Service
          </a>
          <a href="/" className="hover:text-slate-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
