import React from "react";
import Ripple from "../../components/magicui/Ripple";

import figmaLogo from "../../assets/img/figma-logo.svg";
import reactLogo from "../../assets/img/react-logo.svg";
import cLogo from "../../assets/img/c-logo.svg";
import nodejsLogo from "../../assets/img/nodejs-logo.svg";
import reduxLogo from "../../assets/img/redux-logo.svg";
import jsLogo from "../../assets/img/js-logo.svg";
import css3Logo from "../../assets/img/css3-logo.svg";
import xdLogo from "../../assets/img/xd-logo.svg";
import nextjsLogo from "../../assets/img/nextjs-logo.svg";
import gatsbyLogo from "../../assets/img/gatsby-logo.svg";
import illustratorLogo from "../../assets/img/illustrator-logo.svg";
import expressjsLogo from "../../assets/img/expressjs-logo.svg";
import mongodbLogo from "../../assets/img/mongodb-logo.svg";

const logos = [
  {
    name: "Figma",
    src: figmaLogo,
  },
  {
    name: "React",
    src: reactLogo,
  },
  {
    name: "C",
    src: cLogo,
  },
  {
    name: "Node.js",
    src: nodejsLogo,
  },
  {
    name: "Redux",
    src: reduxLogo,
  },
  {
    name: "JavaScript",
    src: jsLogo,
  },
  {
    name: "CSS3",
    src: css3Logo,
  },
  {
    name: "Adobe XD",
    src: xdLogo,
  },
  {
    name: "Next.js",
    src: nextjsLogo,
  },
  {
    name: "Gatsby",
    src: gatsbyLogo,
  },
  {
    name: "Illustrator",
    src: illustratorLogo,
  },
  {
    name: "Express.js",
    src: expressjsLogo,
  },
  {
    name: "MongoDB",
    src: mongodbLogo,
  },
];

const LogoGrid = ({ logos }) => (
  <div className="flex flex-row justify-center gap-x-[20px]">
    {logos.map(({ name, src }, index) => (
      <div
        className="h-[44px] w-[44px] rounded-full bg-[#251C31] flex justify-center items-center"
        key={index}
      >
        <img src={src} alt={`${name} logo`} loading="lazy" />
      </div>
    ))}
  </div>
);

const SkillSection = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto mt-[84px]">
      <div className="relative flex h-[710px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <div>
          <p className="text-[24px] text-light text-center leading-[32px]">
            I'm currently looking to join a{" "}
            <span className="text-accent-light">cross-functional</span> team{" "}
            <br />
            <span className="text-[17px]">
              that values improving people's lives through accessible design
            </span>
          </p>
          <div className="z-10 relative mt-[16px]">
            <LogoGrid logos={logos.slice(0, 7)} />
            <div className="mt-[8px]">
              <LogoGrid logos={logos.slice(7)} />
            </div>
          </div>
        </div>
        <Ripple />
      </div>
    </section>
  );
};

export default SkillSection;
