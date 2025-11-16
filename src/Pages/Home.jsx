import React from "react";
import Banner from "../Components/Home/Banner";
import HowWorks from "../Components/Home/HowWorks";
import OurService from "../Components/Home/OurService";
import BrandMarquee from "../Components/Home/BrandMarquee";

const Home = () => {
  return (
    <div className="urbanist">
      <Banner></Banner>
      <section>
        <h1 className=" text-3xl font-bold ">How It Works</h1>
        <HowWorks></HowWorks>
      </section>
      <section>
        <OurService></OurService>
      </section>
      <section>
        <h1 className=" text-3xl font-bold text-center my-10">
          We've helped thousands of sales teams
        </h1>
        <BrandMarquee></BrandMarquee>
      </section>
    </div>
  );
};

export default Home;
