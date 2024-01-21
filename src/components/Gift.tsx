import React from 'react';
import { SectionTitle } from './index';

function Card({ title, name, ket, img, dataAos }) {
  return (
    <div data-aos={dataAos} className="card">
      <div className="inner-card">
        <div>
          <div className="title">{title}</div>
          <div>{name}</div>
        </div>
        <div>
          <img height="32" width="39" src={img} alt="" />
        </div>
      </div>
      <div className="ket">{ket}</div>
    </div>
  );
}

function Gift() {
  return (
    <div>
      <SectionTitle>Gift</SectionTitle>
      <div className="gift">
        <Card
          dataAos="flip-right"
          title="BCA"
          name="Romeo"
          ket={124215263}
          img={'assets/icons/bill.svg'}
        />
        <Card
          dataAos="flip-right"
          title="Alamat"
          name="Juliet"
          ket="Jl. Lorem Ipsum No.1, Kec. Dolor, Kab. Sit Amet"
          img={'assets/icons/location.svg'}
        />
        <Card
          dataAos="flip-right"
          title="QR Code / QRIS"
          name="Juliet"
          ket="OVO"
          img={'assets/icons/qrcode.svg'}
        />
      </div>
    </div>
  );
}

export default Gift;
