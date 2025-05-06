import React from 'react';
import './Description.css';

import Image from './public/Image/videoImg.webp'
import Image1 from './public/Image/Guide.webp';
import Image2 from './public/Image/signUp.webp'
 
const Description = () => {
  return (
    <div className='description-container'>
      <h1>Hi guys! 👋</h1>
      <p>Prodmast is a platform designed to integrate and facilitate various solutions in the manufacturing industry. This platform combines advanced technology with industrial efficiency, allowing users to more easily find, connect, and utilize various tools and solutions related to the manufacturing process. With a design that focuses on innovation, Prodmast aims to increase productivity and effectiveness in the manufacturing industry.</p>

      <h2>Full Preview</h2>
      <p1>Here's the detail of our design project. Check it out!</p1>

      <img src={Image} alt="Prodmast Preview" className="image" />

      <h1>Brand Guideline</h1>
      <p>The following wireframe and brand guidelines are used in our design projects.</p>
      <img src={Image1} alt='Guide' className='image'/>
      <img src={Image2} alt='Guide' className='image'/>

      <h1>Interested to collaborate? Let’s connect! </h1>
      <p>Dipa Inhouse is a design and development agency providing high quality services that help finding solutions with an intuitive approach that meet user’s business goal.</p>
    </div>
  )
}

export default Description;
