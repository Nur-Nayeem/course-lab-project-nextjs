import React from "react";
import { BsStarFill } from "react-icons/bs";
import PopulerCourseCard from "./PopulerCourseCard";

const PopulerCourse = () => {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#333333]  sm:text-4xl">
            Explore Our Popular Courses
          </h2>
          <p className="mt-4 text-lg text-gray-500 ">
            We provide the best tools and resources to help you achieve your
            learning goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PopulerCourseCard />
          <PopulerCourseCard />
          <PopulerCourseCard />
        </div>
      </div>
    </div>
  );
};

export default PopulerCourse;
