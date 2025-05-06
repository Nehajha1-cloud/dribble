import React from "react";
import './FloatingButtons.css';

import Feedback from './public/logo/feedback.png'
import Share from './public/logo/share.png'
import Details from './public/logo/details.png'

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <button><img src={Feedback} alt="Feedback" /></button>
      <button><img src={Share} alt="Share" /></button>
      <button><img src={Details} alt="Details" /></button>
    </div>
  );
}

export default FloatingButtons;
