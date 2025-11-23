import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-gray-500 ">
        This platform is a game-changer. The courses are well-structured and the
        instructors are top-notch. I landed a new job thanks to the skills I
        gained here!
      </p>
      <div className="mt-6 flex items-center gap-4">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src="/aria.jpg"
          alt="Aria Stark"
          width={100}
          height={100}
        />
        <div>
          <p className="font-bold text-[#333333] ">Aria Stark</p>
          <p className="text-sm text-gray-500">Web Development Student</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
