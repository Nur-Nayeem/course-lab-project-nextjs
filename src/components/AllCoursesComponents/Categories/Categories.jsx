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
  return (
    <div className="flex flex-wrap items-center text-[#333333] justify-center gap-2 md:gap-3">
      {categories.map((category, index) => (
        <button
          key={index}
          className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-100  px-4 hover:bg-slate-200  transition-colors font-medium text-sm"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
