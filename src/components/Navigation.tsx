import React, { useEffect, useState } from 'react';

function Navigation() {
  const [showButton, setShowButton] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 600;

      scrollPosition > triggerPosition
        ? setShowButton(true)
        : setShowButton(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <div>
      <div className="navigation">
        {showButton && !buttonClick && (
          <img
            src={`../assets/icons/navigation.svg`}
            alt=""
            onClick={handleButtonClick}
          />
        )}

        {showButton && buttonClick && (
          <img
            src={`../assets/icons/close.svg`}
            alt=""
            onClick={handleButtonClick}
          />
        )}
      </div>
      {showButton && buttonClick && (
        <div className="menu">
          <a href="#home">
            <img
              src={`../assets/icons/home.svg`}
              alt=""
              onClick={handleButtonClick}
            />
          </a>
          <a href="#profile">
            <img
              src={`../assets/icons/profile.svg`}
              alt=""
              onClick={handleButtonClick}
            />
          </a>
          <a href="#event">
            <img
              src={`../assets/icons/calender.svg`}
              alt=""
              onClick={handleButtonClick}
            />
          </a>
          <a href="#gallery">
            <img
              src={`../assets/icons/gallery.svg`}
              alt=""
              onClick={handleButtonClick}
            />
          </a>
          <a href="#story">
            <img
              src={`../assets/icons/pen.svg`}
              alt=""
              onClick={handleButtonClick}
            />
          </a>
          <a href="#gift">
            <img
              src={`../assets/icons/gift.svg`}
              alt=""
              onClick={handleButtonClick}
            />
          </a>
          <a href="#message">
            <img
              src={`../assets/icons/message.svg`}
              alt=""
              onClick={handleButtonClick}
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default Navigation;
