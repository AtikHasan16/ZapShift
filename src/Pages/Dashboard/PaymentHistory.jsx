import React from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { MoonLoader } from "react-spinners";

// Demo data matching the structure in the image

const PaymentHistoryTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["paymentHistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history?email=${user.email}`);
      return res.data;
    },
  });

  console.log(isError);
  console.log(payments);
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <MoonLoader></MoonLoader>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        Something went wrong. Please login again.
      </div>
    );
  }
  return (
    <div className="p-4 md:p-10 bg-white rounded-xl shadow-lg  md:m-5">
      {/* Table Header Section */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Payment History
      </h2>

      {/* Table Container - DaisyUI 'table' class provides basic styling */}
      <div className="overflow-x-auto rounded-lg border-2 border-gray-200">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-50 text-gray-600 font-semibold text-sm uppercase tracking-wider">
              <th className="py-3 px-4">Parcel Name</th>

              <th className="py-3 px-4">Transaction ID</th>
              <th className="py-3 px-4">Tracking ID</th>
              <th className="py-3 px-4">Payment Info</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {payments.map((item) => (
              <tr key={item._id} className=" border-gray-100 hover:bg-gray-50">
                {/* Parcel Info */}
                <td className="py-4 px-4 font-medium text-gray-700">
                  {item.parcelName}
                </td>

                {/* Transaction Number */}
                <td className="py-4 px-4 text-gray-600 font-mono">
                  {item.transactionID}
                </td>
                {/* Tracking Number */}
                <td className="py-4 px-4 text-gray-600 font-mono">
                  {item.trackingId}
                </td>

                {/* Payment Info */}
                <td className="py-4 px-4 text-gray-600">
                  {item.amount}{" "}
                  <span className="text-green-600">({item.paymentStatus})</span>
                </td>

                {/* Action Button */}
                <td className="py-4 px-4">
                  <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 border-none">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
