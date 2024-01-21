import React from 'react';
import { SectionTitle, CoupleCard, EventCard } from './index';

function ProfileCoupleSection() {
  return (
    <div className="profile-couple">
      <SectionTitle>Bride & Groom</SectionTitle>
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
          shortName="Romeo"
          fullName="Romeo Montaque"
          parents="Bambang & Mulyani"
          location="Yogyakaarta"
          avatar="/assets/img/avatar-man.jpg"
        />
        <CoupleCard
          dataAos="fade-left"
          shortName="Juliet"
          fullName="Juliet Capulet"
          parents="Joko & Siti"
          location="Surakarta"
          avatar="/assets/img/avatar-women.jpg"
        />
      </div>
      <div className="event-wrap">
        <EventCard
          dataAos="fade-up"
          dataAosDuration="0"
          eventName="Akad Nikah"
          date="Jum'at 19 Januari 2024"
          hours="08:00 - 09:00"
          location="Masjid Kampus UGM Jl. Prof. DR. Drs Notonagoro, Karang Malang,
            Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta"
        />
        <EventCard
          dataAosDuration="500"
          dataAos="fade-up"
          eventName="Resepsi"
          date="Sabtu 20 Januari 2024"
          hours="09:00 - selesai"
          location="Masjid Kampus UGM Jl. Prof. DR. Drs Notonagoro, Karang Malang,
        Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta"
        />

        <EventCard
          dataAosDuration="1000"
          dataAos="fade-up"
          eventName="Unduh Mantu"
          date="Jum'at 19 Januari 2024"
          hours="09:00 - selesai"
          location="Rumah Mempelai Wanita Jl. Surya, Jebres, Kota Surakarta"
        />
      </div>
    </div>
  );
}

export default ProfileCoupleSection;
