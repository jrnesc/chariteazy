import React from "react";
import VoteProgressBar from "../components/VoteProgressBar";
import HorizontalCardList from "../components/HorizontalCardList";
import CauseCard from "../components/CauseCard";

const Project = () => {
  const testData = { completed: 0 };
  const cards = [<CauseCard />, <CauseCard />, <CauseCard />, <CauseCard />];

  return (
    <>
      <div className="pt-8 md:py-12">
        <h2 className="text-3xl font-extrabold text-center sm:text-4xl">
          Specific Project Name
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <div className="flex items-center px-2 py-5">
            <img className="w-30 h-40" src="images/hands.png" alt="hands" />
          </div>
          <div className="flex items-center">
            <h3 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h3>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-11/12">
            <VoteProgressBar completed={testData.completed} />
          </div>
          <div className="mx-auto lg:m-0">
            <button className="py-2 px-5 border border-black bg-blu-dark hover:bg-blue-600 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              <h3 className="text-white font-bold text-center">Vote</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <h3 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h3>
          </div>
          <div className="flex items-center px-2 py-5">
            <img className="w-30 h-40" src="images/hands.png" alt="hands" />
          </div>

          <div className="flex items-center px-2 py-5">
            <img className="w-30 h-40" src="images/hands.png" alt="hands" />
          </div>
          <div className="flex items-center">
            <h3 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h3>
          </div>
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-3xl font-extrabold text-center sm:text-4xl">
          Supporters
        </h2>
        <div className="mt-12">
          <HorizontalCardList cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Project;
