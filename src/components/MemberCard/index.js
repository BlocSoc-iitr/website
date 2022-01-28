import React from 'react';
import './memberCard.css';

function MemberCard({image, name, designation, des}) {
  return (
      <div className='member'>
          <img src={require(`../../assets/${image}.png`)} className='profile_pic'/>
          <p className='member_name'>{name}</p>
          <p className='member_des'>{designation}</p>
          <p className='member_des'>{des}</p>
      </div>
  );
}

export default MemberCard;
