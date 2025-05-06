import React, { useState } from 'react';
import './Contact.css';

import locationIcon from './public/logo/location1.webp';
import Mail from './public/logo/mail.png';
import Website from './public/logo/website.png';

import XuryaThumb from './public/Image/Xurya.webp';
import XuryaVideo from './public/videos/Xurya.mp4';
import ConstThumb from './public/Image/const.webp';
import ConstVideo from './public/videos/Constructopia.mp4';
import VersaThumb from './public/Image/versa.webp';
import VersaVideo from './public/videos/versa.mp4';
import ForgeXThumb from './public/Image/forgeX.webp';
import ForgeXVideo from './public/videos/forgeX.mp4';
import landingPage from './public/Image/landingPage.webp'

import Image from './public/Image/Awsmd.webp'
import Image2 from './public/Image/Type08.webp'
import Image3 from './public/Image/Print.webp'
import Image4 from './public/Image/Halo.webp'
import Image5 from './public/Image/lepisov.webp'
import Image6 from './public/Image/valmax.webp'

const videos = [
  { thumb: XuryaThumb, src: XuryaVideo },
  { thumb: ConstThumb, src: ConstVideo },
  { thumb: VersaThumb, src: VersaVideo },
  { thumb: ForgeXThumb, src: ForgeXVideo },
];

const ContactSection = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div className="contact-container">
      <div className="line-container">
        <span className="line" />
        <img src={locationIcon} alt="Location" className="location-logo" />
        <span className="line" />
      </div>

      <h2>Dipa Inhouse</h2>
      <p>Crafting user-friendly products aesthetically</p>

      <div className="contact-buttons">
        <button>Get in touch</button>
        <button>Schedule a call</button>
      </div>

      <div className="contact-info">
        <p className="info-item"><img src={Mail} alt="Mail" />hi@dipainhouse.com</p>
        <p className="info-item"><img src={Website} alt="Web" />dipainhouse.com</p>
      </div>

      <div className="footer-videos">
        <div className="footer-video-header">
          <p><strong>More by Dipa Inhouse</strong></p>
          <p className="view-profile">View profile</p>
        </div>

        <div className="footer-video-row">
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-wrapper"
              onClick={() => setPlayingIndex(index)}
            >
              {playingIndex === index ? (
                <video className="video-thumb" controls autoPlay muted>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={video.thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="video-thumb"
                />
              )}
            </div>
          ))}
        </div>

        <div className="services-section">
  <div className="services-header">
    <p className="services-title"><strong>Services by Dipa UI/UX</strong></p>
    <p className="view-services">View all services</p>
  </div>
  <div className="service-item">
    <img src={landingPage} alt="Service Preview" className="service-img" />
    <div className="service-details">
      <p className="service-title">Landing Page Design & <br className='line-break' /> Development</p>
      <p className="service-price">$3,000</p>
    </div>
  </div>
          </div>
      </div>


      <div className='contact-bottom'>
      <div className='divider-line' />
  <div className='bottom'>
    <h1 className='section-heading'>You might also like</h1>
    <div className='image-grid'>
      <img src={Image} alt='img1' />
      <img src={Image2} alt='img2' />
      <img src={Image3} alt='img3' />
      <img src={Image4} alt='img4' />
      <img src={Image5} alt='img5' />
      <img src={Image6} alt='img6' />
    </div>
  </div>
</div>


    </div>
  );
};

export default ContactSection;