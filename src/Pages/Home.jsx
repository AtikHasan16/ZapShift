import React from "react";
import Banner from "../Components/Home/Banner";
import HowWorks from "../Components/Home/HowWorks";
import OurService from "../Components/Home/OurService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="urbanist">
        <h1 className=" text-3xl font-bold ">How It Works</h1>
        <HowWorks></HowWorks>
      </section>
      <section>
        <OurService></OurService>
      </section>
    </div>
  );
};

export default Home;
