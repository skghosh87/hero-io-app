import { Github } from "lucide-react";
import React from "react";
import logo from "/logo.png";
import Container from "./Container";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/apps">Apps</NavLink>
                  {/* <a href="/apps">Apps</a> */}
                </li>
                <li>
                  <NavLink to="/installation">Installation</NavLink>
                  {/* <a href="/installation">Installation</a> */}
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
                {/* <a href="/apps">Apps</a> */}
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
                {/* <a href="/installation">Installation</a> */}
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
