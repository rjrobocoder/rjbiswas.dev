import React from "react";
import logo from "../assets/img/logo.svg";
import hero from "../assets/img/heroimage.png";
import Meteors from "../components/magicui/meteors";

const Home = () => {
  return (
    <div className="pb-[100px]">
      <header className="bg-secondary shadow-lg px-8">
        <div className="w-full max-w-[1200px] h-[64px] flex items-center mx-auto">
          <div className="flex justify-between items-center w-full">
            <div>
              <img className="h-[28px]" src={logo} alt="logo" />
            </div>
            <div>
              <nav>
                <ul className="text-light flex gap-x-[146px]">
                  <li>Home</li>
                  <li>About</li>
                  <li>Lab</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <Meteors number={20} />
      </div>
      {/*  */}
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
      {/*  */}
      <section className="w-full max-w-[1200px] mx-auto pt-[40px]">
        <div>
          <h1 className="text-[50px] text-light">I'm a Software Engineer</h1>
          <p className="text-[21px] text-light">
            Currently, I'm a Software Engineer at Facebook,
          </p>
        </div>
        <div className="mt-[48px]">
          <p className="text-[22px] text-light max-w-[734px]">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
        </div>
      </section>
      {/*work experience */}
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
              cross-functional teams to drive project success in dynamic
              software development environments.
            </p>
          </div>
        </div>
      </section>
      {/*projects */}
      <section className="w-full max-w-[1200px] mx-auto pt-[100px]">
        <h1 className="text-[34px] text-light">Projects</h1>
        <div className="mt-[20px] w-full h-[400px] bg-slate-100"></div>
      </section>
      {/*get in touch */}
      <section className="w-full max-w-[1200px] mx-auto pt-[100px]">
        <h1 className="text-[34px] text-light">Get in Touch</h1>
        <div className="mt-[20px] w-full h-[200px] bg-slate-100"></div>
      </section>
    </div>
  );
};

export default Home;
