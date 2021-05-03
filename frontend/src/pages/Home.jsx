import React from "react";
import HorizontalCardList from "../components/HorizontalCardList";

const Home = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        style={{ minHeight: "50vh" }}
      >
        <div className="pt-8 md:py-24">
          <h2 className="text-5xl text-center font-extrabold md:text-7xl md:text-left">
            Charity made
            <span
              className="bg-contain bg-no-repeat"
              style={{
                backgroundImage: "url('images/underline.svg')",
                backgroundPosition: "50% 88%",
              }}
            >
              eazy.
            </span>
          </h2>
          <p className="text-xl text-center md:text-left text-gray-400 my-8">
            Donate alongside others to multiply your impact. Over one million
            registered causes.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className="flex border border-black py-2 px-5 bg-yello hover:bg-yellow-200 focus:ring-gray-500 focus:ring-offset-gray-200 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              style={{ boxShadow: "0 5px 0px 0px black" }}
            >
              <span>Get started now</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="transform rotate-90 md:transform-none">
          <img src="images/hands-money.png" className="mx-auto" />
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-4xl font-extrabold text-center md:text-5xl">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          <div>
            <div className="flex mx-auto rounded-full bg-teel w-14 h-14 my-5">
              <p className="m-auto text-xl text-white font-bold">1</p>
            </div>
            <h3 className="text-2xl text-center font-bold">Title</h3>
            <p className="text-md text-center text-gray-400">
              Donate alongside others to multiply your impact. Over one million
              registered causes.
            </p>
          </div>
          <div>
            <div className="flex mx-auto rounded-full bg-teel w-14 h-14 my-5">
              <p className="m-auto text-xl text-white font-bold">2</p>
            </div>
            <h3 className="text-2xl text-center font-bold">Title</h3>
            <p className="text-md text-center text-gray-400">
              Donate alongside others to multiply your impact. Over one million
              registered causes.
            </p>
          </div>
          <div>
            <div className="flex mx-auto rounded-full bg-teel w-14 h-14 my-5">
              <p className="m-auto text-xl text-white font-bold">3</p>
            </div>
            <h3 className="text-2xl text-center font-bold">Title</h3>
            <p className="text-md text-center text-gray-400">
              Donate alongside others to multiply your impact. Over one million
              registered causes.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-4xl font-extrabold text-center md:text-5xl">
          Trending Causes
        </h2>
        <div className="mt-12">
          <HorizontalCardList cards={[1, 2, 3, 4, 5]} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 mb-0 md:-mb-14">
        <div>
          <img src="images/hands-love.png" className="mx-auto" />
        </div>
        <div className="my-auto">
          <h2 className="text-4xl font-extrabold text-center md:text-left md:text-5xl">
            Ready to give?
          </h2>
          <div className="flex justify-center md:justify-start mt-8">
            <button
              className="flex border border-black py-2 px-5 bg-yello hover:bg-yellow-200 focus:ring-gray-500 focus:ring-offset-gray-200 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              style={{ boxShadow: "0 5px 0px 0px black" }}
            >
              <span>Get started now</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
          <ul className="mt-6">
            <li className="flex items-center py-2">
              <span className="py-2 px-2 rounded-full text-pink-600 bg-pink-200 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>Supporting causes all around the world.</span>
            </li>
            <li className="flex items-center py-2">
              <span className="py-2 px-2 rounded-full text-pink-600 bg-pink-200 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </span>
              <span>Fixed monthly payment.</span>
            </li>
            <li className="flex items-center py-2">
              <span className="py-2 px-2 rounded-full text-pink-600 bg-pink-200 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </span>
              <span>Equal say regardless of subscription amount.</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
