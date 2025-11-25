import React from "react";
import axios from "axios";
import CouresCard from "@/components/AllCoursesComponents/CourseCard/CouresCard";
const PopulerCourse = async () => {
  let courses = [];
  try {
    const data = await axios.get("http://localhost:4000/courses?limit=3");
    courses = data.data;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold secondary-text  sm:text-4xl">
            Explore Our Popular Courses
          </h2>
          <p className="mt-4 text-lg text-gray-500 ">
            We provide the best tools and resources to help you achieve your
            learning goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CouresCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopulerCourse;
