import { NavHashLink } from "react-router-hash-link";

export default function MobileNav({ hideMenu }) {
  return (
    <div className="ml-[35%]">
      <ul className="mt-10 cursor-pointer font-serif text-3xl">
        <li className="py-4 hover:text-orange-500 border-slate-700 font-semibold group">
          <p className=" transition-all ease-in group-hover:text-4xl duration-200">
            <NavHashLink
              smooth
              to="/#about"
              className={({ isActive }) =>
                document.location.hash == "#about"
                  ? "text-orange-500 text-4xl"
                  : undefined
              }
              onClick={hideMenu}
            >
              About
            </NavHashLink>
          </p>
        </li>
        <li className="py-4 hover:text-orange-500 border-slate-700 font-semibold group">
          <p className=" ease-in group-hover:text-4xl duration-200">
            <NavHashLink
              smooth
              to="#skills"
              className={({ isActive }) =>
                document.location.hash == "#skills"
                  ? "text-orange-500 text-4xl"
                  : undefined
              }
              onClick={hideMenu}
            >
              Skills
            </NavHashLink>
          </p>
        </li>
        <li className="py-4 hover:text-orange-500 border-slate-700 font-semibold group">
          <p className=" ease-in group-hover:text-4xl duration-200">
            <NavHashLink
              smooth
              to="#work"
              className={({ isActive }) =>
                document.location.hash == "#work"
                  ? "text-orange-500 text-4xl"
                  : undefined
              }
              onClick={hideMenu}
            >
              Work
            </NavHashLink>
          </p>
        </li>
        <li className="py-4 hover:text-orange-500 border-slate-700 font-semibold group">
          <p className=" ease-in group-hover:text-4xl duration-200">
            <NavHashLink
              smooth
              to="#experience"
              className={({ isActive }) =>
                document.location.hash == "#experience"
                  ? "text-orange-500 text-4xl"
                  : undefined
              }
              onClick={hideMenu}
            >
              Experience
            </NavHashLink>
          </p>
        </li>
        <li className="py-4 hover:text-orange-500 border-slate-700 font-semibold group">
          <p className=" ease-in group-hover:text-4xl duration-200">
            <NavHashLink
              smooth
              to="#contact"
              className={({ isActive }) =>
                document.location.hash == "#contact"
                  ? "text-orange-500 text-4xl"
                  : undefined
              }
              onClick={hideMenu}
            >
              Contact
            </NavHashLink>
          </p>
        </li>
      </ul>
    </div>
  );
}
