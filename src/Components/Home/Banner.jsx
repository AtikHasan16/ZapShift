import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import slider1 from "../../assets/banner/banner1.png";
import slider2 from "../../assets/banner/banner2.png";
import slider3 from "../../assets/banner/banner3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <div className="urbanist relative">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 3500,
          }}
          speed={1200}
          loop
          modules={[Pagination, Autoplay]}
          className="mySwiper my-10"
        >
          <SwiperSlide>
            <img src={slider1} className="w-full md:h-[700px]" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} className="w-full md:h-[700px]" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} className="w-full md:h-[700px]" alt="" />
          </SwiperSlide>
        </Swiper>
        <div className=" hidden md:flex gap-2 absolute bottom-10  left-20 z-1">
          <Link to={"/track"} className="btn btn-xl btn-primary text-black">
            Track Your Parcel
          </Link>
          <Link to={"/be-a-rider"} className="btn btn-xl">
            Be A Rider
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
