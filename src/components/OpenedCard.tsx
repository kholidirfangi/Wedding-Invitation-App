import React from 'react';
import {
  Hero,
  Countdown,
  ProfileCoupleSection,
  Gallery,
  OurVideo,
  OurStory,
  OurQuote,
  Gift,
  RSVPForm,
  Thanks,
  Footer,
} from './index';

function OpenendCard() {
  const targetDate = new Date('2024-01-30T08:00:00').getTime();
  return (
    <div className="opened-card">
      <Hero />
      <Countdown targetDate={targetDate} />
      <ProfileCoupleSection />
      <Gallery />
      <OurVideo />
      <OurStory />
      <OurQuote
        quote='"Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai di
        banding pernikahan."'
        ownerQuote="HR. Ibnu Majah"
      />
      <Gift />
      <RSVPForm />
      <Thanks />
      <Footer />
    </div>
  );
}

export default OpenendCard;
