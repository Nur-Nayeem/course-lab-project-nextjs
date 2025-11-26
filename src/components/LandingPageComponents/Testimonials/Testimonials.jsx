import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    name: "Aria Stark",
    message:
      "This platform is a game-changer. The courses are well-structured and the instructors are top-notch. I landed a new job thanks to the skills I gained here!",
    image: "https://i.ibb.co.com/W44gFdSM/aria.jpg",
    enrolled: "Web Development",
  },
  {
    name: "Nur Nayeem",
    message:
      "Absolutely amazing experience! The lessons are clear, the UI is smooth, and the community support helped me stay motivated throughout my learning journey.",
    image: "https://i.ibb.co.com/6cpystV9/nur.jpg",
    enrolled: "Data Science",
  },
  {
    name: "Sophia Bennett",
    message:
      "I’ve tried many learning platforms, but this one stands out. The content quality and practical projects boosted my confidence and skills tremendously.",
    image:
      "https://cryptodaily.blob.core.windows.net/space/users/avatar/bqCus9dLSqAGsTp01XB71Mkw1lizbhn8PqQhlgwH.jpg",
    enrolled: "UI/UX Design",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold secondary-text sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Hear from learners who have transformed their careers with LearnHub.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial Cards */}
          {testimonialData.map((card, index) => (
            <TestimonialCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
