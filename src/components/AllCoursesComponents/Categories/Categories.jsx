"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Categories = ({ currentCategory }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = [
    "All",
    "Web Development",
    "Mobile App Dev",
    "Design",
    "Marketing",
    "Data Science",
    "Programming",
  ];

  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center secondary-text justify-center gap-2 md:gap-3">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategory(category)}
          className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg  px-4 hover:scale-101 transition-all duration-200 cursor-pointer font-medium text-sm
            ${
              currentCategory === category
                ? "btn-primary text-white"
                : "glass-blur"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
