import React from "react";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="my-auto">
          <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
            Charity made eazy.
          </h2>
          <p class="text-xl mt-4 text-gray-400">
            Donate alongside others to multiply your impact. Over one million
            registered causes.
          </p>
        </div>
        <div>
          <img src="images/hands.png" class="h-41 mx-auto" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </>
  );
};

export default Home;
