import React from "react";
import logo from "../../assets/images/logo.png";
import { BsFacebook, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from "react-router";
const Footer = () => {
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
      <footer className="footer footer-horizontal urbanist  footer-center bg-black text-white p-10 rounded-2xl">
        <aside>
          <div className="flex items-end">
            <figure>
              <img src={logo} alt="" />
            </figure>
            <h1 className="font-bold text-2xl">ZapShift</h1>
          </div>
          <p className="text-gray-500">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </aside>
        <nav className="space-y-4">
          <ul className="flex border-y border-dashed border-gray-500 py-6 gap-5 text-gray-400">
            {links}
          </ul>
          <div className="grid grid-flow-col gap-4">
            <a>
              <BsTwitterX size={24}></BsTwitterX>
            </a>
            <a>
              <BsYoutube size={24}></BsYoutube>
            </a>
            <a>
              <BsFacebook size={24}></BsFacebook>
            </a>
          </div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
