import Image from "next/image";
import React from "react";
import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ name, role, img, socials }) => {
  return (
    <div className="glass-blur p-6 rounded-lg shadow-sm flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Image
        src={img}
        alt={name}
        className="h-24 w-24 rounded-full object-cover"
        width={200}
        height={200}
      />

      <div className="text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm primary-text">{role}</p>
      </div>

      <div className="flex gap-4 text-slate-500">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            className="hover:primary-text transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {socials.twitter && (
          <a
            href={socials.twitter}
            className="hover:primary-text transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        )}
        {socials.github && (
          <a
            href={socials.github}
            className="hover:primary-text transition-colors"
          >
            <FaGithub size={20} />
          </a>
        )}
        {socials.dribbble && (
          <a
            href={socials.dribbble}
            className="hover:primary-text transition-colors"
          >
            <FaDribbble size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
