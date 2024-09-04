import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/oeelogo.png";

const Navbar = () => {
   return (
      <nav className="mb-20 flex items-center justify-between py-6">
         <div className="flex flex-shrink-0 items-center">
            <img className="mx-8 w-10" src={logo} alt="logo" />
         </div>
         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/tosinehindero/" target="_blank" rel="noopener noreferrer">
               <FaLinkedin />
            </a>
            <a href="https://github.com/tosinehindero" target="_blank" rel="noopener noreferrer">
               <FaGithub />
            </a>
            <a href="https://www.instagram.com/naijafit77/" target="_blank" rel="noopener noreferrer">
               <FaInstagram />
            </a>
            {/* <FaSquareXTwitter /> */}
         </div>
      </nav>
   );
};

export default Navbar;

