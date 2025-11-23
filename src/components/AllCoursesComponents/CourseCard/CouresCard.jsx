import Image from "next/image";
import React from "react";

const CouresCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src="/course-1.png"
        alt="Course 1"
        className="w-full aspect-video"
        width={320}
        height={180}
      />
      <div className="p-5 flex flex-col grow">
        <div className="mb-4 grow">
          <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
            Beginner
          </div>
          <h3 className="text-lg font-bold text-[#333333] mb-2">
            Modern Web Development
          </h3>
          <p className="text-slate-500  text-sm font-normal leading-relaxed line-clamp-2">
            Learn to build responsive and dynamic websites from scratch with the
            latest technologies.
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-lg font-bold text-primary">$99.99</p>
          <button className="h-9 px-4 text-sm font-bold bg-primary/90 text-white rounded-lg hover:bg-primary transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouresCard;
