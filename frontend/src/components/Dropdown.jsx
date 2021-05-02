
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
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
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
              {color === "white" ? "Select Category" : color + " Dropdown"} 
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
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
                  "block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" +
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
                    "block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" +
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
                  "block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" +
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


// const Dropdown = () => {
//   const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
//   const btnDropdownRef = createRef();
//   const popoverDropdownRef = createRef();
//   const openDropdownPopover = () => {
//     createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
//       placement: "bottom-start"
//     });
//     setDropdownPopoverShow(true);
//   };
//   const closeDropdownPopover = () => {
//     setDropdownPopoverShow(false);
//   };

//     return (
//         <div className="relative inline-block text-left">
//             <div>
//                 <button
//                  className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" 
//                  id="options-menu"
//                  type="button"
//                  ref={btnDropdownRef}
//                  onClick={() => {
//                   dropdownPopoverShow
//                     ? closeDropdownPopover()
//                     : openDropdownPopover()
//                  }}
//                 >
//                     Categories
//                     <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
//                         </path>
//                     </svg>
//                 </button>
//             </div>
//             <div
//               ref={popoverDropdownRef}
//               className={
//                 (dropdownPopoverShow ? "block " : "hidden ") 
//               }
//             >            
//               <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
//                   <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                       <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
//                           <span className="flex flex-col">
//                               <span>
//                                   Category 1
//                               </span>
//                           </span>
//                       </a>
//                       <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
//                           <span className="flex flex-col">
//                               <span>
//                                   Category 2
//                               </span>
//                           </span>
//                       </a>
//                       <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
//                           <span className="flex flex-col">
//                               <span>
//                                   Category 3
//                               </span>
//                           </span>
//                       </a>
//                   </div>
//               </div>
//             </div>
//         </div>
//     )
// }

// export default Dropdown;


// import React from 'react'

// const Dropdown = () => {
//   return (
//     <div>
//       <div class="relative inline-block text-left">
//         <div>
//             <button type="button" class=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
//                 Categoreazy
//                 <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792">
//                     <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
//                     </path>
//                 </svg>
//             </button>
//         </div>
//         <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
//             <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                 <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
//                     <span class="flex flex-col">
//                         <span>
//                             Category 1
//                         </span>
//                     </span>
//                 </a>
//                 <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
//                     <span class="flex flex-col">
//                         <span>
//                             Category 2
//                         </span>
//                     </span>
//                 </a>
//                 <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
//                     <span class="flex flex-col">
//                         <span>
//                             Category 3
//                         </span>
//                     </span>
//                 </a>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dropdown



// import React from "react";
// import { createPopper } from "@popperjs/core";

// const Dropdown = ({ color }) => {
//   // dropdown props
//   const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
//   const btnDropdownRef = React.createRef();
//   const popoverDropdownRef = React.createRef();
//   const openDropdownPopover = () => {
//     createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
//       placement: "bottom-start"
//     });
//     setDropdownPopoverShow(true);
//   };
//   const closeDropdownPopover = () => {
//     setDropdownPopoverShow(false);
//   };
//   // bg colors
//   let bgColor;
//   color === "white"
//     ? (bgColor = "bg-blueGray-700")
//     : (bgColor = "bg-" + color + "-500");
//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full sm:w-6/12 md:w-4/12 px-4">
//           <div className="relative inline-flex align-middle w-full">
//             <button
//               className={
//                 "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
//                 bgColor
//               }
//               type="button"
//               ref={btnDropdownRef}
//               onClick={() => {
//                 dropdownPopoverShow
//                   ? closeDropdownPopover()
//                   : openDropdownPopover();
//               }}
//             >
//               {color === "white" ? "White Dropdown" : color + " Dropdown"}
//             </button>
//             <div
//               ref={popoverDropdownRef}
//               className={
//                 (dropdownPopoverShow ? "block " : "hidden ") +
//                 (color === "white" ? "bg-white " : bgColor + " ") +
//                 "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
//               }
//               style={{ minWidth: "12rem" }}
//             >
//               <a
//                 href="#pablo"
//                 className={
//                   "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
//                   (color === "white" ? " text-blueGray-700" : "text-white")
//                 }
//                 onClick={e => e.preventDefault()}
//               >
//                 something 1
//               </a>
//               <a
//                 href="#pablo"
//                 className={
//                   "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
//                   (color === "white" ? " text-blueGray-700" : "text-white")
//                 }
//                 onClick={e => e.preventDefault()}
//               >
//                 something 2
//               </a>
//               <a
//                 href="#pablo"
//                 className={
//                   "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
//                   (color === "white" ? " text-blueGray-700" : "text-white")
//                 }
//                 onClick={e => e.preventDefault()}
//               >
//                 Something 3
//               </a>
//               <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
//               <a
//                 href="#pablo"
//                 className={
//                   "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
//                   (color === "white" ? " text-blueGray-700" : "text-white")
//                 }
//                 onClick={e => e.preventDefault()}
//               >
//                 Arts
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dropdown;