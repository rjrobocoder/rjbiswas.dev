import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/homepage/HeroSection";
import IntroSection from "../components/homepage/IntroSection";
import WorkExperienceSection from "../components/homepage/WorkExperienceSection";
import ProjectsSection from "../components/homepage/ProjectsSection";
import ContactSection from "../components/homepage/ContactSection";
import SkillSection from "../components/homepage/SkillSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <SkillSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
