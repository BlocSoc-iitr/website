import React from 'react';
import "./resourcesCard.css"
import image from "../../assets/resources-card.svg";

function ResourcesCard() {
  return <div>
      <div className="resources_card">
            <div className="blogs_grey_area">
            <img className="resource_card_img" src={image} alt="" />
            </div>
                <div className="blogs_title">
                Title
                </div>
      </div>
      </div>
}

export default ResourcesCard;
