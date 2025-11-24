import React from "react";

const AddCourse = () => {
  return (
    <div className="flex justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-5">
        <div className=" space-y-2 text-center">
          <h1 className="text-[#333333] text-3xl sm:text-4xl font-bold ">
            Add a New Course
          </h1>
          <p className="text-gray-500 text-base sm:text-lg font-normal leading-relaxed">
            Fill in the details below to create and publish a new course to the
            catalog.
          </p>
        </div>
        <div className="rounded-xl shadow-xl bg-white  border border-border-light p-6 sm:p-8">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#333333]">
                  Course Title
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                  placeholder="e.g., Introduction to Modern JavaScript"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#333333]">
                  Description
                </label>
                <textarea
                  className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white p-2.5 py-2 placeholder:text-gray-500 focus:outline-primary"
                  placeholder="A brief description of the course."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333]">
                    Price
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <span className="text-gray-400 text-base">$</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white pl-8 py-3 placeholder:text-gray-500 focus:outline-primary"
                      placeholder="99.99"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-[#333333]"
                    for="level"
                  >
                    Level
                  </label>
                  <div className="relative">
                    <select className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333]">
                    Instractor
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white px-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                    placeholder="Instractor Name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-[#333333]"
                    for="language"
                  >
                    Language
                  </label>
                  <div className="relative">
                    <select className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary">
                      <option>Bangla</option>
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333]">
                    Image URL
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                    placeholder="https://example.png"
                    type="url"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333]">
                    Duration
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                    placeholder="e.g, duration in hours"
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button className="cursor-pointer rounded-lg py-3 px-5 w-full bg-primary hover:bg-primary/90 text-white gap-2 text-sm font-bold transition-colors shadow-sm shadow-primary/40">
                <span className="truncate">Publish Course</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
