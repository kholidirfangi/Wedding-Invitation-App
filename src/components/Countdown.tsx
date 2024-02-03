import React, { useState, useEffect } from 'react';
import { SectionTitle } from './index';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <SectionTitle id="countdown">CountDown</SectionTitle>
      <div data-aos="fade-up" className="countdown section">
        <div>
          <div className="time-left">{timeLeft.days}</div>
          <div className="countdown-time-name">Hari</div>
        </div>
        <div>
          <div className="time-left">{timeLeft.hours}</div>
          <div className="countdown-time-name">Jam</div>
        </div>
        <div>
          <div className="time-left">{timeLeft.minutes}</div>
          <div className="countdown-time-name">Menit</div>
        </div>
        <div>
          <div className="time-left">{timeLeft.seconds}</div>
          <div className="countdown-time-name">Detik</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
