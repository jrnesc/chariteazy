import React, { useState } from "react";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(username, password);
    e.target.reset(); 
  };

  return (
    <div className="flex flex-col w-full py-8 max-w-md bg-white">
      <div className="mb-4 text-xl font-bold sm:text-2xl">Login</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <div className="flex relative border border-black rounded-lg">
            <span className="rounded-l-lg inline-flex items-center px-2 bg-white shadow-sm text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="rounded-r-lg flex-1 appearance-none w-full p-2 bg-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yello focus:border-transparent"
              placeholder="Username"
              onChange={handleUsernameChange}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex relative border border-black rounded-lg">
            <span className="rounded-l-lg inline-flex items-center px-2 bg-white shadow-sm text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type="password"
              className="rounded-r-lg flex-1 appearance-none w-full p-2 bg-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yello focus:border-transparent"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="flex w-full">
          <button
            type="submit"
            className="w-full border border-black py-2 px-5 bg-yello hover:bg-yellow-200 focus:ring-gray-500 focus:ring-offset-gray-200 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            style={{ boxShadow: "0 5px 0px 0px black" }}
          >
            Login
          </button>
        </div>
      </form>
      <div className="flex items-center mt-6">
        <button
          className="inline-flex items-center text-xs font-thin text-gray-500 hover:text-gray-700"
          onClick={props.onRegisterClick}
        >
          <span className="ml-2">Don&#x27;t have an account?</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
