import React from 'react';

function EventCard({ eventName, date, hours, location, dataAos, dataAosDuration }) {
  return (
    <div data-aos={dataAos} data-aos-duration={dataAosDuration} className="event-card">
      <div>
        <div className="event-name">{eventName}</div>
        <p className="date">{date}</p>
        <p className="hours">{hours}</p>
        <p className="location">{location}</p>
      </div>
      <div>
        <div className="g-map">Google Map</div>
      </div>
    </div>
  );
}

export default EventCard;
