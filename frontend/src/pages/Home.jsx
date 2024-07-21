import React from "react";
import Meteors from "../components/magicui/Meteors";
import Layout from "../components/Layout";
import HeroSection from "../components/homepage/HeroSection";
import IntroSection from "../components/homepage/IntroSection";
import WorkExperienceSection from "../components/homepage/WorkExperienceSection";
import ProjectsSection from "../components/homepage/ProjectsSection";
import ContactSection from "../components/homepage/ContactSection";

const Home = () => {
  return (
    <Layout>
      <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden top-0 left-0">
        <Meteors number={20} />
      </div>
      <HeroSection />
      <IntroSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
