import React from "react";
import errorImg from "../assets/images/error.png";
import { useRouteError } from "react-router";
const Error = () => {
  const errorData = useRouteError();

  return (
    <div className="flex justify-center items-center h-screen urbanist">
      <div>
        <figure className="">
          <img src={errorImg} className="mx-auto w-50 -rotate-45" alt="" />
        </figure>
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-black">{errorData.status}</h1>
          <h1 className="text-6xl font-black">{errorData.statusText}</h1>
          <h1 className="text-2xl font-black text-rose-500">
            Error: {errorData.error.message}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
