import React from 'react';
import './sponsors.css';
import logo from '../../assets/BTC.png';
import etc from '../../assets/ETC.png';
import link_img from '../../assets/LINK.png';

function Sponsors() {
  return (
      <>
        <div className='sponsor'>
            <p className='sponsor_head'>Our Sponsors</p>
            <p className='sponsor_tag'>Backed By the Best</p>
            <p className='sponsor_desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className='sponsor_card'>
                <img src={logo} className='sponsor_img' />
                <img src={logo} className='sponsor_img' />
                <img src={logo} className='sponsor_img' />
                <img src={logo} className='sponsor_img' />
                <img src={logo} className='sponsor_img' />
                <img src={logo} className='sponsor_img' />
                <img src={logo} className='sponsor_img' />
            </div>
        </div>
        <img src={etc} className='etc' />
        <img src={link_img} className='linkImg' />
      </>
  );
}

export default Sponsors;
