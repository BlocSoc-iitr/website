import React from 'react';
import Home from '../home';
import Team from '../team';
import WhoPage from '../who_page';
import Sponsors from '../sponsors';
import ProjectCard from '../projectCard';
import Timeline from '../timeline';
import Twitter from '../twitter';

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
    </>
  );
}

export default LandingPage;
