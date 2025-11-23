import React from "react";
import { Link } from "react-router";

const PaymentSuccess = () => {
  return (
    <div>
      <h1>Payment Successful</h1>
      <Link to={"/deliveries"} className="btn btn-sm btn-primary text-black ">
        Back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
