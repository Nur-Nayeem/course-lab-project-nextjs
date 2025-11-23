import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const PopulerCourseCard = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-gray-100 shadow-sm transition-shadow hover:shadow-lg">
      <Image
        src="/course-1.png"
        alt="Course 1"
        className="w-full aspect-video"
        width={320}
        height={180}
      />
      <div className="p-4 flex flex-col gap-2">
        <p className="font-bold text-[#333333]">
          Introduction to Web Development
        </p>
        <p className="text-sm text-gray-400">Nur Nayeem</p>
        <div className="flex items-center gap-1 text-sm text-gray-400 ">
          <BsStarFill className="text-amber-400" />
          <span>4.8 (1,234 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default PopulerCourseCard;
