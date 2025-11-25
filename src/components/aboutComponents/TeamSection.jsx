import React from "react";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2">Meet the Team</h2>
      <p className="text-slate-600 max-w-xl mx-auto mb-8 sm:mb-12">
        The passionate minds dedicated to revolutionizing online education.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <TeamCard
          name="Nur Nayeem"
          role="Founder & CEO"
          img="https://thumbs.dreamstime.com/b/confident-expert-handsome-young-man-shirt-tie-working-laptop-smiling-standing-against-grey-background-42037526.jpg"
          socials={{ linkedin: "#", twitter: "#" }}
        />

        <TeamCard
          name="Nafiz Montasir"
          role="Head of Engineering"
          img="https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
          socials={{ linkedin: "#", github: "#" }}
        />

        <TeamCard
          name="Emily Someting"
          role="Lead Designer"
          img="https://media.heragenda.com/brand-img/26596/0x0/2023/08/29114338/AdobeStock_430339539-edit.jpg"
          socials={{ linkedin: "#", dribbble: "#" }}
        />
      </div>
    </div>
  );
};

export default TeamSection;
