import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineGroups2 } from "react-icons/md";

const WhyLearn = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#333333]  sm:text-4xl">
            Why Learn with Course Lab
          </h2>
          <p className="mt-4 text-lg text-gray-500 ">
            We provide the best tools and resources to help you achieve your
            learning goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200  bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <RiGraduationCapLine className="text-3xl" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-[#333333]">
                Expert Instructors
              </h3>
              <p className="text-gray-500 text-sm">
                Learn from industry experts who are passionate about teaching.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200  bg-white  p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <IoTimeOutline className="text-3xl" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-[#333333]">
                Flexible Learning
              </h3>
              <p className="text-gray-500 text-sm">
                Access your courses on any device, anytime, and learn at your
                own pace.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <MdOutlineGroups2 className="text-3xl" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-[#333333] ">
                Community Support
              </h3>
              <p className="text-gray-500 text-sm">
                Join a vibrant community of learners and mentors for support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLearn;
