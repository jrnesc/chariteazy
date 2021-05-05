import DonationRadialChart from "./DonationRadialChart";

const ImpactReport = () => {
  return (
    <div className="py-12">
      <h1 className="text-2xl font-extrabold text-black sm:text-4xl relative text-center">
        Donation history
      </h1>
      <div class="flex justify-center rounded-xl w-full p-4 dark:bg-gray-800 relative overflow-hidden">
        <DonationRadialChart />
        {/* <div class="flex items-start mb-6 rounded justify-between">
          <span class=" w-10 h-10 rounded-full text-white dark:text-gray-800 bg-yellow-300"></span>
          <div class="flex items-center w-full justify-between">
            <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
              <p class="text-gray-700 dark:text-white">
                <span class="font-bold mr-1">Andrea</span>
              </p>
              <p class="text-gray-300">Aug 10</p>
            </div>
          </div>
        </div>
        <div class="flex items-start mb-6 rounded justify-between">
          <span class=" w-10 h-10 rounded-full text-white dark:text-gray-800 p-2 bg-green-400"></span>
          <div class="flex items-center w-full justify-between">
            <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
              <p class="text-gray-700 dark:text-white">
                <span class="font-bold mr-1">Name</span>
              </p>
              <p class="text-gray-300">Aug 10</p>
            </div>
          </div>
        </div>
        <div class="flex items-start mb-6 rounded justify-between">
          <span class=" w-10 h-10 rounded-full text-white dark:text-gray-800 p-2 bg-pink-200"></span>
          <div class="flex items-center w-full justify-between">
            <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
              <p class="text-gray-700 dark:text-white">
                <span class="font-bold mr-1">Name</span>
              </p>
              <p class="text-gray-300">Aug 10</p>
            </div>
          </div>
        </div>
        <div class="flex items-start mb-6 rounded justify-between">
          <span class=" w-10 h-10 rounded-full text-white dark:text-gray-800 p-2 bg-indigo-400"></span>
          <div class="flex items-center w-full justify-between">
            <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
              <p class="text-gray-700 dark:text-white">
                <span class="font-bold mr-1">Name</span>
              </p>
              <p class="text-gray-300">Aug 10</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ImpactReport;
