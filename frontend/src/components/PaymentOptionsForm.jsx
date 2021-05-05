const PaymentOptions = () => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-black sm:text-4xl relative text-center">
        Change your payment method
      </h1>
      <form class="grid grid-cols-2 gap-2 w-full max-w-screen-sm">
        <div>
          <input
            class="hidden"
            id="radio_1"
            type="radio"
            name="radio"
            value="10"
          />
          <label
            class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            for="radio_1"
          >
            <span class="text-xl font-bold mt-2">£1/mo</span>
          </label>
        </div>
        <div>
          <input
            class="hidden"
            id="radio_2"
            type="radio"
            name="radio"
            value="10"
          />
          <label
            class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            for="radio_2"
          >
            <span class="text-xl font-bold mt-2">£5/mo</span>
          </label>
        </div>
        <div>
          <input
            class="hidden"
            id="radio_3"
            type="radio"
            name="radio"
            value="10"
          />
          <label
            class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            for="radio_3"
          >
            <span class="text-xl font-bold mt-2">£10/mo</span>
          </label>
        </div>
        <div>
          <input
            class="hidden"
            id="radio_4"
            type="radio"
            name="radio"
            value="10"
          />
          <label
            class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            for="radio_4"
          >
            <div class="relative flex">
              <div class="relative inset-y-0 left-0  flex items-center pointer-events-none">
                <span class="black text-xl font-bold mt-2">£</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                class=" focus:outline-none relative px-4  block w-full rounded-md text-xl font-bold mt-2"
                placeholder="Choose"
              />
              <div class="relative inset-y-0 flex items-center pointer-events-none">
                <span class="black text-xl font-bold mt-2">/mo</span>
              </div>
            </div>
          </label>
        </div>
        <div class="flex items-center justify-center w-full col-span-2 bg-yellow-200 py-2 px-2 rounded-xl">
          <div>
            <label
              for="toggle"
              class="flex items-center cursor-pointer space-x-4"
            >
              <div class="ml-3 text-gray-700 font-medium">Auto renew</div>
              <div class="relative">
                <input type="checkbox" id="toggle" class="sr-only" />
                <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex w-full col-span-2">
          <button
            type="submit"
            className="w-full py-2 bg-black focus:ring-offset-gray-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            <span className="text-white">Change your donation amount</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentOptions;
