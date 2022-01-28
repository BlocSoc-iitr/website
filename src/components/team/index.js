import React from 'react';
import './team.css';
import TeamGradient from '../../assets/gradient.png'
import Pattern from '../../assets/pattern.png'
import MemberCard from '../MemberCard';
import dashed from '../../assets/Group 229.png';

function Team() {
  return (
      <>
        <img src={TeamGradient} className='team_gradient'/>
        <img src={Pattern} className='pattern'/>
        <img src={dashed} className='dash_vector' />
        <div className='team'>
            <p className='team_head'>Meet Our Team</p>
            <div className='member_scroll'>
                <MemberCard
                    image="logo"
                    name="Name"
                    designation="Designation"
                    des="Xtra"
                />
                <MemberCard
                    image="TRX"
                    name="Name"
                    designation="Designation"
                    des="Xtra"
                />
                <MemberCard
                    image="BTC"
                    name="Name"
                    designation="Designation"
                    des="Xtra"
                />
                <MemberCard
                    image="logo"
                    name="Name"
                    designation="Designation"
                    des="Xtra"
                />
                <MemberCard
                    image="logo"
                    name="Name"
                    designation="Designation"
                    des="Xtra"
                />
            </div>
        </div>
      </>
  );
}

export default Team;
