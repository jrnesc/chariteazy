const FeatureCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-black cursor-pointer m-auto" style={{boxShadow: "0 5px 0px 0px black"}}>
      <div className="bg-white w-full p-4">
        <h2 className="text-3xl text-center font-extrabold text-black sm:text-4xl">
          Charity made easy.
        </h2>
        <p className="text-xl text-center mt-4 text-gray-600">
          Donate alongside others to multiply your impact. Over one million
          registered causes.
        </p>
        <div className="flex flex-wrap justify-starts items-center mt-4">
          <button className="py-4 px-6 bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Confirm here
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
