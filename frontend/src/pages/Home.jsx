import React from "react";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="my-auto">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Charity made eazy.
          </h2>
          <p className="text-xl mt-4 text-gray-400">
            Donate alongside others to multiply your impact. Over one million
            registered causes.
          </p>
        </div>
        <div>
          <img src="images/hands.png" className="h-41 mx-auto" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </>
  );
};

export default Home;
