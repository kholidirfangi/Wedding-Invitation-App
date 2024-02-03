import React from 'react';
import getData from '../data';
import { useParams } from 'react-router-dom';

function Hero() {
  const { eventId = 'Nama Tamu' } = useParams();
  const data = getData();
  return (
    <div className="hero" id="home">
      <div data-aos="fade-up">
        <div>
          <p>Hello, We Are Getting Married</p>
          <h1>{data.pria}</h1>
          <h3>and</h3>
          <h1>{data.wanita}</h1>
          <p>{data.tanggalAcara}</p>
        </div>
        <div className="dear">
          <div>Dear</div>
          <div className="guest">{eventId}</div>
          <div className="address">{data.alamatTamu}</div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3eeea"
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,261.3C672,256,768,224,864,229.3C960,235,1056,277,1152,293.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Hero;
