import React from 'react';
import SectionTitle from './SectionTitle';

function OurQuote({ quote, ownerQuote }) {
  return (
    <div className="section our-quote">
      <SectionTitle>Our Quote</SectionTitle>
      <div data-aos="fade-up">
        <p>{quote}</p>
        <p className="owner-quote">{ownerQuote}</p>
      </div>
    </div>
  );
}

export default OurQuote;
