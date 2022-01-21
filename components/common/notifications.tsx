import React, { useState } from "react";
import { useEffect } from "react";
const Index = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlag(false)
    }, 2000);
  }, [])
  return (
    <div className={(flag ? "translate-show bottom-0 sm:bottom-auto" : "translate-hide") + " xl:w-1/3 mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 w-10/12 bg-white shadow-lg rounded flex pr-4 fixed z-50 left-0 sm:left-auto sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-12 sm:mb-0 translate-right"}>
      <div role="alert" aria-label="Close" className="cursor-pointer absolute right-0 mr-2 mt-2 text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out" onClick={() => setFlag(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1={18} y1={6} x2={6} y2={18} />
          <line x1={6} y1={6} x2={18} y2={18} />
        </svg>
      </div>
      <div className="px-5 border-r border-gray-300 flex items-center justify-center text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="flex flex-col justify-center pl-4 py-4">
        <p className="text-sm text-gray-800 font-semibold">Error!</p>
        <p className="text-xs text-gray-600 font-normal">Something went wrong. Please double check your email.</p>
      </div>
      <style>
        {`
        .translate-right{
          transition: .4s ease-in-out;
        }
          .translate-show{
              right:0;
          }
          .translate-hide{
              right:-40%;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
