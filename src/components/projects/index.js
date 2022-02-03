import React from 'react';
import './projects.css';
import project_arrow from '../../assets/Arrow 2.png'
import Footer from '../footer';

function Projects() {
  return (
      <>
        <div className='projects_hero events_hero'>
            <p className='events_hero_head'>Our Projects</p>
            <p className='events_hero_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        </div>
        <div className='all_project_cards'>
          <div className='event_card_img'>
            <p className='event_card_title'>Project1</p>
            <div className='event_child'></div>
            <span className='event_card_arrow'><img src={ project_arrow } /></span>
          </div>
          <div className='event_card_img'>
            <p className='event_card_title'>Project1</p>
            <div className='event_child'></div>
            <span className='event_card_arrow'><img src={ project_arrow } /></span>
          </div>
          <div className='event_card_img'>
            <p className='event_card_title'>Project1</p>
            <div className='event_child'></div>
            <span className='event_card_arrow'><img src={ project_arrow } /></span>
          </div>
          <div className='event_card_img'>
            <p className='event_card_title'>Project1</p>
            <div className='event_child'></div>
            <span className='event_card_arrow'><img src={ project_arrow } /></span>
          </div>
          <div className='event_card_img'>
            <p className='event_card_title'>Project1</p>
            <div className='event_child'></div>
            <span className='event_card_arrow'><img src={ project_arrow } /></span>
          </div>
          <div className='event_card_img'>
            <p className='event_card_title'>Project1</p>
            <div className='event_child'></div>
            <span className='event_card_arrow'><img src={ project_arrow } /></span>
          </div>
          <div className='event_card_img'>
            <p className='event_card_title'>Project1</p>
            <div className='event_child'></div>
            <span className='event_card_arrow'><img src={ project_arrow } /></span>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default Projects;
