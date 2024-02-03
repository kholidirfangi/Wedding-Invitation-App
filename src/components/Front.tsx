import React from 'react';
import getData from '../data';
import { useParams } from 'react-router-dom';

function Front({ onClick }) {
  const { eventId = 'Nama Tamu' } = useParams();
  const data = getData();
  return (
    <div className="front">
      <div data-aos="fade-up" className="wrap">
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
        <button className="btn-open-invitation" onClick={onClick}>
          <img src="assets/icons/open-envelope.png" alt="" />
          Open Invitation
        </button>
      </div>
    </div>
  );
}

export default Front;
