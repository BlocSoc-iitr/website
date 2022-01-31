import React from 'react';
import './timeline.css';
import time_text from '../../assets/timeline.png';

function Timeline() {
  return (
      <>
        <div className='timeline'>
            <img src={time_text} className='timeline_vector'/>
            <img src={time_text} className='timeline_vector'/>
        </div>
      </>
  );
}

export default Timeline;
