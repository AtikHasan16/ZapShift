import React from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  console.log(paymentInfo);

  const axiosSecure = useAxios();
  console.log(searchParams);
  const sessionID = searchParams.get("session_id");
  console.log(sessionID);

  useEffect(() => {
    if (sessionID) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionID}`)
        .then((res) => {
          console.log("session_id", res.data);
          setPaymentInfo({
            transactionId: res.data.transactionID,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [axiosSecure, sessionID]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Payment Successful</h1>
        <div className="my-4">
          <h2 className="text-xl font-bold text-green-600">
            Transaction ID : {paymentInfo?.transactionId}
          </h2>
          <h2 className="text-xl font-bold text-rose-600">
            Transaction ID : {paymentInfo?.trackingId}
          </h2>
        </div>
        <Link to={"/deliveries"} className="btn btn-sm btn-primary text-black ">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
