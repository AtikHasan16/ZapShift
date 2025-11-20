import React from "react";
import { useForm } from "react-hook-form";
import agentPending from "../assets/images/agent-pending.png";
import { useLoaderData } from "react-router";

const BeRider = () => {
  const { register, handleSubmit } = useForm();

  // Assuming we use the same loader as SendParcel for regions/districts
  // If loader data isn't available, we'll handle it gracefully or it will be undefined
  const loaderData = useLoaderData();
  const data = loaderData?.data || [];

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="my-10 urbanist">
      <div className="bg-white rounded-4xl p-10 md:p-15">
        <h1 className="text-5xl font-bold text-cyan-950">Be a Rider</h1>
        <p className="text-gray-500 my-6 max-w-2xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="divider"></div>

        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-cyan-950 mb-6">
              Tell us about yourself
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input w-full border-gray-300"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">Your age</label>
                  <input
                    type="number"
                    placeholder="Your age"
                    className="input w-full border-gray-300"
                    {...register("age", { required: true })}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">Your Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input w-full border-gray-300"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">Your District</label>
                  <select
                    className="select w-full border-gray-300"
                    {...register("district", { required: true })}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your District
                    </option>
                    {/* Populating dynamically with unique cities from warehouse data */}
                    {[...new Set(data.map((item) => item.city))].map(
                      (city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">NID No</label>
                  <input
                    type="text"
                    placeholder="NID"
                    className="input w-full border-gray-300"
                    {...register("nid", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">Contact</label>
                  <input
                    type="text"
                    placeholder="Contact"
                    className="input w-full border-gray-300"
                    {...register("contact", { required: true })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold">
                  Which wire-house you want to work?
                </label>
                <select
                  className="select w-full border-gray-300"
                  {...register("warehouse", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select wire-house
                  </option>
                  {[...new Set(data.map((item) => item.district))].map(
                    (district, index) => (
                      <option key={index} value={`${district} Hub`}>
                        {district} Hub
                      </option>
                    )
                  )}
                </select>
              </div>

              <button className="btn bg-[#C1E952] hover:bg-[#b0d64a] text-black font-bold border-none w-full mt-4">
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={agentPending}
              alt="Delivery Rider"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeRider;
