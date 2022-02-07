import React from 'react';
import './blogsCardContainer.css';
import Card from '../ResourcesCard/ResourcesCard';
import { BsArrowRight } from 'react-icons/bs';


function BlogsCardContainer(props) {
  return <div>
      <div className={`cardContainer ${props.position}`} >
      <div className="container_heading">
          {props.about==="blogs"?"Read Our Blogs":"Watch Our Videos"}  <BsArrowRight className="container_arrow" />
      </div>
      <div className="cards_collection">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
  </div>;
}

export default BlogsCardContainer;
