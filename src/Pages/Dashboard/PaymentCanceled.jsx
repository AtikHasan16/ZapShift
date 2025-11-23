import React from "react";
import { Link } from "react-router";

const PaymentCanceled = () => {
  return (
    <div>
      <h1>Payment canceled</h1>
      <Link to={"/deliveries"} className="btn btn-sm btn-primary text-black ">
        Try Again
      </Link>
    </div>
  );
};

export default PaymentCanceled;
