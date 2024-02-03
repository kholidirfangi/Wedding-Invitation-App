import React, { useState } from 'react';
import { SectionTitle } from './index';

function Card({ title, name, ket, img, dataAos, onClick }) {
  return (
    <div data-aos={dataAos} className="card" id="gift">
      <div className="inner-card">
        <div>
          <div className="title">{title}</div>
          <div>{name}</div>
        </div>
        <div>
          <img onClick={onClick} height="32" width="39" src={img} alt="" />
        </div>
      </div>
      <div className="ket">{ket}</div>
    </div>
  );
}

function Gift() {
  const [showQrCode, setShowQrCode] = useState(false);
  const handleClick = () => {
    setShowQrCode(true);
  };

  const handleClose = () => {
    setShowQrCode(false);
  };
  return (
    <div>
      <SectionTitle id="gift">Gift</SectionTitle>
      <div className="gift">
        <Card
          dataAos="flip-right"
          title="BCA"
          name="Romeo"
          ket={124215263}
          img={'assets/icons/bill.svg'}
          onClick={undefined}
        />
        <Card
          dataAos="flip-right"
          title="Alamat"
          name="Juliet"
          ket="Jl. Lorem Ipsum No.1, Kec. Dolor, Kab. Sit Amet"
          img={'assets/icons/location.svg'}
          onClick={undefined}
        />
        <Card
          dataAos="flip-right"
          title="QR Code / QRIS"
          name="Juliet"
          ket="OVO"
          img={'assets/icons/qrcode.svg'}
          onClick={handleClick}
        />
      </div>
      {showQrCode && (
        <div className="show-qr-code">
          <div className="qr-code-wrap">
            <button onClick={handleClose} className="btn-close">
              X
            </button>
            <img
              className="qr-code-img"
              src="./assets/img/qr-code.png"
              alt="qr-code"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gift;
