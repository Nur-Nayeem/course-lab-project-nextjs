import Link from "next/link";
import React from "react";

const CtaBanner = ({ buttonText }) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-lg gradient-cta-banner py-16 text-center text-white shadow-lg ">
          <div className="relative">
            <h2 className="text-3xl font-bold  sm:text-4xl">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Join thousands of learners today and take the next step in your
              career. Your future self will thank you.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={buttonText === "Exlplore Course" ? "/courses" : "reister"}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white primary-text text-base font-bold transition-transform hover:scale-105"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
