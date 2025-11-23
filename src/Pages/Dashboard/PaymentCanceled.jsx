import React from "react";
import { Link } from "react-router";

const PaymentCanceled = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Payment canceled</h1>
        <Link to={"/deliveries"} className="btn btn-sm btn-primary text-black ">
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default PaymentCanceled;
