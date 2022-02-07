import React from 'react';
import './footer.css';
import logoFooter from '../../assets/logo_footer.svg';
import brand from '../../assets/brand.svg';
import trail from '../../assets/trail.svg';
import airplane from '../../assets/airplane.svg';
import github from '../../assets/sidebar/github.svg';
import insta from '../../assets/sidebar/insta.svg';
import discord from '../../assets/sidebar/discord.svg';
import twitter from '../../assets/sidebar/twitter.svg';
import youtube from '../../assets/sidebar/youtube.svg';
import linkedin from '../../assets/sidebar/linkedin.svg';


function Footer() {
  return (
    <div>
      <div className="footer">
      <div className="footer_newsletter">
        <div className="newsletter_text">
          <p>Subscribe to Our Newsletter</p>
          <span>for all updates</span>
        </div>
        <div className="input_form">
          <div className="email_textBox">
            <input type="text" placeholder="Enter your E-mail..." />
          </div>
          <div type="button" role="button" className="form_submit_button">
            <p>Subscribe</p>
          </div>
        </div>
        <div className="airplane_with_trail">
        <img className="airplane" src={airplane} />
        <img className="trail" src={trail} />
      </div>
      </div>
        <div className="footer_contact_us">
        <div className="footer_contact_us_left">
          <div className="footer_brand">
            <img src={logoFooter} />
            <img src={brand} />
          </div>
          <div className="footer-social-media">
            <img className="footer-social-media-icon" src={github} />
            <img className="footer-social-media-icon" src={insta} />
            <img className="footer-social-media-icon" src={discord} />
            <img className="footer-social-media-icon" src={twitter} />
            <img className="footer-social-media-icon" src={youtube} />
            <img className="footer-social-media-icon" src={linkedin} />
          </div>
        </div>
        <div className="footer-links">
        <p>Resources</p>
        <p>Projects</p>
        <p>Events</p>
        <p>About Us</p>
      </div>
        <div className="footer_contact_us_right">
          <div className="reach_us">
            <p className="reach_us_heading">Reach Us:</p>
            <p>Location, Something else<br />City,12xx54-India</p>
            <p>Email : emailid@iitr.ac.in</p>
            <p>Phone : +91-9083057294</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
