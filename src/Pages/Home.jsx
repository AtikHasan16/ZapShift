import React from "react";
import Banner from "../Components/Home/Banner";
import HowWorks from "../Components/Home/HowWorks";
import OurService from "../Components/Home/OurService";
import BrandMarquee from "../Components/Home/BrandMarquee";
import Feature from "../Components/Home/Feature";
import Merchant from "../Components/Home/Merchant";
import Review from "../Components/Home/Review";
import Question from "../Components/Home/Question";

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
      <section>
        <Feature></Feature>
      </section>
      <section>
        <Merchant></Merchant>
      </section>
      <section>
        <Review></Review>
      </section>
      <section>
        <Question></Question>
      </section>
    </div>
  );
};

export default Home;
