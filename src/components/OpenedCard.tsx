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
  Navigation,
  Audio,
} from './index';
import { Parallax } from 'react-parallax';

import getData from '../data';

function OpenendCard() {
  const data = getData();
  const targetDate = new Date(data.countdown).getTime();
  return (
    <div className="opened-card">
      <Hero />
      <Countdown targetDate={targetDate} />
      <ProfileCoupleSection />
      <Gallery />
      <OurVideo />
      <Parallax
        blur={10}
        bgImage="../assets/img/wedding.jpg"
        bgImageAlt=""
        strength={200}
      >
        <OurStory />
      </Parallax>
      <OurQuote quote={`"${data.quote}"`} ownerQuote={data.pemilikQuote} />
      <Gift />
      <RSVPForm />
      <Thanks />
      <Navigation />
      <Audio />
      <Footer />
    </div>
  );
}

export default OpenendCard;
