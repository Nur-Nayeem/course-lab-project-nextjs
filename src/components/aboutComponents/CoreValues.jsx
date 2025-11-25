import React from "react";
import { FaLightbulb, FaUniversalAccess, FaUsers } from "react-icons/fa";

const CoreValues = () => {
  return (
    <div className="w-full glass-blur p-6 sm:p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Innovation */}
        <div className="flex flex-col gap-3">
          <div className="primary-text text-xl">
            <FaLightbulb />
          </div>
          <h3 className="font-bold">Innovation</h3>
          <p className="text-slate-600 text-sm">
            We constantly seek better ways to deliver engaging and effective
            learning experiences.
          </p>
        </div>

        {/* Accessibility */}
        <div className="flex flex-col gap-3">
          <div className="primary-text text-xl">
            <FaUniversalAccess />
          </div>
          <h3 className="font-bold">Accessibility</h3>
          <p className="text-slate-600 text-sm">
            We believe education should be available to everyone, regardless of
            background or location.
          </p>
        </div>

        {/* Community */}
        <div className="flex flex-col gap-3">
          <div className="primary-text text-xl">
            <FaUsers />
          </div>
          <h3 className="font-bold">Community</h3>
          <p className="text-slate-600 text-sm">
            We foster a supportive and collaborative environment for learners
            and instructors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
