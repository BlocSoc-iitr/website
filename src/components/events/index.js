import React from 'react';
import EventCard from '../eventCard';
import './events.css';
import styles from '../eventCard/eventCard.css';
import Footer from '../footer';

function Events() {
  return (
      <>
        <div className='events_hero'>
            <p className='events_hero_head'>Events we conducted</p>
            <p className='events_hero_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        </div>
        <div className='all_events'>
            <EventCard className={styles.event_card_reverse}/>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
        <Footer/>
      </>
  );
}

export default Events;
