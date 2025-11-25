import React from "react";
import ContactForm from "@/components/contactComponents/ContactForm";
import ContactInfo from "@/components/contactComponents/ContactInfo";

const ContactUs = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-2.5 max-w-7xl">
        {/* Page Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className={`text-4xl lg:text-5xl font-extrabold secondary-text`}>
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We would love to hear from you. Please fill out this form and well
            get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 ">
          <ContactInfo />

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
