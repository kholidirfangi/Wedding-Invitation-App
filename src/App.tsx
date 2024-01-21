import React, { useState } from 'react';
import Front from './components/Front';
import OpenendCard from './components/OpenedCard';

function App() {
  const [frontVisible, setfrontVisible] = useState(true);

  const handleButtonClick = () => {
    setfrontVisible(false);
  };
  return (
    <div>
      {frontVisible && <Front onClick={handleButtonClick} />}
      {!frontVisible && <OpenendCard />}
    </div>
  );
}

export default App;
