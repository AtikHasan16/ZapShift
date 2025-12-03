import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { BiTrash } from "react-icons/bi";
import { FcOk } from "react-icons/fc";
import toast from "react-hot-toast";
import MyModal from "../../Components/MyModal";

const RiderApplication = () => {
  const axiosSecure = useAxios();

  //   const [selectedRider, setSelectedRider] = useState(null);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: riders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });
  console.log(riders);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const updateRiderStatus = (rider, status) => {
    const updateData = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateData).then((res) => {
      toast.success("Rider approved", res.data);
      refetch();
    });
  };

  const handleApprove = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleReject = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  return (
    <div className="urbanist p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Rider Applications
        </h1>
        <p className="text-gray-600 font-semibold">
          Review and manage pending rider applications
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        {riders.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500 text-lg font-semibold">
              No pending applications
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-linear-to-r from-primary/10 to-primary/5 border-b-2 border-primary/20">
                  <th className="px-6 py-4  text-xl">Name</th>
                  <th className="px-6 py-4  text-xl">Email</th>
                  <th className="px-6 py-4  text-xl">Phone</th>
                  <th className="px-6 py-4  text-xl">License Number</th>
                  <th className="px-6 py-4  text-xl">Vehicle Type</th>
                  <th className="px-6 py-4  text-xl">Status</th>
                  <th className="px-6 py-4 text-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider) => (
                  <tr
                    key={rider._id}
                    className={`border-b border-gray-100 hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">
                        {rider.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{rider.email}</td>
                    <td className="px-6 py-4 text-gray-700">{rider.contact}</td>
                    <td className="px-6 py-4 text-gray-700">
                      {rider.driverLicense}
                    </td>
                    <td className="px-6 py-4">
                      <span className=" text-blue-800 py-1 rounded-lg text-sm font-semibold">
                        {rider.bike}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm font-semibold">
                        {rider.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleReject(rider)}
                          className="flex justify-center items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <BiTrash size={24}></BiTrash>
                          <span>Reject</span>
                        </button>
                        <button
                          onClick={() => handleApprove(rider)}
                          className="flex justify-center items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <FcOk size={24}></FcOk>
                          <span>Approve</span>
                        </button>
                        <MyModal rider={rider}></MyModal>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiderApplication;
