import React from 'react';

type Props = {
  shortName: string;
  fullName: string;
  parents: string;
  location: string;
  avatar: string;
  dataAos: string;
};
function CoupleCard({
  shortName,
  fullName,
  parents,
  location,
  avatar,
  dataAos,
}: Props) {
  return (
    <div data-aos={dataAos} className="couple-card">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="short-name">{shortName}</div>
      <div className="fullname">{fullName}</div>
      <div>
        {parents}
      </div>
      <div>{location}</div>

      <div className="sosmed">
        <div>
          <img src="assets/icons/facebook.svg" alt="Facebook" />
        </div>
        <div>
          <img src="assets/icons/instagram.svg" alt="Facebook" />
        </div>
        <div>
          <img src="assets/icons/x-twitter.svg" alt="Facebook" />
        </div>
        <div>
          <img src="assets/icons/tiktok.svg" alt="Facebook" />
        </div>
      </div>
    </div>
  );
}

export default CoupleCard;
