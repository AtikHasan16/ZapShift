import React from "react";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";

const Payment = () => {
  const axiosSecure = useAxios();
  const { id } = useParams();
  console.log(id);

  const { data, isLoading } = useQuery({
    queryKey: ["parcels", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${id}`);
      return res.data;
    },
  });
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <MoonLoader></MoonLoader>;
      </div>
    );
  }

  return <div>Payment {data.cost} TK</div>;
};

export default Payment;
