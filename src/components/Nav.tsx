import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiDevbox } from "react-icons/si";
import Logos from "./Logos.tsx";
import { Link } from "react-router-dom";
import { VIEW } from "../db/Types.ts";
import { useView } from "./useView.tsx";

const Nav = () => {
  const { view } = useView();
  const navIconStyles = `font-bold text-white h-7 w-7 mt-1`;

  const getNavItemClass = (viewIs: string) =>
    `text-3xl font-bold cursor-pointer transition duration-150 text-white font-sans flex gap-2 p-3 rounded-2xl ${view.is === viewIs ? "jelly-animate" : ""}`;

  return (
    <nav className="h-20 w-full bg-blue-500 fixed top-0 left-0 z-50">
      <div className="flex justify-between px-24 items-center h-full">
        <ul className="flex gap-14">
          <li>
            <Link
              to="/about"
              className={getNavItemClass(VIEW.about)}
              style={{
                backgroundColor: `${!(view.is === VIEW.about) ? "darkblue" : "#ff4757"} `,
              }}
            >
              <FaUser className={navIconStyles} />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={getNavItemClass(VIEW.projects)}
              style={{
                backgroundColor: `${!(view.is === VIEW.projects) ? "darkblue" : "#ff4757"} `,
              }}
            >
              <SiDevbox className={navIconStyles} />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={getNavItemClass(VIEW.contact)}
              style={{
                backgroundColor: `${!(view.is === VIEW.contact) ? "darkblue" : "#ff4757"} `,
              }}
            >
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
