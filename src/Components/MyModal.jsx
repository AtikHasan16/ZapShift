import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function MyModal({ rider }) {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const getStatusBadgeColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <div>
        <Button
          onClick={open}
          className="flex justify-center items-center bg-primary text-gray-800 px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          <BsEye></BsEye>
          View
        </Button>

        <Dialog
          open={isOpen}
          as="div"
          className="relative z-50 focus:outline-none"
          onClose={close}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-gray-800/50 backdrop-blur" />

          <div className="fixed inset-0 z-50 w-screen overflow-y-auto flex items-center justify-center p-4 urbanist ">
            <DialogPanel
              transition
              className="w-full max-w-2xl  bg-white shadow-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 rounded-2xl"
            >
              {/* Modal Header */}
              <div className="bg-linear-to-r from-primary/10 to-primary/5 px-8 py-6 border-b border-gray-100 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {rider?.name || "Rider Details"}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Application ID: {rider?._id}
                  </p>
                </div>
                <button
                  onClick={close}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <MdClose size={28} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-8 py-6">
                {/* Status Badge */}
                <div className="mb-6">
                  <span
                    className={`inline-block px-4 py-2 rounded-lg text-sm font-bold capitalize ${getStatusBadgeColor(
                      rider?.status
                    )}`}
                  >
                    {rider?.status || "N/A"}
                  </span>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-1 h-6 bg-primary rounded"></div>
                      Personal Information
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Full Name
                      </label>
                      <p className="text-gray-900 font-semibold text-lg">
                        {rider?.name || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Age
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {rider?.age || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Email
                      </label>
                      <p className="text-gray-900 font-semibold break-all">
                        {rider?.email || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Contact Number
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {rider?.contact || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Document & Location Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-1 h-6 bg-primary rounded"></div>
                      Documentation
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        NID Number
                      </label>
                      <p className="text-gray-900 font-semibold font-mono">
                        {rider?.nid || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Driver License
                      </label>
                      <p className="text-gray-900 font-semibold font-mono">
                        {rider?.driverLicense || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Vehicle/Bike
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {rider?.bike || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Location Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-1 h-6 bg-primary rounded"></div>
                      Location
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Region
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {rider?.region || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        District
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {rider?.district || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Assigned Warehouse
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {rider?.warehouse || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-1 h-6 bg-primary rounded"></div>
                      Metadata
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Application ID
                      </label>
                      <p className="text-gray-900 font-semibold font-mono text-xs">
                        {rider?._id || "N/A"}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                        Created Date
                      </label>
                      <p className="text-gray-900 font-semibold">
                        {rider?.createdAt
                          ? new Date(rider.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={close}
                  className="btn btn-outline border-2 border-gray-300 text-gray-800 hover:bg-gray-100 font-bold rounded-xl"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </>
  );
}
