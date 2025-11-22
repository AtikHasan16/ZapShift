import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const Deliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  return (
    <div className="urbanist">
      <h1 className="text-4xl font-bold">All Deliveries</h1>

      <div className="grid grid-cols-3 gap-6 my-6">
        <div className="bg-white rounded-2xl p-6">
          <p>Total</p>
          <h1>{}</h1>
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
                <th>Cons. ID</th>
                <th>Parcel Name</th>
                <th>Receiver Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>
                  <button className="bg-blue-400 text-white p-1 rounded">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
