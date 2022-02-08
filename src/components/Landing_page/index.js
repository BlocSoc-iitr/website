import React from 'react';
import Home from '../home';
import Team from '../team';
import WhoPage from '../who_page';
import Sponsors from '../sponsors';
import ProjectCard from '../projectCard';
import Timeline from '../timeline';
import Twitter from '../twitter';
import Footer from "../footer/index"

function LandingPage() {
  return (
    <>
      <Home />
      <WhoPage />
      <Team />
      <Sponsors />
      <ProjectCard />
      <Timeline />
      <Twitter />
      <Footer bottom="-1700px" />
    </>
  );
}

export default LandingPage;
