import { AiOutlineInstagram } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="text-black py-8 bg-[#A1B8A7]">
      <ul className="flex bg-[#fff]/30 py-1 justify-end gap-3">
        <li>
          <AiOutlineInstagram className="text-[#192b2b] w-5 h-full" />
        </li>
        <li>
          <BiHomeAlt className="text-[#192b2b] w-5 h-full" />
        </li>
        <li className="mr-6">
          <AiOutlineMenu className="text-[#192b2b] w-4 h-full" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
