import React from "react";
import VoteProgressBar from "../components/VoteProgressBar";

const Project = () => {
  const testData = { completed: 55 };

  return (
    <>
      <div className="pt-8 md:py-12">
        <h2 className="text-3xl font-extrabold text-center sm:text-4xl">
          AMA Animal Rescue
        </h2>
        <div className="flex items-center justify-center px-2 py-5">
          <img
            className="w-1/2 rounded-lg border border-black"
            src="https://amaanimalrescue.org/wp-content/uploads/2016/07/dogs-running-in-field-1096x500.jpg"
            alt="hands"
          />
        </div>
        <div className="flex items-center justify-center">
          <h3 className="text-center">
            AMA Animal Rescue, Angels for Mistreated Animals, is a New York
            State 501(c)3, non-profit animal rescue organization based out of
            Brooklyn, New York.
          </h3>
          <h3 className="text-center">Based out of Brooklyn, New York.</h3>
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
    </>
  );
};

export default Project;
