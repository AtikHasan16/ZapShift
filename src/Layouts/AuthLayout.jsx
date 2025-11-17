import React from "react";
import { Link, Outlet } from "react-router";
import logo from "../assets/images/logo.png";
import authImg from "../assets/images/authImage.png";

const AuthLayout = () => {
  return (
    <div className="urbanist">
      <div className="flex items-center h-screen flex-col md:flex-row">
        <div className="flex-1/2 h-full">
          <div className="ml-10 mt-10">
            <Link to={"/"} className=" flex items-end text-2xl font-bold ">
              <figure className="w-8">
                <img src={logo} alt="" />
              </figure>
              ZapShift
            </Link>
          </div>
          <div className="lg:w-9/12 mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="md:flex-1/2  h-full bg-[#FAFDF0] w-full flex justify-center items-center">
          <figure>
            <img src={authImg} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
