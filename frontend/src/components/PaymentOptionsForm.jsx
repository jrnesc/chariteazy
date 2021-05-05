import { useState } from "react";

const PaymentOptionsForm = () => {
  const [paymentAmount, setpaymentAmount] = useState("");
  const [customPaymentAmount, setCustomPaymentAmount] = useState("");
  const [autoRenew, setAutoRenew] = useState(false);

  const onPaymentAmountChange = (e) => {
    setpaymentAmount(e.target.value);
  };

  const onCustomPaymentAmountChange = (e) => {
    setCustomPaymentAmount(e.target.value);
    onPaymentAmountChange(e);
  };

  const onAutoRenewChange = () => {
    setAutoRenew(!autoRenew);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-black sm:text-4xl relative text-center">
        Change your payment method
      </h1>
      <form
        className="grid grid-cols-2 gap-2 w-full max-w-screen-sm"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
              paymentAmount === "1" ? "bg-yello" : ""
            }`}
          >
            <input
              className="hidden"
              type="radio"
              value="1"
              onClick={onPaymentAmountChange}
            />
            <span className="text-xl font-bold mt-2">£1/mo</span>
          </label>
        </div>
        <div>
          <label
            className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
              paymentAmount === "5" ? "bg-yello" : ""
            }`}
          >
            <input
              className="hidden"
              type="radio"
              value="5"
              onClick={onPaymentAmountChange}
            />
            <span className="text-xl font-bold mt-2">£5/mo</span>
          </label>
        </div>
        <div>
          <label
            className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
              paymentAmount === "10" ? "bg-yello" : ""
            }`}
          >
            <input
              className="hidden"
              type="radio"
              value="10"
              onClick={onPaymentAmountChange}
            />
            <span className="text-xl font-bold mt-2">£10/mo</span>
          </label>
        </div>
        <div>
          <label
            className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
              !["1", "5", "10"].includes(paymentAmount) ? "bg-yello" : ""
            }`}
          >
            <input
              className="hidden"
              type="radio"
              value={customPaymentAmount}
              onClick={onPaymentAmountChange}
            />
            <div className="relative flex">
              <div className="relative inset-y-0 left-0 flex items-center pointer-events-none">
                <span className="black text-xl font-bold mt-2">£</span>
              </div>
              <input
                type="text"
                className="focus:outline-none relative px-4 block w-full rounded-md text-xl font-bold mt-2"
                placeholder="Choose"
                style={{ backgroundColor: "inherit" }}
                onChange={onCustomPaymentAmountChange}
              />
              <div className="relative inset-y-0 flex items-center pointer-events-none">
                <span className="black text-xl font-bold mt-2">/mo</span>
              </div>
            </div>
          </label>
        </div>
        <div className="flex items-center justify-center w-full col-span-2 bg-yellow-200 py-2 px-2 rounded-xl">
          <div>
            <label className="flex items-center cursor-pointer space-x-4">
              <div className="ml-3 text-gray-700 font-medium">Auto renew</div>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={autoRenew}
                  onChange={onAutoRenewChange}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
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

export default PaymentOptionsForm;
