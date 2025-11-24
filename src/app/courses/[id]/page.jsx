import React from "react";
import { BiArrowBack, BiBarChart, BiCalendar } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdLanguage, MdSchedule, MdSell } from "react-icons/md";

const CourseDetails = () => {
  return (
    <div className="container mx-auto flex flex-col w-full max-w-5xl flex-1 py-20">
      <div>
        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-slate-600  gap-2 text-sm font-medium hover:bg-slate-500/10 transition-colors">
          <BiArrowBack />
          <span className="truncate">Back to Courses</span>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-2.5">
        <div className="flex flex-col flex-1">
          <div className="w-full">
            <div className="bg-[url('/details.png')] bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-80 shadow-subtle">
              <div className="flex p-6 sm:p-8">
                <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
                  Mastering Next.js: A Comprehensive Guide
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white  p-6 sm:p-8 rounded-xl shadow-sm border-black/5 ">
            <h2 className="text-2xl font-semibold text-[#333333] mb-4">
              About This Course
            </h2>
            <p className="text-gray-500 text-base font-normal">
              This comprehensive course will take you from a beginner to an
              expert in Next.js. We will cover everything from the fundamentals
              of React and server-side rendering to advanced topics like data
              fetching strategies, authentication with NextAuth, and deploying
              your applications to production. By the end of this course, you
              will have built a full-stack application and have the skills to
              build your own robust, scalable web apps.
            </p>
          </div>
        </div>
        <div className="lg:w-[320px] flex flex-col gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 ">
            <div className="flex flex-col space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <MdSell className="text-primary text-xl" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm font-normal ">Price</p>
                  <p className="text-[#333333] font-medium ">$99.99</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <BiBarChart className="text-primary text-xl" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm font-normal">
                    Skill Level
                  </p>
                  <p className="text-[#333333] font-medium ">Intermediate</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <BiCalendar className="text-primary text-xl" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm font-normal ">
                    Date Added
                  </p>
                  <p className="text-[#333333] font-medium ">August 15, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <MdSchedule className="text-primary text-xl" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm font-normal">Duration</p>
                  <p className="text-[#333333]  font-medium ">12 Hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <BsPerson className="text-primary text-xl" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm font-normal">
                    Instructor
                  </p>
                  <p className="text-[#333333] font-medium ">Jane Doe</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <MdLanguage className="text-primary text-xl" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500  text-sm font-normal ">
                    Language
                  </p>
                  <p className="text-[#333333] font-medium ">English</p>
                </div>
              </div>
            </div>
            <button className="mt-6 flex w-full items-center justify-center overflow-hidden rounded-lg py-3 px-4 bg-primary text-white text-sm font-bold  shadow-sm hover:bg-primary/90 transition-colors cursor-pointer">
              <span className="truncate">Enroll Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
