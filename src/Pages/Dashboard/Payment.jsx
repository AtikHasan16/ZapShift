import React from "react";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";

const Payment = () => {
  const axiosSecure = useAxios();
  const { id } = useParams();
  console.log(id);

  const { data: parcel = [], isLoading } = useQuery({
    queryKey: ["parcels", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${id}`);
      return res.data;
    },
  });
  console.log(parcel);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <MoonLoader></MoonLoader>;
      </div>
    );
  }

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      sender_email: parcel.sender_email,
      parcel_name: parcel.parcel_name,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Payment {parcel.cost} TK</h1>
      <button onClick={handlePayment} className="btn bg-lime-400">
        Pay
      </button>
    </div>
  );
};

export default Payment;
