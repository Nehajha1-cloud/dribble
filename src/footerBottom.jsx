import React from "react";
import "./FooterBottom.css";
import facebookLogo from './public/logo/facebook.png';
import instagramLogo from './public/logo/insta.png';
import twitterLogo from './public/logo/twitter.png';

const FooterBottom = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="dribbble-text">Dribbble</h1>
        <nav className="footer-nav">
          <a href="#">For designers</a>
          <a href="#">Hire talent</a>
          <a href="#">Inspiration</a>
          <a href="#">Advertising</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
        </nav>
        <div className="social-icons">
          <img src={twitterLogo} alt="Twitter" />
          <img src={facebookLogo} alt="Facebook" />
          <img src={instagramLogo} alt="Instagram" />
        </div>
      </div>

      <div className="footer-bottom">
  <div className="footer-left">
    <p>© 2025 Dribbble</p>
    <a href="#">Terms</a>
    <a href="#">Privacy</a>
    <a href="#">Cookies</a>
  </div>
  <div className="footer-tags">
    <a href="#">Jobs</a>
    <a href="#">Designers</a>
    <a href="#">Freelancers</a>
    <a href="#">Tags</a>
    <a href="#">Places</a>
    <a href="#">Resources</a>
  </div>
</div>
    </footer>
  );
};

export default FooterBottom;
