import React from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';
import { BsArrowRight } from 'react-icons/bs';

function ProjectCard() {
  return (
    <>
        <div className='project_card'>
            <p className='project_card_head'>Our Projects</p>
            <div className='project_card_desc'>
                <p className='project_card_desc_text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet</p>
                <Link to="/projects">
                    <button className='read_more'>
                        <p className='read_more_text'>READ MORE</p>
                        <BsArrowRight className='read_more_arrow'/>
                    </button>
                </Link>
            </div>
            <div className='sample_proj'>
                <div className='sample_proj_card'>
                    <div className='sample_proj_img'></div>
                    <div className='sample_proj_des'>
                        <p className='sample_proj_title'>BlocSoc IITR</p>
                        <p className='sample_proj_des2'>Lorem Ipsum Da calona Padjo</p>
                    </div>
                </div>
                <div className='sample_proj_card'>
                    <div className='sample_proj_img'></div>
                    <div className='sample_proj_des'>
                        <p className='sample_proj_title'>BlocSoc IITR</p>
                        <p className='sample_proj_des2'>Lorem Ipsum Da calona Padjo</p>
                    </div>
                </div>
                <div className='sample_proj_card'>
                    <div className='sample_proj_img'></div>
                    <div className='sample_proj_des'>
                        <p className='sample_proj_title'>BlocSoc IITR</p>
                        <p className='sample_proj_des2'>Lorem Ipsum Da calona Padjo</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProjectCard;
