import React from "react";
import hero from "../../assets/img/heroimage.png";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto flex items-center mt-[84px]">
      <div>
        <img src={hero} alt="hero image" />
      </div>
      <div className="">
        <p className="text-[17px] text-light">A Developer/Designer who</p>
        <p className="text-[52px] text-light max-w-[60%] min-w-[342px] leading-[66px]">
          Judges a book by its cover...
        </p>
        <p className="text-[12px] text-light">
          Because if the cover does not impress you what else can?
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
