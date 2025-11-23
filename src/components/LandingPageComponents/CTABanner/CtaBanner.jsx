import React from "react";

const CtaBanner = () => {
  return (
    <section class="py-16 sm:py-24">
      <div class="container mx-auto">
        <div class="relative overflow-hidden rounded-lg bg-[#6366F1] py-16 text-center text-white shadow-lg ">
          <div aria-hidden="true" class="absolute inset-0">
            <div class="absolute inset-0 bg-linear-to-br from-[#3B82F650] to-[#6366F1] opacity-50"></div>
          </div>
          <div class="relative">
            <h2 class="text-3xl font-bold  sm:text-4xl">
              Ready to Start Your Learning Journey?
            </h2>
            <p class="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Join thousands of learners today and take the next step in your
              career. Your future self will thank you.
            </p>
            <div class="mt-8 flex justify-center">
              <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary text-base font-bold transition-transform hover:scale-105">
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
