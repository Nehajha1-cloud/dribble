import React from "react";
import "./Footer.css";

import WebDesign from './public/Image/webDesign.webp'
import Print from './public/Image/Print.webp'
import Animation from './public/Image/Animation.webp'
import Mobile from './public/Image/mobile.webp'
import Typography from './public/Image/Typography.webp'
import Branding from './public/Image/Branding1.webp'
import Product from './public/Image/productDesign.webp'
import Illustration from './public/Image/Illustration.webp'
import UIUX from './public/Image/Print.webp'


const items = [
  { title: "Web Design", image: WebDesign },
  { title: "Print", image: Print },
  { title: "Animation", image: Animation },
  { title: "Mobile", image: Mobile },
  { title: "Typography", image: Typography },
  { title: "Branding", image: Branding },
  { title: "Product Design", image: Product },
  { title: "Illustration", image: Illustration },
  { title: "UI/UX", image: UIUX },
];


const Footer = () => {
  return (
    <div className="scroll-gallery-wrapper">
      <div className="scroll-track">
        {items.concat(items).map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

