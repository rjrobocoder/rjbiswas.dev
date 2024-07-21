import React from "react";

const WorkExperienceSection = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto pt-[100px]">
      <h1 className="text-[34px] text-light">Work Experience</h1>
      <div className="mt-[20px] border-l-[5px] border-accent-dark pl-[30px] py-[8px]">
        <div>
          <h2 className="text-[21px] text-light">
            Software Developer{" "}
            <span className="text-accent-light">@ Hyscaler</span>
          </h2>
          <p className="text-[16px] text-light">March 2022 - August 2023</p>
        </div>
        <div className="pt-[24px]">
          <p className="text-[18px] text-light">
            As a Software Developer at HyScaler (formerly known as NetTantra
            Technologies), my work has centered on a pivotal role in the
            MyDevTeam project, where I led the creation of the WordPress
            backend, implemented real-time content customization features, and
            designed user interfaces using Gatsbyjs and GraphQL. Additionally,
            I've been a key contributor to team-based projects like MarblesHR,
            MangoRx, FindFriday, and ZipDJ, focusing primarily on frontend
            development. Utilizing technologies such as React, Next.js, and
            TailwindCSS, I've ensured visually stunning user interfaces,
            seamless user experiences, and successful migrations. My
            responsibilities include delivering high-quality UI designs,
            resolving frontend issues, and collaborating effectively within
            cross-functional teams to drive project success in dynamic software
            development environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
