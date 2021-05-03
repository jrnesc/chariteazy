import React, { useState, createRef } from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
  }

  return (
    <>
      <div className="flex justify-end">
        <div className="relative inline-flex">
          <button
            className="relative inline-block text-lg py-2 pl-2 pr-12 rounded border border-black rounded-lg focus:outline-none"
            type="button"
            ref={btnDropdownRef}
            onClick={() => {
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();
            }}
          >
            Select category
            <span className="absolute block h-full w-8 top-0 right-0 rounded-r-lg bg-yellow-300 ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute block h-4 w-4 top-1/3 left-1/4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "bg-white z-50 py-2 text-left border border-black rounded-lg "
            }
            style={{ minWidth: "11.4rem" }}
          >
            <a
              href="#category1"
              className="block block px-4 py-2 text-md hover:bg-gray-100 hover:text-gray-900"
              onClick={handleClick}
            >
              Category 1
            </a>
            <div className="h-0 my-2 border border-solid border-t-0 border-black opacity-25" />
            <a
              href="#category2"
              className="block block px-4 py-2 text-md hover:bg-gray-100 hover:text-gray-900"
              onClick={handleClick}
            >
              Category 2
            </a>
            <div className="h-0 my-2 border border-solid border-t-0 border-black opacity-25" />
            <a
              href="#category 3"
              className="block block px-4 py-2 text-md hover:bg-gray-100 hover:text-gray-900"
              onClick={handleClick}
            >
              Category 3
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
