import React from "react";
import "./TitleSection.css";

import Like from './public/logo/heart.png'
import Save from './public/logo/save.png'
import Calander from './public/logo/calendar.png'
import Location from './public/logo/location.webp'
import Email from './public/logo/mail.png'
import Website from './public/logo/website.png'

function TitleSection() {
  return (
    <section className="title-section">
      <h1>Prodmast - Manufacturing Landing Page</h1>
      <div className="designer-info">
        <div className="location">
        <img src={Location} alt="Designer" className="avatar" />
        <div className="info">
          <h2>Dipa UI/UX for Dipa Inhouse</h2>
          <p className="available">Available for work</p>
          <p className="follow">follow</p>
        </div>
        </div>

        <div className="interaction-buttons">
        <div className="left-info">
    <p className="information"><img src={Email} alt="Email" /> <a href="mailto:hi@dipainhouse.com">hi@dipainhouse.com</a></p>
    <p className="information"><img src={Website} alt="Website" /> <a href="https://dipainhouse.com" target="_blank" rel="noopener noreferrer">dipainhouse.com</a></p>
  </div>

  <div className="right-actions">
    <p className="logo"><img src={Like} alt="Heart" /></p>
    <p className="logo"><img src={Save} alt="Heart" /></p>
    <p className="logo"><img src={Calander} alt="Heart" /></p>
    <button className="get-in-touch">Get in touch</button>
  </div>
      </div>
        
      </div>
     
    </section>
  );
}

export default TitleSection;
