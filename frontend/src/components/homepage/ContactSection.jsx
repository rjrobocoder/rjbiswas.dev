import React from "react";

import linkedIn from "../../assets/img/socials/LinkedIn.svg";
import dribbble from "../../assets/img/socials/Dribbble.svg";
import gitHub from "../../assets/img/socials/GitHub.svg";
import instagram from "../../assets/img/socials/Instagram.svg";

const social_icons = [
  {
    name: "LinkedIn",
    image: linkedIn,
  },
  {
    name: "GitHub",
    image: gitHub,
  },
  {
    name: "Dribbble",
    image: dribbble,
  },
  {
    name: "Instagram",
    image: instagram,
  },
];

const ContactSection = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto pt-[100px]">
      <h1 className="text-[34px] text-light">Contact</h1>
      <div className="mt-[20px] w-full">
        <p className="text-light text-[15px] max-w-[680px]">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </p>
        <p className="text-light text-[15px] mt-[40px]">rjbiswas14@gmail.com</p>
        <div className="flex gap-x-[8px] mt-[30px]">
          {social_icons?.map((icon, i) => (
            <div key={icon.name} className="w-[24px]">
              <img src={icon.image} alt={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
