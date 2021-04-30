const CauseCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-black cursor-pointer m-auto" style="box-shadow: 0 5px 0px 0px black">
      <img
        alt="photo"
        src="./images/yellow.jpeg"
        className="h-25 w-full object-cover border-b border-black"
      />
      <div className="bg-white w-full p-4">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          DJ Night Hawa
        </h2>
        <p className="text-gray-400 font-light text-md">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <span> Birmingham </span>
        </p>
        <p className="text-gray-400 font-light text-md">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span> 12 March 2020 </span>
        </p>
      </div>
    </div>
  );
};

export default CauseCard;
