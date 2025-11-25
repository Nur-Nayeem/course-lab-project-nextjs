"use client";
import React from "react";
const Categories = () => {
  const categories = [
    "All",
    "Web Development",
    "Design",
    "Marketing",
    "Data Science",
    "Programming",
  ];
  const handleCategory = (category) => {};
  return (
    <div className="flex flex-wrap items-center secondary-text justify-center gap-2 md:gap-3">
      {categories.map((category, index) => (
        <button
          onClick={() => handleCategory(category)}
          key={index}
          className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg glass-blur  px-4 hover:scale-101 transition-all duration-200 cursor-pointer font-medium text-sm"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
