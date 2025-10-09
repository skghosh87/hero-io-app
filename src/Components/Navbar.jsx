import React from "react";
import { Github } from "lucide-react";
import logo from "/logo.png";
import Container from "./Container";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 font-semibold";

  return (
    <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              ></div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
              >
                <li>
                  <NavLink to="/" className={getNavLinkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apps" className={getNavLinkClass}>
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/installation" className={getNavLinkClass}>
                    Installation
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="flex items-center text-xl">
              <img className="w-[40px] h-[40px]" src={logo} alt="" />
              <span className="font-bold logoText-color">HERO.IO</span>
            </Link>
          </div>

          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li>
                <NavLink to="/" className={getNavLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apps" className={getNavLinkClass}>
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/installation" className={getNavLinkClass}>
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <a
              href="https://github.com/skghosh87/hero-io-app.git"
              className="btn btn-color text-white"
            >
              <span>
                <Github />
              </span>
              Contribute
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
