import React from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Review = ({ reviewData }) => {
  return (
    <div className="my-10">
      <div>
        <h1 className="text-4xl font-bold text-center text-cyan-950">
          What our customers are sayings
        </h1>
        <p className="text-center mt-2 w-6/12 mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="h-80 my-10">
        <Swiper
          effect={"coverflow"}
          loop={true}
          speed={2000}
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={true}
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper "
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {reviewData.map((data) => (
            <SwiperSlide>
              {" "}
              <ReviewCard key={data.id} data={data}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
