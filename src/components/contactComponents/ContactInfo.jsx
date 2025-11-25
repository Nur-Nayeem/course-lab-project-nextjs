import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
const ContactInfoItem = ({ icon: Icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div
      className={`primary-text flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex flex-col justify-center">
      <p className={`text-base font-semibold secondary-text`}>{title}</p>
      <p className="text-sm text-gray-500">{content}</p>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="lg:col-span-2 space-y-12">
      <div className="space-y-8">
        <ContactInfoItem
          icon={Mail}
          title="Email Us"
          content="contact@coursehub.com"
        />
        <ContactInfoItem
          icon={Phone}
          title="Call Us"
          content="+880 1792 491 909"
        />
        <ContactInfoItem
          icon={MapPin}
          title="Visit Us"
          content="123 Education Lane, Dhaka City, 98765"
        />
      </div>

      {/* Map */}
      <div className="mt-12 rounded-xl overflow-hidden aspect-video shadow-2xl border border-gray-200">
        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
          <Image
            src={
              "https://i.ibb.co.com/4RZ4FbwF/Screenshot-from-2025-11-25-15-47-08.png"
            }
            alt="Map of Dhaka City"
            width={1200}
            height={680}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
