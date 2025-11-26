import Image from "next/image";
import React from "react";

const TestimonialCard = ({ card }) => {
  const { name, message, image, enrolled } = card;
  return (
    <div className="rounded-lg glass-blur p-6 ">
      <p className="text-gray-500 ">{message}</p>
      <div className="mt-6 flex items-center gap-4">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={image}
          alt={name}
          width={100}
          height={100}
        />
        <div>
          <p className="font-bold secondary-text ">{name}</p>
          <p className="text-sm text-gray-500">{enrolled} Student</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
