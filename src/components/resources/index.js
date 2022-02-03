import React from 'react';
import './resources.css'
import BlogsCardContainer from '../blogsCardContainer/blogsCardContainer.jsx';
import VideosCardContainer from '../videosCardContainer/videosCardContainer.jsx';
import Footer from "../footer/index.js"

function Resources() {
  return <div>
      <div className="resources">
        <BlogsCardContainer position="right" about="blogs" />
        <VideosCardContainer position="left" about="videos" />
        <Footer bottom="-50px" />
      </div>
  </div>;
}

export default Resources;
