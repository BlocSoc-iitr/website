import React from 'react';
import "./resourcesCard.css"

function ResourcesCard(porps) {
  return <div>
      <div className="resources_card">
        {
            porps.about==="blogs"&&<div className="blogs">
            <div className="blogs_grey_area">
            </div>
            <div className="blogs_title">
            Title
            </div>
            <div className="blogs_button">
            Read More
            </div>
            </div>
        }
        {
            porps.about=="videos"&&<div className="videos">
            <div className="video_grey_area">
            </div>
            <div className="blogs_button">
            Watch Now
            </div>
            </div>
        }


      </div>
  </div>;
}

export default ResourcesCard;
