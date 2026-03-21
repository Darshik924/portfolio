import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiDevbox } from "react-icons/si";
import Logos from "./Logos.tsx";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItemStyle = `text-3xl font-bold cursor-pointer hover:bg-amber-800 hover:text-amber-200 transition duration-150 text-white font-sans flex gap-2 p-3 bg-blue-950 rounded-2xl jelly-button`;

  const navIconStyles = `font-bold text-white h-7 w-7 mt-1`;

  return (
    <nav className="h-20 w-full bg-blue-500 fixed top-0 left-0 z-50">
      <div className="flex justify-between px-24 items-center h-full">
        <ul className="flex gap-14">
          <li>
            <Link to="/about" className={navItemStyle}>
              <FaUser className={navIconStyles} />
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={navItemStyle}>
              <SiDevbox className={navIconStyles} />
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navItemStyle}>
              <IoIosMail className={navIconStyles} />
              Contact
            </Link>
          </li>
        </ul>

        <Logos />
      </div>
    </nav>
  );
};

export default Nav;
