import React from "react";
import service from "../../assets/images/service.png";
const OurServiceCard = [
  {
    id: 1,
    image: service,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 1,
    image: service,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 1,
    image: service,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 1,
    image: service,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 1,
    image: service,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 1,
    image: service,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
];
const OurService = () => {
  return (
    <div className="bg-[#03373D] p-15 rounded-2xl my-10 urbanist text-center space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Our Services</h1>
        <p className="text-gray-400 py-4 w-8/12 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-3  gap-6">
        {OurServiceCard.map((data) => (
          <div className="bg-white rounded-2xl p-10 space-y-4 hover:bg-primary transition-colors">
            <figure className="">
              <img
                src={data.image}
                className="mx-auto bg-gray-300 p-3 rounded-full"
                alt=""
              />
            </figure>
            <h1 className="text-xl font-bold">{data.title}</h1>
            <p className="text-gray-500">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
