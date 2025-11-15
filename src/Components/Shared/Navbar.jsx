import React from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <Link to={"/service"}>Services</Link>
      </li>
      <li>
        <Link to={"/coverage"}>Coverage</Link>
      </li>
      <li>
        <Link to={"/about"}>About Us</Link>
      </li>
      <li>
        <Link to={"/pricing"}>Pricing</Link>
      </li>
      <li>
        <Link to={"/be-a-rider"}>Be a Rider</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white rounded-2xl shadow-sm urbanist ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost lg:hidden"
            >
              <BiMenu size={30}></BiMenu>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-primary-content"
            >
              {links}
            </ul>
          </div>

          <Link
            to={"/"}
            className="flex items-end justify-center text-2xl font-bold"
          >
            <figure className="w-8">
              <img src={logo} alt="" />
            </figure>
            ZapShift
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            to={"/login"}
            className="btn text-primary-content border-2 border-gray-400"
          >
            Sign In
          </Link>
          <div className="hidden md:block">
            <Link to={"/be-a-rider"} className="btn  bg-primary">
              Be a rider
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
