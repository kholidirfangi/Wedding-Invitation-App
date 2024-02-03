import React from 'react';
import { SectionTitle } from './index';

function OurQuote({ quote, ownerQuote }) {
  return (
    <div className="our-quote">
      <SectionTitle id="ourQuote">Our Quote</SectionTitle>
      <div data-aos="fade-up">
        <p>{quote}</p>
        <p className="owner-quote">{ownerQuote}</p>
      </div>
    </div>
  );
}

export default OurQuote;
