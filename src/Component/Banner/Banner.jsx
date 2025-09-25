import React from "react";

const Banner = ({inProgress,isResolved}) => {
  return (
    <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* In-Progress Card */}
      <div className="h-[250px] p-5 relative rounded-lg overflow-hidden text-center text-white bg-gradient-to-r from-purple-500 to-violet-600">
        {/* Left bg image */}
        <div className="absolute inset-0 flex justify-start">
          <div className="h-full w-1/2 bg-[url('https://i.ibb.co.com/rGcVYgd7/vector1.png')] bg-no-repeat bg-left bg-contain opacity-100 brightness-600 contrast-600"></div>
        </div>

        {/* Right bg image (flipped & contained) */}
        <div className="absolute inset-0 flex justify-end">
          <div className="h-full w-1/2 bg-[url('https://i.ibb.co.com/rGcVYgd7/vector1.png')] bg-no-repeat bg-right bg-contain scale-x-[-1] translate-x-32 opacity-100 brightness-600 contrast-600"></div>
        </div>

        {/* Centered Text */}
        <div className="relative z-10 flex h-full flex-col justify-center items-center">
          <p className="text-3xl my-1.5">In-Progress</p>
          <p className="text-4xl font-bold">{inProgress}</p>
        </div>
      </div>

      {/* Resolved Card */}
      <div className="h-[250px] relative rounded-lg overflow-hidden text-center text-white bg-gradient-to-r from-green-400 to-emerald-600">
       {/* Left bg image */}
        <div className="absolute inset-0 flex justify-start">
          <div className="h-full w-1/2 bg-[url('https://i.ibb.co.com/rGcVYgd7/vector1.png')] bg-no-repeat bg-left bg-contain opacity-100 brightness-600 contrast-600"></div>
        </div>
       {/* Right bg image (flipped & contained) */}
        <div className="absolute inset-0 flex justify-end">
          <div className="h-full w-1/2 bg-[url('https://i.ibb.co.com/rGcVYgd7/vector1.png')] bg-no-repeat bg-right bg-contain scale-x-[-1] translate-x-32 opacity-100 brightness-600 contrast-600"></div>
        </div>

        {/* Centered Text */}
        <div className="relative z-10 flex h-full flex-col justify-center items-center">
          <p className="text-3xl my-1.5">Resolved</p>
          <p className="text-4xl font-bold">{isResolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
