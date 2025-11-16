import React from "react";
import brand1 from "../../assets/brands/amazon.png";
import brand2 from "../../assets/brands/casio.png";
import brand3 from "../../assets/brands/moonstar.png";
import brand4 from "../../assets/brands/randstad.png";
import brand5 from "../../assets/brands/star.png";
import brand6 from "../../assets/brands/start_people.png";
import Marquee from "react-fast-marquee";
const BrandMarquee = () => {
  return (
    <div className="my-10 border-b-2 border-dashed border-[#03373D]/40 pb-10">
      <Marquee
        autoFill={true}
        speed={30}
        className="flex items-center justify-center"
        gradient
        gradientWidth={300}
        gradientColor="#EAECED"
      >
        <img src={brand1} alt="" className="mx-4" />
        <img src={brand2} alt="" className="mx-4" />
        <img src={brand3} alt="" className="mx-4" />
        <img src={brand4} alt="" className="mx-4" />
        <img src={brand5} alt="" className="mx-4" />
        <img src={brand6} alt="" className="mx-4" />
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
