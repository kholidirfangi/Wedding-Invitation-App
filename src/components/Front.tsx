import React from 'react';

function Front({ onClick }) {
  return (
    <div className="container">
      <div className="front">
        <div data-aos="fade-up" className="wrap">
          <div>
            <p>Hello, We Are Getting Married</p>
            <h1>Romeo</h1>
            <h3>and</h3>
            <h1>Juliet</h1>
            <p>Jum'at 19 Januari 2024</p>
          </div>
          <div className="dear">
            <div>Dear</div>
            <div className="guest">Ayana</div>
            <div className="address">Jakarta</div>
          </div>
          <button className="btn-open-invitation" onClick={onClick}>
            <img src="assets/icons/open-envelope.png" alt="" />
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Front;
