import Categories from "@/components/AllCoursesComponents/Categories/Categories";
import CouresCard from "@/components/AllCoursesComponents/CourseCard/CouresCard";
import axios from "axios";
import React from "react";
import { BiSearch } from "react-icons/bi";

const AllCourses = async () => {
  let courses = [];
  try {
    const data = await axios.get("http://localhost:4000/courses");
    courses = data.data;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="grow">
      <div className="container mx-auto py-24">
        <div className="text-center mb-10">
          <h1 className="secondary-text text-4xl md:text-5xl font-black mb-3">
            All Courses
          </h1>
          <p className="text-lg text-slate-500  max-w-2xl mx-auto">
            Explore our curated selection of courses to kickstart your learning
            journey today.
          </p>
        </div>
        {/*  Search & category Filter Section */}
        <div className="mb-10 space-y-6">
          {/* SearchBar */}
          <div className="max-w-2xl mx-auto">
            <label className=" flex-col h-10 w-full ">
              <div className="text-gray-500 flex border-none bg-gray-300/30 items-center justify-center px-5 rounded-3xl border-r-0 py-4">
                <BiSearch />
                <input
                  className="flex form-input w-full min-w-0 flex-1 overflow-hidden rounded-lg secondary-text focus:outline-0  h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal"
                  placeholder="Search"
                />
              </div>
            </label>
          </div>
          {/* Chips  */}
          <Categories />
        </div>

        {/* all courses  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CouresCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
