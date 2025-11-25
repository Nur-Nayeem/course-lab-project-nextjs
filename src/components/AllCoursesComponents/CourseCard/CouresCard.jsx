import Image from "next/image";
import Link from "next/link";
import React from "react";

const CouresCard = ({ course }) => {
  return (
    <div className="flex flex-col glass-blur rounded-xl overflow-hidden hover:scale-102 transition-all duration-300">
      <Image
        src={course.image}
        alt="Course 1"
        className="w-full aspect-video"
        width={320}
        height={180}
      />
      <div className="p-5 flex flex-col grow">
        <div className="mb-4 grow">
          <div className="inline-block bg-primary/10 primary-text text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
            {course.level}
          </div>
          <h3 className="text-lg font-bold secondary-text mb-2">
            {course.title}
          </h3>
          <p className="text-slate-500  text-sm font-normal leading-relaxed line-clamp-2">
            {course.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-lg font-bold text-primary">
            <span>$</span>
            {course.price}
          </p>
          <Link
            href={`/courses/${course._id}`}
            className="px-4 py-3 text-sm font-bold btn-primary text-white rounded-lg hover:scale-103 transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CouresCard;
