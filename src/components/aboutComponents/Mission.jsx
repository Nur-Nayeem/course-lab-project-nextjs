import React from "react";
import { FaEye, FaRocket } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="w-full glass-blur p-6 sm:p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Our Mission & Vision</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission */}
        <div className="flex flex-col gap-3">
          <div className="primary-text text-4xl">
            <FaRocket />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">Our Mission</h3>
            <p className="text-slate-600 text-sm">
              To empower individuals to achieve their personal and professional
              goals through transformative online learning experiences.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col gap-3">
          <div className="primary-text text-4xl">
            <FaEye />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">Our Vision</h3>
            <p className="text-slate-600 text-sm">
              To become the worlds most trusted and innovative platform for
              lifelong learning and skill development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
