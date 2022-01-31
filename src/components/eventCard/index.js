import React from 'react';
import './eventCard.css';

function EventCard() {
  return (
      <div className='event_card'>
          <img src="" className='event_img' />
          <div className='event_des'>
              <p className='event_title'>Name of Event</p>
              <p className='event_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
          </div>
      </div>
  );
}

export default EventCard;
