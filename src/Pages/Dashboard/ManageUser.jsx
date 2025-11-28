import React from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield, FaGoogle, FaEnvelope } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import toast from "react-hot-toast";

const ManageUser = () => {
  const axiosSecure = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  const handleRoleChange = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Successfully changed");
        refetch();
      }
    });
  };

  const handleRoleRemove = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Successfully changed");
        refetch();
      }
    });
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Manage Users</h2>
        <div className="badge badge-primary badge-lg p-4">
          Total Users: {users.length}
        </div>
      </div>

      {/* DaisyUI Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th>#</th>
              <th>User Info</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                {/* Index */}
                <td className="font-bold text-gray-500">{index + 1}</td>

                {/* User Info (Image + Name + Email) */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          referrerPolicy="no-referrer"
                          src={user.photoURL}
                          alt={user.displayName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        {user.displayName}
                      </div>
                      <div className="text-sm opacity-50 flex items-center gap-1">
                        {user.signInWith === "Google" ? (
                          <FaGoogle className="text-blue-500 text-xs" />
                        ) : (
                          <FaEnvelope className="text-gray-500 text-xs" />
                        )}
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Role Badge */}
                <td>
                  {user.role === "admin" ? (
                    <span className="badge badge-error text-white gap-1 font-semibold p-3">
                      <MdAdminPanelSettings /> Admin
                    </span>
                  ) : user.role === "rider" ? (
                    <span className="badge badge-warning text-white gap-1 font-semibold p-3">
                      Rider
                    </span>
                  ) : (
                    <span className="badge badge-ghost gap-1 font-semibold p-3">
                      User
                    </span>
                  )}
                </td>

                {/* Sign In/Status Info (derived from sign in method) */}
                <td>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                    {user.signInWith}
                  </span>
                </td>

                {/* Action Buttons */}
                <td>
                  <div className="flex justify-center gap-2">
                    {/* Make/Remove Admin Button */}
                    {user.role !== "admin" ? (
                      <button
                        onClick={() => handleRoleChange(user)}
                        className="btn btn-sm text-white btn-success"
                      >
                        <FaUserShield className="text-lg" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRoleRemove(user)}
                        className="btn btn-sm text-white btn-error"
                      >
                        <FiShieldOff />
                      </button>
                    )}

                    {/* Delete Button */}
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="btn btn-error btn-sm text-white"
                      title="Delete User"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
