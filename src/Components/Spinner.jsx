import React from "react";
import { HashLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center   h-screen">
      <HashLoader color="#104e64"></HashLoader>
    </div>
  );
};

export default Spinner;
