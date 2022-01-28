import React from 'react';
import './whoPage.css';
import ReactPlayer from 'react-player';
import trx from '../../assets/TRX.png';

function WhoPage() {
  return (
    <>
      <img src={trx} className='trx'/>
      <div className='who_main'>
          <p className='who_head'>Who are We?</p>
          <p className='who_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae lectus ut urna tincidunt blandit. In enim nunc, sodales vel orci vitae,</p>
            <ReactPlayer
                controls
                playing={true}
                width='40vw'
                height='50vh'
                url='https://www.youtube.com/watch?v=YRj5iM3pyfc'
            />
      </div>
    </>
  );
}

export default WhoPage;
