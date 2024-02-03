import React from 'react';
import { SectionTitle } from './index';

function OurVideo() {
  return (
    <div className="section">
      <SectionTitle id='ourVideo'>Our Video</SectionTitle>
      <div data-aos="zoom-in-up" className="video">
        <video controls>
          <source src="assets/videos/videos.mp4" />
        </video>
      </div>

      <div className="live-btn">
        <a
          href="rtmps://edgetee-upload-cgk1-1.xx.fbcdn.net:443/rtmp/"
          className="btn-ig"
        >
          Live Instagram
        </a>
        <a className="btn-yt">Live Youtube</a>
      </div>
    </div>
  );
}

export default OurVideo;
