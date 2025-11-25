import React from "react";
import { BiHome } from "react-icons/bi";
import { BsLayoutSidebar } from "react-icons/bs";
import {} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/images/logo.png";
import { FaDoorOpen, FaHistory } from "react-icons/fa";
const DashLayout = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/dashboard"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Dashboard"
        >
          {/* Settings icon */}
          <MdDashboard size={26}></MdDashboard>
          <span className="is-drawer-close:hidden">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/deliveries"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="All Deliveries"
        >
          {/* Settings icon */}
          <FaDoorOpen size={24} />
          <span className="is-drawer-close:hidden">All Deliveries</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/paymentHistory"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Payment History"
        >
          {/* Settings icon */}
          <FaHistory size={24} />
          <span className="is-drawer-close:hidden">Payment History</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer lg:drawer-open urbanist">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar py-4  w-full bg-white">
            <label
              htmlFor="my-drawer-4"
              aria-label=""
              className=" bg-transparent lg:hidden pl-4"
            >
              {/* Sidebar toggle icon */}
              <BsLayoutSidebar size={26}></BsLayoutSidebar>
            </label>
            <div className="px-4">
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
          </nav>
          {/*Dynamic Page content here */}
          <div className="p-4 bg-gray-300 h-screen">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-white  is-drawer-close:w-16 is-drawer-open:w-64 border-r-2 border-gray-300">
            {/* Sidebar content here */}
            <ul className="menu w-full grow gap-6 text-xl">
              {/* List item */}
              <li>
                <label
                  htmlFor="my-drawer-4"
                  aria-label=""
                  className=" bg-transparent"
                >
                  {/* Sidebar toggle icon */}
                  <BsLayoutSidebar size={26}></BsLayoutSidebar>
                </label>
              </li>

              {/* List item */}
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
