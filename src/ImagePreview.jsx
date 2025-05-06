import React from "react";
import "./ImagePreview.css";
import Prodmast from './public/videos/prodmast.mp4'

function ImagePreview() {
  return (
    <div className="image-preview">
      <video  width="80%" controls autoPlay loop muted>
        <source src={Prodmast} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ImagePreview;
