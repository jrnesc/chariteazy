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
    <div className="py-8">
      <h1 className="text-2xl font-extrabold text-black sm:text-4xl text-center">
        Change your payment method
      </h1>
      <form
        className="grid grid-cols-2 gap-4 w-full mt-8"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className={`flex flex-col justify-center p-4 bg-white rounded-lg border border-black cursor-pointer ${
              paymentAmount === "1" ? "bg-yello" : ""
            }`}
            style={{ boxShadow: "0 5px 0px 0px black" }}
          >
            <input
              className="hidden"
              type="radio"
              value="1"
              onClick={onPaymentAmountChange}
            />
            <span className="text-4xl text-center font-extrabold mt-2">£1</span>
            <span className="text-2xl text-center font-extrabold mt-2">
              per month
            </span>
          </label>
        </div>
        <div>
          <label
            className={`flex flex-col justify-center p-4 bg-white rounded-lg border border-black cursor-pointer ${
              paymentAmount === "5" ? "bg-yello" : ""
            }`}
            style={{ boxShadow: "0 5px 0px 0px black" }}
          >
            <input
              className="hidden"
              type="radio"
              value="5"
              onClick={onPaymentAmountChange}
            />
            <span className="text-4xl text-center font-extrabold mt-2">£5</span>
            <span className="text-2xl text-center font-extrabold mt-2">
              per month
            </span>
          </label>
        </div>
        <div>
          <label
            className={`flex flex-col justify-center p-4 bg-white rounded-lg border border-black cursor-pointer ${
              paymentAmount === "10" ? "bg-yello" : ""
            }`}
            style={{ boxShadow: "0 5px 0px 0px black" }}
          >
            <input
              className="hidden"
              type="radio"
              value="10"
              onClick={onPaymentAmountChange}
            />
            <span className="text-4xl text-center font-extrabold mt-2">
              £10
            </span>
            <span className="text-2xl text-center font-extrabold mt-2">
              per month
            </span>
          </label>
        </div>
        <div>
          <label
            className={`flex flex-wrap justify-center p-4 bg-white rounded-lg border border-black text-2xl font-extrabold cursor-pointer ${
              !["1", "5", "10"].includes(paymentAmount) ? "bg-yello" : ""
            }`}
            style={{ boxShadow: "0 5px 0px 0px black" }}
          >
            <input
              className="hidden"
              type="radio"
              value={customPaymentAmount}
              onClick={onPaymentAmountChange}
            />
            <div className="flex items-center mt-2 block">
              <span className="text-4xl">£</span>
              <input
                type="text"
                className="focus:outline-none text-center px-4 block w-full rounded-md text-4xl font-bold custom-payment"
                placeholder="inp"
                style={{ backgroundColor: "inherit" }}
                onChange={onCustomPaymentAmountChange}
              />
            </div>
            <span className="text-center mt-2">per month</span>
          </label>
        </div>
        <div className="flex items-center col-span-2 bg-yellow-200 p-4 rounded-xl">
          <label className="flex justify-between w-full items-center cursor-pointer">
            <div className="text-black font-bold">Auto renew</div>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={autoRenew}
                onChange={onAutoRenewChange}
              />
              <div className="block bg-yello border border-black w-16 h-8 rounded-full"></div>
              <div className="dot absolute left-0 top-0 border border-black bg-white w-8 h-8 rounded-full transition"></div>
            </div>
          </label>
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
