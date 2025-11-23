import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="flex min-h-screen md:min-h-[60vh] items-center justify-center py-20 text-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-black text-[#333333] sm:text-5xl md:text-6xl">
            Learn New Skills Anytime, Anywhere
          </h1>
          <h2 className="mx-auto max-w-2xl text-gray-500 text-lg ">
            Explore our curated collection of courses and start your learning
            journey today to unlock your full potential.
          </h2>
          <div className="flex justify-center">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg py-3 px-6 bg-primary text-white text-base font-bold transition-transform hover:scale-102">
              Browse Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
