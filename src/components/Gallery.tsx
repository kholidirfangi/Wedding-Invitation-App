import React from 'react';
import { SectionTitle } from './index';

function Gallery() {
  return (
    <div>
      <SectionTitle>Our Gallery</SectionTitle>
      <div className="gallery">
        <img
          data-aos="flip-left"
          className="gallery-img"
          src="assets/img/gw-1.jpg"
          alt=""
        />
        <img
          data-aos="flip-left"
          className="gallery-img"
          src="assets/img/gw-2.jpg"
          alt=""
        />
        <img
          data-aos="flip-left"
          className="gallery-img"
          src="assets/img/gw-3.jpg"
          alt=""
        />
        <img
          data-aos="flip-left"
          className="gallery-img"
          src="assets/img/gw-4.jpg"
          alt=""
        />
        <img
          data-aos="flip-left"
          className="gallery-img"
          src="assets/img/gw-5.jpg"
          alt=""
        />
        <img
          data-aos="flip-left"
          className="gallery-img"
          src="assets/img/gw-6.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Gallery;
