import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const HowWorksCard = [
  {
    id: 1,
    icon: <CiDeliveryTruck />,
    title: "Booking Pick & Drops",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },

  {
    id: 2,
    icon: <CiDeliveryTruck />,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 3,
    icon: <CiDeliveryTruck />,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 4,
    icon: <CiDeliveryTruck />,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowWorks = () => {
  return (
    <div className="urbanist grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-4 md:my-10 gap-10">
      {HowWorksCard.map((data) => (
        <div key={data.id} className="bg-white rounded-2xl p-10">
          <figure className="text-6xl">{data.icon}</figure>
          <h1 className="text-2xl font-bold py-4">{data.title}</h1>
          <p>{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowWorks;
