"use client";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="p-8 md:p-10 rounded-xl shadow-2xl bg-blur transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className={`block text-sm font-medium mb-1.5 secondary-text`}
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
            name="full-name"
            placeholder="Nur Nayeem"
            required
            type="text"
          />
        </div>
        <div>
          <label
            className={`block text-sm font-medium mb-1.5 secondary-text`}
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div>
          <label
            className={`block text-sm font-medium mb-1.5 secondary-text`}
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
            name="subject"
            placeholder="Course Inquiry"
            required
            type="text"
          />
        </div>
        <div>
          <label
            className={`block text-sm font-medium mb-1.5 secondary-text`}
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="form-input w-full rounded-lg secondary-text border border-slate-300 bg-white/60 p-2.5 py-3 placeholder:text-gray-500 focus:outline-primary"
            name="message"
            placeholder="Tell us more about what you need..."
            required
            rows="5"
          />
        </div>
        <div>
          <button className="cursor-pointer rounded-lg py-3 px-5 w-full btn-primary hover:bg-primary/90 text-white gap-2 text-sm font-bold transition-colors shadow-sm shadow-primary/40">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
