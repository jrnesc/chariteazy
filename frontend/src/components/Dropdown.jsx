
import React, { useState, createRef } from 'react';
import { createPopper } from "@popperjs/core";

const Dropdown = ({color}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex justify-end">
        <div className="w-120 px-4">
          <div className="relative inline-flex">
            <button
              className={
                "text-3xl font-extrabold text-black sm:text-2xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <div className="flex items-center">
                <span>
                  {color === "white" ? "Select Category" : color + " Dropdown"} 
                </span>
                <span>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
                  </svg>
                </span>
                
              </div>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 "
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#category1"
                className={
                  "block block px-4 py-2 text-md font-extrabold text-black sm:text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Category 1
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                <a
                  href="#category2"
                  className={
                    "block block px-4 py-2 text-md font-extrabold text-black sm:text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={e => e.preventDefault()}
                >
                  Category 2
                </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                <a
                  href="#category 3"
                  className={
                  "block block px-4 py-2 text-md font-extrabold text-black sm:text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={e => e.preventDefault()}
                >
                  Category 3
                </a>
            </div>
          </div>
        </div>
      </div>            
    </>
  )
}

export default Dropdown;


