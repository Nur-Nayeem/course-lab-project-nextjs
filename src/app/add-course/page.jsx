import axios from "axios";
import React from "react";

const AddCourse = () => {
  const handlePublish = async (formData) => {
    "use server";

    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const price = parseFloat(formData.get("price"));
    const level = formData.get("level");
    const instructor = formData.get("instructor");
    const image = formData.get("image");
    const duration = parseInt(formData.get("duration"));

    // Validation
    if (
      !title ||
      !category ||
      !description ||
      Number.isNaN(price) ||
      !level ||
      !instructor ||
      !image ||
      Number.isNaN(duration)
    ) {
      console.log("All fields must be filled");
      return;
    }

    // Final object
    const courseObject = {
      title,
      category,
      description,
      price,
      level,
      instructor,
      image,
      duration,
    };

    try {
      const data = await axios.post(
        "http://localhost:4000/courses",
        courseObject
      );
      console.log(data.data);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-5">
        <div className="space-y-2 text-center">
          <h1 className="secondary-text text-3xl sm:text-4xl font-bold">
            Add a New Course
          </h1>
          <p className="text-gray-500 text-base sm:text-lg font-normal">
            Fill in the details below to create and publish a new course to the
            catalog.
          </p>
        </div>

        <div className="rounded-xl shadow-xl glass-blur p-6 sm:p-8">
          <form action={handlePublish} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title + Category */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Course Title
                  </label>
                  <input
                    className="form-input flex w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                    placeholder="e.g., Introduction to Modern JavaScript"
                    type="text"
                    name="title"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Category
                  </label>
                  <select
                    className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 focus:outline-primary"
                    name="category"
                  >
                    <option value="">Select Category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Programming">Programming</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium secondary-text">
                  Description
                </label>
                <textarea
                  className="form-input flex w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-2 placeholder:text-gray-500 focus:outline-primary"
                  placeholder="A brief description of the course."
                  name="description"
                ></textarea>
              </div>

              {/* Price + Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Price
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <span className="text-gray-400 text-base">$</span>
                    </div>
                    <input
                      className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 pl-8 py-3 placeholder:text-gray-500 focus:outline-primary"
                      placeholder="99.99"
                      type="number"
                      name="price"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Level
                  </label>
                  <select
                    className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 focus:outline-primary"
                    name="level"
                  >
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Instructor + Language */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Instructor
                  </label>
                  <input
                    className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 px-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                    placeholder="Instructor Name"
                    type="text"
                    name="instructor"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Language
                  </label>
                  <select
                    className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 focus:outline-primary"
                    name="language"
                  >
                    <option value="">Select Language</option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>

              {/* Image + Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Image URL
                  </label>
                  <input
                    className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                    placeholder="https://example.png"
                    type="url"
                    name="image"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium secondary-text">
                    Duration (hours)
                  </label>
                  <input
                    className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
                    placeholder="e.g., 10"
                    type="number"
                    name="duration"
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end mt-2">
              <button className="cursor-pointer rounded-lg py-3 px-5 w-full btn-primary hover:bg-primary/90 text-white gap-2 text-sm font-bold transition-colors shadow-sm shadow-primary/40">
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
