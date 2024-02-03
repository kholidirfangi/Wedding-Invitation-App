import React from 'react';
import { SectionTitle, CoupleCard, EventCard } from './index';
import getData from '../data';

function ProfileCoupleSection() {
  const data = getData();
  return (
    <div className="profile-couple section">
      <SectionTitle id="profile">Bride & Groom</SectionTitle>
      <div data-aos="fade-up" className="prolog">
        <p className="mb-1">Assalamu’alaikum Warahmatullahi Wabarakatuh </p>
        <p>
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya
          berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih
          sayang yang Kau ciptakan di antara putra-putri kami:
        </p>
      </div>

      <div className="couple-wrap">
        <CoupleCard
          dataAos="fade-right"
          shortName={data.pria}
          fullName={data.namaLengkapPria}
          parents={data.orangTuaPria}
          location={data.alamatPria}
          avatar="/assets/img/avatar-man.jpg"
        />
        <CoupleCard
          dataAos="fade-left"
          shortName={data.wanita}
          fullName={data.namaLengkapWanita}
          parents={data.orangTuaWanita}
          location={data.alamatWanita}
          avatar="/assets/img/avatar-women.jpg"
        />
      </div>
      <div className="event-wrap" id="event">
        <EventCard
          dataAos="fade-up"
          dataAosDuration="0"
          eventName="Akad Nikah"
          date={data.akad}
          hours={data.waktuAkad}
          location={data.tempatAkad}
        />
        <EventCard
          dataAosDuration="500"
          dataAos="fade-up"
          eventName="Resepsi"
          date={data.resepsi}
          hours={data.waktuResepsi}
          location={data.tempatResepsi}
        />

        <EventCard
          dataAosDuration="1000"
          dataAos="fade-up"
          eventName="Unduh Mantu"
          date={data.unduhMantu}
          hours={data.waktuUnduhMantu}
          location={data.tempatUnduhMantu}
        />
      </div>
    </div>
  );
}

export default ProfileCoupleSection;
