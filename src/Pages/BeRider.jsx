import { useForm, useWatch } from "react-hook-form";
import agentPending from "../assets/images/agent-pending.png";
import { useLoaderData } from "react-router";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const BeRider = () => {
  const { user } = useAuth();
  const { control, register, handleSubmit } = useForm();
  const axiosSecure = useAxios();
  const loaderData = useLoaderData();
  const data = loaderData?.data || [];

  const duplicates = data.map((d) => d.region);
  const region = [...new Set(duplicates)];
  const riderRegion = useWatch({
    control,
    name: "region",
    defaultValue: "dhaka",
  });
  // console.log(riderRegion);

  const districtByRegion = (region) => {
    const districts = data.filter((d) => d.region === region);
    const district = districts.map((d) => d.district);
    // console.log(district);
    return district;

    // console.log(region);
  };
  // console.log(districtByRegion(riderRegion));

  const handleRiderApplication = (data) => {
    console.log(data);

    axiosSecure
      .post("/riders", data)
      .then(() => {
        toast.success("Your application has been submitted");
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        toast.error(
          "There was an error submitting your application. Please try again."
        );
      });
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
              onSubmit={handleSubmit(handleRiderApplication)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-6">
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
                  <label className="font-semibold">Driving License</label>
                  <input
                    type="number"
                    placeholder="Driver License"
                    className="input w-full border-gray-300"
                    {...register("driverLicense", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-semibold">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      defaultValue={user?.email}
                      className="input w-full border-gray-300"
                      {...register("email", { required: true })}
                      disabled
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
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-semibold">bike</label>
                    <input
                      type="text"
                      placeholder="Bike Description"
                      className="input w-full border-gray-300"
                      {...register("bike", { required: true })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">Your region</label>
                  <select
                    className="select w-full border-gray-300"
                    {...register("region", { required: true })}
                    defaultValue="Pick a browser"
                  >
                    <option value="" disabled>
                      Select your region
                    </option>
                    {/* Populating dynamically with unique cities from warehouse data */}
                    {region.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
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
                    {districtByRegion(riderRegion).map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">NID No</label>
                  <input
                    type="number"
                    placeholder="NID"
                    className="input w-full border-gray-300"
                    {...register("nid", { required: true })}
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold">Contact</label>
                  <input
                    type="tel"
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

              <button className="btn btn-primary text-black font-bold border-none w-full mt-4">
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
