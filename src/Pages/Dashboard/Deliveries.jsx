import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Deliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(parcels);

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/parcels/${id}`)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              refetch();

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // const handlePayment = () => {};

  return (
    <div className="urbanist ">
      <h1 className="text-4xl font-bold">All Deliveries</h1>

      <div className="grid grid-cols-3 gap-6 my-6">
        <div className="bg-white rounded-2xl p-6">
          <p>Total</p>
          <h1 className="text-6xl font-bold">0{parcels.length}</h1>
        </div>
        <div className="bg-white rounded-2xl p-6">
          <p>Return</p>
          <h1>{}</h1>
        </div>
        <div className="bg-white rounded-2xl p-6">
          <p>Paid Return</p>
          <h1>{}</h1>
        </div>
      </div>
      <div className="my-10">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Cons. ID</th>
                <th>Parcel Name</th>
                <th>Receiver Info</th>
                <th>Delivery Charge</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {parcels.map((data, i) => (
                <tr key={data._id}>
                  <th>{i + 1}</th>
                  <th>{data._id.slice(20)}</th>
                  <td>{data?.parcel_name}</td>
                  <td>Quality Control Specialist</td>
                  <td>{data.cost}</td>
                  <td className="flex gap-2">
                    <button className="bg-blue-400 text-white p-1 rounded">
                      View
                    </button>
                    {data.paymentState ? (
                      "Paid"
                    ) : (
                      <Link
                        to={`/payment/${data._id}`}
                        className="bg-lime-400 text-black p-1 px-2 rounded"
                      >
                        Pay
                      </Link>
                    )}
                    <button
                      onClick={() => handleParcelDelete(data._id)}
                      className="bg-red-500 text-white p-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
