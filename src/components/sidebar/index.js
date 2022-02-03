import React from 'react';
import './sidebar.css';
import sidebarContainer from '../../assets/sidebar.svg';

function SideBar() {
  return <div>
    <div className="sideBar">
    <img className="glass" src={sidebarContainer} />
    <div className="sidebar-links">
        <a href="">
          <div className="github sidebar-components">
          </div>
        </a>
        <a href="">
          <div className="insta sidebar-components">
          </div>
        </a>
        <a href="">
          <div className="discord sidebar-components">
          </div>
        </a>
        <a href="">
          <div className="twitter sidebar-components">
          </div>
        </a>
        <a href="">
          <div className="youtube sidebar-components">
          </div>
        </a>
        <a href="">
          <div className="linkedin sidebar-components">
          </div>
        </a>
      </div>
    </div>
    
  </div>;
}

export default SideBar;
