import React from 'react';
import {SectionTitle} from './index';

function StoryCard({ children, img, location, date, description, dataAos }) {
  return (
    <div data-aos={dataAos} className="story-card">
      <div>
        <img className="story-img" src={img} alt="" />
      </div>
      <div>
        <div className="story-title">{children}</div>
        <div>
          <span>{location}</span> <span>{date}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function OurStory() {
  return (
    <div className="our-story section">
      <SectionTitle id="story">Our Story</SectionTitle>
      <StoryCard
        dataAos="fade-right"
        img="assets/img/couple.jpg"
        location="Jakarta"
        date="19 April 2023"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium deserunt consectetur minima enim, consequatur excepturi explicabo at molestias soluta dolore aperiam repudiandae, esse omnis autem neque natus et? Culpa!"
      >
        Pertama Kenal
      </StoryCard>
      <StoryCard
        dataAos="fade-left"
        img="assets/img/couple.jpg"
        location="Jakarta"
        date="10 Juli 2023"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium deserunt consectetur minima enim, consequatur excepturi explicabo at molestias soluta dolore aperiam repudiandae, esse omnis autem neque natus et? Culpa!"
      >
        Pertama Menyatakan Cinta
      </StoryCard>
      <StoryCard
        dataAos="fade-right"
        img="assets/img/couple.jpg"
        location="Jakarta"
        date="10 November 2023"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium deserunt consectetur minima enim, consequatur excepturi explicabo at molestias soluta dolore aperiam repudiandae, esse omnis autem neque natus et? Culpa!"
      >
        Tunangan
      </StoryCard>
    </div>
  );
}

export default OurStory;
