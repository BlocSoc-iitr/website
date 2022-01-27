import React from 'react';
import Home from '../home';
import Team from '../team';
import WhoPage from '../who_page';
import Sponsors from '../sponsors';
import ProjectCard from '../projectCard';

function LandingPage() {
  return (
    <>
      <Home />
      <WhoPage />
      <Team />
      <Sponsors />
      <ProjectCard />
    </>
  );
}

export default LandingPage;
