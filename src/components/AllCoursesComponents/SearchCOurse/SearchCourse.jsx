"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const SearchCourse = ({ searchValue }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (e) => {
    const value = e.target.value;

    const newParams = new URLSearchParams(params.toString());
    if (value) newParams.set("search", value);
    else newParams.delete("search");

    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <label className=" flex-col h-10 w-full ">
        <div className="text-gray-500 flex border-none bg-gray-300/30 items-center justify-center px-5 rounded-3xl border-r-0 py-4">
          <BiSearch />
          <input
            className="flex form-input w-full min-w-0 flex-1 overflow-hidden rounded-lg secondary-text focus:outline-0 h-full placeholder:text-gray-500 px-4 text-sm font-normal"
            placeholder="Search"
            onChange={handleSearch}
            defaultValue={searchValue}
          />
        </div>
      </label>
    </div>
  );
};

export default SearchCourse;
